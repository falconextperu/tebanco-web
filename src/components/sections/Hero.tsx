"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="inicio" className="relative flex min-h-[100vh] w-full items-center overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[rgba(8,8,22,0.38)]" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 z-[6] w-[20%] bg-gradient-to-r from-[#050a1e]/80 via-[#0a1232]/30 to-transparent" />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 z-[6] w-[16%] bg-gradient-to-l from-[#050a1e] via-[#0a1232]/30 to-transparent" />

      <motion.img
        src="/svg/herohome.svg"
        alt="Asesora Fluxa Finance"
        className="pointer-events-none absolute inset-0 w-full h-full select-none object-cover"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-full px-6 py-8 text-center lg:ml-auto lg:mr-[25%] lg:max-w-[560px] lg:px-0 lg:text-left"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <h1 className="mb-8 text-[clamp(2.2rem,3.3vw,5rem)] font-normal leading-[1.08] tracking-[0] text-white">
          Convierte tus<br />
          facturas <strong className="font-extrabold">en<br />crecimiento</strong>
        </h1>
        <a
          href="/contacto"
          className="inline-block whitespace-nowrap rounded-[50px] bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-[42px] py-[15px] text-[1rem] font-bold leading-none text-white shadow-[0_10px_24px_rgba(128,29,197,0.36)]"
        >
          Habla con un asesor
        </a>
      </motion.div>
    </section>
  );
};
