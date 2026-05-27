"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const FilosofiaSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: '#0f1235' }}>

      {/* Background SVG */}
      <img
        src="/svg/bannerfilosofia.svg"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-[0]"
      />

      <div className="container relative z-[2] flex flex-col items-center">

        {/* Title */}
        <motion.h2
          className="text-center text-[2rem] font-normal text-white leading-[1.2] mb-8 lg:text-[2.8rem] lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Nuestra <strong className="font-bold">Filosofía</strong>
        </motion.h2>

        {/* Quote card */}
        <motion.div
          className="max-w-[640px] w-full rounded-2xl px-7 py-8 text-center lg:px-12 lg:py-10"
          style={{
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.04)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="text-[1rem] font-bold text-white leading-[1.6] mb-4">
            Creemos en una industria financiera más ágil, transparente y accesible.
          </p>
          <p className="text-[0.95rem] text-white/65 leading-[1.7]">
            En Fluxa utilizamos tecnología y estrategia para eliminar barreras tradicionales y ayudar a
            las empresas a crecer con mayor velocidad y confianza.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
