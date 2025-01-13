import { useState, useEffect } from 'react';
import { FaReact, FaGamepad, FaPizzaSlice, FaDog, FaMapMarkerAlt, FaGraduationCap, FaCertificate } from 'react-icons/fa';
const codeSnippet = String.raw`

const = perfil [
 👋 Hola, soy Wildeiner Meza Alfaro.
  🗓️ Edad: 16 años | 🌍 Ubicación: Colombia

  ✨ Pasiones:
  - Programar
  - Innovar 
  - Aprender

📚 Proyectos destacados:
  1. Judiciales Valledupar
  2. Rick and Morty Explorer
  3. Autoexpress

🌟 Filosofía de vida:
  "La programación es pensar, crear y transformar."
];


  console.log(perfil);
`;



const personalKeywords = [
  { text: "Curioso", emoji: "🔍", color: "text-yellow-400" },
  { text: "Optimista", emoji: "✨", color: "text-blue-400" },
  { text: "Resiliente", emoji: "💪", color: "text-purple-400" },
  { text: "Creativo", emoji: "🎨", color: "text-pink-400" }
];

const locationInfo = {
  city: "Valledupar",
  country: "Colombia",
  timezone: "America/Bogota",
};

export default function AboutExtended() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-black/80 backdrop-blur-xl py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div  className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-purple-400">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Un poco más{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              sobre mí
            </span>
          </h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-400/20 to-pink-600/20"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div 
          
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaReact className="text-blue-400" />
              En el trabajo
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Me especializo en <span className="text-yellow-400">desarrollo web</span> y 
              <span className="text-yellow-400"> soluciones digitales</span>.
            </p>
            <div className="bg-[#1E1E1E] rounded-lg p-6 font-mono text-sm relative group overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <pre className="language-javascript overflow-x-auto">
                <code className="relative">
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 inline-block text-gray-500 select-none">{i + 1}</span>
                      <span className={`
                        ${line.includes('//') ? 'text-gray-500' : ''}
                        ${line.includes('console.log') ? 'text-blue-400' : ''}
                        ${line.includes('const') ? 'text-pink-400' : ''}
                        ${line.includes('"') || line.includes('`') ? 'text-green-400' : ''}
                        ${!line.includes('//') && !line.includes('console.log') && !line.includes('const') && !line.includes('"') && !line.includes('`') ? 'text-gray-300' : ''}
                        hover:bg-white/5 w-full px-2 transition-colors
                      `}>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>

          <div 
            className="flex flex-col gap-4"
          >
            <div 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="animate-bounce">💭</span>
                Mi lado personal
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {personalKeywords.map((keyword, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 ${keyword.color} text-sm`}
                  >
                    <span className="animate-pulse">{keyword.emoji}</span>
                    {keyword.text}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Soy una persona <span className="text-yellow-400">Curioso</span> por naturaleza, 
                siempre buscando <span className="text-blue-400">aprender</span> y entender cómo 
                funcionan las cosas. Me considero <span className="text-purple-400">optimista</span> y 
                <span className="text-pink-400"> resiliente</span>, lo que me ayuda a enfrentar 
                desafíos con una actitud <span className="text-green-400">positiva</span>.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                En mi tiempo libre, exploro nuevas aficiones y disfruto de momentos 
                <span className="text-yellow-400"> creativos</span>.
              </p>
              <div className="flex gap-3 text-lg mt-4">
                <div
                >
                  <FaGamepad className="text-blue-400" />
                </div>
                <div
            
                >
                  <FaPizzaSlice className="text-yellow-400" />
                </div>
                <div
           
                >
                  <FaDog className="text-purple-400" />
                </div>
              </div>
            </div>

            {/* Educación */}
            <div 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
        
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-2xl text-green-400" />
                <h3 className="text-xl font-bold text-white">Educación</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-purple-400 font-medium">Bachillerato - Grado 11</p>
                  <p className="text-gray-300">Institución Educativa</p>
                  <p className="text-gray-400 text-sm">2023 - Presente</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-purple-400 font-medium">Bootcamp Academia by Syntatic</p>
                    <a 
                      href="#" 
                      className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaCertificate />
                      Ver certificado
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">2023</p>
                </div>
              </div>
            </div>
            
            {/* Ubicación */}
            <div 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
            
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaMapMarkerAlt className="text-pink-400" />
                    Mi ubicación
                  </h3>
                  <div
             

                  >
                    🌟
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-gray-400 text-xs">Ciudad</p>
                    <p className="text-white flex items-center gap-1">
                      <span className="text-yellow-400">🌅</span> {locationInfo.city}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-400 text-xs">País</p>
                    <p className="text-white flex items-center gap-1">
                      <span>🇨🇴</span> {locationInfo.country}
                    </p>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <p className="text-gray-400 text-xs">Hora local</p>
                    <div className="flex items-center justify-between">
                      <p 
                        className="text-white font-mono"
                    
                      >
                        {time.toLocaleTimeString('es-CO', { 
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true 
                        })}
                      </p>
                      <span className="text-gray-400 text-sm">
                        {new Date().getTimezoneOffset() / -60 > 0 ? '+' : '-'}
                        {Math.abs(new Date().getTimezoneOffset() / 60)}h GMT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
