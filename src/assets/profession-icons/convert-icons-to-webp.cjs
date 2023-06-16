const { execSync } = require("child_process");
const fs = require("fs");

const icons = fs.readdirSync(__dirname).filter((i) => i.endsWith(".png"));
for (const icon of icons) {
  const icon_path_out = icon.replace(".png", ".webp");

  execSync(`cwebp "${icon}" -o "${icon_path_out}"`, {
    encoding: "utf8",
  });
}
