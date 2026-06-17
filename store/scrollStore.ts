import { create } from "zustand";

export type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

export const useTheme = create<ThemeStore>((set, get) => ({
  theme: 'dark',
  toggle: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
  setTheme: (t) => set({ theme: t }),
}));

// Color tokens per theme. Components pull from here via useTheme().
export const tokens = {
  dark: {
    bg: '#0f0d0a',
    text: '#e8e0d4',
    muted: '#7a6e61',
    accent: '#a08c6e',
  },
  light: {
    bg: '#f4f0e8',
    text: '#2a241d',
    muted: '#6b5d4f',
    accent: '#9a7b4f',
  },
} as const;
