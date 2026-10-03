import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function About() {
  return <section className="section about" id="about">
    <div className="section-kicker"><span>01</span><i /> Our story</div>
    <div className="split">
      <Reveal><div><h2 className="display">Not just a school.<br/><em>A place to belong.</em></h2></div></Reveal>
      <Reveal delay={120}><div className="body-copy"><p>Tula's International School was founded in 2012 with a simple ambition: create an environment where every student can grow beyond the classroom.</p><p>Today, the campus brings together the values of a traditional Gurukul with progressive education, modern facilities, technology, sport and a strong sense of community.</p><a className="text-link" href="#academics">Our philosophy <ArrowRight size={16}/></a></div></Reveal>
    </div>
    <div className="quote-band"><Quote size={28}/><p>“We see the potential in every student and help them bring it to life.”</p></div>
  </section>;
}
