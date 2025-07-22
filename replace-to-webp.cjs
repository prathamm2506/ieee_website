const fs = require("fs");
const path = require("path");

const codeExtensions = [".js", ".jsx", ".ts", ".tsx"];
const imageExtensions = [".jpg", ".jpeg", ".png"];
const srcDir = path.join(__dirname, "src");

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let updated = content;

  imageExtensions.forEach((ext) => {
    const regex = new RegExp(`\\${ext}(?=["'])`, "gi");
    updated = updated.replace(regex, `.webp`);
  });

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, "utf-8");
    console.log("✅ Updated:", filePath);
  }
}

function scanDirectory(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name);
      if (codeExtensions.includes(ext)) {
        processFile(fullPath);
      }
    }
  });
}

console.log("🔍 Replacing .jpg/.png with .webp in src/...");
scanDirectory(srcDir);
console.log("✅ Done!");
