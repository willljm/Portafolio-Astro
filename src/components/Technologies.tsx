

const technologies = {
  "Desarrollo Frontend": [
    { name: 'HTML', icon: 'src/assets/icons/html5.svg' },
    { name: 'CSS', icon: 'src/assets/icons/css-icon.svg'},
    { name: 'JavaScript', icon: 'src/assets/icons/javascript.svg' },
    { name: 'React', icon: 'src/assets/icons/react.svg' },
    { name: 'Next.js', icon: 'src/assets/icons/nextjs_icon_dark.svg' },
    { name: 'Astro', icon: 'src/assets/icons/astro_dark.svg' },
  ],
  "Herramientas & UI": [
    { name: 'Tailwind', icon: 'src/assets/icons/tailwindcss.svg' },
    { name: 'Bootstrap', icon: 'src/assets/icons/bootstrap.svg' },
    { name: 'Vite', icon: 'src/assets/icons/vite.svg' },
    { name: 'TypeScript', icon: 'src/assets/icons/typescript.svg' },
    { name: 'Jquery', icon: 'src/assets/icons/jquery_dark.svg' },
    { name: 'ReactRouter', icon: 'src/assets/icons/reactrouter.svg' },

  ],
  "Backend & Más": [
    { name: 'MySql', icon: 'src/assets/icons/mysql.svg' },
    { name: 'PHP', icon: 'src/assets/icons/php_dark.svg' },
    { name: 'Firebase', icon: 'src/assets/icons/firebase.svg' },
    { name: 'Neon', icon: 'src/assets/icons/neon.svg' },
    { name: 'Supabase', icon: 'src/assets/icons/supabase.svg' },
    { name: 'Prisma', icon: 'src/assets/icons/prisma.svg' },
   ,
  ],
};

export default function Technologies() {
  return (
    <section className="relative bg-black/80 backdrop-blur-xl py-48 " id='technologies'>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm font-mono text-purple-400">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Tecnologías{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                que domino
              </span>
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-400/20 to-pink-600/20"></div>
          </div>

          <div  className="grid md:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <div
                key={category}
          
                className="backdrop-blur-3xl bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    {category}
                  </span>
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 relative">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-sm text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
