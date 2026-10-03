import { ArrowUpRight, Compass } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function Admissions() {
  return <section className="admissions" id="admissions">
    <div className="admissions-glow" />
    <Reveal><p className="eyebrow light-eyebrow"><Compass size={14}/> Admissions · 2027</p></Reveal>
    <Reveal delay={80}><h2>Give curiosity<br/><em>a place to grow.</em></h2></Reveal>
    <Reveal delay={160}><p>Take the first step toward a school experience built around possibility.</p></Reveal>
    <Reveal delay={240}><a className="button light-button" href="https://tis.edu.in/admission-procedure/">Explore admissions <ArrowUpRight size={17}/></a></Reveal>
    <div className="admission-meta"><span>Classes IV–XII</span><span>Dehradun, Uttarakhand</span><span>+91 98379 83791</span></div>
  </section>;
}
