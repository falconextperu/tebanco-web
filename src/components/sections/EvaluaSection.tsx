"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const EvaluaSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundImage: "url('/images/fondoseccion.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#EBE7FD"
      }}
    >
      <div className="evalua-grid max-w-screen-lg mx-auto px-5 py-16 grid items-center gap-10 lg:px-10 lg:py-24 lg:gap-16">
        {/* LEFT — copy */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            className="text-[2rem] leading-[1.15] tracking-[-0.01em] lg:text-[3rem]"
            style={{ color: '#1e2359', fontWeight: 400 }}
          >
            Evalúa tu factura<br />
            con <strong style={{ fontWeight: 800 }}>Fluxa</strong>
          </h2>

          <p className="text-[1.05rem] leading-[1.65] lg:text-[1.2rem] lg:max-w-[460px]" style={{ color: '#4a4e6b' }}>
            Recibe atención personalizada y una evaluación rápida para acceder a liquidez empresarial.
          </p>

          <div>
            <a
              href="/contacto"
              className="inline-block font-bold text-white rounded-full py-[14px] px-8 text-[1rem] no-underline transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #8b2fc9, #6d28d9)' }}
            >
              Solicitar evaluación
            </a>
          </div>
        </motion.div>

        {/* RIGHT — image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <img
            src="/svg/viendografico.svg"
            alt="Evaluación de facturas Fluxa"
            className="w-full rounded-2xl object-cover"
            style={{ maxWidth: '500px', boxShadow: '0 20px 60px rgba(30,35,89,0.12)' }}
          />
        </motion.div>
      </div>

      <style>{`
        .evalua-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) { .evalua-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
};
