"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// The initial theme is set before paint by the boot script in app/layout.js; this only syncs and toggles it.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem("tis-theme", theme); } catch {}
    setDark(!dark);
  };

  return <button className="theme-toggle" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
    {dark ? <Sun size={17} /> : <Moon size={17} />}
  </button>;
}
