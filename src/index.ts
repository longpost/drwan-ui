export { default as Header } from "./components/Header.js";
export { default as Footer } from "./components/Footer.js";

// 如果你还有别的导出，继续往下加
// export { xxx } from "./utils/xxx.js";


export type { Tile, Badge, HomeSection } from "./brand/sites.js";
export { HOME_SECTIONS, getNav } from "./brand/sites.js";

export type { Lang } from "./utils/lang.js";
export { getCookieSafe, setLangCookieSafe } from "./utils/lang.js";
