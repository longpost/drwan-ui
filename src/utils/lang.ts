export type Lang = "en" | "zh";

export function getCookieSafe(name: string) {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return m ? decodeURIComponent(m[2]) : "";
}

export function setLangCookieSafe(lang: Lang) {
  if (typeof document === "undefined") return;
  document.cookie = `lang=${encodeURIComponent(
    lang
  )}; Domain=.drwan.com; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
}
