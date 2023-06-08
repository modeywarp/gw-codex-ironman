const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const professions = [
  "ranger",
  "warrior",
  "monk",
  "mesmer",
  "necromancer",
  "elementalist",
  "assassin",
  "ritualist",
  "dervish",
  "paragon",
];

for (const profession of professions) {
  const icons = fs.readdirSync(path.join(__dirname, "skill-icons", profession));

  for (const icon of icons) {
    const icon_path = path.join(__dirname, "skill-icons", profession, icon);

    if (!icon_path.endsWith(".jpg")) {
      continue;
    }

    const icon_path_out = path
      .join(__dirname, "skill-icons", profession, icon)
      .replace(".jpg", ".webp");
    execSync(`cwebp "${icon_path}" -o "${icon_path_out}"`, {
      encoding: "utf8",
    });

    fs.rmSync(icon_path);
  }
}
