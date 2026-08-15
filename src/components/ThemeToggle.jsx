import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="p-2 rounded-md transition-colors ring-2 ring-transparent focus-visible:ring-accent focus-visible:outline-none"
    >
      {theme === "dark" ? <Sun className="text-subtext0 hover:text-accent" /> : <Moon className="text-subtext0 hover:text-accent" />}
    </button>
  );
}
