export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-(--nav-h)">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="font-mono text-2xl font-semibold text-text mb-6">Resume</h2>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center rounded-md border border-surface1 bg-base px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-surface2 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
