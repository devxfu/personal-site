import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useToast } from "../hooks/useToasts.jsx";

function ToastItem({ toast, remove }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const state = mounted
    ? toast.leaving
      ? "opacity-0 -translate-y-2"
      : "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-3";

  return (
    <div
      role="status"
      className={`pointer-events-auto flex w-80 max-w-[calc(100vw-2rem)] items-start gap-3 rounded-xl border border-surface1 bg-mantle p-4 font-mono text-sm text-text shadow-lg transition-[opacity,transform] duration-300 ease-out ${state}`}
    >
      <span className="min-w-0">{toast.message}</span>
      <button
        aria-label="Dismiss notification"
        className="shrink-0 rounded-md p-1 text-subtext0 transition-colors hover:bg-surface0 hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        onClick={() => remove(toast.id)}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function Toasts() {
  const { toasts, remove } = useToast();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed right-4 top-(--nav-h) z-[60] flex flex-col gap-2"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} remove={remove} />
      ))}
    </div>
  );
}
