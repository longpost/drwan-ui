import { mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

mkdirSync("dist", { recursive: true });
copyFileSync(join("src","brand","theme.css"), join("dist","theme.css"));
