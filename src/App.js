import About from "./components/About";
import Contact from "./components/Contact";
import TechnicalSkills from "./components/TechnicalSkills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import IndustryExperience from "./components/IndustryExperience";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <TechnicalSkills />
      <IndustryExperience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
