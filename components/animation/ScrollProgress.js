"use client";

import { useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const ref = useRef(null);
  useScrollProgress(ref);
  return <div ref={ref} className="scroll-progress" style={{ transform: "scaleX(0)" }} aria-hidden="true" />;
}
