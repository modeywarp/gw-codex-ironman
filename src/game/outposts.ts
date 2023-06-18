import type { Campaign } from "../stores/campaign";

export interface Outpost {
  name: string;
  link: string;
  mission: boolean;
}

export interface Region {
  name: string;
  outposts: Outpost[];
}

export type RegionDatabase = Region[];

export const pre_searing: RegionDatabase = [
  {
    name: "Ascalon",
    outposts: [
      {
        name: "Ascalon City (outpost)",
        link: "/wiki/Ascalon_City_(outpost)",
        mission: false,
      },
      {
        name: "Ashford Abbey",
        link: "/wiki/Ashford_Abbey",
        mission: false,
      },
      {
        name: "Foible's Fair",
        link: "/wiki/Foible%27s_Fair",
        mission: false,
      },
      {
        name: "Fort Ranik",
        link: "/wiki/Fort_Ranik_(pre-Searing)",
        mission: false,
      },
      {
        name: "The Barradin Estate",
        link: "/wiki/The_Barradin_Estate",
        mission: false,
      },
    ],
  },
];

const ascalon: Region = {
  name: "Ascalon",
  outposts: [
    {
      name: "Ascalon City",
      link: "/wiki/Ascalon_City",
      mission: false,
    },
    {
      name: "Sardelac Sanitarium",
      link: "/wiki/Sardelac_Sanitarium",
      mission: false,
    },
    {
      name: "The Great Northern Wall",
      link: "/wiki/The_Great_Northern_Wall_(outpost)",
      mission: true,
    },
    {
      name: "Frontier Gate",
      link: "/wiki/Frontier_Gate",
      mission: false,
    },
    {
      name: "Ruins of Surmia",
      link: "/wiki/Ruins_of_Surmia_(outpost)",
      mission: true,
    },
    {
      name: "Fort Ranik",
      link: "/wiki/Fort_Ranik_(outpost)",
      mission: true,
    },
    {
      name: "Nolani Academy",
      link: "/wiki/Nolani_Academy_(outpost)",
      mission: true,
    },
    {
      name: "Piken Square",
      link: "/wiki/Piken_Square",
      mission: false,
    },
    {
      name: "Serenity Temple",
      link: "/wiki/Serenity_Temple",
      mission: false,
    },
    {
      name: "Grendich Courthouse",
      link: "/wiki/Grendich_Courthouse",
      mission: false,
    },
  ],
};
const northern_shiverpeaks: Region = {
  name: "Norther Shiverpeaks",
  outposts: [
    {
      name: "Yak's Bend",
      link: "/wiki/Yak%27s_Bend",
      mission: false,
    },
    {
      name: "Borlis Pass",
      link: "/wiki/Borlis_Pass_(outpost)",
      mission: true,
    },
    {
      name: "The Frost Gate",
      link: "/wiki/The_Frost_Gate_(outpost)",
      mission: true,
    },
    {
      name: "Ice Tooth Cave",
      link: "/wiki/Ice_Tooth_Cave",
      mission: false,
    },
    {
      name: "Beacon's Perch",
      link: "/wiki/Beacon%27s_Perch",
      mission: false,
    },
  ],
};
const kryta = {
  name: "Kryta",
  outposts: [
    {
      name: "Gates of Kryta",
      link: "/wiki/Gates_of_Kryta_(outpost)",
      mission: true,
    },
    {
      name: "Lion's Arch",
      link: "/wiki/Lion's_Arch",
      mission: false,
    },
    {
      name: "D'Alessio Seaboard",
      link: "/wiki/D%27Alessio_Seaboard_(outpost)",
      mission: true,
    },
    {
      name: "Beetletun",
      link: "/wiki/Beetletun",
      mission: false,
    },
    {
      name: "Bergen Hot Springs",
      link: "/wiki/Bergen_Hot_Springs",
      mission: false,
    },
    {
      name: "Divinity Coast",
      link: "/wiki/Divinity_Coast_(outpost)",
      mission: true,
    },
    {
      name: "Temple of the Ages",
      link: "/wiki/Temple_of_the_Ages",
      mission: false,
    },

    {
      name: "Fishermen's Haven",
      link: "/wiki/Fishermen%27s_Haven",
      mission: false,
    },
    {
      name: "Riverside Province",
      link: "/wiki/Riverside_Province_(outpost)",
      mission: true,
    },
    {
      name: "Sanctum Cay",
      link: "/wiki/Sanctum_Cay_(outpost)",
      mission: true,
    },
  ],
};
const maguuma = {
  name: "Maguuma",
  outposts: [
    {
      name: "Druid's Overlook",
      link: "/wiki/Druid%27s_Overlook",
      mission: false,
    },
    {
      name: "The Wilds",
      link: "/wiki/The_Wilds_(outpost)",
      mission: true,
    },
    {
      name: "Quarrel Falls",
      link: "/wiki/Quarrel_Falls",
      mission: false,
    },
    {
      name: "Bloodstone Fen",
      link: "/wiki/Bloodstone_Fen_(outpost)",
      mission: true,
    },
    {
      name: "Ventari's Refuge",
      link: "/wiki/Ventari%27s_Refuge",
      mission: false,
    },
    {
      name: "Aurora Glade",
      link: "/wiki/Aurora_Glade_(outpost)",
      mission: true,
    },
    {
      name: "Maguuma Stade",
      link: "/wiki/Maguuma_Stade",
      mission: false,
    },
    {
      name: "Henge of Denravi",
      link: "/wiki/Henge_of_Denravi",
      mission: false,
    },
  ],
};
const crystal_desert: Region = {
  name: "Crystal Desert",
  outposts: [
    {
      name: "The Amnoon Oasis",
      link: "/wiki/The_Amnoon_Oasis",
      mission: false,
    },
    {
      name: "Heroes' Audience",
      link: "/wiki/Heroes%27_Audience",
      mission: false,
    },
    {
      name: "Destiny's Gorge",
      link: "/wiki/Destiny%27s_Gorge",
      mission: false,
    },

    {
      name: "Seeker's Passage",
      link: "/wiki/Seeker%27s_Passage",
      mission: false,
    },
    {
      name: "Tomb of the Primeval Kings",
      link: "/wiki/Tomb_of_the_Primeval_Kings",
      mission: false,
    },
    {
      name: "Dunes of Despair",
      link: "/wiki/Dunes_of_Despair_(outpost)",
      mission: true,
    },
    {
      name: "Elona Reach",
      link: "/wiki/Elona_Reach_(outpost)",
      mission: true,
    },
    {
      name: "Thirsty River",
      link: "/wiki/Thirsty_River_(outpost)",
      mission: true,
    },
    {
      name: "Augury Rock",
      link: "/wiki/Augury_Rock_(outpost)",
      mission: true,
    },
    {
      name: "The Dragon's Lair",
      link: "/wiki/The_Dragon%27s_Lair_(outpost)",
      mission: true,
    },
  ],
};
const southern_shiverpeaks = {
  name: "Southern Shiverpeaks",
  outposts: [
    {
      name: "Droknar's Forge",
      link: "/wiki/Droknar's_Forge",
      mission: false,
    },
    {
      name: "Port Sledge",
      link: "/wiki/Port_Sledge",
      mission: false,
    },
    {
      name: "Camp Rankor",
      link: "/wiki/Camp_Rankor",
      mission: false,
    },
    {
      name: "Ice Caves of Sorrow",
      link: "/wiki/Ice_Caves_of_Sorrow_(outpost)",
      mission: true,
    },
    {
      name: "Iron Mines of Moladune",
      link: "/wiki/Iron_Mines_of_Moladune_(outpost)",
      mission: true,
    },
    {
      name: "Copperhammer Mines",
      link: "/wiki/Copperhammer_Mines",
      mission: false,
    },
    {
      name: "Deldrimor War Camp",
      link: "/wiki/Deldrimor_War_Camp",
      mission: false,
    },

    {
      name: "Thunderhead Keep",
      link: "/wiki/Thunderhead_Keep_(outpost)",
      mission: true,
    },
    {
      name: "Marhan's Grotto",
      link: "/wiki/Marhan%27s_Grotto",
      mission: false,
    },
    {
      name: "The Granite Citadel",
      link: "/wiki/The_Granite_Citadel",
      mission: false,
    },
  ],
};
const ring_of_fire_islands = {
  name: "Ring of Fire Islands",
  outposts: [
    {
      name: "Ember Light Camp",
      link: "/wiki/Ember_Light_Camp",
      mission: false,
    },
    {
      name: "Ring of Fire",
      link: "/wiki/Ring_of_Fire_(outpost)",
      mission: true,
    },
    {
      name: "Abaddon's Mouth",
      link: "/wiki/Abaddon%27s_Mouth_(outpost)",
      mission: true,
    },
    {
      name: "Hell's Precipice",
      link: "/wiki/Hell%27s_Precipice_(outpost)",
      mission: true,
    },
  ],
};
export const prophecy: RegionDatabase = [
  ascalon,
  northern_shiverpeaks,
  kryta,
  maguuma,
  crystal_desert,
  southern_shiverpeaks,
  ring_of_fire_islands,
];

const norn = {
  name: "Norn",
  outposts: [
    {
      name: "Boreal Station",
      link: "/wiki/Boreal_Station",
      mission: false,
    },
    {
      name: "Eye of the North",
      link: "/wiki/Eye_of_the_North_(outpost)",
      mission: false,
    },
    {
      name: "Olafstead",
      link: "/wiki/Olafstead",
      mission: false,
    },
    {
      name: "Sifhalla",
      link: "/wiki/Sifhalla",
      mission: false,
    },
  ],
};
const ebon = {
  name: "Ebon Vanguard",
  outposts: [
    {
      name: "Longeye's Ledge",
      link: "/wiki/Longeye%27s_Ledge",
      mission: false,
    },
    {
      name: "Doomlore Shrine",
      link: "wiki/Doomlore_Shrine",
      mission: false,
    },
  ],
};
const asura = {
  name: "Asura",
  outposts: [
    {
      name: "Gadd's Encampment",
      link: "/wiki/Gadd%27s_Encampment",
      mission: false,
    },
    {
      name: "Tarnished Haven",
      link: "/wiki/Tarnished_Haven",
      mission: false,
    },
    {
      name: "Umbral Grotto",
      link: "/wiki/Umbral_Grotto",
      mission: false,
    },
    {
      name: "Vlox's Falls",
      link: "/wiki/Vlox%27s_Falls",
      mission: false,
    },
  ],
};
const dwarven = {
  name: "Dwarven",
  outposts: [
    {
      name: "Central Transfer Chamber",
      link: "/wiki/Central_Transfer_Chamber",
      mission: false,
    },
  ],
};
export const gwen: RegionDatabase = [norn, ebon, asura, dwarven];

const shing_jea: Region = {
  name: "Shing Jea",
  outposts: [
    {
      name: "Shing Jea Monastery",
      link: "/wiki/Shing_Jea_Monastery",
      mission: false,
    },
    {
      name: "Tsumei Village",
      link: "/wiki/Tsumei_Village",
      mission: false,
    },
    {
      name: "Minister Cho's Estate",
      link: "/wiki/Minister_Cho%27s_Estate_(outpost)",
      mission: true,
    },
    {
      name: "Ran Musu Gardens",
      link: "/wiki/Ran_Musu_Gardens",
      mission: false,
    },
    {
      name: "Seitung Harbor",
      link: "/wiki/Seitung_Harbor",
      mission: false,
    },
    {
      name: "Zen Daijun",
      link: "/wiki/Zen_Daijun_(outpost)",
      mission: true,
    },
    {
      name: "Shing Jea Arena",
      link: "/wiki/Shing_Jea_Arena_(outpost)",
      mission: false,
    },
    {
      name: "Dragon Arena",
      link: "/wiki/Dragon_Arena_(outpost)",
      mission: false,
    },
    {
      name: "Rollerbeetle Racing",
      link: "/wiki/Rollerbeetle_Racing_(outpost)",
      mission: false,
    },
  ],
};
const kaineng: Region = {
  name: "Kaineng",
  outposts: [
    {
      name: "The Marketplace",
      link: "/wiki/The_Marketplace",
      mission: false,
    },
    {
      name: "Kaineng Center",
      link: "/wiki/Kaineng_Center",
      mission: false,
    },
    {
      name: "Vizunah Square (Foreign Quarter)",
      link: "/wiki/Vizunah_Square_(Foreign_Quarter)",
      mission: true,
    },
    {
      name: "Vizunah Square (Local Quarter)",
      link: "/wiki/Vizunah_Square_(Local_Quarter)",
      mission: true,
    },
    {
      name: "Nahpui Quarter",
      link: "/wiki/Nahpui_Quarter_(outpost)",
      mission: true,
    },
    {
      name: "Senji's Corner",
      link: "/wiki/Senji%27s_Corner",
      mission: false,
    },
    {
      name: "Tahnnakai Temple",
      link: "/wiki/Tahnnakai_Temple_(outpost)",
      mission: true,
    },
    {
      name: "Zin Ku Corridor",
      link: "/wiki/Zin_Ku_Corridor",
      mission: false,
    },
    {
      name: "Maatu Keep",
      link: "/wiki/Maatu_Keep",
      mission: false,
    },
    {
      name: "Dragon's Throat",
      link: "/wiki/Dragon%27s_Throat_(outpost)",
      mission: true,
    },
    {
      name: "Sunjiang District",
      link: "/wiki/Sunjiang_District_(outpost)",
      mission: true,
    },
  ],
};
const echovald: Region = {
  name: "Echovald Forest",
  outposts: [
    {
      name: "Tanglewood Copse",
      link: "/wiki/Tanglewood_Copse",
      mission: false,
    },
    {
      name: "Arborstone",
      link: "/wiki/Arborstone",
      mission: true,
    },
    {
      name: "Altrumm Ruins",
      link: "/wiki/Altrumm_Ruins_(outpost)",
      mission: true,
    },
    {
      name: "House zu Heltzer",
      link: "/wiki/House_zu_Heltzer",
      mission: false,
    },
    {
      name: "Saint Anjeka's Shrine",
      link: "/wiki/Saint_Anjeka%27s_Shrine",
      mission: false,
    },
    {
      name: "Lutgardis Conservatory",
      link: "/wiki/Lutgardis_Conservatory",
      mission: false,
    },
    {
      name: "Fort Aspenwood (Kurzick)",
      link: "/wiki/Fort_Aspenwood_(Kurzick)",
      mission: true,
    },
    {
      name: "The Jade Quarry (Kurzick)",
      link: "/wiki/The_Jade_Quarry_(Kurzick)",
      mission: true,
    },
    {
      name: "The Eternal Grove",
      link: "/wiki/The_Eternal_Grove_(outpost)",
      mission: true,
    },
    {
      name: "Aspenwood Gate (Kurzick)",
      link: "/wiki/Aspenwood_Gate_(Kurzick)",
      mission: false,
    },
    {
      name: "Brauer Academy",
      link: "/wiki/Brauer_Academy",
      mission: false,
    },
    {
      name: "Durheim Archives",
      link: "/wiki/Durheim_Archives",
      mission: false,
    },
    {
      name: "Vasburg Armory",
      link: "/wiki/Vasburg_Armory",
      mission: false,
    },
    {
      name: "Jade Flats (Kurzick)",
      link: "/wiki/Jade_Flats_(Kurzick)",
      mission: false,
    },
    {
      name: "Amatz Basin",
      link: "/wiki/Amatz_Basin",
      mission: false,
    },
    {
      name: "Unwaking Waters (Kurzick)",
      link: "/wiki/Unwaking_Waters_(Kurzick)",
      mission: true,
    },
    {
      name: "Harvest Temple",
      link: "/wiki/Harvest_Temple",
      mission: false,
    },
    {
      name: "Urgoz's Warren",
      link: "/wiki/Urgoz%27s_Warren_(outpost)",
      mission: true,
    },
  ],
};
const jade_sea: Region = {
  name: "Jade Sea",
  outposts: [
    {
      name: "Boreas Seabed",
      link: "/wiki/Boreas_Seabed_(outpost)",
      mission: true,
    },
    {
      name: "Zos Shivros Channel",
      link: "/wiki/Zos_Shivros_Channel_(outpost)",
      mission: true,
    },
    {
      name: "Aspenwood Gate (Luxon)",
      link: "/wiki/Aspenwood_Gate_(Luxon)",
      mission: false,
    },
    {
      name: "Cavalon",
      link: "/wiki/Cavalon",
      mission: false,
    },
    {
      name: "Breaker Hollow",
      link: "/wiki/Breaker_Hollow",
      mission: false,
    },
    {
      name: "Bai Paasu Reach",
      link: "/wiki/Bai_Paasu_Reach",
      mission: false,
    },
    {
      name: "Eredon Terrace",
      link: "/wiki/Eredon_Terrace",
      mission: false,
    },
    {
      name: "Gyala Hatchery",
      link: "/wiki/Gyala_Hatchery_(outpost)",
      mission: true,
    },
    {
      name: "Leviathan Pits",
      link: "/wiki/Leviathan_Pits",
      mission: false,
    },
    {
      name: "Seafarer's Rest",
      link: "/wiki/Seafarer%27s_Rest",
      mission: false,
    },
    {
      name: "The Aurios Mines",
      link: "/wiki/The_Aurios_Mines_(outpost)",
      mission: true,
    },
    {
      name: "Jade Flats (Luxon)",
      link: "/wiki/Jade_Flats_(Luxon)",
      mission: false,
    },

    {
      name: "The Jade Quarry (Luxon)",
      link: "/wiki/The_Jade_Quarry_(Luxon)",
      mission: true,
    },
    {
      name: "Fort Aspenwood (Luxon)",
      link: "/wiki/Fort_Aspenwood_(Luxon)",
      mission: true,
    },
    {
      name: "Unwaking Waters (Luxon)",
      link: "/wiki/Unwaking_Waters_(Luxon)",
      mission: true,
    },
    {
      name: "Harvest Temple",
      link: "/wiki/Harvest_Temple",
      mission: false,
    },
    {
      name: "The Deep",
      link: "/wiki/The_Deep_(outpost)",
      mission: true,
    },
  ],
};
const raisu_palace: Region = {
  name: "Raisu Palace",
  outposts: [].concat([
    {
      name: "Raisu Palace",
      link: "/wiki/Raisu_Palace_(outpost)",
      mission: true,
    },
    {
      name: "Imperial Sanctum",
      link: "/wiki/Imperial_Sanctum_(outpost)",
      mission: true,
    },
  ]),
};
export const faction: RegionDatabase = [
  shing_jea,
  kaineng,
  jade_sea,
  echovald,
  raisu_palace,
];

const istan: Region = {
  name: "Istan",
  outposts: [
    {
      name: "Chahbek Village",
      link: "/wiki/Chahbek_Village_(outpost)",
      mission: true,
    },
    {
      name: "Kamadan, Jewel of Istan",
      link: "/wiki/Kamadan,_Jewel_of_Istan",
      mission: false,
    },
    {
      name: "Sunspear Great Hall",
      link: "/wiki/Sunspear_Great_Hall",
      mission: false,
    },
    {
      name: "Champion's Dawn",
      link: "/wiki/Champion%27s_Dawn",
      mission: false,
    },
    {
      name: "The Astralarium",
      link: "/wiki/The_Astralarium",
      mission: false,
    },
    {
      name: "Jokanur Diggings",
      link: "/wiki/Jokanur_Diggings_(outpost)",
      mission: true,
    },
    {
      name: "Beknur Harbor",
      link: "/wiki/Beknur_Harbor",
      mission: false,
    },
    {
      name: "Blacktide Den",
      link: "/wiki/Blacktide_Den_(outpost)",
      mission: true,
    },
    {
      name: "Kodlonu Hamlet",
      link: "/wiki/Kodlonu_Hamlet",
      mission: false,
    },
    {
      name: "Consulate Docks",
      link: "/wiki/Consulate_Docks_(outpost)",
      mission: true,
    },
    {
      name: "Sunspear Arena",
      link: "/wiki/Sunspear_Arena_(outpost)",
      mission: false,
    },
  ],
};
const kourna: Region = {
  name: "Kourna",
  outposts: [
    {
      name: "Yohlon Haven",
      link: "/wiki/Yohlon_Haven",
      mission: false,
    },
    {
      name: "Nundu Bay",
      link: "/wiki/Nundu_Bay_(outpost)",
      mission: true,
    },
    {
      name: "Dajkah Inlet",
      link: "/wiki/Dajkah_Inlet_(outpost)",
      mission: true,
    },
    {
      name: "Sunspear Sanctuary",
      link: "/wiki/Sunspear_Sanctuary",
      mission: false,
    },
    {
      name: "Venta Cemetery",
      link: "/wiki/Venta_Cemetery_(outpost)",
      mission: true,
    },
    {
      name: "Kodonur Crossroads",
      link: "/wiki/Kodonur_Crossroads_(outpost)",
      mission: true,
    },
    {
      name: "Camp Hojanu",
      link: "/wiki/Camp_Hojanu",
      mission: false,
    },
    {
      name: "Rilohn Refuge",
      link: "/wiki/Rilohn_Refuge_(outpost)",
      mission: true,
    },
    {
      name: "Moddok Crevice",
      link: "/wiki/Moddok_Crevice_(outpost)",
      mission: true,
    },
    {
      name: "Pogahn Passage",
      link: "/wiki/Pogahn_Passage_(outpost)",
      mission: true,
    },
  ],
};
const vabbi: Region = {
  name: "Vabbi",
  outposts: [
    {
      name: "Wehhan Terraces",
      link: "/wiki/Wehhan_Terraces",
      mission: false,
    },
    {
      name: "Chantry of Secrets",
      link: "/wiki/Chantry_of_Secrets",
      mission: false,
    },
    {
      name: "Yahnur Market",
      link: "/wiki/Yahnur_Market",
      mission: false,
    },

    {
      name: "The Kodash Bazaar",
      link: "/wiki/The_Kodash_Bazaar",
      mission: false,
    },
    {
      name: "Grand Court of Sebelkeh",
      link: "/wiki/Grand_Court_of_Sebelkeh_(outpost)",
      mission: true,
    },
    {
      name: "Honur Hill",
      link: "/wiki/Honur_Hill",
      mission: false,
    },
    {
      name: "Mihanu Township",
      link: "/wiki/Mihanu_Township",
      mission: false,
    },
    {
      name: "Tihark Orchard",
      link: "/wiki/Tihark_Orchard_(outpost)",
      mission: true,
    },
    {
      name: "Dasha Vestibule",
      link: "/wiki/Dasha_Vestibule_(outpost)",
      mission: true,
    },
    {
      name: "Dzagonur Bastion",
      link: "/wiki/Dzagonur_Bastion_(outpost)",
      mission: true,
    },
    {
      name: "Jennur's Horde",
      link: "/wiki/Jennur%27s_Horde_(outpost)",
      mission: true,
    },
    {
      name: "Basalt Grotto",
      link: "/wiki/Basalt_Grotto",
      mission: false,
    },
  ],
};
const desolation: Region = {
  name: "The Desolation",
  outposts: [
    {
      name: "Basalt Grotto",
      link: "/wiki/Basalt_Grotto",
      mission: false,
    },
    {
      name: "Gate of Desolation",
      link: "/wiki/Gate_of_Desolation_(outpost)",
      mission: true,
    },
    {
      name: "Remains of Sahlahja",
      link: "/wiki/Remains_of_Sahlahja_(outpost)",
      mission: true,
    },
    {
      name: "Bone Palace",
      link: "/wiki/Bone_Palace",
      mission: false,
    },
    {
      name: "Ruins of Morah",
      link: "/wiki/Ruins_of_Morah_(outpost)",
      mission: true,
    },
    {
      name: "The Mouth of Torment",
      link: "/wiki/The_Mouth_of_Torment",
      mission: false,
    },
    {
      name: "Lair of the Forgotten",
      link: "/wiki/Lair_of_the_Forgotten",
      mission: false,
    },
  ],
};
const vortex: Region = {
  name: "Realm of Torment",
  outposts: [
    {
      name: "Gate of Torment",
      link: "/wiki/Gate_of_Torment",
      mission: false,
    },
    {
      name: "Gate of Fear",
      link: "/wiki/Gate_of_Fear",
      mission: false,
    },
    {
      name: "Gate of Secrets",
      link: "/wiki/Gate_of_Secrets",
      mission: false,
    },
    {
      name: "Gate of the Nightfallen Lands",
      link: "/wiki/Gate_of_the_Nightfallen_Lands",
      mission: false,
    },

    {
      name: "Gate of Madness",
      link: "/wiki/Gate_of_Madness_(outpost)",
      mission: true,
    },
    {
      name: "Gate of Pain",
      link: "/wiki/Gate_of_Pain_(outpost)",
      mission: true,
    },

    {
      name: "The Shadow Nexus",
      link: "/wiki/The_Shadow_Nexus_(outpost)",
      mission: true,
    },
    {
      name: "Abaddon's Gate",
      link: "/wiki/Abaddon%27s_Gate_(outpost)",
      mission: true,
    },
    {
      name: "Gate of Anguish",
      link: "/wiki/Gate_of_Anguish",
      mission: true,
    },
  ],
};
export const nightfall: RegionDatabase = [
  istan,
  kourna,
  vabbi,
  desolation,
  vortex,
];

export const all_outposts = [
  ...pre_searing.flatMap((r) => r.outposts),
  ...prophecy.flatMap((r) => r.outposts),
  ...faction.flatMap((r) => r.outposts),
  ...nightfall.flatMap((r) => r.outposts),
  ...gwen.flatMap((r) => r.outposts),
];

export function getOutpostByLink(link: string): Outpost {
  return all_outposts.find((o) => o.link === link);
}

export function getSuggestedOutposts(outpost: Outpost): Outpost[] {
  const index = all_outposts.indexOf(outpost);
  const max = all_outposts.length;

  return all_outposts
    .slice(Math.max(index - 2, 0), Math.min(index + 3, max - 1))
    .filter((o) => o !== outpost);
}

export function getOutpostCampaign(outpost: Outpost): Campaign {
  if (
    prophecy.flatMap((r) => r.outposts).find((o) => o.link === outpost.link)
  ) {
    return "Prophecy";
  }

  if (faction.flatMap((r) => r.outposts).find((o) => o.link === outpost.link)) {
    return "Faction";
  }

  if (
    nightfall.flatMap((r) => r.outposts).find((o) => o.link === outpost.link)
  ) {
    return "Nightfall";
  }

  return "GWEN";
}
