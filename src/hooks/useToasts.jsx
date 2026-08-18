import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const MAX_TOASTS = 5;
const AUTO_DISMISS_MS = 3000;
const EXIT_MS = 300;

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const dismissing = useRef(new Set());
  const timers = useRef(new Map());

  const remove = useCallback((id) => {
    if (dismissing.current.has(id)) return;
    dismissing.current.add(id);
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, leaving: true } : t))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      dismissing.current.delete(id);
    }, EXIT_MS);
  }, []);

  const toast = useCallback((message) => {
    setToasts((prev) =>
      [{ id: crypto.randomUUID(), message, leaving: false }, ...prev].slice(
        0,
        MAX_TOASTS
      )
    );
  }, []);

  useEffect(() => {
    const present = new Set(toasts.map((t) => t.id));
    for (const [id, timer] of timers.current) {
      if (!present.has(id)) {
        clearTimeout(timer);
        timers.current.delete(id);
      }
    }
    for (const t of toasts) {
      if (timers.current.has(t.id)) continue;
      timers.current.set(
        t.id,
        setTimeout(() => remove(t.id), AUTO_DISMISS_MS)
      );
    }
  }, [toasts, remove]);

  useEffect(() => {
    const pending = timers.current;
    return () => {
      for (const timer of pending.values()) clearTimeout(timer);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, remove }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
