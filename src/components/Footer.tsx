import { FaHeart, FaCloudflare } from 'react-icons/fa';
import { SiAstro, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-sm mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-400">
  

          <p className="flex items-center gap-2 flex-wrap justify-center mt-2">
            Utilizando
            <span className="flex items-center gap-3">
              {[
                { icon: SiAstro, text: 'Astro', href: 'https://astro.build' },
                { icon: SiReact, text: 'React', href: 'https://reactjs.org' },
                { icon: SiTailwindcss, text: 'TailwindCSS', href: 'https://tailwindcss.com' },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <tech.icon className="text-lg" />
                  {tech.text}
                </a>
              ))}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}