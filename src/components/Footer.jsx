export default function Footer() {
  return (
    <footer className="border-t border-surface0">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-3 font-mono text-sm text-subtext0 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Alexander Fu</p>
          <p>Built with React · Vite · Tailwind</p>
          <a
            href="#hero"
            className="rounded transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
