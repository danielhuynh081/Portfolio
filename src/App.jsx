import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

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
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
