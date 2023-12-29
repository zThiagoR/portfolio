import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
  projectUrl?: string; // URL opcional do site do projeto
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, sourceUrl, projectUrl } = project;
  const isGithubDisabled = !sourceUrl;
  const isProjectDisabled = !projectUrl;

  return (
    <div className="mx-2 mb-4 flex h-full cursor-pointer flex-col justify-between rounded-lg bg-button-primary p-6 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl">
      <div>
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="mb-2 mr-2 rounded-full bg-button-secondary px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 hover:brightness-125"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        <div className={`${isGithubDisabled ? 'cursor-not-allowed opacity-50' : 'hover:brightness-125'} inline-flex flex-1 items-center justify-center rounded-md bg-button-secondary py-2 font-medium text-white transition-colors duration-300`}>
          <FaGithub className="mr-2" />
          <span>Ver no GitHub</span>
        </div>
        <div className={`${isProjectDisabled ? 'cursor-not-allowed opacity-50' : 'hover:brightness-125'} inline-flex flex-1 items-center justify-center rounded-md bg-button-secondary py-2 font-medium text-white transition-colors duration-300`}>
          <FaExternalLinkAlt className="mr-2" />
          <span>Visitar Site</span>
        </div>
      </div>
    </div>
  );
}
