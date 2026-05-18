import Hero from "./components/Hero";
import About from "./components/About";
import LiveSection from "./components/LiveSection";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* LIVE */}
      <section id="live">
        <LiveSection />
      </section>

      {/* EVENTS */}
      <section id="events">
        <Events />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}