import type { Metadata } from "next";
import { notFound } from "next/navigation";
import registry from "../../../plugins.json";
import { pluginInitials, pluginSlug } from "../../../plugin-utils";
import CopyInstall from "./CopyInstall";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return registry.plugins.map((plugin) => ({ slug: pluginSlug(plugin.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plugin = registry.plugins.find((item) => pluginSlug(item.name) === slug);
  if (!plugin) return { title: "插件未找到 · DSH Market" };
  return { title: `${plugin.name} · DSH Market`, description: plugin.description.zh };
}

export default async function PluginDetail({ params }: Props) {
  const { slug } = await params;
  const plugin = registry.plugins.find((item) => pluginSlug(item.name) === slug);
  if (!plugin) notFound();
  const category = registry.categories[plugin.category as keyof typeof registry.categories];
  const related = registry.plugins.filter((item) => item.category === plugin.category && item.name !== plugin.name).slice(0, 4);

  return <div className="detail-shell">
    <header className="topbar detail-topbar">
      <a className="brand" href="/zh/"><span className="mark">DS</span><span><strong>DSH Market</strong><small>DeepSeek Harness 插件市场</small></span></a>
      <a className="detail-back" href="/zh/">← 返回插件目录</a>
      <div className="top-actions"><div className="lang-switch"><a href={`/plugin/${slug}`}>EN</a><a className="on" href={`/zh/plugin/${slug}`}>中文</a></div><a className="ghost" href={registry.source} target="_blank" rel="noreferrer">GitHub ↗</a><a className="primary" href="https://github.com/tjsdyy/dshplugin/issues/new?labels=plugin-submission" target="_blank" rel="noreferrer">提交插件</a></div>
    </header>

    <main className="detail-main">
      <div className="detail-crumb"><a href="/zh/">插件市场</a><span>/</span><a href="/zh/#plugin-list">{category.zh}</a><span>/</span><b>{plugin.name}</b></div>
      <section className="detail-hero">
        <div className="detail-logo">{pluginInitials(plugin.name)}</div>
        <div className="detail-title"><div className="detail-badges"><span>{category.zh}</span><span>社区收录</span></div><h1>{plugin.name}</h1><p>{plugin.description.zh}</p><div className="detail-owner">由 <a href={`https://github.com/${plugin.owner}`} target="_blank" rel="noreferrer">{plugin.owner}</a> 维护 · 收录于 {plugin.added}</div></div>
        <a className="source-button" href={plugin.url} target="_blank" rel="noreferrer">查看源代码 ↗</a>
      </section>

      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-section"><span className="section-number">01</span><h2>插件介绍</h2><p className="lead">{plugin.description.zh}</p><div className="english-copy"><b>English description</b><p>{plugin.description.en}</p></div></section>
          <section className="detail-section"><span className="section-number">02</span><h2>安装方式</h2><p>在终端中运行以下命令，将插件添加到 DeepSeek Harness 的 Web Profile。</p><div className="command-box"><code>{plugin.install}</code><CopyInstall command={plugin.install} /></div><div className="install-steps"><div><b>1</b><span><strong>审阅源码</strong><small>确认插件来源和所需权限</small></span></div><div><b>2</b><span><strong>执行命令</strong><small>添加到 Web Profile</small></span></div><div><b>3</b><span><strong>重新加载</strong><small>让 Harness 识别新插件</small></span></div></div></section>
          <section className="detail-section safety"><span className="section-number">!</span><h2>安装前须知</h2><p>插件由第三方社区成员开发和维护。收录不代表安全背书；安装会在你的机器上运行第三方代码，请先检查源码、依赖和权限范围。</p></section>
        </div>

        <aside className="detail-side">
          <div className="info-card"><h3>插件信息</h3><dl><div><dt>作者</dt><dd>{plugin.owner}</dd></div><div><dt>分类</dt><dd>{category.zh}</dd></div><div><dt>收录时间</dt><dd>{plugin.added}</dd></div><div><dt>安装目标</dt><dd>Web Profile</dd></div><div><dt>清单规范</dt><dd>dsh.bundle</dd></div></dl><a href={plugin.url} target="_blank" rel="noreferrer">GitHub Repository ↗</a></div>
          <div className="registry-card"><span className="pulse" /><div><b>Registry 已收录</b><small>数据更新于 {registry.updated}</small></div></div>
        </aside>
      </div>

      <section className="related"><div className="related-heading"><div><span>RELATED</span><h2>同类插件</h2></div><a href="/zh/">浏览全部 {registry.count} 个插件 →</a></div><div className="related-grid">{related.map((item) => <a href={`/zh/plugin/${pluginSlug(item.name)}`} key={item.name}><div className="related-icon">{pluginInitials(item.name)}</div><b>{item.name}</b><p>{item.description.zh}</p><span>查看详情 →</span></a>)}</div></section>
    </main>
    <footer className="detail-footer"><span>Awesome DSH Plugin 社区目录</span><p>安装第三方代码前，请审阅源代码及权限。</p><a href={registry.source} target="_blank" rel="noreferrer">数据源 ↗</a></footer>
  </div>;
}
