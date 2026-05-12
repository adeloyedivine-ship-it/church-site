import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pastor from "./components/Pastor";
import Services from "./components/Services";
import Sermons from "./components/Sermons";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import LiveStream from "./components/LiveStream";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Pastor />

      <Services />

      <Sermons />

      <Gallery />

      <Countdown />

      <LiveStream />

      <Events />

      <Contact />

      <Footer />

    </main>
  );
}