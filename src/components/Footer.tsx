"use client";

import React from "react";
import type { Lang } from "../utils/lang";
import { getCookieSafe } from "../utils/lang";

export function Footer(props: {
  lang?: Lang;
  disclaimerEn?: string;
  disclaimerZh?: string;
}) {
  const disclaimerEn = props.disclaimerEn ?? "Disclaimer: Educational content only. Not medical advice or diagnosis.";
  const disclaimerZh = props.disclaimerZh ?? "免责声明：仅用于学习与科普，不构成医疗建议或诊断。";

  const [lang, setLang] = React.useState<Lang>(props.lang ?? "en");

  React.useEffect(() => {
    if (props.lang) return;
    const cookieLang = getCookieSafe("lang");
    setLang(cookieLang === "zh" ? "zh" : "en");
  }, [props.lang]);

  return (
    <div className="drwan-footer">
      <div>© {new Date().getFullYear()} DRWAN Studio</div>
      <div>{lang === "zh" ? disclaimerZh : disclaimerEn}</div>
    </div>
  );
}
