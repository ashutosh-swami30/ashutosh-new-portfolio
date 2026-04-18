import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { useScrollReveal } from "./hooks/useScrollReveal.js";
import {useSpotlight} from "./hooks/useSpotlight.js";

export default function App() {
  
  useScrollReveal();
  useSpotlight();

  return (
    <>
      <NavBar></NavBar>

      <main>
        <Hero></Hero>
        <About></About>
        <TechStack></TechStack>
        <Experience></Experience>
        <Projects></Projects>
      </main>

      <Footer />
    </>
  )
}
