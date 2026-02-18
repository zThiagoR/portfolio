import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = {
  frontend: {
    title: 'Frontend',
    icon: FaCode,
    color: 'from-accent to-accent-light',
    skills: [
      { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  backend: {
    title: 'Backend',
    icon: FaServer,
    color: 'from-success to-emerald-400',
    skills: [
      { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'NestJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
      { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  },
  database: {
    title: 'Database',
    icon: FaDatabase,
    color: 'from-warning to-yellow-400',
    skills: [
      { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Prisma', url: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png' },
    ]
  },
  tools: {
    title: 'Ferramentas',
    icon: FaTools,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Podman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg' },
      { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'IntelliJ IDEA', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
      { name: 'Postman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ]
  }
};

export default function StacksSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="bg-darker py-20">
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
            Skills &
            <span className="text-accent"> Tecnologias</span>
          </motion.h2>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {Object.entries(skillCategories).map(([key, category], index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 rounded-xl px-6 py-4 font-semibold transition-all duration-300 ${activeCategory === key
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
                <IconComponent size={20} />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group rounded-2xl border border-accent/20 bg-card/60 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 212, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="mx-auto mb-4 flex size-16 items-center justify-center rounded-xl bg-secondary/60 transition-all duration-300 group-hover:bg-accent/20"
                  whileHover={{ rotate: 5 }}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="size-10"
                  />
                </motion.div>
                <h3 className="text-sm font-medium text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}