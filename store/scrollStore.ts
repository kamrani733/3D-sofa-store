import { create } from "zustand";

interface ScrollStore {
  scrollY: number;
  scrollProgress: number; // 0 to 1
  setScroll: (y: number, total: number) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollY: 0,
  scrollProgress: 0,
  setScroll: (y, total) =>
    set({ scrollY: y, scrollProgress: Math.min(y / total, 1) }),
}));
