"use client";

import React from 'react';
import { motion } from 'framer-motion';

const valores = [
  {
    icon: '/svg/agilidad.svg',
    title: 'Agilidad inteligente',
    desc: 'Creamos procesos financieros rápidos, digitales y eficientes para acelerar el crecimiento de cada empresa.',
  },
  {
    icon: '/svg/transparencia.svg',
    title: 'Transparencia total',
    desc: 'Cada tasa, operación y condición es explicada con claridad. Sin letra chica ni costos ocultos.',
  },
  {
    icon: '/svg/confianza.svg',
    title: 'Confianza a largo plazo',
    desc: 'Construimos relaciones sólidas con empresas e inversionistas basadas en resultados y transparencia.',
  },
  {
    icon: '/svg/impacto.svg',
    title: 'Impacto real',
    desc: 'Impulsamos negocios que generan empleo, crecimiento y nuevas oportunidades mediante acceso a capital.',
  },
];

export const NuestrosValoresSection = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ background: 'linear-gradient(180deg, #0d0b2e 0%, #111340 100%)' }}
    >
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="text-[2rem] font-normal text-white leading-[1.15] tracking-[-0.01em] lg:text-[2.8rem]">
            Nuestros <strong className="font-bold">valores</strong>
          </h2>
          <p className="mt-3 text-[1rem] text-white/50">
            Nuestra manera de hacer finanzas
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {valores.map((v) => (
            <motion.div
              key={v.title}
              className="flex flex-col items-center text-center rounded-[20px] px-7 py-10 gap-5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center w-[68px] h-[68px] rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <img
                  src={v.icon}
                  alt={v.title}
                  className="w-[36px] h-[36px] object-contain"
                  draggable={false}
                />
              </div>

              <h3 className="text-[1.35rem] font-normal text-white leading-[1.25]">
                {v.title}
              </h3>

              <p className="text-[0.9rem] text-white/55 leading-[1.65]">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p
          className="mt-10 text-center text-[1.05rem] text-white/60 italic lg:mt-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          "Sin papeleos innecesarios ni procesos bancarios tradicionales."
        </motion.p>

      </div>
    </section>
  );
};
