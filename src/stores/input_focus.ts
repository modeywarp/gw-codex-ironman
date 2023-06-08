import { writable } from "svelte/store";

export enum InputFocusState {
  None,
  CharacterName,
  Outpost,
}

/**
 * when set to the `InputFocusState` variants other than `None`, the browser focus
 * will be moved to various inputs of the application.
 */
export const store_input_focus = writable(InputFocusState.None);

store_input_focus.subscribe((state) => {
  // set the state back to None automatically
  if (state !== InputFocusState.None) {
    store_input_focus.set(InputFocusState.None);
  }
});
