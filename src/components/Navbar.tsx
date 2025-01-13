import { useState, useEffect } from 'react';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; 
      const sectionTop = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/50 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex justify-center items-center">
         

          <div className="hidden md:flex items-center justify-center space-x-8">
            {[
              { id: "technologies", text: "Tecnologías", number: "01" },
              { id: "projects", text: "Proyectos", number: "02" },
              { id: "about", text: "Sobre mí", number: "03" },
              { id: "contact", text: "Contacto", number: "04" },
            ].map((link, index) => (
              <NavLink 
                key={index} 
                id={link.id}
                text={link.text}
                number={link.number}
                onClick={() => scrollToSection(link.id)}
                style={{
                  animation: `fadeInDown 0.5s ease-out forwards ${index * 0.1}s`,
                }}
              />
            ))}
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-purple-400 transition-all duration-300 hover:rotate-180"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      <div
        style={{
          maxHeight: isMenuOpen ? '300px' : '0',
          opacity: isMenuOpen ? '1' : '0',
        }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg transition-all duration-300 ease-in-out"
      >
        <div className="px-4 py-3 space-y-1">
          {[
            { id: "technologies", text: "Tecnologías" },
            { id: "projects", text: "Proyectos" },
            { id: "about", text: "Sobre mí" },
            { id: "contact", text: "Contacto" },
          ].map((link, index) => (
            <MobileNavLink 
              key={index}
              id={link.id}
              onClick={() => scrollToSection(link.id)}
            >
              {link.text}
            </MobileNavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ id, text, number, onClick, style }) => (
  <button
    onClick={onClick}
    style={style}
    className="relative text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm group flex items-center gap-2 hover:translate-y-[-2px]"
  >
    <span className="text-xs font-mono text-purple-400">{number}.</span>
    {text}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
  </button>
);

const MobileNavLink = ({ id, children, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-300"
  >
    {children}
  </button>
);