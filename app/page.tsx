import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Sermons from "./components/Sermons";
import Events from "./components/Events";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <Sermons />
      </ScrollReveal>

      <ScrollReveal>
        <Events />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}