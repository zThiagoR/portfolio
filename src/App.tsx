import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutMe from "./components/sections/aboutme";
import ExperienceSection from "./components/sections/experience";
import ProjectsSection from "./components/sections/projects";
import StacksSection from "./components/sections/stacks";

function App() {
  return (
    <main className="min-h-screen bg-dark text-text-primary">
      <Navbar />
      <AboutMe />
      <ExperienceSection />
      <StacksSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
