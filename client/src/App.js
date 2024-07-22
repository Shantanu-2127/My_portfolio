import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
      <div className="designer-credit">
        Designed by{" "}
        <a
          href="https://www.linkedin.com/in/shantanu-sisodia/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "yellow" }}
        >
          Shantanu Singh Sisodia
        </a>
      </div>
    </div>
  );
}

export default App;
