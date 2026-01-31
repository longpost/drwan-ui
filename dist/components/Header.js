import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function pick(lang, zh, en) {
    return lang === "en" ? en : zh;
}
function setLangCookie(cookieName, lang) {
    if (typeof document === "undefined")
        return;
    // ✅ 关键：Domain=.drwan.com 才能跨子域（herbs/maps/tools/...）共享
    document.cookie = `${cookieName}=${encodeURIComponent(lang)}; Domain=.drwan.com; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
}
export default function Header(props) {
    const { lang: langProp = "en", baseHref = "/", rightSlot, title = "DRWAN STUDIO", subtitle, nav = [], logoSrc, cookieName = "lang", } = props;
    const lang = langProp === "zh" ? "zh" : "en";
    function switchLang(next) {
        setLangCookie(cookieName, next);
        // ✅ 方案A：粗暴但最稳——让服务端重新渲染正文（getLang() 重新读 cookie）
        if (typeof window !== "undefined")
            window.location.reload();
    }
    return (_jsx("div", { className: "drwan-nav", children: _jsxs("div", { className: "drwan-navInner", children: [_jsxs("a", { className: "drwan-brand", href: baseHref, "aria-label": "DRWAN Hub", children: [_jsx("div", { className: "drwan-logoBox", children: logoSrc ? _jsx("img", { src: logoSrc, alt: "DRWAN" }) : _jsx("div", { className: "drwan-logo" }) }), _jsxs("div", { className: "drwan-brandTitle", children: [_jsx("strong", { children: title }), subtitle ? _jsx("span", { children: subtitle }) : null] })] }), nav.length > 0 ? (_jsx("div", { className: "drwan-navLinks", "aria-label": "Primary navigation", children: nav.map((it) => (_jsx("a", { className: "drwan-pill", href: it.href, children: pick(lang, it.labelZh, it.labelEn) }, it.key))) })) : (_jsx("div", { className: "drwan-navLinks" })), _jsxs("div", { className: "drwan-right", children: [rightSlot ? _jsx("div", { className: "drwan-rightSlot", children: rightSlot }) : null, _jsxs("div", { className: "drwan-langBtns", children: [_jsx("button", { className: `drwan-btn ${lang === "en" ? "drwan-btnActive" : ""}`, onClick: () => switchLang("en"), type: "button", children: "English" }), _jsx("button", { className: `drwan-btn ${lang === "zh" ? "drwan-btnActive" : ""}`, onClick: () => switchLang("zh"), type: "button", children: "\u4E2D\u6587" })] })] })] }) }));
}
