"use client";

import { useEffect, useRef } from "react";

// Writes straight to the DOM node so pointer movement never triggers a React render.
export default function CustomCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      node.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      node.dataset.active = "true";
    };
    const onOver = (e) => {
      node.dataset.hover = String(Boolean(e.target.closest("a, button")));
    };
    const onLeave = () => { node.dataset.active = "false"; };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="custom-cursor" data-active="false" data-hover="false" aria-hidden="true" />;
}
