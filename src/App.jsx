import "./index.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import SocialRail from "./components/SocialRail.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useActiveSection from "./hooks/useActiveSection.js";

export default function App() {
  const { activeSection, sectionIds } = useActiveSection();

  return (
    <main className="min-h-screen bg-base font-sans text-text lg:pr-20">
      <Nav activeSection={activeSection} sectionIds={sectionIds} />
      <Hero />
      <SocialRail />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
