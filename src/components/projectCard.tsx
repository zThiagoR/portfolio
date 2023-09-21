import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {

  const sourceIsEmpty = project.sourceUrl === "" ? true : false;

  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-2 rounded-lg bg-white p-4 shadow-md">
      <div className="mb-2 text-xl font-bold">{project.title}</div>
      <p className="mb-4 text-gray-700">{project.description}</p>
      <div className="mb-4 flex flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="mb-2 mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div 
        className={`flex cursor-pointer items-center justify-center rounded-md bg-gray-200 py-2 text-center text-gray-700 transition-colors duration-300 hover:bg-gray-300
${sourceIsEmpty ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <a
          href={project.sourceUrl}
          target="_blank"
          className={sourceIsEmpty ? 'cursor-not-allowed' : ''}
          >
          <FaGithub className="mr-2 inline-block text-xl" />
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}
