import { hasAnyQueryParam } from "../history";

/**
 * returns whether stores are allowed to store their values into the storage
 */
export function canStore() {
  return !hasAnyQueryParam();
}

/**
 * returns whether the current tab is in preview mode, meaning changes made in
 * the current tab shouldn't be reflected to other tabs and to the storage
 */
export function isPreview() {
  return !canStore();
}
