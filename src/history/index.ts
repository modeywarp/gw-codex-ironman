import { get } from "svelte/store";
import {
  store_character_name,
  store_primary_profession,
  store_secondary_profession,
} from "../stores/character";
import { store_outposts, store_selected_outpost } from "../stores/outposts";
import { store_campaign, type Campaign } from "../stores/campaign";
import type { Profession, SecondaryProfession } from "../game/professions";
import { getOutpostByLink, getOutpostNyName, type Outpost } from "../game/outposts";
import { store_selected_skillpacks } from "../stores/skillpacks";
import type { SkillOrigin } from "../game/codegen/subgroups/campaigns";

export function getUrlFromStores() {
  //@ts-ignore
  const url = new URL(location);

  url.searchParams.set("cn", get(store_character_name));
  url.searchParams.set("pp", get(store_primary_profession));
  url.searchParams.set("ps", get(store_secondary_profession));
  url.searchParams.set("otpst", get(store_selected_outpost).name);
  url.searchParams.set("cmpgn", get(store_campaign));
  url.searchParams.set("skpk", get(store_selected_skillpacks).join(","));

  return url.toString();
}

function getQueryParam(key) {
  //@ts-ignore
  return new URL(location).searchParams.get(key);
}

export function hasAnyQueryParam() {
  //@ts-ignore
  return Array.from(new URL(location).searchParams.keys()).length > 0;
}

export function getCharacterNameFromUrl() {
  return getQueryParam("cn");
}

export function getPrimaryProfessionFromUrl() {
  return getQueryParam("pp") as Profession;
}

export function getSecondaryProfessionFromUrl() {
  return getQueryParam("ps") as SecondaryProfession;
}

export function getCampaignFromUrl() {
  return getQueryParam("cmpgn") as Campaign;
}

export function getOutpostFromUrl() {
  return getOutpostNyName(getQueryParam("otpst"));
}

export function getSkillpacksFromUrl() {
  const s = getQueryParam("skpk");

  if (!s) {
    return null;
  }

  return s.split(",") as SkillOrigin[];
}

export interface HistoryState {
  campaign: Campaign;
  outpost_link: Outpost["link"]
}

export function pushHistoryState(state: HistoryState) {
  if (!history.state) {
    history.replaceState(state, "");
  } else {
    const current_state = history.state as HistoryState;


    if (state.campaign === current_state.campaign && state.outpost_link === current_state.outpost_link) {
      return;
    }

    history.pushState(state, "");
  }
}

window.addEventListener('popstate', (event) => {
  const current_state = event.state as HistoryState;

  store_campaign.set(current_state.campaign);

  setTimeout(() => {
    const outpost = getOutpostByLink(current_state.outpost_link);

    store_selected_outpost.set(outpost);
  }, 100);
})

