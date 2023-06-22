import { create } from "zustand";

export const useStoreScore = create((set) => ({
  currentScore: 0,
  addScore: (newScore) => set({ currentScore: newScore }),
}));
