import ProjectCard from "../projectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Brazil-utilities",
      description:
        "Brazil-Utilities é uma biblioteca que contém um conjunto de funções e informações que podem ajudar outros desenvolvedores",
      tags: ["TypeScript", "Node.js"],
      sourceUrl: "https://github.com/zThiagoR/Brazil-utilities",
    },
    {
      title: "Template Bot Discord",
      description:
        "Template para criação de bots para o discord em TypeScript, com a utilização da lib Discord.JS",
      tags: ["TypeScript", "Node.js"],
      sourceUrl: "https://github.com/zThiagoR/template-bot-discord-TS",
    },
    {
      title: "Em breve...",
      description: "Em breve...",
      tags: [],
      sourceUrl: "",
    },
  ];

  return (
    <section id="projects" className="bg-secondary py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
