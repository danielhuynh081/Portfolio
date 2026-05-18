import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
