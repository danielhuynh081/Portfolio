import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      ;
    </div>
  );
};

export default App;
