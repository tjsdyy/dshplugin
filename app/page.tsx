"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import registry from "./plugins.json";
import { pluginSlug } from "./plugin-utils";

type Plugin = (typeof registry.plugins)[number];
const PAGE_SIZE = 12;
const categoryIcons: Record<string, string> = { ui: "◫", session: "◎", tools: "⌘", workflow: "↗", notify: "◉", dev: "⚙", fun: "✦" };
const tones = ["violet", "cyan", "amber", "rose", "lime", "blue", "orange"];

function initials(name: string) {
  return name.replace(/^@[^/]+\//, "").replace(/^dsh[-_]?/i, "").split(/[-_]/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "DS";
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"new" | "name">("new");
  const [page, setPage] = useState(1);
  const [copied, setCopied] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const featured = registry.plugins.find((plugin) => plugin.name === "dsh-find-plugin")!;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const counts = useMemo(() => Object.fromEntries(Object.keys(registry.categories).map((key) => [key, registry.plugins.filter((p) => p.category === key).length])), []);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return registry.plugins.filter((plugin) => (category === "all" || plugin.category === category) && (!term || `${plugin.name} ${plugin.owner} ${plugin.description.zh} ${plugin.description.en}`.toLowerCase().includes(term))).sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : b.added.localeCompare(a.added));
  }, [query, category, sort]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => setPage(1), [query, category, sort]);

  async function copy(plugin: Plugin) {
    await navigator.clipboard.writeText(plugin.install);
    setCopied(plugin.name);
    window.setTimeout(() => setCopied(null), 1600);
  }

  function chooseCategory(value: string) { setCategory(value); document.getElementById("plugin-list")?.scrollIntoView({ behavior: "smooth", block: "start" }); }

  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="#top"><span className="mark">DS</span><span><strong>DSH Market</strong><small>DeepSeek Harness 插件市场</small></span></a>
        <label className="search"><i>⌕</i><input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} aria-label="搜索插件" placeholder="搜索插件、能力或作者…" /><kbd>⌘ K</kbd></label>
        <div className="top-actions"><a className="ghost" href="https://github.com/deepseek-ai/deepseek-harness" target="_blank" rel="noreferrer">开发者中心</a><a className="primary" href="https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md" target="_blank" rel="noreferrer">提交插件</a></div>
      </header>

      <div className="body" id="top">
        <aside>
          <p className="side-label">浏览</p>
          <nav className="nav"><button className={category === "all" ? "active" : ""} onClick={() => chooseCategory("all")}><span className="ico">⌂</span><span>发现全部</span><small>{registry.count}</small></button><a href="#featured"><span className="ico">✦</span><span>编辑精选</span></a><a href="https://github.com/awesome-dsh-plugin/awesome-dsh-plugin" target="_blank" rel="noreferrer"><span className="ico">↗</span><span>GitHub 仓库</span></a></nav>
          <p className="side-label">分类</p>
          <nav className="nav">{Object.entries(registry.categories).map(([key, label]) => <button key={key} className={category === key ? "active" : ""} onClick={() => chooseCategory(key)}><span className="ico">{categoryIcons[key]}</span><span>{label.zh}</span><small>{counts[key]}</small></button>)}</nav>
          <div className="side-note"><strong>构建你的第一个插件</strong><p>声明 dsh.bundle，即可加入 Harness 插件生态。</p><a href="https://github.com/omdsh-dev/plugin-template" target="_blank" rel="noreferrer">查看插件模板 →</a></div>
        </aside>

        <main>
          <div className="crumb">插件市场 <span>/</span> 社区目录 <b>更新于 {registry.updated}</b></div>
          <section className="intro"><div><h1>为 Harness 扩展每一种能力</h1><p>来自社区的界面、工具、记忆与自动化工作流，让 DeepSeek Harness 从对话走向真实执行。</p></div><div className="status"><span className="pulse" />{registry.count} 个社区插件可供探索</div></section>

          <section className="featured" id="featured">
            <div className="feature-copy"><div className="eyebrow">新用户首选</div><div className="feature-title"><div className="plugin-logo">FP</div><div><h2>{featured.name}</h2><span className="verified">● 社区策展 · by {featured.owner}</span></div></div><p>{featured.description.zh}</p><div className="chips"><span className="chip">插件搜索</span><span className="chip">分类推荐</span><span className="chip">安装命令</span><span className="chip">社区维护</span></div></div>
            <div className="feature-meta"><div className="rating"><span className="verified-dot">✓</span> 已收录于 Awesome DSH Plugin</div><button className="install" onClick={() => copy(featured)}>{copied === featured.name ? "安装命令已复制 ✓" : "复制安装命令"}</button><div className="install-code">{featured.install}</div><a href={`/plugin/${pluginSlug(featured.name)}`}>查看插件详情 →</a></div>
          </section>

          <section id="plugin-list" className="listing">
            <div className="toolbar"><div className="section-title"><h2>{category === "all" ? "全部插件" : registry.categories[category as keyof typeof registry.categories].zh}</h2><p>共找到 {filtered.length} 个插件，数据来自社区维护的公开目录</p></div><div className="filters"><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="选择分类"><option value="all">全部分类</option>{Object.entries(registry.categories).map(([key, label]) => <option value={key} key={key}>{label.zh}</option>)}</select><select value={sort} onChange={(e) => setSort(e.target.value as "new" | "name")} aria-label="排序"><option value="new">最近收录</option><option value="name">名称排序</option></select></div></div>

            {visible.length ? <div className="list">{visible.map((plugin, index) => <article className="plugin" key={plugin.name}>
              <div className={`picon ${tones[(index + page) % tones.length]}`}>{initials(plugin.name)}</div>
              <div className="plugin-main"><a className="pname" href={`/plugin/${pluginSlug(plugin.name)}`}>{plugin.name} <span>→</span></a><div className="pdesc">{plugin.description.zh}</div></div>
              <div className="author"><b>{plugin.owner}</b>社区发布者</div>
              <div><button className="tag" onClick={() => chooseCategory(plugin.category)}>{registry.categories[plugin.category as keyof typeof registry.categories].zh}</button></div>
              <div className="date"><b>{plugin.added}</b>收录日期</div>
              <button className={`get ${copied === plugin.name ? "done" : ""}`} onClick={() => copy(plugin)}>{copied === plugin.name ? "已复制 ✓" : "复制安装"}</button>
            </article>)}</div> : <div className="empty"><b>⌕</b><h3>没有找到匹配插件</h3><p>尝试更短的关键词，或切换到其他分类。</p><button onClick={() => { setQuery(""); setCategory("all"); }}>清除筛选</button></div>}

            <div className="footerline"><span>显示 {filtered.length ? (page - 1) * PAGE_SIZE + 1 : 0}–{Math.min(page * PAGE_SIZE, filtered.length)}，共 {filtered.length} 个插件</span><div className="pages"><button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>‹</button>{Array.from({ length: Math.min(5, totalPages) }, (_, i) => { const start = Math.min(Math.max(1, page - 2), Math.max(1, totalPages - 4)); const n = start + i; return <button key={n} className={n === page ? "on" : ""} onClick={() => setPage(n)}>{n}</button>; })}<button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>›</button></div></div>
          </section>
          <footer><span>Awesome DSH Plugin 社区目录</span><p>安装第三方代码前，请审阅源代码及权限。</p><a href={registry.source} target="_blank" rel="noreferrer">数据源 ↗</a></footer>
        </main>
      </div>
    </div>
  );
}
