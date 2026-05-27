"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonios = [
  {
    quote: 'Nos ayudó a obtener liquidez de forma rápida y con un proceso mucho más claro de lo que esperábamos.',
    name: 'María López',
    company: 'Empresa comercial',
  },
  {
    quote: 'El desembolso fue ágil y el acompañamiento durante el proceso nos dio bastante confianza.',
    name: 'Ana Gómez',
    company: 'Sector construcción',
  },
  {
    quote: 'Encontramos en Fluxa una alternativa eficiente para mantener el flujo de caja de nuestra operación.',
    name: 'Ross Matute',
    company: 'Empresa logística',
  },
];

export const TestimoniosSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden lg:py-24">

      {/* Background vector */}
      <img
        src="/svg/vectorfluxa.svg"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-[0]"
      />

      <div className="container relative z-[2]">

        {/* Title */}
        <motion.h2
          className="text-center text-[2rem] font-normal text-[#11152a] leading-[1.2] mb-10 lg:text-[3rem] lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Empresas que ya impulsan<br />
          su <strong className="font-bold">crecimiento con Fluxa</strong>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {testimonios.map((t) => (
            <motion.div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl p-8 gap-6"
              style={{ background: '#ede8fb' }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <p className="text-[0.95rem] text-[#3d3d5c] leading-[1.7]">
                {t.quote}
              </p>

              <div className="flex flex-col gap-1">
                {/* Arrow separator */}
                <span className="text-[1.2rem] text-[#7c3aed] mb-1">→</span>
                <span className="text-[1rem] font-bold text-[#11152a]">{t.name}</span>
                <span className="text-[0.85rem] text-[#6b6b8a]">{t.company}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
