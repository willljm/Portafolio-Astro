import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { LuFileText } from 'react-icons/lu';
import Avatar from '../assets/AVATAR.jpg';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-6xl mx-auto relative pt-4 z-10 px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="rounded-lg bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm border border-white/10"
              >
                👋 ¡Bienvenido a mi portafolio!
              </motion.div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white space-y-3"
            >
              <span className="block">Hey, soy </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 relative inline-block">
                Wildeiner Meza
                <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-purple-400/20 to-pink-600/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-2xl leading-relaxed"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
                Junior Full Stack Developer
              </span>{' '}
             especializado en crear sitios modernos y responsivos. Apasionado por la tecnología y
               en constante aprendizaje. 😎
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              {[
                { icon: BsGithub, href: "https://github.com/willljm", label: "GitHub" },
                { icon: CiLinkedin, href: "https://www.linkedin.com/in/wildeiner-meza-984507339", label: "LinkedIn" },
                { icon: CiMail, href: "mailto:wilmezaalfaro@gmail.com", label: "Contáctame" },
                { icon: LuFileText, href: "public/Curriculum - Wildeiner Meza A..pdf", label: "Ver CV" }
              ].map((social, index) => (
                <a
                  href={social.href}
                  className="relative group"
                  target="_blank"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-400 hover:text-purple-400 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-black/80 text-white text-sm py-1 px-3 rounded-md whitespace-nowrap backdrop-blur-sm border border-white/10">
                      {social.label}
                    </div>
                    <div className="w-2 h-2 bg-black/80 absolute -top-1 left-1/2 transform -translate-x-1/2 rotate-45 border-t border-l border-white/10"></div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 group">
            <img
            src='src/assets/AVATAR.jpg'
           alt="Wildeiner Meza"
             className="w-full h-full object-cover filter saturate-[1.2] group-hover:scale-110 transition-transform duration-500"
            />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
    </section>
  );
}
