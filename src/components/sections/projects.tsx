import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from "../projectCard";
import { FaFilter, FaCode, FaGlobe, FaTools } from 'react-icons/fa';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
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
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: FaCode },
    { id: 'web', label: 'Web Apps', icon: FaGlobe },
    { id: 'library', label: 'Bibliotecas', icon: FaCode },
    { id: 'tool', label: 'Ferramentas', icon: FaTools },
    { id: 'template', label: 'Templates', icon: FaFilter }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary to-darker">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-card/60 backdrop-blur-sm border border-accent/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaCode className="text-accent mr-2" size={16} />
            <span className="text-text-secondary text-sm font-medium">Meu Trabalho</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-space font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Projetos em 
            <span className="bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent"> Destaque</span>
          </motion.h2>
          
          <motion.p 
            className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Uma seleção dos meus projetos mais recentes, demonstrando diferentes tecnologias 
            e abordagens de desenvolvimento.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => {
            const IconComponent = filter.icon;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-button-gradient text-white shadow-lg shadow-accent/25'
                    : 'bg-card/60 backdrop-blur-sm border border-accent/30 text-text-primary hover:text-accent hover:border-accent'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex flex-col items-center p-8 bg-card/60 backdrop-blur-sm border border-accent/30 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-text-secondary mb-6 text-lg">
              Interessado em ver mais do meu trabalho?
            </p>
            <motion.a
              href="https://github.com/zThiagoR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-button-gradient text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center group shadow-lg shadow-accent/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ver Todos no GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
