import { useState, useRef, useEffect } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionIdsRef = useRef([]);
  const ratios = useRef(new Map());

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const ids = Array.from(main.querySelectorAll("[id]")).map(
      (el) => el.id
    );
    sectionIdsRef.current = ids;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.intersectionRatio);
        }
        let best = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios.current) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActiveSection(best);
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1.0] }
    );

    for (const id of ids) {
      const el = main.querySelector(`#${CSS.escape(id)}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return { activeSection, sectionIds: sectionIdsRef.current };
}
