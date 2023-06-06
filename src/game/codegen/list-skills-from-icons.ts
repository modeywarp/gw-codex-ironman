//@ts-nocheck
Array.from($0.querySelectorAll(".image-lazy-loaded"))
  .map((i) => i.getAttribute("alt"))
  .filter((n) => !n.includes("Tango"))
  .map((i) => i.replace(".jpg", "").replace(".png", ""))
  .filter(
    (n) =>
      ![
        "Overcast",
        "Warrior",
        "Ranger",
        "Monk",
        "Necromancer",
        "Mesmer",
        "Elementalist",
        "Assassin",
        "Ritualist",
        "Paragon",
        "Dervish",
        "Profession",
        "Prophecies Mission",
        "Factions Mission",
        "Nightfall Mission",
        "Eye of the North Mission",
        "Energy",
        "Activation time",
        "Recharge time",
        "Adrenaline",
      ].includes(n)
  );
