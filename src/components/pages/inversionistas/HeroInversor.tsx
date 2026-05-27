"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const HeroInversor = () => {
  return (
    <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden">

      {/* Dark tint overlay */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[rgba(8,8,22,0.38)]" />

      {/* Left edge fade */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 z-[6] w-[20%] bg-gradient-to-r from-[#050a1e]/80 via-[#0a1232]/30 to-transparent" />

      {/* Right edge fade */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 z-[6] w-[16%] bg-gradient-to-l from-[#050a1e] via-[#0a1232]/30 to-transparent" />

      {/* Hero background image */}
      <motion.img
        src="/images/inversionista.png"
        alt="Fluxa — Inversionistas"
        className="pointer-events-none absolute inset-0 w-full h-full select-none object-cover"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Text block — right side */}
      <motion.div
        className="relative z-10 mx-auto max-w-full px-6 py-8 text-center lg:ml-auto lg:mr-[8%] lg:max-w-[520px] lg:px-0 lg:text-left"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <h1 className="mb-6 text-[clamp(2.2rem,1.3vw,3.8rem)] font-normal leading-[1.1] tracking-[-0.01em] text-white">
          Transformando<br />
          cómo <strong className="font-extrabold">fluye el<br />capital en las<br />empresas.</strong>
        </h1>
        <p className="mb-8 text-[1rem] leading-[1.65] text-white lg:text-[1.4rem] lg:max-w-[400px]">
          Conectamos empresas que necesitan liquidez con soluciones financieras ágiles, digitales y diseñadas para operaciones reales.
        </p>
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
