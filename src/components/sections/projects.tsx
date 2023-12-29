import ProjectCard from "../projectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Brazil-utilities",
      description:
        "Brazil-Utilities é uma biblioteca que contém um conjunto de funções e informações que podem ajudar outros desenvolvedores.",
      tags: ["TypeScript", "Node.js"],
      sourceUrl: "https://github.com/zThiagoR/Brazil-utilities",
    },
    {
      title: "Template Bot Discord",
      description:
        "Template para criação de bots para o discord em TypeScript, com a utilização da lib Discord.JS.",
      tags: ["TypeScript", "Node.js"],
      sourceUrl: "https://github.com/zThiagoR/template-bot-discord-TS",
    },
    {
      title: "GetSetForge",
      description: "Uma extensão de Visual code para automatizar a criação de getters e setters.",
      tags: ["TypeScript", "Visual Studio Code"],
      sourceUrl: "https://github.com/zThiagoR/getsetforge",
    },
    {
      title: "Find Your Name Craftlandia",
      description: "Um web scraping para encontrar nomes de jogadores na changelog da Craftlandia.",
      tags: ["TypeScript", "React", "Web Scraping", "Tailwind CSS"],
      sourceUrl: "https://github.com/zThiagoR/findyourname-craftlandia",
      projectUrl: "https://findyourname-craftlandia.vercel.app"
    },
    {
      title: "Roleta de Tecnologias",
      description: "Uma roleta de tecnologias para ajudar a decidir qual tecnologia estudar ou utilizar em um projeto.",
      tags: ["React", "Next.js", "TypeScript", "Sass"],
      sourceUrl: "https://github.com/zThiagoR/rolette-technologies",
      projectUrl: "https://rolette-technologies.vercel.app"
    },
    {
      title: "Roleta de Animais",
      description: "Uma roleta de animais foi desenvolvido para desconstrair com a comunidade de Bichinhos da TI.",
      tags: ["React", "Next.js", "TypeScript", "Sass"],
      sourceUrl: "https://github.com/zThiagoR/rolette-animals",
      projectUrl: "https://rolette-animals.vercel.app"
    }
  ];

  return (
    <section id="Projetos" className="bg-secondary py-16">
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
