const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = path.join(__dirname, "src", "assets");

function convertImagesInDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      convertImagesInDir(fullPath); // Recurse into subfolders
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      const valid = [".jpg", ".jpeg", ".png"];

      if (valid.includes(ext)) {
        const outputFile = path.basename(entry.name, ext) + ".webp";
        const outputPath = path.join(dir, outputFile);

        sharp(fullPath)
        .rotate() // 🔄 auto-fixes tilted images
        .webp({ quality: 80 })
        .toFile(outputPath)
          .then(() =>
            console.log(`✅ Converted: ${fullPath} -> ${outputPath}`)
          )
          .catch((err) =>
            console.error(`❌ Failed to convert ${fullPath}`, err)
          );
      }
    }
  });
}

convertImagesInDir(inputFolder);
