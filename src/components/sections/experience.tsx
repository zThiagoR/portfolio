import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Freelance' | 'Open Source' | 'Voluntário';
  description: string;
  responsibilities?: string[] | string;
  technologies: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Freelancer Full Stack",
      role: "Desenvolvedor Full Stack",
      period: "2021 - Atual",
      location: "Remoto",
      type: "Freelance",
      description: "Atualmente trabalho como desenvolvedor freelancer, oferecendo soluções completas de desenvolvimento web para diversos clientes. Especializado em criar aplicações modernas, responsivas e performáticas, desde landinquipees até sistemas complexos com autenticação e integrações.",
      responsibilities: [
        "Desenvolvimento de aplicações web completas (frontend + backend)",
        "Criação de APIs REST e integração com bancos de dados",
        "Criação de BOTS para Discord/Telegram/Whatsapp"      
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Vercel", "AWS"]
    },
    {
      company: "Bichinhos da TI",
      role: "Product Owner",
      period: "mai de 2024 - fev de 2025 (10 meses)",
      location: "Remoto",
      type: "Voluntário",
      description: "Assumi o papel de Product Owner em um projeto open-source, colaborando com a squad para organizar e priorizar as tarefas no backlog e garantir entregas consistentes. Participei de reuniões para alinhamento com a equipe, ajudando a definir requisitos e a traduzir ideias em histórias claras para o time de desenvolvimento.",
      responsibilities: [
        "Organização e priorização de tarefas no backlog",
        "Definição de requisitos e tradução de ideias em histórias",
        "Utilização de metodologias ágeis (Kanban) para planejamento",
        "Facilitação da comunicação entre membros da equipe",
        "Acompanhamento do progresso das sprints"
      ],
      technologies: ["Kanban", "Metodologias Ágeis", "Product Management", "Scrum"]
    },
    {
      company: "Bichinhos da TI",
      role: "Desenvolvedor Full Stack",
      period: "dez de 2023 - mai de 2024 (6 meses)",
      location: "Remoto",
      type: "Voluntário",
      description: "A comunidade 'Bichinhos da TI' tem como propósito a criação de propen source, visando proporcionar visibilidade aos iniciantes no campo da tecnologia da informação. Desenvolvi projetos interativos, como a 'Roleta de Animais' e a 'Roleta de Tecnologias', com o objetivo de demonstrar e praticar conceitos de desenvolvimento web para a comunidade.",
      responsibilities: [
        "Desenvolvimento de projetos interativos (Roleta de Animais, Roleta de Tecnologias)",
        "Exploração do uso de React para projetos dinâmicos e interativos",
        "Compartilhamento de projetos com a comunidade para inspirar outros membros",
        "Contribuição para o aprendizado prático de desenvolvimento web para iniciantes"
      ],
      technologies: ["JavaScript", "CSS", "React", "HTML", "Git", "Open Source"]
    },
    {
      company: "BedHosting",
      role: "Desenvolvedor Freelancer",
      period: "jan de 2022 - abr de 2024 (2 anos 4 meses)",
      location: "Remoto",
      type: "Freelance",
      description: "Na BedHosting, fui responsável por desenvolver uma solução para melhorar a interação entre a equipe de suporte e os usuários utilizando a API do Discord. Identifiquei a necessidade de otimizar o atendimento ao cliente e implementei uma plataforma web com Node.js e React, integrando o sistema de suporte com Tawk.to e Discord, o que resultou em um fluxo de atendimento mais eficiente e uma experiência melhorada para os usuários.",
      technologies: ["Node.js", "React", "Discord.js", "Tawk.to", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-secondary to-primary py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-card/60 px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaBriefcase className="mr-2 text-accent" size={16} />
            <span className="text-sm font-medium text-text-secondary">Minha Jornada</span>
          </motion.div>

          <motion.h2
            className="mb-6 font-space text-4xl font-bold text-text-primary lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experiência
            <span className="bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent"> Profissional</span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Uma trajetória de crescimento constante, sempre focado em entregar soluções de qualidade e impacto real.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-y-0 left-8 hidden w-0.5 bg-gradient-to-b from-accent via-purple to-pink md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute left-6 z-10 hidden size-5 rounded-full border-4 border-primary bg-accent md:block"
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div
                className="rounded-2xl border border-accent/20 bg-card/60 p-8 backdrop-blur-sm md:ml-20"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="mb-1 font-space text-2xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <div className="flex items-center font-semibold text-accent">
                      <span>{exp.company}</span>
                      <span className="mx-2 text-text-muted">•</span>
                      <FaMapMarkerAlt className="mr-1 text-text-muted" size={12} />
                      <span className="text-sm text-text-secondary">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end">
                    <span className={`mb-2 rounded-full px-3 py-1 text-xs font-semibold ${exp.type === 'Freelance' ? 'bg-success/20 text-success' :
                        exp.type === 'Open Source' ? 'bg-accent/20 text-accent' :
                        exp.type === 'Voluntário' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-warning/20 text-warning'
                      }`}>
                      {exp.type}
                    </span>
                    <div className="flex items-center text-sm text-text-muted">
                      <FaCalendarAlt className="mr-1" size={12} />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed text-text-secondary">
                  {exp.description}
                </p>

                {exp.responsibilities && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-text-primary">
                      Principais Responsabilidades
                    </h4>

                    {Array.isArray(exp.responsibilities) ? (
                      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            className="flex items-start text-sm leading-relaxed text-text-secondary"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: respIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="mr-2 mt-1 text-xs text-accent">▸</span>
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {exp.responsibilities}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="mb-3 text-sm font-semibold text-text-primary">
                    Stack Tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="rounded-lg border border-accent/20 bg-secondary/60 px-3 py-1 text-xs font-medium text-text-secondary transition-all duration-300 hover:bg-accent/20 hover:text-accent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}