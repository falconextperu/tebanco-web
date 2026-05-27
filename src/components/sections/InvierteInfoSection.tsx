"use client";

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: '/svg/rentabilidad.svg',
    title: 'Rentabilidad Superior',
    desc: 'Genera hasta 18% anual invirtiendo en facturas a plazos cortos, de manera segura y sin intermediarios bancarios pesados.',
  },
  {
    icon: '/svg/comisiones.svg',
    title: '0% Comisiones Ocultas',
    desc: 'El monto que inviertes crece. No te cobramos por mantenimiento ni por comisiones de éxito. Todo tu retorno es para ti.',
  },
  {
    icon: '/svg/diversificacion.svg',
    title: 'Diversificación Inteligente',
    desc: 'Invierte desde S/ 500 en cientos de facturas comerciales del sector minero, agroexportador y logístico. Minimiza tu riesgo al instante.',
  },
  {
    icon: '/svg/digital.svg',
    title: '100% Digital y Transparente',
    desc: 'Selecciona las facturas en nuestra plataforma, analiza el riesgo de cada pagador en tiempo real y cobra directamente en tu cuenta bancaria.',
  },
];

export const InvierteInfoSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden lg:py-24">

      {/* Background */}
      <img
        src="/svg/fondoinformacion.svg"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-[0]"
      />

      <div className="container relative z-[2]">

        {/* Title */}
        <motion.h2
          className="text-center text-[2rem] font-bold text-[#11152a] leading-[1.2] mb-10 lg:text-[2.8rem] lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Invierte con información<br />
          <span className="font-normal">a la mano</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl p-8"
              style={{
                border: '1px solid rgba(17,21,42,0.08)',
                boxShadow: '0 4px 24px rgba(17,21,42,0.06)',
              }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {/* Icon circle */}
              <div
                className="w-[58px] h-[58px] rounded-full flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-[48px] h-[48px] object-contain"
                  draggable={false}
                />
              </div>

              {/* Title */}
              <h3 className="text-[1.05rem] font-bold text-[#11152a] leading-[1.3]">
                {card.title}
              </h3>

              {/* Full-width arrow separator */}
              <div className="flex items-center w-full">
                <div className="flex-1" style={{ borderTop: '1px solid rgb(102,0,126)' }} />
                <span className="text-[1.1rem] relative top-[-1] leading-none text-[rgb(102,0,126)]">→</span>
              </div>

              <p className="text-[0.88rem] text-[#4a4e6b] leading-[1.7]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
