import type { MetadataRoute } from "next";
import registry from "./plugins.json";
import { pluginSlug } from "./plugin-utils";
const base="https://dshplugin.io";
export default function sitemap():MetadataRoute.Sitemap{
 const updated=new Date(`${registry.updated}T00:00:00Z`);
 const home:MetadataRoute.Sitemap=[{url:`${base}/`,lastModified:updated,changeFrequency:"daily",priority:1,alternates:{languages:{en:`${base}/`,"zh-CN":`${base}/zh/`}}},{url:`${base}/zh/`,lastModified:updated,changeFrequency:"daily",priority:.9,alternates:{languages:{en:`${base}/`,"zh-CN":`${base}/zh/`}}}];
 return home.concat(registry.plugins.flatMap(p=>{const slug=pluginSlug(p.name);return [{url:`${base}/plugin/${slug}`,lastModified:new Date(`${p.added}T00:00:00Z`),changeFrequency:"monthly" as const,priority:.7,alternates:{languages:{en:`${base}/plugin/${slug}`,"zh-CN":`${base}/zh/plugin/${slug}`}}},{url:`${base}/zh/plugin/${slug}`,lastModified:new Date(`${p.added}T00:00:00Z`),changeFrequency:"monthly" as const,priority:.6,alternates:{languages:{en:`${base}/plugin/${slug}`,"zh-CN":`${base}/zh/plugin/${slug}`}}}] }));
}
