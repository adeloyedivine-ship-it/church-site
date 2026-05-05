import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Sermons from "./components/Sermons";
import Events from "./components/Events";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Sermons />
      <Events />
      <Contact />
    </main>
  );
}