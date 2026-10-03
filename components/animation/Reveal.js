"use client";

import { useInView } from "@/hooks/useInView";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return <div ref={ref} className={"reveal " + (visible ? "is-visible " : "") + className} style={{ "--delay": delay + "ms" }}>{children}</div>;
}
