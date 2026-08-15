import Nav from "./components/Nav";
import Hero from "./components/Hero";
import NetworkGraph from "./components/NetworkGraph";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 space-y-3 pb-8">
        <Hero />
        <NetworkGraph />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
