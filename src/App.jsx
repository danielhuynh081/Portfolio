import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      ;
    </div>
  );
};

export default App;
