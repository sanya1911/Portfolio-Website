// Dark mode is disabled — light theme only.
// This wrapper is kept so Nav.tsx imports don't break,
// but toggle() is a no-op and theme is always "light".
"use client";

import { createContext, useContext } from "react";

type Theme = "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: "light", toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
