import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useLocoScroll } from "./hooks/useLocoScroll";

function App() {
  useLocoScroll();

  return (
    <div id="main-container" data-scroll-container>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
