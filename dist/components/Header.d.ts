import React from "react";
export type NavItem = {
    key: string;
    labelEn: string;
    labelZh: string;
    href: string;
};
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
export default function Header(props: HeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Header.d.ts.map