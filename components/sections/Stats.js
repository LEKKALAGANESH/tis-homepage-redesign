import Reveal from "@/components/animation/Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return <section className="stats-wrap"><div className="stats">
    {stats.map(([n, l], i) => <Reveal key={n} delay={i * 70}><div className="stat"><strong>{n}</strong><span>{l}</span></div></Reveal>)}
  </div></section>;
}
