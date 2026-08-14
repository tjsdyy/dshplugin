import Marketplace from "../Marketplace";
import registry from "../plugins.json";
export default function Page(){const data={"@context":"https://schema.org","@type":"CollectionPage",name:"DeepSeek Harness Plugin 插件市场",url:"https://dsh-plugin-market.coolinggg.chatgpt.site/zh/",description:`收录 ${registry.count} 个社区 DeepSeek Harness 插件的可搜索目录。`,inLanguage:"zh-CN"};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><Marketplace locale="zh"/></>}
