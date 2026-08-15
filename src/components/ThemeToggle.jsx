import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="p-2 rounded-md hover:bg-surface0 transition-colors ring-2 ring-transparent focus-visible:ring-mauve"
    >
      {theme === "dark" ? <Sun className="text-subtext0 hover:text-mauve" /> : <Moon className="text-subtext0 hover:text-mauve" />}
    </button>
  );
}
