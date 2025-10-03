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
      className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/50 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 212, 255, 0.1)"
      }}
    >
      <div className="relative h-20 bg-gradient-to-br from-accent/10 via-purple/10 to-pink/10 flex items-center justify-center border-b border-border/50">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ duration: 0.3 }}
        >
          <FaCode className="text-3xl text-accent" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <motion.h3 
          className="text-xl font-space font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>
      
        <p className="text-text-secondary mb-4 leading-relaxed text-sm flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 min-h-[2.5rem]">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="px-3 py-1 bg-secondary/60 border border-border text-text-secondary text-xs rounded-lg font-medium transition-all duration-300 hover:bg-accent/20 hover:text-accent hover:border-accent/30 h-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex space-x-3 mt-auto">
          {sourceUrl && (
            <motion.a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 px-4 bg-secondary/60 hover:bg-accent/20 border border-border hover:border-accent/50 text-text-secondary hover:text-accent rounded-xl transition-all duration-300 font-medium text-sm group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" size={16} />
              Código
            </motion.a>
          )}
          {projectUrl && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 px-4 bg-button-gradient hover:shadow-lg hover:shadow-accent/25 text-white rounded-xl transition-all duration-300 font-medium text-sm group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" size={16} />
              Demo
            </motion.a>
          )}
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple/5 to-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}
