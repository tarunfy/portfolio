import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useLocoScroll } from "./hooks/useLocoScroll";

function App() {
  useLocoScroll();

  return (
    <>
      <div id="main-container" data-scroll-container>
        <CustomCursor />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
