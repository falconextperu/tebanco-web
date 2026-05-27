"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const TestimoniosInversor = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Alfredo G.",
      role: "Inversionista Recurrente",
      text: "La plataforma es muy intuitiva. Las facturas son atractivas con muy buenas tasas de rendimiento y la comunicación con los asesores es 10/10."
    },
    {
      name: "Miguel A.",
      role: "Inversionista Corporativo",
      text: "Considero que TeBanco es la Fintech más seria y profesional en Perú para invertir en facturas negociables. Retornos totalmente transparentes."
    },
    {
      name: "Angela M.",
      role: "Inversionista Independiente",
      text: "Buena alternativa de inversión con tasas altas. Siempre debes conocer el mercado en el que estés invirtiendo y diversificarlo. ¡Totalmente recomendados!"
    }
  ];

  return (
    <section className="py-32 bg-[#11152a] relative overflow-hidden" ref={scrollRef}>
      {/* Background gradient */}
      <div
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(88,62,155,0.25) 0%, transparent 60%)' }}
      />

      <div className="container flex flex-col gap-16 relative z-[2]">

        <motion.div
          className="text-center max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div className="inline-flex items-center gap-3 py-2 px-5 bg-white/[0.06] border border-white/10 rounded-[2rem] shadow-[0_4px_15px_-5px_rgba(0,0,0,0.2)] mb-8">
            <div className="flex text-[#fbbf24] gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-bold text-white/85">+18 mil inversionistas activos</span>
          </div>
          <h2 className="text-[3rem] font-extrabold text-white leading-[1.2] md:text-[2.5rem]">
            Confían en{' '}
            <span style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              nuestra plataforma
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
          {testimonials.map((testimonio, index) => (
            <motion.div
              key={index}
              className="bg-white/[0.05] rounded-3xl p-10 flex flex-col h-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] border border-white/[0.08] relative transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(88,62,155,0.4)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] md:p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" as const }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="text-[#a78bfa] opacity-40 mb-6">
                <Quote size={28} />
              </div>
              <p className="text-[1.125rem] leading-[1.7] text-white/65 italic mb-8 flex-grow">
                &ldquo;{testimonio.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[1.25rem] text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #583e9b, #a78bfa)' }}>
                  {testimonio.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white m-0">{testimonio.name}</h4>
                  <span className="text-sm text-white/45">{testimonio.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
