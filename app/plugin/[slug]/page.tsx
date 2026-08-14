import type { Metadata } from "next";
import { notFound } from "next/navigation";
import registry from "../../plugins.json";
import { pluginInitials, pluginSlug } from "../../plugin-utils";
import CopyInstall from "./CopyInstall";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return registry.plugins.map((plugin) => ({ slug: pluginSlug(plugin.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plugin = registry.plugins.find((item) => pluginSlug(item.name) === slug);
  if (!plugin) return { title: "Plugin not found · DSH Market" };
  return { title: `${plugin.name} · DSH Market`, description: plugin.description.en };
}

export default async function PluginDetail({ params }: Props) {
  const { slug } = await params;
  const plugin = registry.plugins.find((item) => pluginSlug(item.name) === slug);
  if (!plugin) notFound();
  const category = registry.categories[plugin.category as keyof typeof registry.categories];
  const related = registry.plugins.filter((item) => item.category === plugin.category && item.name !== plugin.name).slice(0, 4);

  return <div className="detail-shell">
    <header className="topbar detail-topbar">
      <a className="brand" href="/"><span className="mark">DS</span><span><strong>DSH Market</strong><small>DeepSeek Harness plugin marketplace</small></span></a>
      <a className="detail-back" href="/">← Back to plugins</a>
      <div className="top-actions"><div className="lang-switch"><a className="on" href={`/plugin/${slug}`}>EN</a><a href={`/zh/plugin/${slug}`}>中文</a></div><a className="ghost" href={registry.source} target="_blank" rel="noreferrer">GitHub ↗</a><a className="primary" href="https://github.com/tjsdyy/dshplugin/issues/new?labels=plugin-submission" target="_blank" rel="noreferrer">Submit plugin</a></div>
    </header>

    <main className="detail-main">
      <div className="detail-crumb"><a href="/">Plugin marketplace</a><span>/</span><a href="/#plugin-list">{category.en}</a><span>/</span><b>{plugin.name}</b></div>
      <section className="detail-hero">
        <div className="detail-logo">{pluginInitials(plugin.name)}</div>
        <div className="detail-title"><div className="detail-badges"><span>{category.en}</span><span>Community listed</span></div><h1>{plugin.name}</h1><p>{plugin.description.en}</p><div className="detail-owner">Maintained by <a href={`https://github.com/${plugin.owner}`} target="_blank" rel="noreferrer">{plugin.owner}</a> · Added {plugin.added}</div></div>
        <a className="source-button" href={plugin.url} target="_blank" rel="noreferrer">View source ↗</a>
      </section>

      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-section"><span className="section-number">01</span><h2>About this plugin</h2><p className="lead">{plugin.description.en}</p><div className="english-copy"><b>中文介绍</b><p>{plugin.description.zh}</p></div></section>
          <section className="detail-section"><span className="section-number">02</span><h2>Installation</h2><p>Run this command in your terminal to add the plugin to the DeepSeek Harness Web Profile.</p><div className="command-box"><code>{plugin.install}</code><CopyInstall command={plugin.install} /></div><div className="install-steps"><div><b>1</b><span><strong>Review source</strong><small>Check origin and permissions</small></span></div><div><b>2</b><span><strong>Run command</strong><small>Add to Web Profile</small></span></div><div><b>3</b><span><strong>Reload</strong><small>Let Harness detect it</small></span></div></div></section>
          <section className="detail-section safety"><span className="section-number">!</span><h2>Before you install</h2><p>Plugins are developed and maintained by third-party community members. Listing is not a security endorsement. Review source, dependencies and permissions before running third-party code.</p></section>
        </div>

        <aside className="detail-side">
          <div className="info-card"><h3>Plugin information</h3><dl><div><dt>Author</dt><dd>{plugin.owner}</dd></div><div><dt>Category</dt><dd>{category.en}</dd></div><div><dt>Added</dt><dd>{plugin.added}</dd></div><div><dt>Target</dt><dd>Web Profile</dd></div><div><dt>Manifest</dt><dd>dsh.bundle</dd></div></dl><a href={plugin.url} target="_blank" rel="noreferrer">GitHub Repository ↗</a></div>
          <div className="registry-card"><span className="pulse" /><div><b>Listed in registry</b><small>Updated {registry.updated}</small></div></div>
        </aside>
      </div>

      <section className="related"><div className="related-heading"><div><span>RELATED</span><h2>Related plugins</h2></div><a href="/">Browse all {registry.count} plugins →</a></div><div className="related-grid">{related.map((item) => <a href={`/plugin/${pluginSlug(item.name)}`} key={item.name}><div className="related-icon">{pluginInitials(item.name)}</div><b>{item.name}</b><p>{item.description.en}</p><span>View details →</span></a>)}</div></section>
    </main>
    <footer className="detail-footer"><span>DSH Market community registry</span><p>Review source code and permissions before installing third-party code.</p><a href={registry.source} target="_blank" rel="noreferrer">Data source ↗</a></footer>
  </div>;
}
