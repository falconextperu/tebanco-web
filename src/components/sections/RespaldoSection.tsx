"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: '/svg/sbs.svg',     alt: 'Superintendencia de Banca, Seguros y AFP' },
  { src: '/svg/fintech.svg', alt: 'FinTech Perú' },
  { src: '/svg/cavali.svg',  alt: 'CAVALI x nuam' },
];

export const RespaldoSection = () => {
  return (
    <section className="py-14 sm:py-10" style={{ background: '#edeaf8' }}>
      <div className="container">

        <motion.h2
          className="text-center text-[1.4rem] font-normal text-[#11152a] mb-7 tracking-[-0.01em] lg:text-[1.75rem] lg:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Nuestro <strong className="font-bold">respaldo y seguridad</strong>
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-16 flex-wrap md:gap-20 sm:gap-8 mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain select-none sm:h-9"
              draggable={false}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};
