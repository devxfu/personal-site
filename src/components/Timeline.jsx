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

const sorted = [...timeline].sort((a, b) => (a.start < b.start ? 1 : a.start > b.start ? -1 : 0));
const ongoingIds = new Set(sorted.filter((e) => e.end === null).map((e) => e.id));
const hasConnectLine = ongoingIds.size >= 2;

export default function Timeline() {
  return (
    <ul className="relative flex-1 flex flex-col">
      {hasConnectLine && (
        <span aria-hidden="true" className="absolute left-1.25 top-1 bottom-1 w-px bg-accent" />
      )}
      {sorted.map((entry) => (
        <li key={entry.id} className="relative flex gap-4 py-3">
          <span
            aria-hidden="true"
            className={
              "relative z-10 mt-1 h-3 w-3 shrink-0 rounded-full " +
              (entry.end === null ? "bg-accent" : "border-2 border-overlay1 bg-base")
            }
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-mono text-sm font-semibold text-text">{entry.title}</span>
              <span
                className={
                  "rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide " +
                  (entry.type === "work" ? "border-surface1 text-subtext0" : "border-blue/40 text-blue")
                }
              >
                {entry.type}
              </span>
            </div>
            <p className="font-mono text-xs text-subtext1">
              {entry.org} · {formatMonthYear(entry.start)} –{" "}
              {entry.end === null ? "Present" : formatMonthYear(entry.end)}
              {entry.end === null && (
                <span className="text-accent"> · {durationLabel(entry.start, null)}</span>
              )}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-subtext0">{entry.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
