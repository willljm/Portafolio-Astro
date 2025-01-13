import { BsGithub, BsArrowUpRightCircle } from 'react-icons/bs';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Judiciales Valledupar",
    subtitle: "Portal de noticias",
    description: "Portal web para la comunidad de Valledupar con gestión de noticias y contenido. Implementé un sistema intuitivo de administración y diseño responsive.",
    image: "src/assets/proyecto1.webp",
    github: "https://github.com/willljm/Valledupar-Judiciales",
    live: "https://valledupar-judiciales.vercel.app/",
    technologies: [
      { name: "React", icon: "src/assets/icons/react.svg" },
      { name: "TypeScript", icon: "src/assets/icons/typescript.svg" },
      { name: "TailwindCSS", icon: "src/assets/icons/tailwindcss.svg" },
      { name: "Firebase", icon: "src/assets/icons/firebase.svg" },
      { name: "React Router", icon: "src/assets/icons/reactrouter.svg" },
    ]
  },
  {
    title: "Rick and Morty Explorer",
    subtitle: "Buscador de rick and morty",
    description: "Aplicación web que consume la API de Rick and Morty para explorar y buscar información detallada de los personajes de la serie.",
    image: "src/assets/Proyecto3.webp",
    github: "https://github.com/willljm/Rick-And-Morty-Explorer",
    live: "https://willljm.github.io/Rick-And-Morty-Explorer/",
    technologies: [
      { name: "HTML", icon: "src/assets/icons/html5.svg" },
      { name: "CSS", icon: "src/assets/icons/css-icon.svg"},
      { name: "JavaScript", icon: "src/assets/icons/javascript.svg" },
    ]
  },
  {
    title: "AutoExprees",
    subtitle: "Renta de vehiculos",
    description: "Sistema de renta de vehículos para Colombia con backend en Supabase. Incluye búsqueda, filtrado y gestión de reservas en tiempo real.",
    image: "src/assets/Image.png",
    status: "en-proceso",
    technologies: [
      { name: "Nextjs", icon: "src/assets/icons/nextjs_icon_dark.svg" },
      { name: "TypeScript", icon: "src/assets/icons/typescript.svg" },
      { name: "Tailwind", icon: "src/assets/icons/tailwindcss.svg" },
      { name: "Supabase", icon: "src/assets/icons/supabase.svg" },
      { name: "Firebase", icon: "src/assets/icons/firebase.svg" },
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black/80 backdrop-blur-xl py-56">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-purple-400">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proyectos{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Destacados
            </span>
          </h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-400/20 to-pink-600/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className="group bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-colors duration-300">
      <div className="relative h-48">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-purple-400 text-xs">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <p className="text-gray-400 mb-4 text-sm min-h-[4.5rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded text-xs text-gray-300"
            >
              <img src={tech.icon} alt={tech.name} className="w-3 h-3" />
              {tech.name}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            {project.status === "en-proceso" ? (
              <div className="inline-flex items-center gap-1.5 text-xs text-purple-400">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>
                En Proceso
              </div>
            ) : (
              <>
                <a
                  href={project.github}
                  target="_blank"
                  className="relative group/tooltip"
                >
                  <div className="text-gray-400 hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
                    <BsGithub className="w-4 h-4" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap backdrop-blur-sm border border-white/10">
                      Ver Código
                    </div>
                    <div className="w-2 h-2 bg-black/80 absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 border-r border-b border-white/10"></div>
                  </div>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="relative group/tooltip"
                >
                  <div className="text-gray-400 hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-lg">
                    <BsArrowUpRightCircle className="w-4 h-4" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap backdrop-blur-sm border border-white/10">
                      Ver Demo
                    </div>
                    <div className="w-2 h-2 bg-black/80 absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 border-r border-b border-white/10"></div>
                  </div>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
