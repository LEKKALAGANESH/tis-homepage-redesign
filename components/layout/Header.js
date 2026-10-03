"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "@/components/ui/Brand";
import { nav } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const close = () => setOpen(false);

  // While open: focus the first link, close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return <header className="header">
    <Brand href="#top" label="Tula's International School home" />
    <nav className="desktop-nav" aria-label="Primary navigation">
      {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <a className="nav-cta" href="#admissions">Enquire <ArrowUpRight size={15}/></a>
    </nav>
    <button ref={buttonRef} className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav">
      {open ? <X/> : <Menu/>}
    </button>
    {open && <nav id="mobile-nav" ref={menuRef} className="mobile-nav" aria-label="Mobile navigation">
      {nav.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}<ArrowUpRight size={16}/></a>)}
      <a href="#admissions" onClick={close} className="mobile-cta">Start your journey <ArrowRight size={16}/></a>
    </nav>}
  </header>;
}
