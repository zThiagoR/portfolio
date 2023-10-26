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

export default function ProjectCard({ project }: ProjectCardProps){
  const { title, description, tags, sourceUrl } = project;

  return (
    <div className="mx-2 mb-4 grid grid-cols-1 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-black">{title}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="mx-1 rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div 
        className={`flex items-center justify-center rounded-md bg-gray-200 py-2 text-center font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-300
${!sourceUrl && 'cursor-not-allowed opacity-50'}`}>
        <a
          href={sourceUrl}
          target="_blank"
          className={`${!sourceUrl && 'cursor-not-allowed'}`}
        >
          <FaGithub className="mr-2 inline-block text-xl" />
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}