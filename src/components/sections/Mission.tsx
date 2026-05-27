"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="bg-white py-32 border-b border-black/[0.02] relative overflow-hidden" id="mision">
      {/* Background Glows */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-10%', width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 65%)',
          filter: 'blur(90px)', zIndex: 0
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '-10%', width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 65%)',
          filter: 'blur(90px)', zIndex: 0
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Top Region */}
        <motion.div
          className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white px-[14px] py-[6px] rounded-[20px] border border-[#e2e8f0] text-[0.75rem] font-bold text-[#334155] tracking-[0.05em]"
              style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              NUESTRA MISIÓN
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-[3.8rem] font-extrabold text-[#111827] leading-[1.1] mb-6 tracking-[-0.02em] md:text-[2.6rem]">
            Hemos ayudado a <br />
            <span>empresas innovadoras</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[1.25rem] text-[#4b5563] leading-[1.6] max-w-[650px]">
            Transformamos tus cuentas por cobrar en efectivo al instante,
            permitiendo que empresas de todos los tamaños operen sin estrés
            financiero y aceleren su crecimiento sostenido sin recurrir a deuda.
          </motion.p>

          <motion.div variants={containerVariants} className="flex justify-between w-full mt-18 md:flex-wrap md:gap-12 md:justify-center" style={{ marginTop: '4.5rem' }}>
            {[
              { num: '30%', label: 'Aumento en liquidez' },
              { num: '+$5M', label: 'Facturas fondeadas' },
              { num: '48h', label: 'Tiempo de aprobación' },
            ].map((stat) => (
              <motion.div key={stat.num} variants={itemVariants} className="flex flex-col items-center gap-2">
                <h3 className="text-[4.5rem] font-extrabold text-[#111827] m-0 leading-none md:text-[3.5rem]">{stat.num}</h3>
                <p className="text-base text-[#64748b] m-0 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Region */}
        <div className="flex items-center gap-20 md:flex-col">

          {/* Left Side: Mockup Canvas */}
          <motion.div
            className="flex-1 flex justify-end w-full"
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-[#f1f5f9] rounded-[32px] p-12 w-full max-w-[450px] flex flex-col gap-6 sm:p-6 sm:rounded-[20px] sm:gap-4">

              {[
                { letter: 'C', company: 'Constructora Sur', desc: 'Liquidación Factura #1002', amount: '+$15,000.00', letterStyle: { fontWeight: 800, color: '#0f172a', fontSize: '1.4rem' } },
                { letter: 'D', company: 'Distribuidora Andes', desc: 'Adelanto Factura #405', amount: '+$5,500.00', letterStyle: { fontWeight: 800, color: '#0f172a', fontSize: '1.2rem' } },
                { letter: 'M', company: 'Minera Tech S.A.', desc: 'Fondeo de Factura #890', amount: '+$12,200.00', letterStyle: { fontWeight: 800, color: '#0f172a', fontSize: '1.4rem', fontStyle: 'italic' } },
              ].map((t) => (
                <motion.div
                  key={t.company}
                  className="bg-white rounded-[20px] p-5 flex items-center gap-5 sm:p-4 sm:gap-3"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.01)' }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="w-[42px] h-[42px] bg-[#f8fafc] rounded-xl flex items-center justify-center sm:w-8 sm:h-8">
                    <span style={t.letterStyle}>{t.letter}</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <strong className="text-[1.05rem] font-semibold text-[#111827] sm:text-[0.85rem] sm:leading-[1.2]">{t.company}</strong>
                    <span className="text-[0.85rem] text-[#64748b] mt-[2px] sm:text-[0.75rem] sm:leading-[1.2]">{t.desc}</span>
                  </div>
                  <div className="text-[1.05rem] font-bold text-[#10b981] sm:text-[0.9rem]">{t.amount}</div>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="flex-1 flex flex-col pr-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-[2.8rem] font-extrabold text-[#111827] leading-[1.15] mb-6 tracking-[-0.02em] md:text-[2.5rem]">
              Transformando <br />
              Facturas en Efectivo, <br />
              <span>en un Solo Clic.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[1.25rem] text-[#4b5563] leading-[1.6] mb-10">
              Liberamos el capital inmovilizado en tus facturas pendientes. Nuestro modelo te permite cobrar de inmediato, delegando el riesgo y el proceso de cobranza.
            </motion.p>

            <motion.ul variants={containerVariants} className="list-none p-0 m-0 mb-12 flex flex-col gap-5">
              {[
                'Evaluación crediticia de tus clientes 100% automatizada.',
                'Fondeo directo a tu cuenta sin comisiones ocultas o demoras.'
              ].map((item) => (
                <motion.li key={item} variants={itemVariants} className="flex items-start gap-[14px] text-[1.05rem] text-[#4b5563] font-medium leading-[1.4]">
                  <div className="text-[#111827] mt-[2px]">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              variants={itemVariants}
              className="bg-[#1f2937] text-white border-none rounded-[40px] py-4 px-9 text-base font-semibold cursor-pointer self-start transition-all duration-200"
              style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
