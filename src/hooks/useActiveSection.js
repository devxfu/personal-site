import { useEffect, useRef, useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionIdsRef = useRef([]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main [id]"));
    sectionIdsRef.current = sections.map((s) => s.id);
    if (sections.length === 0) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      // Probe point: 25% down the viewport. A section is "active" when its
      // top has passed above this line.
      const probe = window.scrollY + window.innerHeight * 0.25;
      let current = sections[0].id;
      for (const s of sections) {
        if (s.offsetTop <= probe) current = s.id;
      }
      // Bottom of page: force the last section (Contact) active.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { activeSection, sectionIds: sectionIdsRef.current };
}
