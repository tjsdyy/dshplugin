import { readFile, writeFile } from "node:fs/promises";

const UPSTREAM = "https://raw.githubusercontent.com/awesome-dsh-plugin/awesome-dsh-plugin/main/docs/plugins.json";
const HUB = "https://dshhub.org";
const SITE = "https://dshplugin.io";
const REPOSITORY = "https://github.com/tjsdyy/dshplugin";
const DATA_FILE = new URL("../app/plugins.json", import.meta.url);
const README_FILE = new URL("../README.md", import.meta.url);
const categoryNames = {
  ui: "UI",
  theme: "Themes",
  session: "Sessions",
  memory: "Memory",
  tools: "Tools",
  skill: "Skills",
  workflow: "Automation",
  notify: "Integrations",
  model: "Models",
  dev: "Runtime",
  fun: "Fun",
};

function assertRegistry(data) {
  if (!data || !Array.isArray(data.plugins) || !data.categories) throw new Error("Invalid upstream registry");
  const seen = new Set();
  for (const plugin of data.plugins) {
    if (!plugin.name || !plugin.owner || !plugin.url || !plugin.category || !plugin.install) {
      throw new Error(`Invalid plugin entry: ${plugin.name ?? "unknown"}`);
    }
    if (!data.categories[plugin.category]) throw new Error(`Unknown category ${plugin.category}`);
    if (!plugin.description?.en || !plugin.description?.zh) throw new Error(`Missing bilingual description: ${plugin.name}`);
    const key = `${plugin.owner}/${plugin.name}`.toLowerCase();
    if (seen.has(key)) throw new Error(`Duplicate plugin: ${key}`);
    seen.add(key);
  }
}

function decodeHtml(value = "") {
  return value.replace(/<!--\s*-->/g, "").replace(/<[^>]+>/g, " ").replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_, entity) => {
    if (entity[0] === "#") return String.fromCodePoint(Number.parseInt(entity.slice(entity[1]?.toLowerCase() === "x" ? 2 : 1), entity[1]?.toLowerCase() === "x" ? 16 : 10));
    return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " }[entity.toLowerCase()] ?? `&${entity};`;
  }).replace(/\s+/g, " ").trim();
}

function hubCategory(labels) {
  const text = labels.toLowerCase();
  if (/theme|appearance|主题|皮肤/.test(text)) return "theme";
  if (/memory|记忆/.test(text)) return "memory";
  if (/vision|视觉/.test(text)) return "tools";
  if (/interface|界面/.test(text)) return "ui";
  if (/notification|通知/.test(text)) return "notify";
  if (/integration|集成/.test(text)) return "notify";
  if (/skill|技能/.test(text)) return "skill";
  if (/agent|协作|productivity|效率/.test(text)) return "workflow";
  if (/development|开发/.test(text)) return "dev";
  if (/model|模型/.test(text)) return "model";
  return "tools";
}

function parseHubCards(html) {
  return [...html.matchAll(/<article class="plugin-card"[\s\S]*?<\/article>/g)].map(([card]) => {
    const route = card.match(/href="\/plugins\/([^"]+)"/)?.[1];
    const name = decodeHtml(card.match(/<code class="card-package">([\s\S]*?)<\/code>/)?.[1]);
    const description = decodeHtml(card.match(/<p>([\s\S]*?)<\/p>/)?.[1]);
    const labels = decodeHtml(card.match(/<span class="card-cats"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
    const rawCommand = decodeHtml(card.match(/<div class="card-command">[\s\S]*?<code>([\s\S]*?)<\/code>/)?.[1]);
    const install = rawCommand.replace(/^\$\s*/, "").replace(/^npx\s+-p\s+@deepseek-ai\/dsh\s+/, "");
    const target = install.match(/github:([^#&\s]+)/)?.[1];
    const [owner] = target?.split("/") ?? [];
    if (!route || !name || !description || !install.startsWith("dsh plugin") || !target || !owner) return null;
    return { route, name, owner, url: `https://github.com/${target}`, category: hubCategory(labels), description, install };
  }).filter(Boolean);
}

async function fetchHubPage(cursor, locale) {
  const url = new URL(HUB);
  url.searchParams.set("sort", "updated");
  if (cursor) url.searchParams.set("cursor", cursor);
  const response = await fetch(url, { signal: AbortSignal.timeout(15_000), headers: { cookie: `dshhub-locale=${locale}`, "user-agent": "dshplugin.io catalog sync" } });
  if (!response.ok) throw new Error(`DSH Hub request failed: ${response.status}`);
  const html = await response.text();
  const next = decodeHtml(html.match(/href="([^"]*cursor=[^"]+)"/)?.[1] ?? "");
  return { cards: parseHubCards(html), cursor: next ? new URL(next, HUB).searchParams.get("cursor") : null };
}

async function discoverHubPlugins() {
  const pages = Math.max(1, Number.parseInt(process.env.DSHHUB_PAGES ?? "8", 10) || 8);
  const found = new Map();
  let cursor = null;
  for (let page = 0; page < pages; page += 1) {
    console.log(`Scanning DSH Hub page ${page + 1}/${pages}...`);
    const [en, zh] = await Promise.all([fetchHubPage(cursor, "en"), fetchHubPage(cursor, "zh-CN")]);
    const zhByInstall = new Map(zh.cards.map((card) => [card.install, card]));
    for (const card of en.cards) {
      const localized = zhByInstall.get(card.install);
      found.set(card.install, {
        name: card.name,
        owner: card.owner,
        url: card.url,
        category: card.category,
        description: { en: card.description, zh: localized?.description ?? card.description },
        install: card.install,
        added: new Date().toISOString().slice(0, 10),
        discoveredFrom: "dshhub.org",
      });
    }
    cursor = en.cursor;
    if (!cursor) break;
  }
  return [...found.values()];
}

function createReadme(data) {
  const counts = Object.fromEntries(Object.keys(data.categories).map((key) => [key, data.plugins.filter((p) => p.category === key).length]));
  const categoryList = Object.entries(data.categories).map(([key, value]) =>
    `- [${value.en}](#${value.en.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}) — ${counts[key]} plugins · ${value.zh}`
  ).join("\n");
  const sections = Object.entries(data.categories).map(([key, value]) => {
    const rows = data.plugins.filter((p) => p.category === key).map((p) =>
      `- [**${p.name}**](${p.url}) — ${p.description.en} · \`${p.install}\``
    ).join("\n");
    return `## ${value.en}\n\n**${counts[key]} plugins · ${value.zh}**\n\n${rows}`;
  }).join("\n\n");

  return `# DeepSeek Harness Plugin Marketplace

[![Plugins](https://img.shields.io/badge/DeepSeek_Harness_Plugins-${data.plugins.length}-5660dc)](${REPOSITORY})
[![Live](https://img.shields.io/badge/Live-DSH_Market-3d9f6f)](${SITE}/)
[![Auto sync](https://img.shields.io/badge/catalog-auto--synced-24242b)](${REPOSITORY}/actions/workflows/sync-plugins.yml)

A searchable, bilingual **DeepSeek Harness plugin** marketplace and curated community directory. Discover UI extensions, themes, memory, tools, skills, automation, integrations, model providers, runtime components, and playful add-ons.

**Live directory:** [English](${SITE}/) · [中文](${SITE}/zh/) · [Submit a plugin](${REPOSITORY}/issues/new?labels=plugin-submission)

## What is a DeepSeek Harness plugin?

A DeepSeek Harness plugin is an installable bundle that extends or replaces part of the agent harness. Plugins can add model-callable tools, user interfaces, memory, model providers, sandboxes, session storage, integrations, and workflow automation. Each listed project includes a copy-ready install command.

## Quick start

Install the plugin finder:

\`\`\`bash
dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin
\`\`\`

Then ask your agent to find a plugin, or browse the marketplace. The catalog is validated and synchronized automatically from the curated community registry.

## Plugin categories

${categoryList}

${sections}

## Submit or update a plugin

Open a [plugin submission issue](${REPOSITORY}/issues/new?labels=plugin-submission). Include the repository URL, category, English and Chinese descriptions, and a tested install command.

## Data freshness

The catalog is synchronized on a schedule from the curated DeepSeek Harness community registry. Invalid records, duplicate entries, unknown categories, and entries without bilingual descriptions are rejected before publication. Last registry update: **${data.updated}**.

## License & disclaimer

This repository is a community directory. Each plugin remains subject to its own repository license and security policy. Review third-party code and permissions before installation.
`;
}

const previousData = JSON.parse(await readFile(DATA_FILE, "utf8"));
let upstream;
try {
  const response = await fetch(UPSTREAM, { signal: AbortSignal.timeout(30_000), headers: { "user-agent": "dshplugin.io catalog sync" } });
  if (!response.ok) throw new Error(`Registry request failed: ${response.status}`);
  upstream = await response.json();
} catch (error) {
  console.warn(`Curated registry unavailable; using local snapshot: ${error.message}`);
  upstream = { ...previousData, plugins: previousData.plugins.filter((plugin) => plugin.discoveredFrom !== "dshhub.org") };
}
assertRegistry(upstream);
let hubPlugins = [];
try {
  hubPlugins = await discoverHubPlugins();
} catch (error) {
  console.warn(`DSH Hub scan skipped; retaining previous discoveries: ${error.message}`);
}
const upstreamInstalls = new Set(upstream.plugins.map((plugin) => plugin.install));
const upstreamKeys = new Set(upstream.plugins.map((plugin) => `${plugin.owner}/${plugin.name}`.toLowerCase()));
const isNewHubPlugin = (plugin) => !upstreamInstalls.has(plugin.install) && !upstreamKeys.has(`${plugin.owner}/${plugin.name}`.toLowerCase());
const retainedHub = previousData.plugins.filter((plugin) => plugin.discoveredFrom === "dshhub.org" && isNewHubPlugin(plugin));
const mergedHub = new Map(retainedHub.map((plugin) => [plugin.install, plugin]));
for (const plugin of hubPlugins) if (isNewHubPlugin(plugin)) mergedHub.set(plugin.install, plugin);
const plugins = [...upstream.plugins, ...mergedHub.values()];

const categories = Object.fromEntries(Object.entries(upstream.categories).map(([key, value]) => [key, {
  ...value,
  en: categoryNames[key] ?? value.en,
}]));
const data = {
  ...upstream,
  name: "dshplugin",
  url: SITE,
  source: REPOSITORY,
  count: plugins.length,
  categories,
  plugins,
};
assertRegistry(data);

const json = `${JSON.stringify(data, null, 2)}\n`;
const previous = await readFile(DATA_FILE, "utf8").catch(() => "");
await writeFile(DATA_FILE, json);
await writeFile(README_FILE, createReadme(data));
console.log(previous === json ? `Catalog already current (${data.count} plugins).` : `Catalog updated to ${data.count} plugins (${data.updated}).`);
