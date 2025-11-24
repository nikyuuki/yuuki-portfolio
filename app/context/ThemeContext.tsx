"use client";

import { createContext, useContext } from "react";

export const ThemeContext = createContext<{ isDay: boolean }>({ isDay: true });

export function useTheme() {
  return useContext(ThemeContext);
}
