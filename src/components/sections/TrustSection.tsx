"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 pb-16 lg:py-16 lg:pb-20">
      <style>{`
        .trust-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) { .trust-grid { grid-template-columns: 1.15fr 0.85fr; } }
      `}</style>

      {/* Vector sutil solo en esquina izquierda */}
      <img
        src="/svg/vectorfluxa.svg"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full w-auto select-none z-[0]"
        style={{ maxWidth: '55%' }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[72%] pointer-events-none hidden lg:block z-[1]"
        style={{ background: '#ece8ef', clipPath: 'polygon(24% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative z-[2] max-w-screen-lg mx-auto px-5 py-8 lg:py-10">

        {/* Main grid */}
        <div className="trust-grid grid items-center gap-8 lg:gap-10">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative w-full overflow-hidden rounded-[24px]"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src="/images/preocupado.png"
              alt="Empresario preocupado por el flujo de caja"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={false}
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:max-w-[500px]"
          >
            <div className="inline-flex items-center justify-center rounded-full mb-4 p-2">
              <Image
                src="/images/facturas.png"
                alt="Ícono de facturas"
                width={72}
                height={72}
              />
            </div>

            <h2 className="text-[#2c2b68] text-[32px] leading-[1.1] font-medium lg:text-[58px] lg:leading-[1.05]">
              El problema<br />
              no es vender.<br />
              <span className="font-bold">Es esperar</span><br />
              <span className="font-bold">para cobrar.</span>
            </h2>

            <p className="mt-6 text-[17px] leading-[1.55] text-[#313131] lg:mt-8 lg:text-[22px] lg:leading-[1.45]">
              Miles de empresas tienen facturas aprobadas y clientes sólidos, pero siguen enfrentando
              problemas de liquidez por los tiempos de pago y la burocracia financiera tradicional.
            </p>
          </motion.div>
        </div>

        {/* Full-width paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-8 max-w-[1080px] mx-auto lg:mt-10"
        >
          <p className="text-[17px] leading-[1.6] text-[#2f2f2f] lg:text-[22px] lg:leading-[1.5]">
            Reducimos tiempos, eliminamos procesos innecesarios y hacemos que acceder a capital sea más
            simple, accesible y eficiente para negocios de distintos sectores como transporte, logística,
            manufactura y servicios.
            <br />
            Porque una empresa no debería frenar su operación solo por esperar un pago a 30, 60 o 90 días.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <motion.a
            href="/contacto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center justify-center rounded-full text-white font-bold transition-transform duration-300 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(90deg, #7f0ddf 0%, #b81be8 100%)',
              padding: '12px 40px',
              fontSize: '18px',
              lineHeight: 1,
            }}
          >
            Obtener liquidez
          </motion.a>
        </div>
      </div>
    </section>
  );
};
