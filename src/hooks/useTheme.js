import { useState, useEffect } from "react";

const STORAGE_KEY = "theme";
const THEMES = { light: "light", dark: "dark" };

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || THEMES.dark
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.dark ? THEMES.light : THEMES.dark));
  };

  return { theme, toggleTheme };
}
