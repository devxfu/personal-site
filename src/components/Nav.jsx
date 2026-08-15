import { useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const TABS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ activeSection, sectionIds }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-(--nav-h) bg-base backdrop-blur-md border-b border-surface0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Left: mark */}
        <a href="#" className="font-mono text-accent text-lg font-bold tracking-tight focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
          Alex.F
        </a>

        {/* Center: tabs */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
            className={`transition-colors border-b-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              activeSection === tab.id
                ? "text-accent border-accent"
              : "text-subtext0 border-transparent hover:text-text"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Right: theme toggle + hamburger (normal flex items, no absolute) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger: only visible <768px */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-surface0 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <Menu className="w-5 h-5 text-subtext0" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mantle border-b border-surface0">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 font-mono text-sm">
            {TABS.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors border-b-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeSection === tab.id
                  ? "text-accent border-accent"
                  : "text-subtext0 border-transparent hover:text-text"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
