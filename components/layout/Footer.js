import Brand from "@/components/ui/Brand";

export default function Footer() {
  return <footer className="footer">
    <div><Brand href="#top" className="footer-brand" /><p>Modern values. Global outlook.<br/>A school built for becoming.</p></div>
    <div className="footer-links"><div><b>Explore</b><a href="#about">About</a><a href="#academics">Academics</a><a href="#life">Campus Life</a></div><div><b>Connect</b><a href="https://tis.edu.in/contact-us/">Contact</a><a href="https://tis.edu.in/faq/">FAQs</a><a href="https://tis.edu.in/careers/">Careers</a></div></div>
    <div className="footer-bottom"><span>© 2026 Tula's International School</span><span>Dhoolkot, Dehradun · India</span></div>
  </footer>;
}
