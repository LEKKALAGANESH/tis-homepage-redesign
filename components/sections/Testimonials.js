import { Quote } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return <section className="section testimonials">
    <div className="section-kicker"><span>04</span><i /> Voices</div>
    <Reveal><div className="testimonial-title"><h2 className="display">What families<br/><em>feel at Tula's.</em></h2><span>Real experiences from the Tula's community.</span></div></Reveal>
    <div className="testimonial-grid">{testimonials.map(([name, role, text], i) => <Reveal key={name} delay={i * 80}><article className="testimonial"><Quote size={24}/><p>“{text}”</p><footer><span className="avatar">{name[0]}</span><span><b>{name}</b><small>{role}</small></span></footer></article></Reveal>)}</div>
  </section>;
}
