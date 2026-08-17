import { timeline } from "../data/timeline.js";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatMonthYear(iso) {
  const d = new Date(iso + "T00:00:00");
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function durationLabel(startIso, endIso) {
  const now = new Date();
  const start = new Date(startIso + "T00:00:00");
  const end = endIso ? new Date(endIso + "T00:00:00") : now;
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  if (months < 0) return "";
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return years > 0 ? `${years}y${rem ? ` ${rem}mo` : ""}` : `${rem}mo`;
}

const TYPE_STYLES = {
  work: "border-green text-green",
  education: "border-blue/40 text-blue",
};
const FALLBACK_TYPE_STYLE = "border-surface1 text-subtext0";

const sorted = [...timeline].sort((a, b) => (a.start < b.start ? 1 : a.start > b.start ? -1 : 0));
export default function Timeline() {
  return (
    <ul className="relative flex-1 flex flex-col">
      {sorted.length >= 2 && (
        <span aria-hidden="true" className="absolute left-0.5 top-1.5 bottom-1 w-1 bg-surface1" />
      )}
      {sorted.map((entry, i) => {
        const ongoing = !entry.end;
        const next = sorted[i + 1];
        const showAccentLine = next != null && ongoing && !next.end;
        return (
          <li key={entry.id} className="relative flex gap-4 py-3">
            <span
              aria-hidden="true"
              className={
                "relative z-10 mt-1.5 h-2 w-2 shrink-0 rounded-full " +
                (ongoing
                  ? "bg-accent ring-4 ring-accent/25 shadow-[0_0_6px_1px] shadow-accent/60"
                  : "border-2 border-overlay1 bg-base")
              }
            />
            {showAccentLine && (
              <span aria-hidden="true" className="absolute left-0.5 top-1.5 -bottom-5.5 w-1 bg-accent" />
            )}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-sm font-semibold text-text">{entry.title}</span>
                {entry.type && (
                  <span
                    className={
                      "rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide " +
                      (TYPE_STYLES[entry.type] ?? FALLBACK_TYPE_STYLE)
                    }
                  >
                    {entry.type}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-subtext1">
                {entry.org} · {formatMonthYear(entry.start)} –{" "}
                {ongoing ? "Present" : formatMonthYear(entry.end)}
                {ongoing && (
                  <span className="text-accent"> · {durationLabel(entry.start, null)}</span>
                )}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-subtext0">{entry.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}