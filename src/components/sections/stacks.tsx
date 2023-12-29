const skills = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'NodeJS', url: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
  { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'NestJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: "TailwindCSS", url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'NextJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Prisma', url: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png' },
];
          
export default function StacksSection() {
  return (
    <section id="Tecnologias" className="bg-tertiary">
      <div className="container m-auto">
        <h1 className="my-4 text-center font-quantico text-2xl font-bold">
          Minhas tecnologias
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={skill.url} 
                alt={skill.name} 
                className="h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20 md:h-24 md:w-24" 
              />
              <span className="mt-2 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}