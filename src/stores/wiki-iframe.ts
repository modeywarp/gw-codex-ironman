import { writable } from "svelte/store";

let opened_timestamp = Date.now();

export const store_wiki_iframe = writable<string | null>(null);

store_wiki_iframe.subscribe((l) => {
  if (l !== null) {
    opened_timestamp = Date.now();
  }
});

export function closeIframe() {
  if (Date.now() >= opened_timestamp + 200) {
    store_wiki_iframe.set(null);
  }
}
