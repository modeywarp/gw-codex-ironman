import { hasAnyQueryParam } from "../history";

export function canStore() {
  return !hasAnyQueryParam();
}

export function isPreview() {
  return !canStore();
}
