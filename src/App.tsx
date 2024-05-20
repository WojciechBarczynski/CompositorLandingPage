import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Vision } from "./components/Vision";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import "./App.css";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
