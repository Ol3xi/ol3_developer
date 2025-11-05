// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      {/* Queste classi applicano i token del tema corrente */}
      <div className="min-h-screen bg-base-100 text-base-content transition-colors">
        <Navbar />   {/* metti <ThemeToggle /> qui dentro o dove preferisci */}
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
