import React from "react";

export type NavItem = { key: string; labelEn: string; labelZh: string; href: string };

export type HeaderProps = {
  /** 当前语言（用于显示文案） */
  lang?: "en" | "zh";

  /** 点击品牌返回的地址（比如 https://www.drwan.com） */
  baseHref?: string;

  /** 右侧插槽（推荐放子站自己的 LangToggle、登录按钮等） */
  rightSlot?: React.ReactNode;

  /** 品牌标题（可选） */
  title?: string;

  /** 品牌副标题（可选） */
  subtitle?: string;

  /** 可选：顶栏导航 */
  nav?: NavItem[];

  /** 可选：logo 图片地址（不传就用渐变方块） */
  logoSrc?: string;

  /**
   * 可选：如果你某些站真的想让 Header 自己显示语言“链接按钮”，
   * 只能用 href（不能用 onClick），避免 Server/Client 传事件报错。
   * 不传就不显示，避免你现在的“两组按钮”。
   */
  langLinks?: {
    enHref: string;
    zhHref: string;
  };
};

function pick(lang: "en" | "zh", zh: string, en: string) {
  return lang === "en" ? en : zh;
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
    langLinks,
  } = props;

  const lang: "en" | "zh" = langProp === "zh" ? "zh" : "en";

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
            {nav.map((it) => (
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
</div>

      </div>
    </div>
  );
}
