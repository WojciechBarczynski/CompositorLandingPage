import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Vision } from "./components/Vision";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Features } from "./components/Features";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Features />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
