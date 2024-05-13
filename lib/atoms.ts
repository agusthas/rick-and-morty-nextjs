import { AtomEffect, atom } from "recoil";

type Location = {
  id: string;
  name: string;
  location: string;
  uId: string;
};

const store = typeof window !== "undefined" ? window.localStorage : null;

const localStorageEffect =
  (key: string): AtomEffect<Location[]> =>
  ({ setSelf, onSet }) => {
    if (store) {
      const savedValue = store.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue) as Location[]);
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? store.removeItem(key)
          : store.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const locationListState = atom<Location[]>({
  key: "locationListState",
  default: [],
  effects: [localStorageEffect("locationList")],
});
