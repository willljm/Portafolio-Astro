import { FaEnvelope, FaLinkedin, FaDiscord, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { SiThreads } from 'react-icons/si';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init("SK85N-hq0Jvjdd99H"); // Inicializa EmailJS con tu clave pública

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_a45mrzv',
        'template_65ek44l',
        e.currentTarget,
        'SK85N-hq0Jvjdd99H' 
      );

      if (result.status === 200) {
        alert('¡Mensaje enviado con éxito! Te responderé lo antes posible.');
        e.currentTarget.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact"
    className="relative bg-black/80 backdrop-blur-xl py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-purple-400">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Envíame un{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              mensaje
            </span>
          </h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-400/20 to-pink-600/20"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div 
       
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contáctame{' '}
                <span className="text-purple-400">cuando quieras</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                ¿Tienes alguna pregunta o propuesta? No dudes en escribirme. 
                Estaré encantado de escucharte y responder lo antes posible.
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-purple-400 text-xl" />
              <a href="mailto:wilmezaalfaro@gmail.com" className="hover:text-purple-400 transition-colors">
                wilmezaalfaro@gmail.com
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400">Sígueme en las redes:</p>
                <div className="flex gap-4">
                {[
                 { icon: FaXTwitter, href: "https://x.com/WillJm__" },
                 { icon: FaInstagram, href: "https://www.instagram.com/xlxwill" },
                 { icon: FaGithub, href: "https://github.com/willljm" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white hover:opacity-70 transition-opacity"
                    target="_blank"
                  >
                    <social.icon className="text-2xl" />
                  </a>
                ))/* eslint-enable @typescript-eslint/no-unused-vars */}
                </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Nombre</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Cristiano Ronaldo"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Correo Electrónico</label>
              <input
                name="email"
                type="email"
                required
                placeholder="cristiano.ronaldo@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Asunto</label>
              <input
                name="subject"
                type="text"
                required
                placeholder="¿Qué tienes en mente?"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Hola, me gustaría contactarte..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              <button
                type="reset"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white/5 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Borrar
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4 italic">
              No conservo ni comparto ninguno de tus datos personales.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
