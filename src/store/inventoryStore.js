import { create } from "zustand";

export const useStoreInventory = create((set) => ({
  selectedId: 1,
  setId: (newId) => set({ selectedId: newId }),
}));