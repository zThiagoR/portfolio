import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from "../projectCard";
import { FaFilter, FaCode, FaGlobe, FaTools } from 'react-icons/fa';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Craftlandia",
      description: "Site desenvolvido para a comunidade Craftlandia, apresentando notícias, eventos e recursos para jogadores.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
      sourceUrl: "",
      projectUrl: "https://craftlandia.com.br/site/index",
      category: "web"
    },
    {
      title: "Roleta de Tecnologias",
      description: "Ferramenta interativa para ajudar desenvolvedores a escolher tecnologias para estudar.",
      tags: ["React", "Next.js", "TypeScript", "Sass"],
      sourceUrl: "https://github.com/zThiagoR/rolette-technologies",
      projectUrl: "https://rolette-technologies.vercel.app",
      category: "web"
    },
    {
      title: "Roleta de Animais",
      description: "Aplicação divertida desenvolvida para a comunidade Bichinhos da TI.",
      tags: ["React", "Next.js", "TypeScript", "Sass"],
      sourceUrl: "https://github.com/zThiagoR/rolette-animals",
      projectUrl: "https://rolette-animals.vercel.app",
      category: "web"
    },
    {
      title: "Brazil-utilities",
      description: "Biblioteca TypeScript com funções utilitárias para desenvolvimento brasileiro.",
      tags: ["TypeScript", "Node.js", "NPM"],
      sourceUrl: "https://github.com/zThiagoR/Brazil-utilities",
      category: "library"
    },
    {
      title: "Template Bot Discord",
      description: "Template estruturado para criação de bots Discord usando TypeScript.",
      tags: ["TypeScript", "Node.js", "Discord.js"],
      sourceUrl: "https://github.com/zThiagoR/template-bot-discord-TS",
      category: "template"
    },
    {
      title: "GetSetForge",
      description: "Extensão VS Code para automatizar a criação de getters e setters.",
      tags: ["TypeScript", "VS Code Extension"],
      sourceUrl: "https://github.com/zThiagoR/getsetforge",
      category: "tool"
    },
    {
      title: "MKB Syntax Highlighting",
      description: "Extensão VS Code com syntax highlighting para arquivos .mkb.",
      tags: ["TypeScript", "VS Code Extension"],
      sourceUrl: "https://github.com/zThiagoR/MKB-Syntax-Highlighting",
      category: "tool"
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: FaCode },
    { id: 'web', label: 'Web', icon: FaGlobe },
    { id: 'library', label: 'Bibliotecas', icon: FaCode },
    { id: 'tool', label: 'Ferramentas', icon: FaTools },
    { id: 'template', label: 'Templates', icon: FaFilter }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="bg-primary py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-6 font-space text-4xl font-bold text-text-primary lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Projetos em 
            <span className="text-accent"> Destaque</span>
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Uma seleção dos meus projetos mais recentes, demonstrando diferentes tecnologias 
            e abordagens de desenvolvimento.
          </motion.p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => {
            const IconComponent = filter.icon;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'border border-accent/30 bg-card/60 text-text-primary backdrop-blur-sm hover:border-accent hover:text-accent'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={16} />
                <span>{filter.label}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-accent/20 bg-accent/[0.03] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
              Interessado em ver mais? Confira{' '}
              <span className="text-text-primary">todos os projetos</span>{' '}
              no GitHub.
            </p>
            <motion.a
              href="https://github.com/zThiagoR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 sm:w-auto sm:shrink-0"
              whileHover={{ backgroundColor: "rgba(0, 212, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              github.com/zThiagoR
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
