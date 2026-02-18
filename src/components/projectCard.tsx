import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
  projectUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, tags, sourceUrl, projectUrl } = project;

  return (
    <motion.div 
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-accent/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)"
      }}
    >
      <div className="relative flex h-20 items-center justify-center border-b border-border/50 bg-accent/10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ duration: 0.3 }}
        >
          <FaCode className="text-3xl text-accent" />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <motion.h3 
          className="mb-3 font-space text-xl font-bold text-text-primary transition-colors duration-300 group-hover:text-accent"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>
      
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        <div className="mb-6 flex min-h-10 flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="h-fit rounded-lg border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-text-secondary transition-all duration-300 hover:border-accent/30 hover:bg-accent/20 hover:text-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="mt-auto flex space-x-3">
          {sourceUrl && (
            <motion.a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex flex-1 items-center justify-center rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:text-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="mr-2 transition-transform duration-300 group-hover/btn:scale-110" size={16} />
              Código
            </motion.a>
          )}
          {projectUrl && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex flex-1 items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt className="mr-2 transition-transform duration-300 group-hover/btn:scale-110" size={16} />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
