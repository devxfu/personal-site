import "./index.css";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./components/Projects.jsx";
import SocialRail from './components/SocialRail.jsx';

export default function App() {
  return (
    <main className="min-h-screen bg-base font-sans text-text lg:pr-20">
      <Hero />
      <SocialRail />
      <Nav activeSection="about" sectionIds={["about","skills","projects","resume","contact"]} />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
