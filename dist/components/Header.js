"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { getCookieSafe, setLangCookieSafe } from "../utils/lang.js";
import { getNav } from "../brand/sites.js";
export function Header(props) {
    const { baseHref = "", logoSrc, brandTitleEn = "DRWAN STUDIO", brandTitleZh = "DRWAN STUDIO", taglineEn = "A learning studio by Dr. Wan", taglineZh = "Dr. Wan 的学习工作室", onLangChange, } = props;
    const [lang, setLang] = React.useState("en");
    React.useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        const urlLang = sp.get("lang");
        const cookieLang = getCookieSafe("lang");
        const initial = (urlLang === "zh" || urlLang === "en" ? urlLang : cookieLang);
        const finalLang = initial === "zh" ? "zh" : "en";
        setLang(finalLang);
        setLangCookieSafe(finalLang);
        onLangChange?.(finalLang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const nav = React.useMemo(() => getNav(baseHref), [baseHref]);
    function pick(en, zh) {
        return lang === "zh" ? zh : en;
    }
    const setAndPersist = (next) => {
        setLang(next);
        setLangCookieSafe(next);
        onLangChange?.(next);
    };
    return (_jsx("div", { className: "drwan-nav", children: _jsxs("div", { className: "drwan-navInner", children: [_jsxs("a", { className: "drwan-brand", href: baseHref ? baseHref : "/", "aria-label": "DRWAN Hub", children: [_jsx("div", { className: "drwan-logoBox", children: logoSrc ? _jsx("img", { src: logoSrc, alt: "DRWAN" }) : null }), _jsxs("div", { className: "drwan-brandTitle", children: [_jsx("strong", { children: pick(brandTitleEn, brandTitleZh) }), _jsx("span", { children: pick(taglineEn, taglineZh) })] })] }), _jsx("div", { className: "drwan-navLinks", "aria-label": "Primary navigation", children: nav.map((it) => (_jsx("a", { className: "drwan-pill", href: it.href, children: pick(it.labelEn, it.labelZh) }, it.key))) }), _jsxs("div", { className: "drwan-langBtns", children: [_jsx("button", { className: `drwan-btn ${lang === "en" ? "drwan-btnActive" : ""}`, onClick: () => setAndPersist("en"), type: "button", children: "English" }), _jsx("button", { className: `drwan-btn ${lang === "zh" ? "drwan-btnActive" : ""}`, onClick: () => setAndPersist("zh"), type: "button", children: "\u4E2D\u6587" })] })] }) }));
}
