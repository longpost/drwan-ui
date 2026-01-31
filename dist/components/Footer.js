"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { getCookieSafe } from "../utils/lang.js";
export default function Footer(props) {
    const disclaimerEn = props.disclaimerEn ?? "Disclaimer: Educational content only. Not medical advice or diagnosis.";
    const disclaimerZh = props.disclaimerZh ?? "免责声明：仅用于学习与科普，不构成医疗建议或诊断。";
    const [lang, setLang] = React.useState(props.lang ?? "en");
    React.useEffect(() => {
        if (props.lang)
            return;
        const cookieLang = getCookieSafe("lang");
        setLang(cookieLang === "zh" ? "zh" : "en");
    }, [props.lang]);
    return (_jsxs("div", { className: "drwan-footer", children: [_jsxs("div", { children: ["\u00A9 ", new Date().getFullYear(), " DRWAN Studio"] }), _jsx("div", { children: lang === "zh" ? disclaimerZh : disclaimerEn })] }));
}
