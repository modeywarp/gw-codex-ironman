import { hasAnyQueryParam } from "../history";

export function isInPreview() {
  return !hasAnyQueryParam();
}
