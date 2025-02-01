import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countries from "./components/Countries";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Countries />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;