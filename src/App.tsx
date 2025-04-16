import Navbar from "./components/Navbar.tsx";
import './App.css'
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";


function App() {
  return (
      <>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </>
  )
}

export default App
