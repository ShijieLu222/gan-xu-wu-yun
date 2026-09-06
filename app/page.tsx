"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  { id:"tiramisu", name:"提拉米苏", en:"TIRAMISU", note:"绵密马斯卡彭与手指饼干，二十余种口味轮换。", price:"25 元起", image:"/images/tiramisu.webp", color:"pink", tag:"人气推荐" },
  { id:"basque", name:"巴斯克", en:"BASQUE", note:"焦香表层包裹柔软芝士芯，原味与季节风味可选。", price:"每日现烤", image:"/images/basque.webp", color:"orange", tag:"经典款" },
  { id:"kitty", name:"Kitty 果切", en:"KITTY FRUIT", note:"鲜果切成可爱造型，派对、生日都能一秒点亮。", price:"按份定制", image:"/images/kitty-fruit.webp", color:"green", tag:"拍照出片" },
  { id:"four", name:"四拼乌云盒子", en:"CLOUD BOX", note:"一次尝到四种快乐，口味和果料按当日供应搭配。", price:"四味分享", image:"/images/four-box.webp", color:"pink", tag:"分享装" },
  { id:"birthday", name:"巴斯克生日蛋糕", en:"BIRTHDAY BASQUE", note:"把巴斯克做成生日主角，水果、丝带与祝福皆可定制。", price:"提前预订", image:"/images/birthday-basque.webp", color:"orange", tag:"生日限定" },
  { id:"gift", name:"果礼", en:"FRUIT GIFT", note:"当季鲜果搭配花艺与礼盒，让心意更好看也更好吃。", price:"专属搭配", image:"/images/fruit-gift.webp", color:"green", tag:"送礼推荐" },
];

const flavors = ["原味", "柠檬", "海盐奥利奥", "茉莉青提", "抹茶布雷", "香橙", "蓝莓", "开心果"];

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyOrderText() {
    await navigator.clipboard.writeText("你好，我想咨询柑叙乌云的甜品/果礼预订～");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="柑叙乌云首页">
          <Image src="/images/logo-source.webp" alt="柑叙乌云" width={168} height={70} priority />
        </a>
        <nav aria-label="主导航">
          <a href="#products">甜品</a>
          <a href="#event">活动</a>
          <a href="#story">关于</a>
          <a className="nav-cta" href="#order">咨询预订</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/images/hero-fruit.webp" alt="柑叙乌云 Kitty 主题鲜果礼盒" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">GAN XU WU YUN · 甜品与鲜果</p>
          <h1>把今天，<br />过得甜一点。</h1>
          <p className="hero-lead">手作甜品、创意果切与用心准备的果礼，给每一个值得庆祝的日子。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">看看今日甜品 <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href="#event">正在发生的活动</a>
          </div>
        </div>
        <div className="hero-note"><span>01</span><p>每日新鲜制作<br />售完即止</p></div>
      </section>

      <section className="intro" id="story">
        <p className="section-kicker">一口甜，一段好心情</p>
        <h2>甜品是云，鲜果是风。<br />我们把它们，装进日常。</h2>
        <div className="intro-grid">
          <p>柑叙乌云从一份认真做的甜品开始。选新鲜的果子、做温柔的甜度，把每一盒都当成要送给重要的人。</p>
          <div className="values"><span><b>当天</b>新鲜制作</span><span><b>20+</b>提拉米苏风味</span><span><b>按需</b>定制心意</span></div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="section-heading">
          <div><p className="section-kicker">OUR SWEET PICKS</p><h2>今天想吃哪一种？</h2></div>
          <p>菜单会随着季节与灵感更新。<br />具体口味和预订时间请提前咨询。</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card ${index === 0 || index === 5 ? "wide" : ""}`} key={product.id}>
              <div className="product-image-wrap">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 100vw, 50vw" className="product-image" />
                <span className={`product-tag ${product.color}`}>{product.tag}</span>
              </div>
              <div className="product-info">
                <div><span>{product.en}</span><h3>{product.name}</h3></div>
                <p>{product.note}</p>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flavors" aria-label="提拉米苏口味">
        <div className="flavor-copy"><p className="section-kicker light">TIRAMISU FLAVORS</p><h2>云朵般轻，<br />每一口都有新故事。</h2><p>来自产品表的热卖风味，更多口味会不定期返场。</p></div>
        <div className="flavor-list">{flavors.map((flavor, index) => <div key={flavor}><span>{String(index + 1).padStart(2,"0")}</span><b>{flavor}</b><i>↗</i></div>)}</div>
      </section>

      <section className="event" id="event">
        <div className="event-image"><Image src="/images/event-desserts.webp" alt="柑叙乌云多口味甜品活动" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="event-copy">
          <div className="event-badge"><span /> 本月限定活动</div>
          <p className="event-number">EVENT 01</p>
          <h2>四拼乌云盒子<br />尝鲜计划</h2>
          <p>从当日口味中挑选四款，把四份小快乐装进一盒。适合分享，也适合把喜欢都留给自己。</p>
          <ul><li>口味按当日菜单组合</li><li>数量有限，建议提前预留</li><li>活动详情以咨询回复为准</li></ul>
          <a className="button event-button" href="#order">我要参加 <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="order" id="order">
        <span className="orange-dot" aria-hidden="true" />
        <p className="section-kicker">RESERVATION</p>
        <h2>想好吃什么了吗？</h2>
        <p>甜品、生日蛋糕与果礼建议提前预订。复制下面这句话，发送给店主即可开始咨询。</p>
        <button className="copy-card" type="button" onClick={copyOrderText}>
          <span>“你好，我想咨询柑叙乌云的甜品/果礼预订～”</span>
          <b>{copied ? "已复制 ✓" : "复制预订话术"}</b>
        </button>
        <div className="order-notes"><span>每日新鲜制作</span><span>支持个性定制</span><span>同城配送请咨询</span></div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/images/logo-source.webp" alt="柑叙乌云" width={200} height={90} /><p>甜品与鲜果，把心意装得更好看。</p></div>
        <div><b>浏览</b><a href="#products">甜品菜单</a><a href="#event">本月活动</a><a href="#story">品牌故事</a></div>
        <div><b>预订提示</b><p>实际价格、口味与配送范围<br />以店主当日回复为准。</p></div>
        <p className="copyright">© 2026 柑叙乌云 GAN XU WU YUN</p>
      </footer>
    </main>
  );
}
