"use client";

import React from "react";
import type { Lang } from "../utils/lang";
import { getCookieSafe, setLangCookieSafe } from "../utils/lang";
import { getNav } from "../brand/sites";

export function Header(props: {
  baseHref?: string;         // "" on hub; "https://www.drwan.com" on subdomains
  logoSrc?: string;          // optional user logo, e.g. "/logo.png"
  brandTitleEn?: string;
  brandTitleZh?: string;
  taglineEn?: string;
  taglineZh?: string;
  onLangChange?: (lang: Lang) => void; // optional callback
}) {
  const {
    baseHref = "",
    logoSrc,
    brandTitleEn = "DRWAN STUDIO",
    brandTitleZh = "DRWAN STUDIO",
    taglineEn = "A learning studio by Dr. Wan",
    taglineZh = "Dr. Wan 的学习工作室",
    onLangChange,
  } = props;

  const [lang, setLang] = React.useState<Lang>("en");

  React.useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const urlLang = sp.get("lang");
    const cookieLang = getCookieSafe("lang");
    const initial = (urlLang === "zh" || urlLang === "en" ? urlLang : cookieLang) as Lang | "";
    const finalLang: Lang = initial === "zh" ? "zh" : "en";
    setLang(finalLang);
    setLangCookieSafe(finalLang);
    onLangChange?.(finalLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nav = React.useMemo(() => getNav(baseHref), [baseHref]);

  function pick(en: string, zh: string) {
    return lang === "zh" ? zh : en;
  }

  const setAndPersist = (next: Lang) => {
    setLang(next);
    setLangCookieSafe(next);
    onLangChange?.(next);
  };

  return (
    <div className="drwan-nav">
      <div className="drwan-navInner">
        <a className="drwan-brand" href={baseHref ? baseHref : "/"} aria-label="DRWAN Hub">
          <div className="drwan-logoBox">
            {logoSrc ? <img src={logoSrc} alt="DRWAN" /> : null}
          </div>
          <div className="drwan-brandTitle">
            <strong>{pick(brandTitleEn, brandTitleZh)}</strong>
            <span>{pick(taglineEn, taglineZh)}</span>
          </div>
        </a>

        <div className="drwan-navLinks" aria-label="Primary navigation">
          {nav.map((it: { key: string; href: string; labelEn: string; labelZh: string }) => (

            <a key={it.key} className="drwan-pill" href={it.href}>
              {pick(it.labelEn, it.labelZh)}
            </a>
          ))}
        </div>

        <div className="drwan-langBtns">
          <button
            className={`drwan-btn ${lang === "en" ? "drwan-btnActive" : ""}`}
            onClick={() => setAndPersist("en")}
            type="button"
          >
            English
          </button>
          <button
            className={`drwan-btn ${lang === "zh" ? "drwan-btnActive" : ""}`}
            onClick={() => setAndPersist("zh")}
            type="button"
          >
            中文
          </button>
        </div>
      </div>
    </div>
  );
}
