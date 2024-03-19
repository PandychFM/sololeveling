import Anime from "./components/Anime";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Anime />
      <Highlights />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
