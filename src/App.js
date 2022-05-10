import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { useLocoScroll } from "./hooks/useLocoScroll";

function App() {
  useLocoScroll();

  return (
    <>
      <div id="main-container" data-scroll-container>
        <CustomCursor />
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </>
  );
}

export default App;
