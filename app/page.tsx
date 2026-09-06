"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const signatures = [
  { id: "tiramisu", number: "01", name: "提拉米苏", en: "TIRAMISU", copy: "轻盈马斯卡彭叠上细腻风味，一盒里藏着刚刚好的甜。二十余种口味会跟着季节轮换。", meta: "25 元起 · 每日现做", image: "/images/tiramisu.webp", position: "50% 54%" },
  { id: "basque", number: "02", name: "巴斯克生日蛋糕", en: "BIRTHDAY BASQUE", copy: "焦香表面、柔软芝士芯，再用鲜果与丝带把生日的仪式感好好装起来。", meta: "按需定制 · 建议提前预订", image: "/images/birthday-basque.webp", position: "50% 55%" },
  { id: "kitty", number: "03", name: "Kitty 果切", en: "KITTY FRUIT BOX", copy: "把当季鲜果切成可爱模样。好吃、好看，也很适合成为聚会和生日里的小惊喜。", meta: "当季鲜果 · 按份定制", image: "/images/kitty-fruit.webp", position: "50% 46%" },
  { id: "cloud", number: "04", name: "四拼乌云盒子", en: "FOUR FLAVORS", copy: "一次装下四种快乐。不同奶油与果香自由碰面，适合分享，也适合一个人慢慢吃。", meta: "四味分享 · 口味当日更新", image: "/images/four-box.webp", position: "50% 50%" },
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [qrOpen, setQrOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.location.hash.replace("#", "") || new URLSearchParams(window.location.search).get("goto");
    if (!id) return;
    const node = document.getElementById(id);
    if (!node) return;
    const timer = window.setTimeout(() => node.scrollIntoView({ behavior: "instant", block: "start" }), 50);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!qrOpen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setQrOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [qrOpen]);

  const product = signatures[activeProduct];

  return (
    <main id="top">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-main">
          <a className="brand" href="#top" aria-label="柑叙乌云首页">
            <Image src={asset("/images/logo-transparent.png")} alt="柑叙乌云 GAN XU WU YUN" width={240} height={168} priority style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </a>
          <button type="button" className="nav-cta header-cta" onClick={() => setQrOpen(true)}>扫码进群</button>
        </div>
        <nav aria-label="主导航">
          <a href="#signature">招牌</a>
          <a href="#benefits">福利</a>
          <a href="#contact">联系</a>
          <button type="button" className="nav-cta desktop-only" onClick={() => setQrOpen(true)}>扫码进群</button>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> DESSERT · FRUIT · GIFT</p>
          <h1 id="hero-title">云朵一样轻，<br /><em>果香刚刚好。</em></h1>
          <p className="hero-lead">手作甜品与创意鲜果礼，把平常的一天，也认真过得甜一点。</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#signature">看看招牌</a>
            <button className="text-button" type="button" onClick={() => setQrOpen(true)}>微信咨询 <span>↗</span></button>
          </div>
          <div className="hero-stamp" aria-hidden="true"><span>HAND</span><b>手作</b><span>MADE</span></div>
        </div>
        <div className="hero-visual">
          <Image src={asset("/images/hero-fruit.webp")} alt="柑叙乌云 Kitty 创意鲜果礼盒" fill priority sizes="(max-width: 760px) 100vw, 58vw" />
          <div className="hero-card card-one"><small>今日份</small><b>新鲜现切</b></div>
          <div className="hero-card card-two"><b>甜度</b><small>刚刚好</small></div>
          <span className="fruit-orbit orbit-one" aria-hidden="true">●</span><span className="fruit-orbit orbit-two" aria-hidden="true">✦</span>
        </div>
        <a className="scroll-cue" href="#signature"><span>SCROLL</span><i /></a>
      </section>

      <div className="marquee" aria-hidden="true"><div>提拉米苏 <i>✦</i> 巴斯克 <i>✦</i> KITTY 果切 <i>✦</i> 四拼乌云盒子 <i>✦</i> 果礼 <i>✦</i> 提拉米苏 <i>✦</i> 巴斯克 <i>✦</i> KITTY 果切 <i>✦</i></div></div>

      <section className="signature" id="signature">
        <div className="section-intro">
          <p className="kicker">SIGNATURE SELECTION</p><h2>先认识这四款。</h2>
          <p>菜单不必很长，每一款都值得被记住。点击名字，换一种今天的心情。</p>
        </div>
        <div className="product-stage">
          <div className="product-photo" key={product.id}>
            <Image src={asset(product.image)} alt={product.name} fill sizes="(max-width: 820px) 100vw, 56vw" style={{ objectPosition: product.position }} />
            <span className="photo-index">{product.number} / 04</span>
          </div>
          <div className="product-detail">
            <p>{product.en}</p><h3>{product.name}</h3><div className="pink-rule" />
            <p className="product-copy">{product.copy}</p><strong>{product.meta}</strong>
            <button type="button" onClick={() => setQrOpen(true)}>咨询这一款 <span>→</span></button>
          </div>
        </div>
        <div className="product-tabs" role="tablist" aria-label="选择招牌产品">
          {signatures.map((item, index) => (
            <button key={item.id} type="button" role="tab" aria-selected={activeProduct === index} className={activeProduct === index ? "active" : ""} onClick={() => setActiveProduct(index)}>
              <span>{item.number}</span><b>{item.name}</b><i>↗</i>
            </button>
          ))}
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="benefit-photo"><Image src={asset("/images/event-desserts.webp")} alt="柑叙乌云甜品与鲜果群福利" fill sizes="(max-width: 820px) 100vw, 48vw" /><div className="event-ribbon">微信好友群专属 · 不定期掉落</div></div>
        <div className="benefit-copy">
          <p className="kicker light">COMMUNITY BENEFITS</p><h2>进群，<br />接住一点甜。</h2>
          <p className="benefit-lead">新品试吃、限时优惠和不定期抽奖，都先在微信好友群里发生。</p>
          <ol><li><span>一等奖</span><b>Kitty 果切礼盒一份</b></li><li><span>二等奖</span><b>四拼乌云盒子一份</b></li><li><span>三等奖</span><b>免费提拉米苏，任选 5 位</b></li></ol>
          <button className="button button-pink" type="button" onClick={() => setQrOpen(true)}>扫码添加微信，进福利群 <span>↗</span></button>
          <p className="fine-print">活动时间与核销规则以群内当期公告为准。</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading"><p className="kicker">COME SAY HELLO</p><h2>先加个好友，<br />再慢慢挑甜品。</h2></div>
        <div className="contact-grid">
          <button type="button" className="qr-card" onClick={() => setQrOpen(true)} aria-label="放大微信二维码">
            <div className="qr-image"><Image src={asset("/images/wechat-contact.jpg")} alt="柑叙乌云微信好友二维码" fill sizes="340px" /></div>
            <div><span>01 / WECHAT</span><h3>扫码添加好友</h3><p>添加后发送「进群」，店主会邀请你进入福利群。</p></div><i>点击放大 ↗</i>
          </button>
          <div className="shop-card">
            <div className="map-mark" aria-hidden="true"><span /><span /><span /><b>松江</b></div>
            <div>
              <span>02 / STORE</span>
              <h3>叶榭门店</h3>
              <p>欢迎到店挑选，建议先微信预约。</p>
              <address>
                上海市松江区叶榭镇451弄一号一层
                <a href="tel:17721093282">177 2109 3282</a>
              </address>
              <div className="shop-actions">
                <a href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%9D%BE%E6%B1%9F%E5%8C%BA%E5%8F%B6%E6%A9%AB%E9%95%87451%E5%BC%84%E4%B8%80%E5%8F%B7%E4%B8%80%E5%B1%82" target="_blank" rel="noreferrer">打开地图</a>
                <a href="tel:17721093282">拨打电话</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#top"><Image src={asset("/images/logo-transparent.png")} alt="柑叙乌云" width={240} height={168} style={{ width: "100%", height: "100%", objectFit: "contain" }} /></a>
        <p>上海市松江区叶榭镇451弄一号一层<br /><a href="tel:17721093282">177 2109 3282</a></p><div><a href="#signature">招牌产品</a><a href="#benefits">入群福利</a><a href="#contact">联系门店</a></div><small>© 2026 GAN XU WU YUN</small>
      </footer>

      <nav className="mobile-dock" aria-label="手机快捷导航">
        <a href="#signature">招牌</a>
        <a href="#benefits">福利</a>
        <a href="#contact">联系</a>
        <button type="button" onClick={() => setQrOpen(true)}>进群</button>
      </nav>
      <button className="floating-join" type="button" onClick={() => setQrOpen(true)}><span>福利群</span><b>扫码加入</b></button>
      {qrOpen && (
        <div className="qr-modal" role="dialog" aria-modal="true" aria-label="微信二维码" onClick={() => setQrOpen(false)}>
          <div className="qr-dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setQrOpen(false)} aria-label="关闭">×</button><p>WECHAT COMMUNITY</p><h2>扫码添加好友</h2>
            <div className="modal-qr"><Image src={asset("/images/wechat-contact.jpg")} alt="柑叙乌云微信好友二维码，扫码添加好友" fill sizes="380px" priority /></div>
            <b>添加后发送「进群」</b><span>新品、抽奖和福利会在群里不定期出现。</span>
          </div>
        </div>
      )}
    </main>
  );
}
