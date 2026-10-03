import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import { programs } from "@/data/content";

export default function Academics() {
  return <section className="section dark-section" id="academics">
    <div className="section-kicker light"><span>02</span><i /> Learning</div>
    <div className="section-heading"><Reveal><h2 className="display light-text">Education that<br/><em>opens doors.</em></h2></Reveal><Reveal delay={120}><p className="body-copy light-copy">The academic journey blends CBSE foundations with experiential learning, technology, leadership and opportunities that encourage students to think for themselves.</p></Reveal></div>
    <div className="program-list">{programs.map((p, i) => <Reveal key={p.no} delay={i * 90}><article className="program">
      <span>{p.no}</span><div><h3>{p.title}</h3><p>{p.text}</p></div><b>{p.tag}</b><ArrowUpRight className="program-arrow"/>
    </article></Reveal>)}</div>
  </section>;
}
