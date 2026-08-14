import { readFile, writeFile } from "node:fs/promises";

const UPSTREAM = "https://raw.githubusercontent.com/awesome-dsh-plugin/awesome-dsh-plugin/main/docs/plugins.json";
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

const response = await fetch(UPSTREAM, { headers: { "user-agent": "dshplugin.io catalog sync" } });
if (!response.ok) throw new Error(`Registry request failed: ${response.status}`);
const upstream = await response.json();
assertRegistry(upstream);

const categories = Object.fromEntries(Object.entries(upstream.categories).map(([key, value]) => [key, {
  ...value,
  en: categoryNames[key] ?? value.en,
}]));
const data = {
  ...upstream,
  name: "dshplugin",
  url: SITE,
  source: REPOSITORY,
  count: upstream.plugins.length,
  categories,
};

const json = `${JSON.stringify(data, null, 2)}\n`;
const previous = await readFile(DATA_FILE, "utf8").catch(() => "");
await writeFile(DATA_FILE, json);
await writeFile(README_FILE, createReadme(data));
console.log(previous === json ? `Catalog already current (${data.count} plugins).` : `Catalog updated to ${data.count} plugins (${data.updated}).`);
