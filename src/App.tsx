import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutMe from "./components/sections/aboutme";
import ProjectsSection from "./components/sections/projects";
import StacksSection from "./components/sections/stacks";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary text-white">
      <Navbar />
      <AboutMe />
      <StacksSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
