const fs = require("fs");
const path = require("path");

const icons_dir = path.join(__dirname, "skill-icons");
const icons = fs.readdirSync(icons_dir);

// start by normalizing the file names
for (const icon of icons) {
  if (!icon.endsWith(".jpg")) {
    continue;
  }

  fs.renameSync(
    path.join(icons_dir, icon),
    path.join(
      icons_dir,
      icon
        .replace("32px-", "")
        .replace("_-large", "")
        .replaceAll("_", " ")
        .replace("-s ", "'s")
        .replace("'s", "'s ")
        .replace("-.jpg", ".jpg")
        .replaceAll("  ", " ")
        .replace("-", "")
    )
  );
}

const filters = require("./profession-skills.cjs");
filterAndMoveIconsToFolder(new Set(filters.ranger_display), "ranger");
filterAndMoveIconsToFolder(new Set(filters.warrior_display), "warrior");
filterAndMoveIconsToFolder(new Set(filters.monk_display), "monk");
filterAndMoveIconsToFolder(new Set(filters.mesmer_display), "mesmer");
filterAndMoveIconsToFolder(new Set(filters.necromancer_display), "necromancer");
filterAndMoveIconsToFolder(
  new Set(filters.elementalist_display),
  "elementalist"
);
filterAndMoveIconsToFolder(new Set(filters.assassin_display), "assassin");
filterAndMoveIconsToFolder(new Set(filters.ritualist_display), "ritualist");
filterAndMoveIconsToFolder(new Set(filters.dervish_display), "dervish");
filterAndMoveIconsToFolder(new Set(filters.paragon_display), "paragon");

function filterAndMoveIconsToFolder(collection, folder_name) {
  const icons = fs
    .readdirSync(icons_dir)
    .filter((name) =>
      collection.has(name.replace(".jpg", "").trim().toLowerCase())
    );

  for (const icon of icons) {
    fs.renameSync(
      path.join(icons_dir, icon),
      path.join(icons_dir, folder_name, icon)
    );
  }
}
