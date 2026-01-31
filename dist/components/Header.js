import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function pick(lang, zh, en) {
    return lang === "en" ? en : zh;
}
export default function Header(props) {
    const { lang: langProp = "en", baseHref = "/", rightSlot, title = "DRWAN STUDIO", subtitle, nav = [], logoSrc, langLinks, } = props;
    const lang = langProp === "zh" ? "zh" : "en";
    return (_jsx("div", { className: "drwan-nav", children: _jsxs("div", { className: "drwan-navInner", children: [_jsxs("a", { className: "drwan-brand", href: baseHref, "aria-label": "DRWAN Hub", children: [_jsx("div", { className: "drwan-logoBox", children: logoSrc ? _jsx("img", { src: logoSrc, alt: "DRWAN" }) : _jsx("div", { className: "drwan-logo" }) }), _jsxs("div", { className: "drwan-brandTitle", children: [_jsx("strong", { children: title }), subtitle ? _jsx("span", { children: subtitle }) : null] })] }), nav.length > 0 ? (_jsx("div", { className: "drwan-navLinks", "aria-label": "Primary navigation", children: nav.map((it) => (_jsx("a", { className: "drwan-pill", href: it.href, children: pick(lang, it.labelZh, it.labelEn) }, it.key))) })) : (_jsx("div", { className: "drwan-navLinks" })), _jsx("div", { className: "drwan-right", children: rightSlot ? _jsx("div", { className: "drwan-rightSlot", children: rightSlot }) : null })] }) }));
}
