export default function Brand({ href, className = "", label }) {
  return <a href={href} className={"brand " + className} aria-label={label}>
    <span className="brand-mark">T</span>
    <span><b>TULA'S</b><small>INTERNATIONAL SCHOOL</small></span>
  </a>;
}
