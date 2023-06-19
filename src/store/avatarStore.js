import { create } from "zustand";

export const useStoreAvatar = create((set) => ({
  selectedId: null,
  setId: (newId) => set({ selectedId: newId }),
}));
