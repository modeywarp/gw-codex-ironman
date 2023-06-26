import { toNormalized } from "./name-mappers";

const pairs = [
  {
    id: "0",
    value: "No Skill",
  },
  {
    id: "2",
    value: "Resurrection Signet",
  },
  {
    id: "3",
    value: "Signet of Capture",
  },
  {
    id: "1403",
    value: "Agonizing Chop",
  },
  {
    id: "334",
    value: "Axe Rake",
  },
  {
    id: "342",
    value: "Axe Twist",
  },
  {
    id: "335",
    value: "Cleave",
  },
  {
    id: "1402",
    value: "Critical Chop",
  },
  {
    id: "330",
    value: "Cyclone Axe",
  },
  {
    id: "1696",
    value: "Decapitate",
  },
  {
    id: "337",
    value: "Dismember",
  },
  {
    id: "340",
    value: "Disrupting Chop",
  },
  {
    id: "338",
    value: "Eviscerate",
  },
  {
    id: "336",
    value: "Executioner's Strike",
  },
  {
    id: "904",
    value: "Furious Axe",
  },
  {
    id: "2009",
    value: "Keen Chop",
  },
  {
    id: "849",
    value: "Lacerating Chop",
  },
  {
    id: "339",
    value: "Penetrating Blow",
  },
  {
    id: "1136",
    value: "Penetrating Chop",
  },
  {
    id: "341",
    value: "Swift Chop",
  },
  {
    id: "992",
    value: "Triple Chop",
  },
  {
    id: "888",
    value: "Whirling Axe",
  },
  {
    id: "905",
    value: "Auspicious Blow",
  },
  {
    id: "358",
    value: "Backbreaker",
  },
  {
    id: "350",
    value: "Belly Smash",
  },
  {
    id: "357",
    value: "Counter Blow",
  },
  {
    id: "353",
    value: "Crude Swing",
  },
  {
    id: "352",
    value: "Crushing Blow",
  },
  {
    id: "355",
    value: "Devastating Hammer",
  },
  {
    id: "354",
    value: "Earth Shaker",
  },
  {
    id: "993",
    value: "Enraged Smash",
  },
  {
    id: "850",
    value: "Fierce Blow",
  },
  {
    id: "889",
    value: "Forceful Blow",
  },
  {
    id: "331",
    value: "Hammer Bash",
  },
  {
    id: "359",
    value: "Heavy Blow",
  },
  {
    id: "356",
    value: "Irresistible Blow",
  },
  {
    id: "1697",
    value: "Magehunter's Smash",
  },
  {
    id: "351",
    value: "Mighty Blow",
  },
  {
    id: "1409",
    value: "Mokele Smash",
  },
  {
    id: "1410",
    value: "Overbearing Smash",
  },
  {
    id: "2008",
    value: "Pulverizing Smash",
  },
  {
    id: "994",
    value: "Renewing Smash",
  },
  {
    id: "360",
    value: "Staggering Blow",
  },
  {
    id: "1137",
    value: "Yeti Smash",
  },
  {
    id: "2067",
    value: '"I Meant to Do That!"',
  },
  {
    id: "333",
    value: '"I Will Avenge You!"',
  },
  {
    id: "368",
    value: '"I Will Survive!"',
  },
  {
    id: "1141",
    value: '"You Will Die!"',
  },
  {
    id: "317",
    value: "Battle Rage",
  },
  {
    id: "370",
    value: "Berserker Stance",
  },
  {
    id: "2197",
    value: "Body Blow",
  },
  {
    id: "379",
    value: "Bull's Charge",
  },
  {
    id: "332",
    value: "Bull's Strike",
  },
  {
    id: "1413",
    value: "Burst of Aggression",
  },
  {
    id: "1405",
    value: "Charging Strike",
  },
  {
    id: "1693",
    value: "Counterattack",
  },
  {
    id: "318",
    value: "Defy Pain",
  },
  {
    id: "2066",
    value: "Disarm",
  },
  {
    id: "361",
    value: "Dolyak Signet",
  },
  {
    id: "375",
    value: "Dwarven Battle Stance",
  },
  {
    id: "347",
    value: "Endure Pain",
  },
  {
    id: "1414",
    value: "Enraging Charge",
  },
  {
    id: "1404",
    value: "Flail",
  },
  {
    id: "389",
    value: "Flourish",
  },
  {
    id: "327",
    value: "Griffon's Sweep",
  },
  {
    id: "1406",
    value: "Headbutt",
  },
  {
    id: "1134",
    value: "Leviathan's Sweep",
  },
  {
    id: "1407",
    value: "Lion's Comfort",
  },
  {
    id: "1694",
    value: "Magehunter Strike",
  },
  {
    id: "322",
    value: "Power Attack",
  },
  {
    id: "831",
    value: "Primal Rage",
  },
  {
    id: "326",
    value: "Protector's Strike",
  },
  {
    id: "1408",
    value: "Rage of the Ntouka",
  },
  {
    id: "319",
    value: "Rush",
  },
  {
    id: "363",
    value: "Shield Bash",
  },
  {
    id: "1411",
    value: "Signet of Stamina",
  },
  {
    id: "944",
    value: "Signet of Strength",
  },
  {
    id: "349",
    value: "Sprint",
  },
  {
    id: "995",
    value: "Tiger Stance",
  },
  {
    id: "362",
    value: "Warrior's Cunning",
  },
  {
    id: "374",
    value: "Warrior's Endurance",
  },
  {
    id: "1416",
    value: "Barbarous Slice",
  },
  {
    id: "1415",
    value: "Crippling Slash",
  },
  {
    id: "907",
    value: "Dragon Slash",
  },
  {
    id: "385",
    value: "Final Thrust",
  },
  {
    id: "383",
    value: "Galrath Slash",
  },
  {
    id: "384",
    value: "Gash",
  },
  {
    id: "320",
    value: "Hamstring",
  },
  {
    id: "381",
    value: "Hundred Blades",
  },
  {
    id: "1135",
    value: "Jaizhenju Strike",
  },
  {
    id: "2010",
    value: "Knee Cutter",
  },
  {
    id: "328",
    value: "Pure Strike",
  },
  {
    id: "892",
    value: "Quivering Blade",
  },
  {
    id: "390",
    value: "Savage Slash",
  },
  {
    id: "386",
    value: "Seeking Blade",
  },
  {
    id: "382",
    value: "Sever Artery",
  },
  {
    id: "1144",
    value: "Silverwing Slash",
  },
  {
    id: "996",
    value: "Standing Slash",
  },
  {
    id: "1702",
    value: "Steelfang Slash",
  },
  {
    id: "851",
    value: "Sun and Moon Slash",
  },
  {
    id: "364",
    value: '"Charge!"',
  },
  {
    id: "366",
    value: '"Fear Me!"',
  },
  {
    id: "891",
    value: '"None Shall Pass!"',
  },
  {
    id: "839",
    value: '"Retreat!"',
  },
  {
    id: "367",
    value: '"Shields Up!"',
  },
  {
    id: "316",
    value: '"To the Limit!"',
  },
  {
    id: "365",
    value: '"Victory Is Mine!"',
  },
  {
    id: "348",
    value: '"Watch Yourself!"',
  },
  {
    id: "1142",
    value: "Auspicious Parry",
  },
  {
    id: "371",
    value: "Balanced Stance",
  },
  {
    id: "380",
    value: "Bonetti's Defense",
  },
  {
    id: "388",
    value: "Deadly Riposte",
  },
  {
    id: "345",
    value: "Defensive Stance",
  },
  {
    id: "373",
    value: "Deflect Arrows",
  },
  {
    id: "323",
    value: "Desperation Blow",
  },
  {
    id: "376",
    value: "Disciplined Stance",
  },
  {
    id: "1133",
    value: "Drunken Blow",
  },
  {
    id: "372",
    value: "Gladiator's Defense",
  },
  {
    id: "1",
    value: "Healing Signet",
  },
  {
    id: "810",
    value: "Protector's Defense",
  },
  {
    id: "387",
    value: "Riposte",
  },
  {
    id: "378",
    value: "Shield Stance",
  },
  {
    id: "1146",
    value: "Shove",
  },
  {
    id: "1699",
    value: "Soldier's Defense",
  },
  {
    id: "2196",
    value: "Soldier's Speed",
  },
  {
    id: "1698",
    value: "Soldier's Stance",
  },
  {
    id: "1695",
    value: "Soldier's Strike",
  },
  {
    id: "1701",
    value: "Steady Stance",
  },
  {
    id: "324",
    value: "Thrill of Victory",
  },
  {
    id: "377",
    value: "Wary Stance",
  },
  {
    id: "869",
    value: '"Coward!"',
  },
  {
    id: "343",
    value: '"For Great Justice!"',
  },
  {
    id: "1014",
    value: "\"Let's Get 'Em!\"",
  },
  {
    id: "906",
    value: '"On Your Knees!"',
  },
  {
    id: "1412",
    value: '"You\'re All Alone!"',
  },
  {
    id: "325",
    value: "Distracting Blow",
  },
  {
    id: "2194",
    value: "Distracting Strike",
  },
  {
    id: "344",
    value: "Flurry",
  },
  {
    id: "1700",
    value: "Frenzied Defense",
  },
  {
    id: "346",
    value: "Frenzy",
  },
  {
    id: "2011",
    value: "Grapple",
  },
  {
    id: "329",
    value: "Skull Crack",
  },
  {
    id: "1140",
    value: "Storm of Swords",
  },
  {
    id: "2195",
    value: "Symbolic Strike",
  },
  {
    id: "321",
    value: "Wild Blow",
  },
  {
    id: "1209",
    value: "Bestial Fury",
  },
  {
    id: "1203",
    value: "Bestial Mauling",
  },
  {
    id: "437",
    value: "Bestial Pounce",
  },
  {
    id: "444",
    value: "Brutal Strike",
  },
  {
    id: "415",
    value: "Call of Haste",
  },
  {
    id: "412",
    value: "Call of Protection",
  },
  {
    id: "411",
    value: "Charm Animal",
  },
  {
    id: "436",
    value: "Comfort Animal",
  },
  {
    id: "2141",
    value: "Companionship",
  },
  {
    id: "445",
    value: "Disrupting Lunge",
  },
  {
    id: "464",
    value: "Edge of Extinction",
  },
  {
    id: "474",
    value: "Energizing Wind",
  },
  {
    id: "1202",
    value: "Enraged Lunge",
  },
  {
    id: "2142",
    value: "Feral Aggression",
  },
  {
    id: "439",
    value: "Feral Lunge",
  },
  {
    id: "442",
    value: "Ferocious Strike",
  },
  {
    id: "467",
    value: "Fertile Season",
  },
  {
    id: "1195",
    value: "Heal as One",
  },
  {
    id: "1728",
    value: "Heket's Rampage",
  },
  {
    id: "961",
    value: "Lacerate",
  },
  {
    id: "438",
    value: "Maiming Strike",
  },
  {
    id: "441",
    value: "Melandru's Assault",
  },
  {
    id: "447",
    value: "Otyugh's Cry",
  },
  {
    id: "1205",
    value: "Poisonous Bite",
  },
  {
    id: "1206",
    value: "Pounce",
  },
  {
    id: "443",
    value: "Predator's Pounce",
  },
  {
    id: "1194",
    value: "Predatory Bond",
  },
  {
    id: "470",
    value: "Predatory Season",
  },
  {
    id: "469",
    value: "Primal Echoes",
  },
  {
    id: "1721",
    value: "Rampage as One",
  },
  {
    id: "422",
    value: "Revive Animal",
  },
  {
    id: "811",
    value: "Run as One",
  },
  {
    id: "1201",
    value: "Savage Pounce",
  },
  {
    id: "440",
    value: "Scavenger Strike",
  },
  {
    id: "1468",
    value: "Strike as One",
  },
  {
    id: "468",
    value: "Symbiosis",
  },
  {
    id: "423",
    value: "Symbiotic Bond",
  },
  {
    id: "454",
    value: "Tiger's Fury",
  },
  {
    id: "1472",
    value: "Toxicity",
  },
  {
    id: "1211",
    value: "Viper's Nest",
  },
  {
    id: "1200",
    value: "Archer's Signet",
  },
  {
    id: "399",
    value: "Distracting Shot",
  },
  {
    id: "425",
    value: "Dodge",
  },
  {
    id: "448",
    value: "Escape",
  },
  {
    id: "2145",
    value: "Expert Focus",
  },
  {
    id: "1724",
    value: "Expert's Dexterity",
  },
  {
    id: "1199",
    value: "Glass Arrows",
  },
  {
    id: "1730",
    value: "Infuriating Heat",
  },
  {
    id: "453",
    value: "Lightning Reflexes",
  },
  {
    id: "430",
    value: "Marksman's Wager",
  },
  {
    id: "405",
    value: "Oath Shot",
  },
  {
    id: "407",
    value: "Point Blank Shot",
  },
  {
    id: "449",
    value: "Practiced Stance",
  },
  {
    id: "424",
    value: "Throw Dirt",
  },
  {
    id: "946",
    value: "Trapper's Focus",
  },
  {
    id: "1475",
    value: "Trapper's Speed",
  },
  {
    id: "450",
    value: "Whirling Defense",
  },
  {
    id: "1196",
    value: "Zojun's Haste",
  },
  {
    id: "1192",
    value: "Zojun's Shot",
  },
  {
    id: "1467",
    value: "Arcing Shot",
  },
  {
    id: "395",
    value: "Barrage",
  },
  {
    id: "2198",
    value: "Body Shot",
  },
  {
    id: "1198",
    value: "Broad Head Arrow",
  },
  {
    id: "1466",
    value: "Burning Arrow",
  },
  {
    id: "408",
    value: "Concussion Shot",
  },
  {
    id: "393",
    value: "Crippling Shot",
  },
  {
    id: "1469",
    value: "Crossfire",
  },
  {
    id: "406",
    value: "Debilitating Shot",
  },
  {
    id: "402",
    value: "Determined Shot",
  },
  {
    id: "1723",
    value: "Disrupting Accuracy",
  },
  {
    id: "2143",
    value: "Disrupting Shot",
  },
  {
    id: "472",
    value: "Favorable Winds",
  },
  {
    id: "909",
    value: "Focused Shot",
  },
  {
    id: "391",
    value: "Hunter's Shot",
  },
  {
    id: "1720",
    value: "Keen Arrow",
  },
  {
    id: "908",
    value: "Marauder's Shot",
  },
  {
    id: "853",
    value: "Melandru's Shot",
  },
  {
    id: "1197",
    value: "Needling Shot",
  },
  {
    id: "398",
    value: "Penetrating Attack",
  },
  {
    id: "392",
    value: "Pin Down",
  },
  {
    id: "394",
    value: "Power Shot",
  },
  {
    id: "400",
    value: "Precision Shot",
  },
  {
    id: "1465",
    value: "Prepared Shot",
  },
  {
    id: "409",
    value: "Punishing Shot",
  },
  {
    id: "2068",
    value: "Rapid Fire",
  },
  {
    id: "432",
    value: "Read the Wind",
  },
  {
    id: "426",
    value: "Savage Shot",
  },
  {
    id: "1719",
    value: "Screaming Shot",
  },
  {
    id: "893",
    value: "Seeking Arrows",
  },
  {
    id: "2069",
    value: "Sloth Hunter's Shot",
  },
  {
    id: "852",
    value: "Splinter Shot",
  },
  {
    id: "1191",
    value: "Sundering Attack",
  },
  {
    id: "2144",
    value: "Volley",
  },
  {
    id: "435",
    value: "Apply Poison",
  },
  {
    id: "1470",
    value: "Barbed Arrows",
  },
  {
    id: "458",
    value: "Barbed Trap",
  },
  {
    id: "947",
    value: "Brambles",
  },
  {
    id: "434",
    value: "Choking Gas",
  },
  {
    id: "466",
    value: "Conflagration",
  },
  {
    id: "452",
    value: "Dryder's Defenses",
  },
  {
    id: "457",
    value: "Dust Trap",
  },
  {
    id: "1212",
    value: "Equinox",
  },
  {
    id: "997",
    value: "Famine",
  },
  {
    id: "459",
    value: "Flame Trap",
  },
  {
    id: "471",
    value: "Frozen Soil",
  },
  {
    id: "465",
    value: "Greater Conflagration",
  },
  {
    id: "460",
    value: "Healing Spring",
  },
  {
    id: "431",
    value: "Ignite Arrows",
  },
  {
    id: "428",
    value: "Incendiary Arrows",
  },
  {
    id: "433",
    value: "Kindle Arrows",
  },
  {
    id: "429",
    value: "Melandru's Arrows",
  },
  {
    id: "451",
    value: "Melandru's Resilience",
  },
  {
    id: "477",
    value: "Muddy Terrain",
  },
  {
    id: "1727",
    value: "Natural Stride",
  },
  {
    id: "476",
    value: "Nature's Renewal",
  },
  {
    id: "870",
    value: "Pestilence",
  },
  {
    id: "2140",
    value: "Piercing Trap",
  },
  {
    id: "404",
    value: "Poison Arrow",
  },
  {
    id: "2199",
    value: "Poison Tip Signet",
  },
  {
    id: "475",
    value: "Quickening Zephyr",
  },
  {
    id: "1473",
    value: "Quicksand",
  },
  {
    id: "1725",
    value: "Roaring Winds",
  },
  {
    id: "1471",
    value: "Scavenger's Focus",
  },
  {
    id: "456",
    value: "Serpent's Quickness",
  },
  {
    id: "1729",
    value: "Smoke Trap",
  },
  {
    id: "854",
    value: "Snare",
  },
  {
    id: "461",
    value: "Spike Trap",
  },
  {
    id: "455",
    value: "Storm Chaser",
  },
  {
    id: "1213",
    value: "Tranquility",
  },
  {
    id: "1476",
    value: "Tripwire",
  },
  {
    id: "446",
    value: "Troll Unguent",
  },
  {
    id: "463",
    value: "Winnowing",
  },
  {
    id: "462",
    value: "Winter",
  },
  {
    id: "427",
    value: "Antidote Signet",
  },
  {
    id: "403",
    value: "Called Shot",
  },
  {
    id: "396",
    value: "Dual Shot",
  },
  {
    id: "1722",
    value: "Forked Arrow",
  },
  {
    id: "1726",
    value: "Magebane Shot",
  },
  {
    id: "397",
    value: "Quick Shot",
  },
  {
    id: "1474",
    value: "Storm's Embrace",
  },
  {
    id: "256",
    value: "Blessed Aura",
  },
  {
    id: "941",
    value: "Blessed Light",
  },
  {
    id: "297",
    value: "Blessed Signet",
  },
  {
    id: "847",
    value: "Boon Signet",
  },
  {
    id: "300",
    value: "Contemplation of Purity",
  },
  {
    id: "991",
    value: "Deny Hexes",
  },
  {
    id: "284",
    value: "Divine Boon",
  },
  {
    id: "279",
    value: "Divine Healing",
  },
  {
    id: "246",
    value: "Divine Intervention",
  },
  {
    id: "310",
    value: "Divine Spirit",
  },
  {
    id: "1393",
    value: "Healer's Boon",
  },
  {
    id: "1117",
    value: "Heaven's Delight",
  },
  {
    id: "1685",
    value: "Holy Haste",
  },
  {
    id: "266",
    value: "Peace and Harmony",
  },
  {
    id: "960",
    value: "Release Enchantments",
  },
  {
    id: "1684",
    value: "Scribe's Insight",
  },
  {
    id: "293",
    value: "Signet of Devotion",
  },
  {
    id: "2005",
    value: "Smiter's Boon",
  },
  {
    id: "273",
    value: "Spell Breaker",
  },
  {
    id: "957",
    value: "Spell Shield",
  },
  {
    id: "268",
    value: "Unyielding Aura",
  },
  {
    id: "1392",
    value: "Watchful Healing",
  },
  {
    id: "255",
    value: "Watchful Spirit",
  },
  {
    id: "942",
    value: "Withdraw Hexes",
  },
  {
    id: "2003",
    value: "Cure Hex",
  },
  {
    id: "283",
    value: "Dwayna's Kiss",
  },
  {
    id: "838",
    value: "Dwayna's Sorrow",
  },
  {
    id: "959",
    value: "Ethereal Light",
  },
  {
    id: "1121",
    value: "Gift of Health",
  },
  {
    id: "1686",
    value: "Glimmer of Light",
  },
  {
    id: "280",
    value: "Heal Area",
  },
  {
    id: "286",
    value: "Heal Other",
  },
  {
    id: "287",
    value: "Heal Party",
  },
  {
    id: "1394",
    value: "Healer's Covenant",
  },
  {
    id: "288",
    value: "Healing Breeze",
  },
  {
    id: "1118",
    value: "Healing Burst",
  },
  {
    id: "285",
    value: "Healing Hands",
  },
  {
    id: "867",
    value: "Healing Light",
  },
  {
    id: "2062",
    value: "Healing Ribbon",
  },
  {
    id: "1262",
    value: "Healing Ring",
  },
  {
    id: "274",
    value: "Healing Seed",
  },
  {
    id: "313",
    value: "Healing Touch",
  },
  {
    id: "958",
    value: "Healing Whisper",
  },
  {
    id: "292",
    value: "Infuse Health",
  },
  {
    id: "1120",
    value: "Jamei's Gaze",
  },
  {
    id: "1119",
    value: "Karei's Healing Circle",
  },
  {
    id: "1397",
    value: "Light of Deliverance",
  },
  {
    id: "291",
    value: "Live Vicariously",
  },
  {
    id: "290",
    value: "Mending",
  },
  {
    id: "281",
    value: "Orison of Healing",
  },
  {
    id: "2061",
    value: "Patient Spirit",
  },
  {
    id: "1263",
    value: "Renew Life",
  },
  {
    id: "886",
    value: "Restful Breeze",
  },
  {
    id: "314",
    value: "Restore Life",
  },
  {
    id: "1128",
    value: "Resurrection Chant",
  },
  {
    id: "887",
    value: "Signet of Rejuvenation",
  },
  {
    id: "2064",
    value: "Spotless Mind",
  },
  {
    id: "2065",
    value: "Spotless Soul",
  },
  {
    id: "1391",
    value: "Supportive Spirit",
  },
  {
    id: "254",
    value: "Vigorous Spirit",
  },
  {
    id: "282",
    value: "Word of Healing",
  },
  {
    id: "1396",
    value: "Words of Comfort",
  },
  {
    id: "257",
    value: "Aegis",
  },
  {
    id: "1115",
    value: "Air of Enchantment",
  },
  {
    id: "265",
    value: "Amity",
  },
  {
    id: "260",
    value: "Aura of Faith",
  },
  {
    id: "2063",
    value: "Aura of Stability",
  },
  {
    id: "303",
    value: "Convert Hexes",
  },
  {
    id: "1691",
    value: "Dismiss Condition",
  },
  {
    id: "1692",
    value: "Divert Hexes",
  },
  {
    id: "311",
    value: "Draw Conditions",
  },
  {
    id: "943",
    value: "Extinguish",
  },
  {
    id: "258",
    value: "Guardian",
  },
  {
    id: "244",
    value: "Life Attunement",
  },
  {
    id: "270",
    value: "Life Barrier",
  },
  {
    id: "241",
    value: "Life Bond",
  },
  {
    id: "1123",
    value: "Life Sheath",
  },
  {
    id: "269",
    value: "Mark of Protection",
  },
  {
    id: "277",
    value: "Mend Ailment",
  },
  {
    id: "275",
    value: "Mend Condition",
  },
  {
    id: "1401",
    value: "Mending Touch",
  },
  {
    id: "264",
    value: "Pacifism",
  },
  {
    id: "1683",
    value: "Pensive Guardian",
  },
  {
    id: "263",
    value: "Protective Bond",
  },
  {
    id: "245",
    value: "Protective Spirit",
  },
  {
    id: "2007",
    value: "Purifying Veil",
  },
  {
    id: "306",
    value: "Rebirth",
  },
  {
    id: "276",
    value: "Restore Condition",
  },
  {
    id: "307",
    value: "Reversal of Fortune",
  },
  {
    id: "848",
    value: "Reverse Hex",
  },
  {
    id: "885",
    value: "Shield Guardian",
  },
  {
    id: "1399",
    value: "Shield of Absorption",
  },
  {
    id: "259",
    value: "Shield of Deflection",
  },
  {
    id: "261",
    value: "Shield of Regeneration",
  },
  {
    id: "299",
    value: "Shielding Hands",
  },
  {
    id: "1114",
    value: "Spirit Bond",
  },
  {
    id: "289",
    value: "Vital Blessing",
  },
  {
    id: "1687",
    value: "Zealous Benediction",
  },
  {
    id: "272",
    value: "Balthazar's Aura",
  },
  {
    id: "1395",
    value: "Balthazar's Pendulum",
  },
  {
    id: "242",
    value: "Balthazar's Spirit",
  },
  {
    id: "296",
    value: "Bane Signet",
  },
  {
    id: "252",
    value: "Banish",
  },
  {
    id: "2006",
    value: "Castigation Signet",
  },
  {
    id: "1688",
    value: "Defender's Zeal",
  },
  {
    id: "312",
    value: "Holy Strike",
  },
  {
    id: "249",
    value: "Holy Wrath",
  },
  {
    id: "267",
    value: "Judge's Insight",
  },
  {
    id: "1390",
    value: "Judge's Intervention",
  },
  {
    id: "1113",
    value: "Kirin's Wrath",
  },
  {
    id: "830",
    value: "Ray of Judgment",
  },
  {
    id: "248",
    value: "Retribution",
  },
  {
    id: "1400",
    value: "Reversal of Damage",
  },
  {
    id: "1398",
    value: "Scourge Enchantment",
  },
  {
    id: "251",
    value: "Scourge Healing",
  },
  {
    id: "253",
    value: "Scourge Sacrifice",
  },
  {
    id: "262",
    value: "Shield of Judgment",
  },
  {
    id: "294",
    value: "Signet of Judgment",
  },
  {
    id: "1689",
    value: "Signet of Mystic Wrath",
  },
  {
    id: "1269",
    value: "Signet of Rage",
  },
  {
    id: "240",
    value: "Smite",
  },
  {
    id: "2004",
    value: "Smite Condition",
  },
  {
    id: "302",
    value: "Smite Hex",
  },
  {
    id: "1130",
    value: "Spear of Light",
  },
  {
    id: "1131",
    value: "Stonesoul Strike",
  },
  {
    id: "243",
    value: "Strength of Honor",
  },
  {
    id: "247",
    value: "Symbol of Wrath",
  },
  {
    id: "1129",
    value: "Word of Censure",
  },
  {
    id: "271",
    value: "Zealot's Fire",
  },
  {
    id: "2683",
    value: "Castigation Signet (Saul D'Alessio)",
  },
  {
    id: "1126",
    value: "Empathic Removal",
  },
  {
    id: "250",
    value: "Essence Bond",
  },
  {
    id: "309",
    value: "Holy Veil",
  },
  {
    id: "304",
    value: "Light of Dwayna",
  },
  {
    id: "298",
    value: "Martyr",
  },
  {
    id: "278",
    value: "Purge Conditions",
  },
  {
    id: "295",
    value: "Purge Signet",
  },
  {
    id: "301",
    value: "Remove Hex",
  },
  {
    id: "305",
    value: "Resurrect",
  },
  {
    id: "1690",
    value: "Signet of Removal",
  },
  {
    id: "308",
    value: "Succor",
  },
  {
    id: "315",
    value: "Vengeance",
  },
  {
    id: "111",
    value: "Awaken the Blood",
  },
  {
    id: "131",
    value: "Barbed Signet",
  },
  {
    id: "835",
    value: "Blood Bond",
  },
  {
    id: "1076",
    value: "Blood Drinker",
  },
  {
    id: "119",
    value: "Blood is Power",
  },
  {
    id: "902",
    value: "Blood of the Aggressor",
  },
  {
    id: "115",
    value: "Blood Renewal",
  },
  {
    id: "157",
    value: "Blood Ritual",
  },
  {
    id: "806",
    value: "Cultist's Fervor",
  },
  {
    id: "138",
    value: "Dark Bond",
  },
  {
    id: "147",
    value: "Dark Fury",
  },
  {
    id: "133",
    value: "Dark Pact",
  },
  {
    id: "130",
    value: "Demonic Flesh",
  },
  {
    id: "763",
    value: "Jaundiced Gaze",
  },
  {
    id: "109",
    value: "Life Siphon",
  },
  {
    id: "126",
    value: "Life Transfer",
  },
  {
    id: "1067",
    value: "Lifebane Strike",
  },
  {
    id: "1360",
    value: "Mark of Fury",
  },
  {
    id: "127",
    value: "Mark of Subversion",
  },
  {
    id: "146",
    value: "Offering of Blood",
  },
  {
    id: "864",
    value: "Oppressive Gaze",
  },
  {
    id: "134",
    value: "Order of Pain",
  },
  {
    id: "148",
    value: "Order of the Vampire",
  },
  {
    id: "862",
    value: "Ravenous Gaze",
  },
  {
    id: "102",
    value: "Shadow Strike",
  },
  {
    id: "145",
    value: "Signet of Agony",
  },
  {
    id: "1364",
    value: "Signet of Suffering",
  },
  {
    id: "128",
    value: "Soul Leech",
  },
  {
    id: "1066",
    value: "Spoil Victor",
  },
  {
    id: "143",
    value: "Strip Enchantment",
  },
  {
    id: "158",
    value: "Touch of Agony",
  },
  {
    id: "110",
    value: "Unholy Feast",
  },
  {
    id: "1077",
    value: "Vampiric Bite",
  },
  {
    id: "153",
    value: "Vampiric Gaze",
  },
  {
    id: "819",
    value: "Vampiric Spirit",
  },
  {
    id: "1075",
    value: "Vampiric Swarm",
  },
  {
    id: "156",
    value: "Vampiric Touch",
  },
  {
    id: "1078",
    value: "Wallow's Bite",
  },
  {
    id: "92",
    value: "Well of Blood",
  },
  {
    id: "91",
    value: "Well of Power",
  },
  {
    id: "2237",
    value: "Atrophy",
  },
  {
    id: "101",
    value: "Barbs",
  },
  {
    id: "1998",
    value: "Cacophony",
  },
  {
    id: "144",
    value: "Chilblains",
  },
  {
    id: "1362",
    value: "Corrupt Enchantment",
  },
  {
    id: "2188",
    value: "Defile Defenses",
  },
  {
    id: "1070",
    value: "Defile Enchantments",
  },
  {
    id: "129",
    value: "Defile Flesh",
  },
  {
    id: "820",
    value: "Depravity",
  },
  {
    id: "112",
    value: "Desecrate Enchantments",
  },
  {
    id: "117",
    value: "Enfeeble",
  },
  {
    id: "118",
    value: "Enfeebling Blood",
  },
  {
    id: "1079",
    value: "Enfeebling Touch",
  },
  {
    id: "936",
    value: "Envenom Enchantments",
  },
  {
    id: "135",
    value: "Faintheartedness",
  },
  {
    id: "151",
    value: "Feast of Corruption",
  },
  {
    id: "123",
    value: "Insidious Parasite",
  },
  {
    id: "142",
    value: "Lingering Curse",
  },
  {
    id: "140",
    value: "Malaise",
  },
  {
    id: "150",
    value: "Mark of Pain",
  },
  {
    id: "1260",
    value: "Meekness",
  },
  {
    id: "863",
    value: "Order of Apostasy",
  },
  {
    id: "1359",
    value: "Pain of Disenchantment",
  },
  {
    id: "99",
    value: "Parasitic Bond",
  },
  {
    id: "149",
    value: "Plague Sending",
  },
  {
    id: "132",
    value: "Plague Signet",
  },
  {
    id: "154",
    value: "Plague Touch",
  },
  {
    id: "840",
    value: "Poisoned Heart",
  },
  {
    id: "103",
    value: "Price of Failure",
  },
  {
    id: "834",
    value: "Reckless Haste",
  },
  {
    id: "141",
    value: "Rend Enchantments",
  },
  {
    id: "137",
    value: "Rigor Mortis",
  },
  {
    id: "955",
    value: "Rip Enchantment",
  },
  {
    id: "136",
    value: "Shadow of Fear",
  },
  {
    id: "1071",
    value: "Shivers of Dread",
  },
  {
    id: "100",
    value: "Soul Barbs",
  },
  {
    id: "901",
    value: "Soul Bind",
  },
  {
    id: "124",
    value: "Spinal Shivers",
  },
  {
    id: "121",
    value: "Spiteful Spirit",
  },
  {
    id: "108",
    value: "Suffering",
  },
  {
    id: "1358",
    value: "Ulcerous Lungs",
  },
  {
    id: "883",
    value: "Vocal Minority",
  },
  {
    id: "159",
    value: "Weaken Armor",
  },
  {
    id: "822",
    value: "Weaken Knees",
  },
  {
    id: "1366",
    value: "Well of Darkness",
  },
  {
    id: "2236",
    value: "Well of Ruin",
  },
  {
    id: "1660",
    value: "Well of Silence",
  },
  {
    id: "818",
    value: "Well of Weariness",
  },
  {
    id: "125",
    value: "Wither",
  },
  {
    id: "84",
    value: "Animate Bone Fiend",
  },
  {
    id: "83",
    value: "Animate Bone Horror",
  },
  {
    id: "85",
    value: "Animate Bone Minions",
  },
  {
    id: "832",
    value: "Animate Flesh Golem",
  },
  {
    id: "1351",
    value: "Animate Shambling Horror",
  },
  {
    id: "805",
    value: "Animate Vampiric Horror",
  },
  {
    id: "114",
    value: "Aura of the Lich",
  },
  {
    id: "1068",
    value: "Bitter Chill",
  },
  {
    id: "120",
    value: "Blood of the Master",
  },
  {
    id: "98",
    value: "Consume Corpse",
  },
  {
    id: "1356",
    value: "Contagion",
  },
  {
    id: "116",
    value: "Dark Aura",
  },
  {
    id: "104",
    value: "Death Nova",
  },
  {
    id: "89",
    value: "Deathly Chill",
  },
  {
    id: "105",
    value: "Deathly Swarm",
  },
  {
    id: "817",
    value: "Discord",
  },
  {
    id: "1354",
    value: "Feast for the Dead",
  },
  {
    id: "841",
    value: "Fetid Ground",
  },
  {
    id: "139",
    value: "Infuse Condition",
  },
  {
    id: "1355",
    value: "Jagged Bones",
  },
  {
    id: "122",
    value: "Malign Intervention",
  },
  {
    id: "97",
    value: "Necrotic Traversal",
  },
  {
    id: "1352",
    value: "Order of Undeath",
  },
  {
    id: "2058",
    value: "Putrid Bile",
  },
  {
    id: "95",
    value: "Putrid Explosion",
  },
  {
    id: "1353",
    value: "Putrid Flesh",
  },
  {
    id: "935",
    value: "Rising Bile",
  },
  {
    id: "106",
    value: "Rotting Flesh",
  },
  {
    id: "96",
    value: "Soul Feast",
  },
  {
    id: "113",
    value: "Tainted Flesh",
  },
  {
    id: "152",
    value: "Taste of Death",
  },
  {
    id: "1069",
    value: "Taste of Pain",
  },
  {
    id: "1659",
    value: "Toxic Chill",
  },
  {
    id: "88",
    value: "Verata's Aura",
  },
  {
    id: "87",
    value: "Verata's Gaze",
  },
  {
    id: "90",
    value: "Verata's Sacrifice",
  },
  {
    id: "828",
    value: "Vile Miasma",
  },
  {
    id: "155",
    value: "Vile Touch",
  },
  {
    id: "107",
    value: "Virulence",
  },
  {
    id: "93",
    value: "Well of Suffering",
  },
  {
    id: "94",
    value: "Well of the Profane",
  },
  {
    id: "1997",
    value: "Withering Aura",
  },
  {
    id: "2189",
    value: "Angorodon's Gaze",
  },
  {
    id: "2057",
    value: "Foul Feast",
  },
  {
    id: "2138",
    value: "Hexer's Vigor",
  },
  {
    id: "821",
    value: "Icy Veins",
  },
  {
    id: "2139",
    value: "Masochism",
  },
  {
    id: "808",
    value: "Reaper's Mark",
  },
  {
    id: "1365",
    value: "Signet of Lost Souls",
  },
  {
    id: "1363",
    value: "Signet of Sorrow",
  },
  {
    id: "764",
    value: "Wail of Doom",
  },
  {
    id: "766",
    value: "Gaze of Contempt",
  },
  {
    id: "86",
    value: "Grenth's Balance",
  },
  {
    id: "2055",
    value: "Aneurysm",
  },
  {
    id: "1062",
    value: "Arcane Larceny",
  },
  {
    id: "81",
    value: "Arcane Thievery",
  },
  {
    id: "28",
    value: "Backfire",
  },
  {
    id: "29",
    value: "Blackout",
  },
  {
    id: "77",
    value: "Chaos Storm",
  },
  {
    id: "932",
    value: "Complicate",
  },
  {
    id: "57",
    value: "Cry of Frustration",
  },
  {
    id: "30",
    value: "Diversion",
  },
  {
    id: "26",
    value: "Empathy",
  },
  {
    id: "1345",
    value: "Enchanter's Conundrum",
  },
  {
    id: "42",
    value: "Energy Burn",
  },
  {
    id: "39",
    value: "Energy Surge",
  },
  {
    id: "46",
    value: "Guilt",
  },
  {
    id: "10",
    value: "Hex Breaker",
  },
  {
    id: "1348",
    value: "Hex Eater Vortex",
  },
  {
    id: "35",
    value: "Ignorance",
  },
  {
    id: "49",
    value: "Mind Wrack",
  },
  {
    id: "979",
    value: "Mistrust",
  },
  {
    id: "898",
    value: "Overload",
  },
  {
    id: "52",
    value: "Panic",
  },
  {
    id: "5",
    value: "Power Block",
  },
  {
    id: "953",
    value: "Power Flux",
  },
  {
    id: "24",
    value: "Power Leak",
  },
  {
    id: "1994",
    value: "Power Lock",
  },
  {
    id: "23",
    value: "Power Spike",
  },
  {
    id: "1655",
    value: "Price of Pride",
  },
  {
    id: "1053",
    value: "Psychic Distraction",
  },
  {
    id: "51",
    value: "Shame",
  },
  {
    id: "27",
    value: "Shatter Delusions",
  },
  {
    id: "69",
    value: "Shatter Enchantment",
  },
  {
    id: "67",
    value: "Shatter Hex",
  },
  {
    id: "860",
    value: "Signet of Disruption",
  },
  {
    id: "1992",
    value: "Signet of Distraction",
  },
  {
    id: "59",
    value: "Signet of Weariness",
  },
  {
    id: "1350",
    value: "Simple Thievery",
  },
  {
    id: "1336",
    value: "Spiritual Pain",
  },
  {
    id: "934",
    value: "Unnatural Signet",
  },
  {
    id: "878",
    value: "Visions of Regret",
  },
  {
    id: "1335",
    value: "Wastrel's Demise",
  },
  {
    id: "50",
    value: "Wastrel's Worry",
  },
  {
    id: "2684",
    value: "Unnatural Signet (Saul D'Alessio)",
  },
  {
    id: "804",
    value: "Arcane Languor",
  },
  {
    id: "63",
    value: "Keystone Signet",
  },
  {
    id: "13",
    value: "Mantra of Recovery",
  },
  {
    id: "1338",
    value: "Persistence of Memory",
  },
  {
    id: "931",
    value: "Power Return",
  },
  {
    id: "1057",
    value: "Psychic Instability",
  },
  {
    id: "880",
    value: "Stolen Speed",
  },
  {
    id: "1340",
    value: "Symbolic Celerity",
  },
  {
    id: "1658",
    value: "Symbolic Posture",
  },
  {
    id: "1339",
    value: "Symbols of Inspiration",
  },
  {
    id: "1052",
    value: "Accumulated Pain",
  },
  {
    id: "1656",
    value: "Air of Disenchantment",
  },
  {
    id: "1054",
    value: "Ancestor's Visage",
  },
  {
    id: "36",
    value: "Arcane Conundrum",
  },
  {
    id: "2053",
    value: "Calculated Risk",
  },
  {
    id: "43",
    value: "Clumsiness",
  },
  {
    id: "2137",
    value: "Confusing Images",
  },
  {
    id: "859",
    value: "Conjure Nightmare",
  },
  {
    id: "31",
    value: "Conjure Phantasm",
  },
  {
    id: "54",
    value: "Crippling Anguish",
  },
  {
    id: "11",
    value: "Distortion",
  },
  {
    id: "45",
    value: "Ethereal Burden",
  },
  {
    id: "55",
    value: "Fevered Dreams",
  },
  {
    id: "19",
    value: "Fragility",
  },
  {
    id: "1341",
    value: "Frustration",
  },
  {
    id: "37",
    value: "Illusion of Haste",
  },
  {
    id: "879",
    value: "Illusion of Pain",
  },
  {
    id: "32",
    value: "Illusion of Weakness",
  },
  {
    id: "33",
    value: "Illusionary Weaponry",
  },
  {
    id: "899",
    value: "Images of Remorse",
  },
  {
    id: "76",
    value: "Imagined Burden",
  },
  {
    id: "47",
    value: "Ineptitude",
  },
  {
    id: "1056",
    value: "Kitah's Burden",
  },
  {
    id: "53",
    value: "Migraine",
  },
  {
    id: "44",
    value: "Phantom Pain",
  },
  {
    id: "1055",
    value: "Recurring Insecurity",
  },
  {
    id: "900",
    value: "Shared Burden",
  },
  {
    id: "2054",
    value: "Shrinking Armor",
  },
  {
    id: "1657",
    value: "Signet of Clumsiness",
  },
  {
    id: "1346",
    value: "Signet of Illusions",
  },
  {
    id: "56",
    value: "Soothing Images",
  },
  {
    id: "1996",
    value: "Sum of All Fears",
  },
  {
    id: "34",
    value: "Sympathetic Visage",
  },
  {
    id: "2056",
    value: "Wandering Eye",
  },
  {
    id: "930",
    value: "Auspicious Incantation",
  },
  {
    id: "38",
    value: "Channeling",
  },
  {
    id: "1347",
    value: "Discharge Enchantment",
  },
  {
    id: "1337",
    value: "Drain Delusions",
  },
  {
    id: "68",
    value: "Drain Enchantment",
  },
  {
    id: "72",
    value: "Elemental Resistance",
  },
  {
    id: "79",
    value: "Energy Drain",
  },
  {
    id: "80",
    value: "Energy Tap",
  },
  {
    id: "40",
    value: "Ether Feast",
  },
  {
    id: "41",
    value: "Ether Lord",
  },
  {
    id: "1343",
    value: "Ether Phantom",
  },
  {
    id: "881",
    value: "Ether Signet",
  },
  {
    id: "1333",
    value: "Extend Conditions",
  },
  {
    id: "1061",
    value: "Feedback",
  },
  {
    id: "1059",
    value: "Hex Eater Signet",
  },
  {
    id: "21",
    value: "Inspired Enchantment",
  },
  {
    id: "22",
    value: "Inspired Hex",
  },
  {
    id: "61",
    value: "Leech Signet",
  },
  {
    id: "813",
    value: "Lyssa's Aura",
  },
  {
    id: "16",
    value: "Mantra of Concentration",
  },
  {
    id: "6",
    value: "Mantra of Earth",
  },
  {
    id: "7",
    value: "Mantra of Flame",
  },
  {
    id: "8",
    value: "Mantra of Frost",
  },
  {
    id: "15",
    value: "Mantra of Inscriptions",
  },
  {
    id: "9",
    value: "Mantra of Lightning",
  },
  {
    id: "14",
    value: "Mantra of Persistence",
  },
  {
    id: "82",
    value: "Mantra of Recall",
  },
  {
    id: "17",
    value: "Mantra of Resolve",
  },
  {
    id: "18",
    value: "Mantra of Signets",
  },
  {
    id: "73",
    value: "Physical Resistance",
  },
  {
    id: "25",
    value: "Power Drain",
  },
  {
    id: "803",
    value: "Power Leech",
  },
  {
    id: "1048",
    value: "Revealed Enchantment",
  },
  {
    id: "1049",
    value: "Revealed Hex",
  },
  {
    id: "62",
    value: "Signet of Humility",
  },
  {
    id: "1993",
    value: "Signet of Recall",
  },
  {
    id: "48",
    value: "Spirit of Failure",
  },
  {
    id: "66",
    value: "Spirit Shackles",
  },
  {
    id: "1342",
    value: "Tease",
  },
  {
    id: "1995",
    value: "Waste Not, Want Not",
  },
  {
    id: "75",
    value: "Arcane Echo",
  },
  {
    id: "65",
    value: "Arcane Mimicry",
  },
  {
    id: "74",
    value: "Echo",
  },
  {
    id: "78",
    value: "Epidemic",
  },
  {
    id: "954",
    value: "Expel Hexes",
  },
  {
    id: "1334",
    value: "Hypochondria",
  },
  {
    id: "877",
    value: "Lyssa's Balance",
  },
  {
    id: "1349",
    value: "Mirror of Disenchantment",
  },
  {
    id: "933",
    value: "Shatter Storm",
  },
  {
    id: "882",
    value: "Signet of Disenchantment",
  },
  {
    id: "58",
    value: "Signet of Midnight",
  },
  {
    id: "1344",
    value: "Web of Disruption",
  },
  {
    id: "225",
    value: "Air Attunement",
  },
  {
    id: "842",
    value: "Arc Lightning",
  },
  {
    id: "220",
    value: "Blinding Flash",
  },
  {
    id: "1367",
    value: "Blinding Surge",
  },
  {
    id: "223",
    value: "Chain Lightning",
  },
  {
    id: "1368",
    value: "Chilling Winds",
  },
  {
    id: "221",
    value: "Conjure Lightning",
  },
  {
    id: "224",
    value: "Enervating Charge",
  },
  {
    id: "162",
    value: "Gale",
  },
  {
    id: "227",
    value: "Glimmering Mark",
  },
  {
    id: "2002",
    value: "Glyph of Swiftness",
  },
  {
    id: "843",
    value: "Gust",
  },
  {
    id: "1664",
    value: "Invoke Lightning",
  },
  {
    id: "1369",
    value: "Lightning Bolt",
  },
  {
    id: "865",
    value: "Lightning Hammer",
  },
  {
    id: "230",
    value: "Lightning Javelin",
  },
  {
    id: "229",
    value: "Lightning Orb",
  },
  {
    id: "222",
    value: "Lightning Strike",
  },
  {
    id: "205",
    value: "Lightning Surge",
  },
  {
    id: "232",
    value: "Lightning Touch",
  },
  {
    id: "226",
    value: "Mind Shock",
  },
  {
    id: "836",
    value: "Ride the Lightning",
  },
  {
    id: "2059",
    value: "Shell Shock",
  },
  {
    id: "231",
    value: "Shock",
  },
  {
    id: "1082",
    value: "Shock Arrow",
  },
  {
    id: "1370",
    value: "Storm Djinn's Haste",
  },
  {
    id: "1081",
    value: "Teinai's Wind",
  },
  {
    id: "228",
    value: "Thunderclap",
  },
  {
    id: "163",
    value: "Whirlwind",
  },
  {
    id: "160",
    value: "Windborne Speed",
  },
  {
    id: "174",
    value: "Aftershock",
  },
  {
    id: "165",
    value: "Armor of Earth",
  },
  {
    id: "1085",
    value: "Ash Blast",
  },
  {
    id: "844",
    value: "Churning Earth",
  },
  {
    id: "217",
    value: "Crystal Wave",
  },
  {
    id: "1086",
    value: "Dragon's Stomp",
  },
  {
    id: "169",
    value: "Earth Attunement",
  },
  {
    id: "2000",
    value: "Earthen Shackles",
  },
  {
    id: "170",
    value: "Earthquake",
  },
  {
    id: "1374",
    value: "Ebon Hawk",
  },
  {
    id: "167",
    value: "Eruption",
  },
  {
    id: "1661",
    value: "Glowstone",
  },
  {
    id: "173",
    value: "Grasping Earth",
  },
  {
    id: "216",
    value: "Iron Mist",
  },
  {
    id: "166",
    value: "Kinetic Armor",
  },
  {
    id: "168",
    value: "Magnetic Aura",
  },
  {
    id: "2190",
    value: "Magnetic Surge",
  },
  {
    id: "219",
    value: "Obsidian Flame",
  },
  {
    id: "218",
    value: "Obsidian Flesh",
  },
  {
    id: "1372",
    value: "Sandstorm",
  },
  {
    id: "937",
    value: "Shockwave",
  },
  {
    id: "1084",
    value: "Sliver Armor",
  },
  {
    id: "172",
    value: "Stone Daggers",
  },
  {
    id: "1373",
    value: "Stone Sheath",
  },
  {
    id: "1371",
    value: "Stone Striker",
  },
  {
    id: "1375",
    value: "Stoneflesh Aura",
  },
  {
    id: "171",
    value: "Stoning",
  },
  {
    id: "1099",
    value: "Teinai's Crystals",
  },
  {
    id: "1083",
    value: "Unsteady Ground",
  },
  {
    id: "175",
    value: "Ward Against Elements",
  },
  {
    id: "177",
    value: "Ward Against Foes",
  },
  {
    id: "176",
    value: "Ward Against Melee",
  },
  {
    id: "938",
    value: "Ward of Stability",
  },
  {
    id: "2001",
    value: "Ward of Weakness",
  },
  {
    id: "180",
    value: "Aura of Restoration",
  },
  {
    id: "164",
    value: "Elemental Attunement",
  },
  {
    id: "2193",
    value: "Energy Blast",
  },
  {
    id: "837",
    value: "Energy Boon",
  },
  {
    id: "1377",
    value: "Ether Prism",
  },
  {
    id: "178",
    value: "Ether Prodigy",
  },
  {
    id: "181",
    value: "Ether Renewal",
  },
  {
    id: "199",
    value: "Glyph of Energy",
  },
  {
    id: "200",
    value: "Glyph of Lesser Energy",
  },
  {
    id: "1376",
    value: "Glyph of Restoration",
  },
  {
    id: "1378",
    value: "Master of Magic",
  },
  {
    id: "825",
    value: "Bed of Coals",
  },
  {
    id: "1094",
    value: "Breath of Fire",
  },
  {
    id: "823",
    value: "Burning Speed",
  },
  {
    id: "182",
    value: "Conjure Flame",
  },
  {
    id: "1091",
    value: "Double Dragon",
  },
  {
    id: "1663",
    value: "Elemental Flame",
  },
  {
    id: "184",
    value: "Fire Attunement",
  },
  {
    id: "197",
    value: "Fire Storm",
  },
  {
    id: "186",
    value: "Fireball",
  },
  {
    id: "188",
    value: "Flame Burst",
  },
  {
    id: "1381",
    value: "Flame Djinn's Haste",
  },
  {
    id: "194",
    value: "Flare",
  },
  {
    id: "1379",
    value: "Glowing Gaze",
  },
  {
    id: "2060",
    value: "Glyph of Immolation",
  },
  {
    id: "191",
    value: "Immolate",
  },
  {
    id: "179",
    value: "Incendiary Bonds",
  },
  {
    id: "183",
    value: "Inferno",
  },
  {
    id: "824",
    value: "Lava Arrows",
  },
  {
    id: "195",
    value: "Lava Font",
  },
  {
    id: "845",
    value: "Liquid Flame",
  },
  {
    id: "190",
    value: "Mark of Rodgort",
  },
  {
    id: "187",
    value: "Meteor",
  },
  {
    id: "192",
    value: "Meteor Shower",
  },
  {
    id: "1662",
    value: "Mind Blast",
  },
  {
    id: "185",
    value: "Mind Burn",
  },
  {
    id: "193",
    value: "Phoenix",
  },
  {
    id: "189",
    value: "Rodgort's Invocation",
  },
  {
    id: "1380",
    value: "Savannah Heat",
  },
  {
    id: "884",
    value: "Searing Flames",
  },
  {
    id: "196",
    value: "Searing Heat",
  },
  {
    id: "1090",
    value: "Smoldering Embers",
  },
  {
    id: "1095",
    value: "Star Burst",
  },
  {
    id: "1093",
    value: "Teinai's Heat",
  },
  {
    id: "206",
    value: "Armor of Frost",
  },
  {
    id: "238",
    value: "Armor of Mist",
  },
  {
    id: "235",
    value: "Blurred Vision",
  },
  {
    id: "207",
    value: "Conjure Frost",
  },
  {
    id: "234",
    value: "Deep Freeze",
  },
  {
    id: "1382",
    value: "Freezing Gust",
  },
  {
    id: "1261",
    value: "Frigid Armor",
  },
  {
    id: "212",
    value: "Frozen Burst",
  },
  {
    id: "2192",
    value: "Glowing Ice",
  },
  {
    id: "210",
    value: "Ice Prison",
  },
  {
    id: "214",
    value: "Ice Spear",
  },
  {
    id: "211",
    value: "Ice Spikes",
  },
  {
    id: "903",
    value: "Icy Prism",
  },
  {
    id: "939",
    value: "Icy Shackles",
  },
  {
    id: "215",
    value: "Maelstrom",
  },
  {
    id: "209",
    value: "Mind Freeze",
  },
  {
    id: "1098",
    value: "Mirror of Ice",
  },
  {
    id: "236",
    value: "Mist Form",
  },
  {
    id: "204",
    value: "Rust",
  },
  {
    id: "213",
    value: "Shard Storm",
  },
  {
    id: "809",
    value: "Shatterstone",
  },
  {
    id: "2191",
    value: "Slippery Ground",
  },
  {
    id: "846",
    value: "Steam",
  },
  {
    id: "233",
    value: "Swirling Aura",
  },
  {
    id: "1097",
    value: "Teinai's Prison",
  },
  {
    id: "866",
    value: "Vapor Blade",
  },
  {
    id: "239",
    value: "Ward Against Harm",
  },
  {
    id: "208",
    value: "Water Attunement",
  },
  {
    id: "237",
    value: "Water Trident",
  },
  {
    id: "1999",
    value: "Winter's Embrace",
  },
  {
    id: "201",
    value: "Glyph of Concentration",
  },
  {
    id: "198",
    value: "Glyph of Elemental Power",
  },
  {
    id: "1096",
    value: "Glyph of Essence",
  },
  {
    id: "203",
    value: "Glyph of Renewal",
  },
  {
    id: "202",
    value: "Glyph of Sacrifice",
  },
  {
    id: "1088",
    value: "Second Wind",
  },
  {
    id: "1639",
    value: "Assassin's Remedy",
  },
  {
    id: "779",
    value: "Black Lotus Strike",
  },
  {
    id: "1027",
    value: "Critical Defenses",
  },
  {
    id: "1018",
    value: "Critical Eye",
  },
  {
    id: "1019",
    value: "Critical Strike",
  },
  {
    id: "1029",
    value: "Dark Apostasy",
  },
  {
    id: "1638",
    value: "Deadly Haste",
  },
  {
    id: "1030",
    value: "Locust's Fury",
  },
  {
    id: "1633",
    value: "Malicious Strike",
  },
  {
    id: "1045",
    value: "Palm Strike",
  },
  {
    id: "1034",
    value: "Seeping Wound",
  },
  {
    id: "926",
    value: "Sharpen Daggers",
  },
  {
    id: "1634",
    value: "Shattering Assault",
  },
  {
    id: "776",
    value: "Twisting Fangs",
  },
  {
    id: "783",
    value: "Unsuspecting Strike",
  },
  {
    id: "1649",
    value: "Way of the Assassin",
  },
  {
    id: "2187",
    value: "Way of the Master",
  },
  {
    id: "1024",
    value: "Black Mantis Thrust",
  },
  {
    id: "1636",
    value: "Black Spider Strike",
  },
  {
    id: "1020",
    value: "Blades of Steel",
  },
  {
    id: "775",
    value: "Death Blossom",
  },
  {
    id: "948",
    value: "Desperate Strike",
  },
  {
    id: "1025",
    value: "Disrupting Stab",
  },
  {
    id: "975",
    value: "Exhausting Assault",
  },
  {
    id: "1990",
    value: "Falling Lotus Strike",
  },
  {
    id: "778",
    value: "Falling Spider",
  },
  {
    id: "1042",
    value: "Flashing Blades",
  },
  {
    id: "780",
    value: "Fox Fangs",
  },
  {
    id: "1640",
    value: "Fox's Promise",
  },
  {
    id: "1988",
    value: "Golden Fang Strike",
  },
  {
    id: "1637",
    value: "Golden Fox Strike",
  },
  {
    id: "1026",
    value: "Golden Lotus Strike",
  },
  {
    id: "989",
    value: "Golden Phoenix Strike",
  },
  {
    id: "1635",
    value: "Golden Skull Strike",
  },
  {
    id: "777",
    value: "Horns of the Ox",
  },
  {
    id: "782",
    value: "Jagged Strike",
  },
  {
    id: "1021",
    value: "Jungle Strike",
  },
  {
    id: "1023",
    value: "Leaping Mantis Sting",
  },
  {
    id: "1987",
    value: "Lotus Strike",
  },
  {
    id: "781",
    value: "Moebius Strike",
  },
  {
    id: "986",
    value: "Nine Tail Strike",
  },
  {
    id: "976",
    value: "Repeating Strike",
  },
  {
    id: "988",
    value: "Temple Strike",
  },
  {
    id: "2135",
    value: "Trampling Ox",
  },
  {
    id: "1022",
    value: "Wild Strike",
  },
  {
    id: "1035",
    value: "Assassin's Promise",
  },
  {
    id: "1646",
    value: "Augury of Death",
  },
  {
    id: "1038",
    value: "Crippling Dagger",
  },
  {
    id: "858",
    value: "Dancing Daggers",
  },
  {
    id: "1044",
    value: "Dark Prison",
  },
  {
    id: "572",
    value: "Deadly Paradox",
  },
  {
    id: "571",
    value: "Disrupting Dagger",
  },
  {
    id: "800",
    value: "Enduring Toxin",
  },
  {
    id: "784",
    value: "Entangling Asp",
  },
  {
    id: "802",
    value: "Expose Defenses",
  },
  {
    id: "990",
    value: "Expunge Enchantments",
  },
  {
    id: "1033",
    value: "Impale",
  },
  {
    id: "786",
    value: "Iron Palm",
  },
  {
    id: "974",
    value: "Mantis Touch",
  },
  {
    id: "785",
    value: "Mark of Death",
  },
  {
    id: "570",
    value: "Mark of Insecurity",
  },
  {
    id: "1991",
    value: "Sadist's Signet",
  },
  {
    id: "815",
    value: "Scorpion Wire",
  },
  {
    id: "2052",
    value: "Shadow Fang",
  },
  {
    id: "1652",
    value: "Shadow Prison",
  },
  {
    id: "927",
    value: "Shameful Fear",
  },
  {
    id: "801",
    value: "Shroud of Silence",
  },
  {
    id: "2186",
    value: "Signet of Deadly Corruption",
  },
  {
    id: "876",
    value: "Signet of Shadows",
  },
  {
    id: "1647",
    value: "Signet of Toxic Shock",
  },
  {
    id: "951",
    value: "Siphon Speed",
  },
  {
    id: "827",
    value: "Siphon Strength",
  },
  {
    id: "1986",
    value: "Vampiric Assault",
  },
  {
    id: "987",
    value: "Way of the Empty Palm",
  },
  {
    id: "799",
    value: "Beguiling Haze",
  },
  {
    id: "973",
    value: "Blinding Powder",
  },
  {
    id: "985",
    value: "Caltrops",
  },
  {
    id: "1037",
    value: "Dark Escape",
  },
  {
    id: "952",
    value: "Death's Charge",
  },
  {
    id: "1651",
    value: "Death's Retreat",
  },
  {
    id: "1641",
    value: "Feigned Neutrality",
  },
  {
    id: "1032",
    value: "Heart of Shadow",
  },
  {
    id: "1642",
    value: "Hidden Caltrops",
  },
  {
    id: "816",
    value: "Mirrored Stance",
  },
  {
    id: "770",
    value: "Return",
  },
  {
    id: "826",
    value: "Shadow Form",
  },
  {
    id: "929",
    value: "Shadow of Haste",
  },
  {
    id: "814",
    value: "Shadow Refuge",
  },
  {
    id: "928",
    value: "Shadow Shroud",
  },
  {
    id: "950",
    value: "Shadowy Burden",
  },
  {
    id: "1031",
    value: "Shroud of Distress",
  },
  {
    id: "2136",
    value: "Smoke Powder Defense",
  },
  {
    id: "1041",
    value: "Unseen Fury",
  },
  {
    id: "769",
    value: "Viper's Defense",
  },
  {
    id: "1028",
    value: "Way of Perfection",
  },
  {
    id: "949",
    value: "Way of the Fox",
  },
  {
    id: "977",
    value: "Way of the Lotus",
  },
  {
    id: "1643",
    value: "Assault Enchantments",
  },
  {
    id: "771",
    value: "Aura of Displacement",
  },
  {
    id: "1043",
    value: "Dash",
  },
  {
    id: "1645",
    value: "Lift Enchantment",
  },
  {
    id: "978",
    value: "Mark of Instability",
  },
  {
    id: "925",
    value: "Recall",
  },
  {
    id: "1654",
    value: "Shadow Meld",
  },
  {
    id: "1650",
    value: "Shadow Walk",
  },
  {
    id: "1036",
    value: "Signet of Malice",
  },
  {
    id: "1648",
    value: "Signet of Twilight",
  },
  {
    id: "1040",
    value: "Spirit Walk",
  },
  {
    id: "1653",
    value: "Swap",
  },
  {
    id: "1644",
    value: "Wastrel's Collapse",
  },
  {
    id: "2205",
    value: "Agony",
  },
  {
    id: "1246",
    value: "Ancestors' Rage",
  },
  {
    id: "1253",
    value: "Bloodsong",
  },
  {
    id: "1744",
    value: "Caretaker's Charge",
  },
  {
    id: "1225",
    value: "Channeled Strike",
  },
  {
    id: "1215",
    value: "Clamor of Souls",
  },
  {
    id: "1218",
    value: "Cruel Was Daoshen",
  },
  {
    id: "920",
    value: "Destruction",
  },
  {
    id: "1732",
    value: "Destructive Was Glaive",
  },
  {
    id: "1227",
    value: "Essence Strike",
  },
  {
    id: "1245",
    value: "Gaze from Beyond",
  },
  {
    id: "1734",
    value: "Gaze of Fury",
  },
  {
    id: "789",
    value: "Grasping Was Kuurong",
  },
  {
    id: "916",
    value: "Lamentation",
  },
  {
    id: "795",
    value: "Nightmare Weapon",
  },
  {
    id: "1479",
    value: "Offering of Spirit",
  },
  {
    id: "1237",
    value: "Painful Bond",
  },
  {
    id: "1478",
    value: "Renewing Surge",
  },
  {
    id: "1239",
    value: "Signet of Spirits",
  },
  {
    id: "1226",
    value: "Spirit Boon Strike",
  },
  {
    id: "919",
    value: "Spirit Burn",
  },
  {
    id: "910",
    value: "Spirit Rift",
  },
  {
    id: "1228",
    value: "Spirit Siphon",
  },
  {
    id: "792",
    value: "Splinter Weapon",
  },
  {
    id: "794",
    value: "Wailing Weapon",
  },
  {
    id: "1751",
    value: "Warmonger's Weapon",
  },
  {
    id: "2073",
    value: "Weapon of Aggression",
  },
  {
    id: "1749",
    value: "Weapon of Fury",
  },
  {
    id: "1733",
    value: "Wielder's Strike",
  },
  {
    id: "3157",
    value: "Destructive Was Glaive (PvP)",
  },
  {
    id: "1745",
    value: "Anguish",
  },
  {
    id: "1232",
    value: "Armor of Unfeeling",
  },
  {
    id: "1236",
    value: "Binding Chains",
  },
  {
    id: "1258",
    value: "Brutal Weapon",
  },
  {
    id: "923",
    value: "Disenchantment",
  },
  {
    id: "1249",
    value: "Displacement",
  },
  {
    id: "921",
    value: "Dissonance",
  },
  {
    id: "1235",
    value: "Dulled Weapon",
  },
  {
    id: "1252",
    value: "Earthbind",
  },
  {
    id: "2206",
    value: "Ghostly Weapon",
  },
  {
    id: "1259",
    value: "Guided Weapon",
  },
  {
    id: "773",
    value: "Mighty Was Vorizun",
  },
  {
    id: "1247",
    value: "Pain",
  },
  {
    id: "963",
    value: "Restoration",
  },
  {
    id: "871",
    value: "Shadowsong",
  },
  {
    id: "982",
    value: "Shelter",
  },
  {
    id: "1742",
    value: "Signet of Ghostly Might",
  },
  {
    id: "1266",
    value: "Soothing",
  },
  {
    id: "2148",
    value: "Sundering Weapon",
  },
  {
    id: "911",
    value: "Union",
  },
  {
    id: "1267",
    value: "Vital Weapon",
  },
  {
    id: "1255",
    value: "Wanderlust",
  },
  {
    id: "1268",
    value: "Weapon of Quickening",
  },
  {
    id: "788",
    value: "Blind Was Mingson",
  },
  {
    id: "1481",
    value: "Death Pact Signet",
  },
  {
    id: "812",
    value: "Defiant Was Xinrae",
  },
  {
    id: "791",
    value: "Flesh of My Flesh",
  },
  {
    id: "772",
    value: "Generous Was Tsungrai",
  },
  {
    id: "1741",
    value: "Ghostmirror Light",
  },
  {
    id: "1251",
    value: "Life",
  },
  {
    id: "1222",
    value: "Lively Was Naomei",
  },
  {
    id: "1234",
    value: "Mend Body and Soul",
  },
  {
    id: "2202",
    value: "Mending Grip",
  },
  {
    id: "1250",
    value: "Preservation",
  },
  {
    id: "1219",
    value: "Protective Was Kaolai",
  },
  {
    id: "2072",
    value: "Pure Was Li Ming",
  },
  {
    id: "1748",
    value: "Recovery",
  },
  {
    id: "981",
    value: "Recuperation",
  },
  {
    id: "2204",
    value: "Rejuvenation",
  },
  {
    id: "1221",
    value: "Resilient Was Xiko",
  },
  {
    id: "787",
    value: "Resilient Weapon",
  },
  {
    id: "1233",
    value: "Soothing Memories",
  },
  {
    id: "915",
    value: "Spirit Light",
  },
  {
    id: "1257",
    value: "Spirit Light Weapon",
  },
  {
    id: "962",
    value: "Spirit Transfer",
  },
  {
    id: "2203",
    value: "Spiritleech Aura",
  },
  {
    id: "913",
    value: "Tranquil Was Tanasen",
  },
  {
    id: "790",
    value: "Vengeful Was Khanhei",
  },
  {
    id: "964",
    value: "Vengeful Weapon",
  },
  {
    id: "1731",
    value: "Vocal Was Sogolon",
  },
  {
    id: "1752",
    value: "Weapon of Remedy",
  },
  {
    id: "983",
    value: "Weapon of Shadow",
  },
  {
    id: "793",
    value: "Weapon of Warding",
  },
  {
    id: "1265",
    value: "Wielder's Boon",
  },
  {
    id: "1750",
    value: "Xinrae's Weapon",
  },
  {
    id: "1223",
    value: "Anguished Was Lingwah",
  },
  {
    id: "1220",
    value: "Attuned Was Songkai",
  },
  {
    id: "1230",
    value: "Boon of Creation",
  },
  {
    id: "914",
    value: "Consume Soul",
  },
  {
    id: "1264",
    value: "Doom",
  },
  {
    id: "1747",
    value: "Empowerment",
  },
  {
    id: "2016",
    value: "Energetic Was Lee Sa",
  },
  {
    id: "1229",
    value: "Explosive Growth",
  },
  {
    id: "980",
    value: "Feast of Souls",
  },
  {
    id: "1244",
    value: "Ghostly Haste",
  },
  {
    id: "1482",
    value: "Reclaim Essence",
  },
  {
    id: "1739",
    value: "Renewing Memories",
  },
  {
    id: "1217",
    value: "Ritual Lord",
  },
  {
    id: "917",
    value: "Rupture Soul",
  },
  {
    id: "1738",
    value: "Sight Beyond Sight",
  },
  {
    id: "1743",
    value: "Signet of Binding",
  },
  {
    id: "1238",
    value: "Signet of Creation",
  },
  {
    id: "1240",
    value: "Soul Twisting",
  },
  {
    id: "1231",
    value: "Spirit Channeling",
  },
  {
    id: "918",
    value: "Spirit to Flesh",
  },
  {
    id: "1480",
    value: "Spirit's Gift",
  },
  {
    id: "1736",
    value: "Spirit's Strength",
  },
  {
    id: "2149",
    value: "Weapon of Renewal",
  },
  {
    id: "1740",
    value: "Wielder's Remedy",
  },
  {
    id: "1737",
    value: "Wielder's Zeal",
  },
  {
    id: "1224",
    value: "Draw Spirit",
  },
  {
    id: "1572",
    value: '"Brace Yourself!"',
  },
  {
    id: "1780",
    value: '"Can\'t Touch This!"',
  },
  {
    id: "1595",
    value: '"Fall Back!"',
  },
  {
    id: "1781",
    value: '"Find Their Weakness!"',
  },
  {
    id: "1558",
    value: '"Go for the Eyes!"',
  },
  {
    id: "1594",
    value: '"Help Me!"',
  },
  {
    id: "1596",
    value: '"Incoming!"',
  },
  {
    id: "1591",
    value: '"Make Haste!"',
  },
  {
    id: "1593",
    value: '"Never Give Up!"',
  },
  {
    id: "1598",
    value: '"Never Surrender!"',
  },
  {
    id: "1589",
    value: '"Stand Your Ground!"',
  },
  {
    id: "1592",
    value: '"We Shall Return!"',
  },
  {
    id: "2018",
    value: "Anthem of Disruption",
  },
  {
    id: "1559",
    value: "Anthem of Envy",
  },
  {
    id: "1568",
    value: "Anthem of Guidance",
  },
  {
    id: "2017",
    value: "Anthem of Weariness",
  },
  {
    id: "1580",
    value: "Bladeturn Refrain",
  },
  {
    id: "1554",
    value: "Crippling Anthem",
  },
  {
    id: "1556",
    value: "Godspeed",
  },
  {
    id: "1590",
    value: '"Lead the Way!"',
  },
  {
    id: "1779",
    value: '"Make Your Time!"',
  },
  {
    id: "1597",
    value: '"They\'re on Fire!"',
  },
  {
    id: "1774",
    value: "Aggressive Refrain",
  },
  {
    id: "1587",
    value: "Angelic Bond",
  },
  {
    id: "1586",
    value: "Angelic Protection",
  },
  {
    id: "1557",
    value: "Anthem of Flame",
  },
  {
    id: "1553",
    value: "Anthem of Fury",
  },
  {
    id: "1573",
    value: "Awe",
  },
  {
    id: "1575",
    value: "Blazing Finale",
  },
  {
    id: "1576",
    value: "Burning Refrain",
  },
  {
    id: "2208",
    value: "Burning Shield",
  },
  {
    id: "1555",
    value: "Defensive Anthem",
  },
  {
    id: "1574",
    value: "Enduring Harmony",
  },
  {
    id: "1769",
    value: "Focused Anger",
  },
  {
    id: "1581",
    value: "Glowing Signet",
  },
  {
    id: "2075",
    value: "Hasty Refrain",
  },
  {
    id: "1584",
    value: "Leader's Comfort",
  },
  {
    id: "1770",
    value: "Natural Temper",
  },
  {
    id: "1778",
    value: "Signet of Return",
  },
  {
    id: "1773",
    value: "Soldier's Fury",
  },
  {
    id: "2210",
    value: "Spear Swipe",
  },
  {
    id: "1599",
    value: '"It\'s Just a Flesh Wound."',
  },
  {
    id: "1782",
    value: '"The Power Is Yours!"',
  },
  {
    id: "1566",
    value: "Aria of Restoration",
  },
  {
    id: "1562",
    value: "Aria of Zeal",
  },
  {
    id: "1564",
    value: "Ballad of Restoration",
  },
  {
    id: "1565",
    value: "Chorus of Restoration",
  },
  {
    id: "1569",
    value: "Energizing Chorus",
  },
  {
    id: "1775",
    value: "Energizing Finale",
  },
  {
    id: "1577",
    value: "Finale of Restoration",
  },
  {
    id: "2207",
    value: "Inspirational Speech",
  },
  {
    id: "1583",
    value: "Leader's Zeal",
  },
  {
    id: "1772",
    value: "Lyric of Purification",
  },
  {
    id: "1563",
    value: "Lyric of Zeal",
  },
  {
    id: "1578",
    value: "Mending Refrain",
  },
  {
    id: "1579",
    value: "Purifying Finale",
  },
  {
    id: "1585",
    value: "Signet of Synergy",
  },
  {
    id: "1560",
    value: "Song of Power",
  },
  {
    id: "1570",
    value: "Song of Purification",
  },
  {
    id: "1771",
    value: "Song of Restoration",
  },
  {
    id: "1561",
    value: "Zealous Anthem",
  },
  {
    id: "1548",
    value: "Cruel Spear",
  },
  {
    id: "1600",
    value: "Barbed Spear",
  },
  {
    id: "1546",
    value: "Blazing Spear",
  },
  {
    id: "2074",
    value: "Chest Thumper",
  },
  {
    id: "1604",
    value: "Disrupting Throw",
  },
  {
    id: "1549",
    value: "Harrier's Toss",
  },
  {
    id: "2209",
    value: "Holy Spear",
  },
  {
    id: "2150",
    value: "Maiming Spear",
  },
  {
    id: "1603",
    value: "Merciless Spear",
  },
  {
    id: "1547",
    value: "Mighty Throw",
  },
  {
    id: "1783",
    value: "Slayer's Spear",
  },
  {
    id: "1551",
    value: "Spear of Lightning",
  },
  {
    id: "2238",
    value: "Spear of Redemption",
  },
  {
    id: "1602",
    value: "Stunning Strike",
  },
  {
    id: "1784",
    value: "Swift Javelin",
  },
  {
    id: "1550",
    value: "Unblockable Throw",
  },
  {
    id: "1601",
    value: "Vicious Attack",
  },
  {
    id: "1552",
    value: "Wearying Spear",
  },
  {
    id: "1605",
    value: "Wild Throw",
  },
  {
    id: "1588",
    value: "Cautery Signet",
  },
  {
    id: "1571",
    value: "Hexbreaker Aria",
  },
  {
    id: "1777",
    value: "Remedy Signet",
  },
  {
    id: "1776",
    value: "Signet of Aggression",
  },
  {
    id: "1567",
    value: "Song of Concentration",
  },
  {
    id: "1515",
    value: "Armor of Sanctity",
  },
  {
    id: "1495",
    value: "Aura of Thorns",
  },
  {
    id: "1540",
    value: "Conviction",
  },
  {
    id: "1497",
    value: "Dust Cloak",
  },
  {
    id: "1760",
    value: "Ebon Dust Aura",
  },
  {
    id: "1514",
    value: "Fleeting Stability",
  },
  {
    id: "1500",
    value: "Mirage Cloak",
  },
  {
    id: "1516",
    value: "Mystic Regeneration",
  },
  {
    id: "1532",
    value: "Mystic Sandstorm",
  },
  {
    id: "1542",
    value: "Pious Concentration",
  },
  {
    id: "1510",
    value: "Sand Shards",
  },
  {
    id: "2201",
    value: "Shield of Force",
  },
  {
    id: "1530",
    value: "Signet of Pious Light",
  },
  {
    id: "1498",
    value: "Staggering Force",
  },
  {
    id: "1757",
    value: "Veil of Thorns",
  },
  {
    id: "1506",
    value: "Vital Boon",
  },
  {
    id: "1759",
    value: "Vow of Strength",
  },
  {
    id: "1502",
    value: "Arcane Zeal",
  },
  {
    id: "2070",
    value: "Aura Slicer",
  },
  {
    id: "1518",
    value: "Avatar of Balthazar",
  },
  {
    id: "1519",
    value: "Avatar of Dwayna",
  },
  {
    id: "1520",
    value: "Avatar of Grenth",
  },
  {
    id: "1521",
    value: "Avatar of Lyssa",
  },
  {
    id: "1522",
    value: "Avatar of Melandru",
  },
  {
    id: "1496",
    value: "Balthazar's Rage",
  },
  {
    id: "1483",
    value: "Banishing Strike",
  },
  {
    id: "1524",
    value: "Eremite's Zeal",
  },
  {
    id: "1508",
    value: "Extend Enchantments",
  },
  {
    id: "1509",
    value: "Faithful Intervention",
  },
  {
    id: "1762",
    value: "Heart of Fury",
  },
  {
    id: "1507",
    value: "Heart of Holy Flame",
  },
  {
    id: "1526",
    value: "Imbue Health",
  },
  {
    id: "1531",
    value: "Intimidating Aura",
  },
  {
    id: "1523",
    value: "Meditation",
  },
  {
    id: "1755",
    value: "Mystic Corruption",
  },
  {
    id: "1484",
    value: "Mystic Sweep",
  },
  {
    id: "1503",
    value: "Mystic Vigor",
  },
  {
    id: "2146",
    value: "Pious Fury",
  },
  {
    id: "1543",
    value: "Pious Haste",
  },
  {
    id: "1499",
    value: "Pious Renewal",
  },
  {
    id: "1534",
    value: "Rending Touch",
  },
  {
    id: "1517",
    value: "Vow of Silence",
  },
  {
    id: "1504",
    value: "Watchful Intervention",
  },
  {
    id: "1763",
    value: "Zealous Renewal",
  },
  {
    id: "1538",
    value: "Lyssa's Assault",
  },
  {
    id: "1539",
    value: "Chilling Victory",
  },
  {
    id: "1535",
    value: "Crippling Sweep",
  },
  {
    id: "2147",
    value: "Crippling Victory",
  },
  {
    id: "1485",
    value: "Eremite's Attack",
  },
  {
    id: "2015",
    value: "Farmer's Scythe",
  },
  {
    id: "1489",
    value: "Irresistible Sweep",
  },
  {
    id: "1490",
    value: "Pious Assault",
  },
  {
    id: "2012",
    value: "Radiant Scythe",
  },
  {
    id: "1486",
    value: "Reap Impurities",
  },
  {
    id: "1767",
    value: "Reaper's Sweep",
  },
  {
    id: "1753",
    value: "Rending Sweep",
  },
  {
    id: "1487",
    value: "Twin Moon Sweep",
  },
  {
    id: "1488",
    value: "Victorious Sweep",
  },
  {
    id: "1537",
    value: "Wearying Strike",
  },
  {
    id: "1536",
    value: "Wounding Strike",
  },
  {
    id: "2071",
    value: "Zealous Sweep",
  },
  {
    id: "1764",
    value: "Attacker's Insight",
  },
  {
    id: "1528",
    value: "Dwayna's Touch",
  },
  {
    id: "1766",
    value: "Featherfoot Grace",
  },
  {
    id: "2013",
    value: "Grenth's Aura",
  },
  {
    id: "1493",
    value: "Grenth's Fingers",
  },
  {
    id: "1756",
    value: "Grenth's Grasp",
  },
  {
    id: "1513",
    value: "Guiding Hands",
  },
  {
    id: "1758",
    value: "Harrier's Grasp",
  },
  {
    id: "1768",
    value: "Harrier's Haste",
  },
  {
    id: "1512",
    value: "Lyssa's Haste",
  },
  {
    id: "1527",
    value: "Mystic Healing",
  },
  {
    id: "1491",
    value: "Mystic Twister",
  },
  {
    id: "1525",
    value: "Natural Healing",
  },
  {
    id: "1754",
    value: "Onslaught",
  },
  {
    id: "1529",
    value: "Pious Restoration",
  },
  {
    id: "1765",
    value: "Rending Aura",
  },
  {
    id: "2200",
    value: "Signet of Mystic Speed",
  },
  {
    id: "2014",
    value: "Signet of Pious Restraint",
  },
  {
    id: "1545",
    value: "Test of Faith",
  },
  {
    id: "1505",
    value: "Vow of Piety",
  },
  {
    id: "1544",
    value: "Whirling Charge",
  },
  {
    id: "1533",
    value: "Winds of Disenchantment",
  },
  {
    id: "1761",
    value: "Zealous Vow",
  },
  {
    id: "1541",
    value: "Enchanted Haste",
  },
  {
    id: "2107",
    value: "Whirlwind Attack",
  },
  {
    id: "2108",
    value: "Never Rampage Alone",
  },
  {
    id: "2105",
    value: "Seed of Life",
  },
  {
    id: "2103",
    value: "Necrosis",
  },
  {
    id: "2102",
    value: "Cry of Pain",
  },
  {
    id: "2104",
    value: "Intensity",
  },
  {
    id: "2101",
    value: "Critical Agility",
  },
  {
    id: "2110",
    value: "Vampirism",
  },
  {
    id: "2112",
    value: '"There\'s Nothing to Fear!"',
  },
  {
    id: "2109",
    value: "Eternal Aura",
  },
  {
    id: "1816",
    value: "Sunspear Rebirth Signet",
  },
  {
    id: "1815",
    value: "Lightbringer Signet",
  },
  {
    id: "1814",
    value: "Lightbringer's Gaze",
  },
  {
    id: "2414",
    value: "Radiation Field",
  },
  {
    id: "2416",
    value: "Air of Superiority",
  },
  {
    id: "2415",
    value: "Asuran Scan",
  },
  {
    id: "2417",
    value: "Mental Block",
  },
  {
    id: "2411",
    value: "Mindbender",
  },
  {
    id: "2418",
    value: "Pain Inverter",
  },
  {
    id: "2412",
    value: "Smooth Criminal",
  },
  {
    id: "2226",
    value: "Summon Ice Imp",
  },
  {
    id: "2224",
    value: "Summon Mursaat",
  },
  {
    id: "2227",
    value: "Summon Naga Shaman",
  },
  {
    id: "2225",
    value: "Summon Ruby Djinn",
  },
  {
    id: "2413",
    value: "Technobabble",
  },
  {
    id: "2217",
    value: '"By Ural\'s Hammer!"',
  },
  {
    id: "2216",
    value: '"Don\'t Trip!"',
  },
  {
    id: "2211",
    value: "Alkar's Alchemical Acid",
  },
  {
    id: "2223",
    value: "Black Powder Mine",
  },
  {
    id: "2215",
    value: "Brawling Headbutt",
  },
  {
    id: "2221",
    value: "Breath of the Great Dwarf",
  },
  {
    id: "2218",
    value: "Drunken Master",
  },
  {
    id: "2423",
    value: "Dwarven Stability",
  },
  {
    id: "2213",
    value: "Ear Bite",
  },
  {
    id: "2220",
    value: "Great Dwarf Armor",
  },
  {
    id: "2219",
    value: "Great Dwarf Weapon",
  },
  {
    id: "2212",
    value: "Light of Deldrimor",
  },
  {
    id: "2214",
    value: "Low Blow",
  },
  {
    id: "2222",
    value: "Snow Storm",
  },
  {
    id: "2228",
    value: "Deft Strike",
  },
  {
    id: "2231",
    value: "Ebon Battle Standard of Courage",
  },
  {
    id: "2233",
    value: "Ebon Battle Standard of Honor",
  },
  {
    id: "2232",
    value: "Ebon Battle Standard of Wisdom",
  },
  {
    id: "2420",
    value: "Ebon Escape",
  },
  {
    id: "2235",
    value: "Ebon Vanguard Assassin Support",
  },
  {
    id: "2234",
    value: "Ebon Vanguard Sniper Support",
  },
  {
    id: "2229",
    value: "Signet of Infection",
  },
  {
    id: "2116",
    value: "Sneak Attack",
  },
  {
    id: "2230",
    value: "Tryptophan Signet",
  },
  {
    id: "2421",
    value: "Weakness Trap",
  },
  {
    id: "2422",
    value: "Winds",
  },
  {
    id: "2354",
    value: '"Dodge This!"',
  },
  {
    id: "2353",
    value: '"Finish Him!"',
  },
  {
    id: "2355",
    value: '"I Am the Strongest!"',
  },
  {
    id: "2356",
    value: '"I Am Unstoppable!"',
  },
  {
    id: "2359",
    value: '"You Are All Weaklings!"',
  },
  {
    id: "2358",
    value: '"You Move Like a Dwarf!"',
  },
  {
    id: "2357",
    value: "A Touch of Guile",
  },
  {
    id: "2361",
    value: "Club of a Thousand Bears",
  },
  {
    id: "2360",
    value: "Feel No Pain",
  },
  {
    id: "2384",
    value: "Raven Blessing",
  },
  {
    id: "2374",
    value: "Ursan Blessing",
  },
  {
    id: "2379",
    value: "Volfen Blessing",
  },
  {
    id: "2808",
    value: "Enraged Smash (PvP)",
  },
  {
    id: "3143",
    value: "Renewing Smash (PvP)",
  },
  {
    id: "3204",
    value: "Defy Pain (PvP)",
  },
  {
    id: "3002",
    value: "Warrior's Endurance (PvP)",
  },
  {
    id: "2858",
    value: '"Watch Yourself!" (PvP)',
  },
  {
    id: "3156",
    value: "Soldier's Stance (PvP)",
  },
  {
    id: "2883",
    value: '"For Great Justice!" (PvP)',
  },
  {
    id: "2657",
    value: "Call of Haste (PvP)",
  },
  {
    id: "3068",
    value: "Charm Animal (Codex)",
  },
  {
    id: "3045",
    value: "Comfort Animal (PvP)",
  },
  {
    id: "3051",
    value: "Enraged Lunge (PvP)",
  },
  {
    id: "3144",
    value: "Heal as One (PvP)",
  },
  {
    id: "3047",
    value: "Melandru's Assault (PvP)",
  },
  {
    id: "3050",
    value: "Predatory Bond (PvP)",
  },
  {
    id: "2959",
    value: "Expert's Dexterity (PvP)",
  },
  {
    id: "3060",
    value: "Escape (PvP)",
  },
  {
    id: "3145",
    value: "Glass Arrows (PvP)",
  },
  {
    id: "3141",
    value: "Lightning Reflexes (PvP)",
  },
  {
    id: "2861",
    value: "Penetrating Attack (PvP)",
  },
  {
    id: "2969",
    value: "Read the Wind (PvP)",
  },
  {
    id: "2925",
    value: "Sloth Hunter's Shot (PvP)",
  },
  {
    id: "2864",
    value: "Sundering Attack (PvP)",
  },
  {
    id: "3147",
    value: "Keen Arrow (PvP)",
  },
  {
    id: "2895",
    value: "Smiter's Boon (PvP)",
  },
  {
    id: "2891",
    value: "Unyielding Aura (PvP)",
  },
  {
    id: "2871",
    value: "Light of Deliverance (PvP)",
  },
  {
    id: "3232",
    value: "Heal Party (PvP)",
  },
  {
    id: "2857",
    value: "Aegis (PvP)",
  },
  {
    id: "2892",
    value: "Spirit Bond (PvP)",
  },
  {
    id: "2887",
    value: "Signet of Judgment (PvP)",
  },
  {
    id: "2999",
    value: "Strength of Honor (PvP)",
  },
  {
    id: "3059",
    value: "Signet of Agony (PvP)",
  },
  {
    id: "3233",
    value: "Spoil Victor (PvP)",
  },
  {
    id: "3058",
    value: "Unholy Feast (PvP)",
  },
  {
    id: "2859",
    value: "Enfeeble (PvP)",
  },
  {
    id: "2885",
    value: "Enfeebling Blood (PvP)",
  },
  {
    id: "2863",
    value: "Discord (PvP)",
  },
  {
    id: "3054",
    value: "Masochism (PvP)",
  },
  {
    id: "3151",
    value: "Empathy (PvP)",
  },
  {
    id: "3192",
    value: "Enchanter's Conundrum (PvP)",
  },
  {
    id: "2734",
    value: "Mind Wrack (PvP)",
  },
  {
    id: "3191",
    value: "Mistrust (PvP)",
  },
  {
    id: "3180",
    value: "Shatter Delusions (PvP)",
  },
  {
    id: "3189",
    value: "Spiritual Pain (PvP)",
  },
  {
    id: "3188",
    value: "Unnatural Signet (PvP)",
  },
  {
    id: "3234",
    value: "Visions of Regret (PvP)",
  },
  {
    id: "3185",
    value: "Psychic Instability (PvP)",
  },
  {
    id: "3187",
    value: "Stolen Speed (PvP)",
  },
  {
    id: "3184",
    value: "Accumulated Pain (PvP)",
  },
  {
    id: "3196",
    value: "Calculated Risk (PvP)",
  },
  {
    id: "3152",
    value: "Crippling Anguish (PvP)",
  },
  {
    id: "3289",
    value: "Fevered Dreams (PvP)",
  },
  {
    id: "2998",
    value: "Fragility (PvP)",
  },
  {
    id: "3190",
    value: "Frustration (PvP)",
  },
  {
    id: "3373",
    value: "Illusion of Haste (PvP)",
  },
  {
    id: "3374",
    value: "Illusion of Pain (PvP)",
  },
  {
    id: "3181",
    value: "Illusionary Weaponry (PvP)",
  },
  {
    id: "3183",
    value: "Migraine (PvP)",
  },
  {
    id: "3186",
    value: "Shared Burden (PvP)",
  },
  {
    id: "3193",
    value: "Signet of Clumsiness (PvP)",
  },
  {
    id: "3195",
    value: "Wandering Eye (PvP)",
  },
  {
    id: "3063",
    value: "Mantra of Resolve (PvP)",
  },
  {
    id: "3179",
    value: "Mantra of Signets (PvP)",
  },
  {
    id: "3194",
    value: "Mirror of Disenchantment (PvP)",
  },
  {
    id: "3386",
    value: "Web of Disruption (PvP)",
  },
  {
    id: "3396",
    value: "Lightning Hammer (PvP)",
  },
  {
    id: "2804",
    value: "Mind Shock (PvP)",
  },
  {
    id: "2807",
    value: "Ride the Lightning (PvP)",
  },
  {
    id: "2809",
    value: "Obsidian Flame (PvP)",
  },
  {
    id: "2860",
    value: "Ether Renewal (PvP)",
  },
  {
    id: "3375",
    value: "Aura of Restoration (PvP)",
  },
  {
    id: "3397",
    value: "Elemental Flame (PvP)",
  },
  {
    id: "3021",
    value: "Savannah Heat (PvP)",
  },
  {
    id: "2803",
    value: "Mind Freeze (PvP)",
  },
  {
    id: "2805",
    value: "Mist Form (PvP)",
  },
  {
    id: "3398",
    value: "Slippery Ground (PvP)",
  },
  {
    id: "2806",
    value: "Ward Against Harm (PvP)",
  },
  {
    id: "2869",
    value: "Assassin's Remedy (PvP)",
  },
  {
    id: "3061",
    value: "Death Blossom (PvP)",
  },
  {
    id: "3251",
    value: "Fox Fangs (PvP)",
  },
  {
    id: "3252",
    value: "Wild Strike (PvP)",
  },
  {
    id: "3053",
    value: "Signet of Deadly Corruption (PvP)",
  },
  {
    id: "2862",
    value: "Shadow Form (PvP)",
  },
  {
    id: "3048",
    value: "Shroud of Distress (PvP)",
  },
  {
    id: "3049",
    value: "Unseen Fury (PvP)",
  },
  {
    id: "2867",
    value: "Ancestors' Rage (PvP)",
  },
  {
    id: "2965",
    value: "Signet of Spirits (PvP)",
  },
  {
    id: "2868",
    value: "Splinter Weapon (PvP)",
  },
  {
    id: "3038",
    value: "Agony (PvP)",
  },
  {
    id: "3019",
    value: "Bloodsong (PvP)",
  },
  {
    id: "3008",
    value: "Destruction (PvP)",
  },
  {
    id: "3022",
    value: "Gaze of Fury (PvP)",
  },
  {
    id: "2966",
    value: "Signet of Ghostly Might (PvP)",
  },
  {
    id: "3023",
    value: "Anguish (PvP)",
  },
  {
    id: "3003",
    value: "Armor of Unfeeling (PvP)",
  },
  {
    id: "3017",
    value: "Disenchantment (PvP)",
  },
  {
    id: "3010",
    value: "Displacement (PvP)",
  },
  {
    id: "3014",
    value: "Dissonance (PvP)",
  },
  {
    id: "3015",
    value: "Earthbind (PvP)",
  },
  {
    id: "3007",
    value: "Pain (PvP)",
  },
  {
    id: "3018",
    value: "Restoration (PvP)",
  },
  {
    id: "3006",
    value: "Shadowsong (PvP)",
  },
  {
    id: "3016",
    value: "Shelter (PvP)",
  },
  {
    id: "3009",
    value: "Soothing (PvP)",
  },
  {
    id: "3005",
    value: "Union (PvP)",
  },
  {
    id: "3020",
    value: "Wanderlust (PvP)",
  },
  {
    id: "2872",
    value: "Death Pact Signet (PvP)",
  },
  {
    id: "2866",
    value: "Flesh of My Flesh (PvP)",
  },
  {
    id: "2893",
    value: "Weapon of Warding (PvP)",
  },
  {
    id: "3012",
    value: "Life (PvP)",
  },
  {
    id: "3011",
    value: "Preservation (PvP)",
  },
  {
    id: "3025",
    value: "Recovery (PvP)",
  },
  {
    id: "3013",
    value: "Recuperation (PvP)",
  },
  {
    id: "3039",
    value: "Rejuvenation (PvP)",
  },
  {
    id: "3024",
    value: "Empowerment (PvP)",
  },
  {
    id: "2879",
    value: '"Incoming!" (PvP)',
  },
  {
    id: "2880",
    value: '"Never Surrender!" (PvP)',
  },
  {
    id: "3027",
    value: '"Brace Yourself!" (PvP)',
  },
  {
    id: "3031",
    value: '"Can\'t Touch This!" (PvP)',
  },
  {
    id: "3037",
    value: '"Fall Back!" (PvP)',
  },
  {
    id: "3034",
    value: '"Find Their Weakness!" (PvP)',
  },
  {
    id: "3026",
    value: '"Go for the Eyes!" (PvP)',
  },
  {
    id: "3036",
    value: '"Help Me!" (PvP)',
  },
  {
    id: "3035",
    value: '"Never Give Up!" (PvP)',
  },
  {
    id: "3032",
    value: '"Stand Your Ground!" (PvP)',
  },
  {
    id: "3033",
    value: '"We Shall Return!" (PvP)',
  },
  {
    id: "3040",
    value: "Anthem of Disruption (PvP)",
  },
  {
    id: "3148",
    value: "Anthem of Envy (PvP)",
  },
  {
    id: "3029",
    value: "Bladeturn Refrain (PvP)",
  },
  {
    id: "2876",
    value: "Defensive Anthem (PvP)",
  },
  {
    id: "3028",
    value: "Blazing Finale (PvP)",
  },
  {
    id: "3030",
    value: "Signet of Return (PvP)",
  },
  {
    id: "2877",
    value: "Ballad of Restoration (PvP)",
  },
  {
    id: "2878",
    value: "Song of Restoration (PvP)",
  },
  {
    id: "3062",
    value: "Finale of Restoration (PvP)",
  },
  {
    id: "3149",
    value: "Mending Refrain (PvP)",
  },
  {
    id: "2875",
    value: "Harrier's Toss (PvP)",
  },
  {
    id: "2884",
    value: "Mystic Regeneration (PvP)",
  },
  {
    id: "3346",
    value: "Aura of Thorns (PvP)",
  },
  {
    id: "3347",
    value: "Dust Cloak (PvP)",
  },
  {
    id: "3270",
    value: "Avatar of Dwayna (PvP)",
  },
  {
    id: "3271",
    value: "Avatar of Melandru (PvP)",
  },
  {
    id: "3263",
    value: "Banishing Strike (PvP)",
  },
  {
    id: "3366",
    value: "Heart of Fury (PvP)",
  },
  {
    id: "3368",
    value: "Pious Fury (PvP)",
  },
  {
    id: "3265",
    value: "Irresistible Sweep (PvP)",
  },
  {
    id: "3266",
    value: "Pious Assault (PvP)",
  },
  {
    id: "3264",
    value: "Twin Moon Sweep (PvP)",
  },
  {
    id: "3367",
    value: "Wounding Strike (PvP)",
  },
  {
    id: "3269",
    value: "Guiding Hands (PvP)",
  },
  {
    id: "3348",
    value: "Lyssa's Haste (PvP)",
  },
  {
    id: "3272",
    value: "Mystic Healing (PvP)",
  },
  {
    id: "3365",
    value: "Onslaught (PvP)",
  },
  {
    id: "3273",
    value: "Signet of Pious Restraint (PvP)",
  },
  {
    id: "3422",
    value: "Time Ward",
  },
  {
    id: "3423",
    value: "Soul Taker",
  },
  {
    id: "3424",
    value: "Over the Limit",
  },
  {
    id: "3425",
    value: "Judgment Strike",
  },
  {
    id: "3426",
    value: "Seven Weapons Stance",
  },
  {
    id: "3427",
    value: '"Together as One!"',
  },
  {
    id: "3428",
    value: "Shadow Theft",
  },
  {
    id: "3429",
    value: "Weapons of Three Forges",
  },
  {
    id: "3430",
    value: "Vow of Revolution",
  },
  {
    id: "3431",
    value: "Heroic Refrain",
  },
].map(({ id, value }) => ({ id, value: toNormalized(value) }));

export const skill_names_to_id = new Map(
  pairs.map((pair) => [pair.value, Number(pair.id)])
);
export const skill_ids_to_name = new Map(
  pairs.map((pair) => [Number(pair.id), pair.value])
);
