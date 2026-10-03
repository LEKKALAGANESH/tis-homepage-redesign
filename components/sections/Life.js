import Reveal from "@/components/animation/Reveal";
import { life } from "@/data/content";

export default function Life() {
  return <section className="section life" id="life">
    <div className="section-kicker"><span>03</span><i /> Campus life</div>
    <Reveal><div className="life-heading"><h2 className="display">Every day is an<br/><em>opportunity.</em></h2><p className="body-copy">Learning doesn't stop when the bell rings. Campus life gives students room to compete, create, collaborate and become more independent.</p></div></Reveal>
    <div className="life-grid">{life.map(([n, t, d, icon], i) => <Reveal key={n} delay={i * 70}><article className="life-card"><span>{n}</span><div className="life-icon">{icon}</div><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
  </section>;
}
