import { hasAnyQueryParam } from "../history";

export function canStore() {
  return !hasAnyQueryParam();
}
