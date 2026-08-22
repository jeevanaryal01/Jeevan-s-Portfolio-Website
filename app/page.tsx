import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import NowBand from "./components/NowBand";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import ConnectPill from "./components/ConnectPill";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <NowBand />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Connect />
      </main>
      <Footer />
      <ConnectPill />
    </>
  );
}
