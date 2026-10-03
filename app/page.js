import ScrollProgress from "@/components/animation/ScrollProgress";
import CustomCursor from "@/components/animation/CustomCursor";
import ThemeToggle from "@/components/animation/ThemeToggle";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Life from "@/components/sections/Life";
import Testimonials from "@/components/sections/Testimonials";
import Admissions from "@/components/sections/Admissions";

export default function Home() {
  return <>
    <ScrollProgress />
    <CustomCursor />
    <ThemeToggle />
    <Header />
    <main><Hero /><Stats /><About /><Academics /><Life /><Testimonials /><Admissions /></main>
    <Footer />
  </>;
}
