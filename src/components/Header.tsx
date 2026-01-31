import React from "react";

export type NavItem = { key: string; labelEn: string; labelZh: string; href: string };

export type HeaderProps = {
  /** 当前语言（用于高亮按钮 & 显示文案） */
  lang?: "en" | "zh";

  /** 点击品牌返回的地址（比如 https://www.drwan.com） */
  baseHref?: string;

  /** 右侧插槽（你现在塞 LangToggle 就放这里） */
  rightSlot?: React.ReactNode;

  /** 品牌标题（可选） */
  title?: string;

  /** 品牌副标题（可选） */
  subtitle?: string;

  /** 可选：顶栏导航（如果你以后想把 pills 也做成可配置） */
  nav?: NavItem[];

  /** 可选：logo 图片地址（不传就用渐变方块） */
  logoSrc?: string;

  /** 可选：cookie name，默认 lang */
  cookieName?: string;
};

function pick(lang: "en" | "zh", zh: string, en: string) {
  return lang === "en" ? en : zh;
}

function setLangCookie(cookieName: string, lang: "en" | "zh") {
  if (typeof document === "undefined") return;
  // ✅ 关键：Domain=.drwan.com 才能跨子域（herbs/maps/tools/...）共享
  document.cookie = `${cookieName}=${encodeURIComponent(
    lang
  )}; Domain=.drwan.com; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
}

export default function Header(props: HeaderProps) {
  const {
    lang: langProp = "en",
    baseHref = "/",
    rightSlot,
    title = "DRWAN STUDIO",
    subtitle,
    nav = [],
    logoSrc,
    cookieName = "lang",
  } = props;

  const lang: "en" | "zh" = langProp === "zh" ? "zh" : "en";

  function switchLang(next: "en" | "zh") {
    setLangCookie(cookieName, next);

    // ✅ 方案A：粗暴但最稳——让服务端重新渲染正文（getLang() 重新读 cookie）
    if (typeof window !== "undefined") window.location.reload();
  }

  return (
    <div className="drwan-nav">
      <div className="drwan-navInner">
        <a className="drwan-brand" href={baseHref} aria-label="DRWAN Hub">
          <div className="drwan-logoBox">
            {logoSrc ? <img src={logoSrc} alt="DRWAN" /> : <div className="drwan-logo" />}
          </div>
          <div className="drwan-brandTitle">
            <strong>{title}</strong>
            {subtitle ? <span>{subtitle}</span> : null}
          </div>
        </a>

        {nav.length > 0 ? (
          <div className="drwan-navLinks" aria-label="Primary navigation">
            {nav.map((it: NavItem) => (
              <a key={it.key} className="drwan-pill" href={it.href}>
                {pick(lang, it.labelZh, it.labelEn)}
              </a>
            ))}
          </div>
        ) : (
          <div className="drwan-navLinks" />
        )}

        <div className="drwan-right">
          {rightSlot ? <div className="drwan-rightSlot">{rightSlot}</div> : null}

          <div className="drwan-langBtns">
            <button
              className={`drwan-btn ${lang === "en" ? "drwan-btnActive" : ""}`}
              onClick={() => switchLang("en")}
              type="button"
            >
              English
            </button>
            <button
              className={`drwan-btn ${lang === "zh" ? "drwan-btnActive" : ""}`}
              onClick={() => switchLang("zh")}
              type="button"
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
