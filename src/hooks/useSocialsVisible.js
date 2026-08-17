import { useEffect, useState } from "react";

export default function useSocialsVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-socials]"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(entries.some((e) => e.isIntersecting));
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return visible;
}
