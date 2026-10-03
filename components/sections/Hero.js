import { ArrowDown, ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid" />
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="hero-content">
      <Reveal><p className="eyebrow"><Sparkles size={14}/> Dehradun · India · Est. 2012</p></Reveal>
      <Reveal delay={80}><h1>Where <em>tradition</em><br/>meets tomorrow.</h1></Reveal>
      <Reveal delay={160}><p className="hero-copy">A modern Gurukul shaping curious minds, confident leaders and grounded global citizens through academics, sport, creativity and character.</p></Reveal>
      <Reveal delay={240}><div className="hero-actions">
        <a className="button primary" href="#admissions">Explore admissions <ArrowUpRight size={17}/></a>
        <a className="button quiet" href="#about"><span className="button-icon"><ArrowDown size={14}/></span> Discover Tula's</a>
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
