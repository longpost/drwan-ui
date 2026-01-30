import fs from "fs";
import path from "path";

const srcDir = path.resolve("src/brand");
const outDir = path.resolve("dist/brand");

fs.mkdirSync(outDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith(".css")) {
    fs.copyFileSync(
      path.join(srcDir, file),
      path.join(outDir, file)
    );
  }
}
