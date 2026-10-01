"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, ChevronDown, Compass, Moon, MoveUpRight,
  Play, Sparkles, Sun, X, Menu, Quote, ArrowRight
} from "lucide-react";

const nav = [
  ["About", "#about"], ["Academics", "#academics"], ["Campus Life", "#life"], ["Admissions", "#admissions"]
];

const stats = [
  ["22", "Acre campus"], ["16+", "Olympic sports"], ["24/7", "Medical assistance"], ["6:1", "Student-teacher ratio"]
];

const programs = [
  { no: "01", title: "Academic excellence", text: "A CBSE learning environment built around reasoning, analytical thinking, project-based learning and real-world exposure.", tag: "CBSE · IV–XII" },
  { no: "02", title: "The Modern Gurukul", text: "Traditional values meet modern infrastructure, technology, mentorship and opportunities beyond the classroom.", tag: "Mind · Body · Soul" },
  { no: "03", title: "Global readiness", text: "Students are encouraged to explore communication, leadership, technology, sport, arts and experiences that widen their world.", tag: "Learn · Lead · Grow" }
];

const life = [
  ["01", "Sports", "16+ sports create a daily rhythm of discipline, teamwork and confidence."],
  ["02", "Learning spaces", "Digital workstations, laboratories and a library support hands-on learning."],
  ["03", "Boarding", "Separate, well-equipped residential facilities create a supported campus life."],
  ["04", "Clubs & societies", "Spaces to discover interests, build friendships and develop hidden talents."]
];

const testimonials = [
  ["Namita Agarwal", "M/O Krishna Agarwal", "The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child's growth."],
  ["Tashi Tsering", "F/O Jigmet Skaldon", "The sports, academics and extra-curricular activities have helped Krishna in knowing himself better."],
  ["Sandeep Kumar", "F/O Aryan", "Our experience is very amazing with school. Staff is very cooperative and supportive."]
];

function Reveal({ children, className = "", delay = 0 }) {
  return <div className={"reveal " + className} style={{ "--delay": delay + "ms" }}>{children}</div>;
}

function InteractiveLayer() {
  const [dark, setDark] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY, active: true });
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return <>
    <div className="scroll-progress" style={{ transform: "scaleX(" + progress + ")" }} />
    <div className="custom-cursor" style={{ left: cursor.x, top: cursor.y }} data-active={cursor.active} />
    <button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  </>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <a href="#" className="brand" aria-label="Tula's International School home">
      <span className="brand-mark">T</span>
      <span><b>TULA'S</b><small>INTERNATIONAL SCHOOL</small></span>
    </a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <a className="nav-cta" href="#admissions">Enquire <ArrowUpRight size={15}/></a>
    </nav>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
      {open ? <X/> : <Menu/>}
    </button>
    {open && <div className="mobile-nav">
      {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}
      <a href="#admissions" onClick={() => setOpen(false)} className="mobile-cta">Start your journey <ArrowRight size={16}/></a>
    </div>}
  </header>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid" />
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="hero-content">
      <Reveal><p className="eyebrow"><Sparkles size={14}/> Dehradun · India · Est. 2012</p></Reveal>
      <Reveal delay={80}><h1>Where <em>tradition</em><br/>meets tomorrow.</h1></Reveal>
      <Reveal delay={160}><p className="hero-copy">A modern Gurukul shaping curious minds, confident leaders and grounded global citizens through academics, sport, creativity and character.</p></Reveal>
      <Reveal delay={240}><div className="hero-actions">
        <a className="button primary" href="#admissions">Explore admissions <ArrowUpRight size={17}/></a>
        <a className="button quiet" href="#about"><span className="play"><Play size={13} fill="currentColor"/></span> Discover Tula's</a>
      </div></Reveal>
    </div>
    <div className="hero-side-note"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></div>
    <div className="hero-card">
      <span className="hero-card-label">The Tula's difference</span>
      <strong>Mind. Body. Soul.</strong>
      <p>One campus. Endless ways to grow.</p>
    </div>
  </section>;
}

function Stats() {
  return <section className="stats-wrap"><div className="stats">
    {stats.map(([n, l], i) => <Reveal key={n} delay={i * 70}><div className="stat"><strong>{n}</strong><span>{l}</span></div></Reveal>)}
  </div></section>;
}

function About() {
  return <section className="section about" id="about">
    <div className="section-kicker"><span>01</span><i /> Our story</div>
    <div className="split">
      <Reveal><div><p className="display">Not just a school.<br/><em>A place to belong.</em></p></div></Reveal>
      <Reveal delay={120}><div className="body-copy"><p>Tula's International School was founded in 2012 with a simple ambition: create an environment where every student can grow beyond the classroom.</p><p>Today, the campus brings together the values of a traditional Gurukul with progressive education, modern facilities, technology, sport and a strong sense of community.</p><a className="text-link" href="#academics">Our philosophy <ArrowRight size={16}/></a></div></Reveal>
    </div>
    <div className="quote-band"><Quote size={28}/><p>“We see the potential in every student and help them bring it to life.”</p></div>
  </section>;
}

function Academics() {
  return <section className="section dark-section" id="academics">
    <div className="section-kicker light"><span>02</span><i /> Learning</div>
    <div className="section-heading"><Reveal><p className="display light-text">Education that<br/><em>opens doors.</em></p></Reveal><Reveal delay={120}><p className="body-copy light-copy">The academic journey blends CBSE foundations with experiential learning, technology, leadership and opportunities that encourage students to think for themselves.</p></Reveal></div>
    <div className="program-list">{programs.map((p, i) => <Reveal key={p.no} delay={i * 90}><article className="program">
      <span>{p.no}</span><div><h3>{p.title}</h3><p>{p.text}</p></div><b>{p.tag}</b><ArrowUpRight className="program-arrow"/>
    </article></Reveal>)}</div>
  </section>;
}

function Life() {
  return <section className="section life" id="life">
    <div className="section-kicker"><span>03</span><i /> Campus life</div>
    <Reveal><div className="life-heading"><p className="display">Every day is an<br/><em>opportunity.</em></p><p className="body-copy">Learning doesn't stop when the bell rings. Campus life gives students room to compete, create, collaborate and become more independent.</p></div></Reveal>
    <div className="life-grid">{life.map(([n,t,d],i)=><Reveal key={n} delay={i*70}><article className="life-card"><span>{n}</span><div className="life-icon">{["◒","✦","⌂","◇"][i]}</div><h3>{t}</h3><p>{d}</p><a href="#admissions" aria-label={"Learn more about " + t}><ArrowUpRight size={17}/></a></article></Reveal>)}</div>
  </section>;
}

function Testimonials() {
  return <section className="section testimonials">
    <div className="section-kicker"><span>04</span><i /> Voices</div>
    <Reveal><div className="testimonial-title"><p className="display">What families<br/><em>feel at Tula's.</em></p><span>Real experiences from the Tula's community.</span></div></Reveal>
    <div className="testimonial-grid">{testimonials.map(([name, role, text],i)=><Reveal key={name} delay={i*80}><article className="testimonial"><Quote size={24}/><p>“{text}”</p><footer><span className="avatar">{name[0]}</span><span><b>{name}</b><small>{role}</small></span></footer></article></Reveal>)}</div>
  </section>;
}

function Admissions() {
  return <section className="admissions" id="admissions">
    <div className="admissions-glow" />
    <Reveal><p className="eyebrow light-eyebrow"><Compass size={14}/> Admissions · 2027</p></Reveal>
    <Reveal delay={80}><h2>Give curiosity<br/><em>a place to grow.</em></h2></Reveal>
    <Reveal delay={160}><p>Take the first step toward a school experience built around possibility.</p></Reveal>
    <Reveal delay={240}><a className="button light-button" href="https://tis.edu.in/admission-procedure/">Explore admissions <ArrowUpRight size={17}/></a></Reveal>
    <div className="admission-meta"><span>Classes IV–XII</span><span>Dehradun, Uttarakhand</span><span>+91 98379 83791</span></div>
  </section>;
}

function Footer() {
  return <footer className="footer">
    <div><a href="#top" className="brand footer-brand"><span className="brand-mark">T</span><span><b>TULA'S</b><small>INTERNATIONAL SCHOOL</small></span></a><p>Modern values. Global outlook.<br/>A school built for becoming.</p></div>
    <div className="footer-links"><div><b>Explore</b><a href="#about">About</a><a href="#academics">Academics</a><a href="#life">Campus Life</a></div><div><b>Connect</b><a href="https://tis.edu.in/contact-us/">Contact</a><a href="https://tis.edu.in/faq/">FAQs</a><a href="https://tis.edu.in/careers/">Careers</a></div></div>
    <div className="footer-bottom"><span>© 2026 Tula's International School</span><span>Dhoolkot, Dehradun · India</span></div>
  </footer>;
}

export default function SiteShell() {
  return <><InteractiveLayer/><Header/><main><Hero/><Stats/><About/><Academics/><Life/><Testimonials/><Admissions/></main><Footer/></>;
}
