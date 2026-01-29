export type Badge = "TOOLS" | "EXPLORE" | "KNOWLEDGE" | "LEARN" | "MAPS" | "HERBS" | "INQUIRY" | "EXAMS";
export type Tile = {
    key: string;
    titleEn: string;
    titleZh: string;
    descEn: string;
    descZh: string;
    href: string;
    badge: Badge;
};
export type HomeSection = {
    id: string;
    titleEn: string;
    titleZh: string;
    subtitleEn: string;
    subtitleZh: string;
    badge: Badge;
    tiles: Tile[];
};
export declare const HOME_SECTIONS: HomeSection[];
export type NavItem = {
    key: string;
    labelEn: string;
    labelZh: string;
    href: string;
};
export declare function getNav(baseHref: string): NavItem[];
//# sourceMappingURL=sites.d.ts.map