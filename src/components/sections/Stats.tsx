"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="bg-white py-24 pb-32 relative overflow-hidden" id="beneficios">
      {/* Soft bg wave glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%', right: '-10%', width: '1000px', height: '1000px',
          background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 60%)',
          filter: 'blur(100px)', zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="bg-white text-[#0f172a] text-[0.75rem] font-bold py-[6px] px-[18px] rounded-[30px] border border-[#e2e8f0] mb-8 tracking-[0.5px]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            Beneficios
          </span>
          <h2 className="text-[3.4rem] font-extrabold text-[#111827] leading-[1.15] tracking-[-0.03em] lg:text-[2.8rem] sm:text-[2.2rem]">
            Herramientas Potentes<br />Para Finanzas Simples.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-3 gap-8 lg:grid-cols-1 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Card 1: Simulator */}
          <motion.div className="flex flex-col" variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
            <div
              className="bg-white border border-[#e2e8f0] rounded-[20px] mb-6 flex flex-col items-center relative overflow-hidden"
              style={{ height: '360px', boxShadow: '0 5px 25px rgba(0,0,0,0.02)', justifyContent: 'flex-end', padding: '0 2rem', paddingBottom: 0 }}
            >
              <div
                className="w-full rounded-[16px_16px_0_0] p-6 flex flex-col justify-between"
                style={{
                  height: '220px',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
                  boxShadow: '0 20px 40px rgba(37,99,235,0.25)',
                  marginBottom: '-10px'
                }}
              >
                <div className="flex justify-between text-white/90 text-[0.75rem] font-medium">
                  <span>Monto a Recibir Estimado</span>
                  <span className="text-[1.2rem] font-bold" style={{ transform: 'rotate(90deg)' }}>)))</span>
                </div>
                <div className="text-[2rem] font-extrabold text-white mb-4">S/ 12,345</div>
                <div>
                  <div className="text-[0.65rem] text-white/80 tracking-[1px] mb-2 uppercase">SIMULADOR TEBANCO</div>
                  <div className="flex justify-between items-center text-white/90 text-[0.95rem] font-semibold tracking-[2px]">
                    <span>Tasa: 1.5% mensual</span>
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-[#ea001b] rounded-full opacity-90" style={{ zIndex: 2 }} />
                      <div className="w-5 h-5 bg-[#f79e1b] rounded-full opacity-90 -ml-2" style={{ zIndex: 1 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[1.25rem] font-bold text-[#111827] mb-3">Simulador de Adelantos Dinámico</h3>
              <p className="text-[0.95rem] text-[#64748b] leading-[1.6]">Calcula al instante cuánto recibirás por tu factura. Conoce la tasa y el monto exacto antes de confirmar, sin sorpresas.</p>
            </div>
          </motion.div>

          {/* Card 2: Fast-track */}
          <motion.div className="flex flex-col" variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
            <div
              className="bg-white border border-[#e2e8f0] rounded-[20px] mb-6 flex flex-col items-center justify-center relative overflow-hidden p-6"
              style={{ height: '360px', boxShadow: '0 5px 25px rgba(0,0,0,0.02)' }}
            >
              <div
                className="bg-white rounded-2xl w-[95%] p-6 flex flex-col gap-6"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <div className="text-[0.95rem] font-bold text-[#475569] mb-2">Rastreo de Operación</div>

                {[
                  { bg: '#fed7aa', color: '#b45309', label: 'XML', title: 'Factura validada en SUNAT', time: '16:05 hrs' },
                  { bg: '#bbf7d0', color: '#166534', label: 'TB', title: 'TeBanco: Riesgo Aprobado', time: '16:15 hrs' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0"
                      style={{ background: item.bg, color: item.color }}
                    >
                      {item.label}
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-[0.8rem] text-[#1e293b] font-semibold leading-[1.4]">{item.title}</strong>
                      <span className="text-[0.7rem] text-[#94a3b8]">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[1.25rem] font-bold text-[#111827] mb-3">Evaluación Automatizada (Fast-Track)</h3>
              <p className="text-[0.95rem] text-[#64748b] leading-[1.6]">Nuestros algoritmos evalúan a tu cliente en tiempo real. Obtén aprobaciones en minutos, adiós a las esperas bancarias.</p>
            </div>
          </motion.div>

          {/* Card 3: Chart */}
          <motion.div className="flex flex-col" variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
            <div
              className="bg-white border border-[#e2e8f0] rounded-[20px] mb-6 flex flex-col relative overflow-hidden"
              style={{ height: '360px', boxShadow: '0 5px 25px rgba(0,0,0,0.02)', justifyContent: 'flex-end', padding: '0 2rem', paddingBottom: 0 }}
            >
              <div className="w-full flex flex-col" style={{ height: '240px' }}>
                <div className="text-[0.85rem] font-semibold text-[#64748b] mb-1">Línea de Crédito Rotativa</div>
                <div className="text-[2.2rem] font-extrabold text-[#111827] mb-6">S/ 54,742</div>

                <div className="flex-1 flex justify-between items-end gap-2">
                  {[
                    { label: 'Ene', h: '35%', active: false },
                    { label: 'Feb', h: '60%', active: false },
                    { label: 'Mar', h: '45%', active: false },
                    { label: 'Abr', h: '75%', active: false },
                    { label: 'May', h: '100%', active: true },
                  ].map((bar) => (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-[10px] h-full justify-end">
                      <span className="text-[0.65rem] text-[#94a3b8] font-semibold">{bar.label}</span>
                      <span
                        className="w-full rounded-[6px_6px_0_0]"
                        style={{
                          height: bar.h,
                          background: bar.active
                            ? 'linear-gradient(to bottom, #3b82f6, #60a5fa)'
                            : '#cbd5e1',
                          opacity: bar.active ? 1 : 0.7,
                          boxShadow: bar.active ? '0 -5px 15px rgba(59,130,246,0.3)' : 'none'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[1.25rem] font-bold text-[#111827] mb-3">Trazabilidad y Control Total</h3>
              <p className="text-[0.95rem] text-[#64748b] leading-[1.6]">Monitorea tu límite de crédito, los adelantos recibidos y los cobros gestionados desde un solo dashboard centralizado.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
