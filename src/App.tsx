import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/sections/projects";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <header className="bg-primary font-quantico text-white">
        <Navbar />
      </header>
      <main className="grow">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
