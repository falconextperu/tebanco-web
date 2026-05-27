'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  {
    id: 'adelanto',
    title: 'Adelanto de Facturas',
    description: 'Convierte tus cuentas por cobrar en efectivo de inmediato. Olvídate de esperar 30, 60 o 90 días para disponer de tu liquidez.',
  },
  {
    id: 'gestion',
    title: 'Gestión de Cobranza',
    description: 'Delegamos la gestión del cobro para que tu equipo se enfoque en vender. Nosotros nos encargamos del seguimiento con tu cliente.',
  },
  {
    id: 'riesgo',
    title: 'Evaluación de Riesgo',
    description: 'Analizamos a tus clientes de manera automatizada para asegurar operaciones seguras y transparentes al instante.',
  }
];

export const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  return (
    <section className="bg-white py-24 overflow-hidden" id="nosotros">
      <div className="container flex items-center gap-16 md:flex-col">

        {/* Left Side: Visuals */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <div
            className="w-full max-w-[500px] h-[480px] bg-[#f8fafc] rounded-[32px] flex items-center justify-center relative p-8 border border-black/[0.04]"
          >
            <AnimatePresence mode="wait">
              {activeTab === 'adelanto' && (
                <motion.div
                  key="adelanto"
                  variants={tabVariants} initial="hidden" animate="visible" exit="exit"
                  className="w-full max-w-[380px] bg-white rounded-[20px] p-6 text-[#111827] relative overflow-hidden border border-black/[0.04]"
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.06)', animation: 'fadeIn 0.4s ease forwards' }}
                >
                  <div className="mb-8">
                    <span className="text-[0.85rem] text-[#64748b]">Liquidez del Mes</span>
                    <div className="text-[2rem] font-bold mt-1 mb-1 text-[#0f172a]">$ 18,500.00</div>
                    <div className="text-[0.8rem] text-[#64748b]">Crecimiento del 12% respecto al mes anterior</div>
                  </div>
                  <div className="flex items-end justify-between h-[160px] mt-8 relative z-10">
                    {[
                      { label: 'Abr', h: '40%', active: false },
                      { label: 'May', h: '55%', active: false },
                      { label: 'Jun', h: '85%', active: true },
                      { label: 'Jul', h: '30%', active: false },
                    ].map((bar) => (
                      <div key={bar.label} className="flex flex-col items-center gap-2 h-full justify-end w-10">
                        {bar.active && (
                          <div className="relative w-5">
                            <div
                              className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-[#111827] text-white text-[0.75rem] font-extrabold px-2 py-1 rounded"
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              $20,000
                              <div
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                                style={{ borderWidth: '4px 4px 0', borderStyle: 'solid', borderColor: '#111827 transparent transparent transparent' }}
                              />
                            </div>
                          </div>
                        )}
                        <div
                          className="w-5 rounded"
                          style={{
                            height: bar.h,
                            background: bar.active ? '#3b82f6' : '#e2e8f0',
                            position: 'relative'
                          }}
                        />
                        <span className={`text-[0.7rem] ${bar.active ? 'text-[#0f172a] font-bold' : 'text-[#64748b]'}`}>{bar.label}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="absolute"
                    style={{
                      bottom: '50px', left: '1.5rem', right: '1.5rem', height: '1px',
                      borderBottom: '1px dashed rgba(0,0,0,0.08)', zIndex: 5
                    }}
                  />
                </motion.div>
              )}

              {activeTab === 'gestion' && (
                <motion.div
                  key="gestion"
                  variants={tabVariants} initial="hidden" animate="visible" exit="exit"
                  className="w-full max-w-[380px] bg-white rounded-[20px] p-6 text-[#111827] border border-black/[0.04]"
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                >
                  <div className="text-[1.1rem] font-semibold mb-8 text-[#0f172a]">Seguimiento en Tiempo Real</div>
                  <div className="flex flex-col gap-5">
                    {[
                      { dot: '#22c55e', title: 'Factura #A-102 Cobrada', sub: 'Hace 2 horas' },
                      { dot: '#f59e0b', title: 'Factura #B-403 Pendiente', sub: 'Recordatorio enviado' },
                      { dot: '#3b82f6', title: 'Factura #C-901 Aprobada', sub: 'Fondeo programado' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-center gap-4 bg-[#f8fafc] border border-black/[0.03] p-3 rounded-xl">
                        <div className="w-[10px] h-[10px] rounded-full" style={{ background: item.dot }} />
                        <div className="flex flex-col">
                          <strong className="text-[0.85rem] text-[#0f172a]">{item.title}</strong>
                          <span className="text-[0.75rem] text-[#64748b]">{item.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'riesgo' && (
                <motion.div
                  key="riesgo"
                  variants={tabVariants} initial="hidden" animate="visible" exit="exit"
                  className="w-full max-w-[380px] bg-white rounded-[20px] p-6 text-[#111827] flex flex-col items-center justify-center text-center gap-8 border border-black/[0.04]"
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                >
                  <div
                    className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
                    style={{ background: 'conic-gradient(#3b82f6 98%, #e2e8f0 0)' }}
                  >
                    <div className="w-[100px] h-[100px] bg-white rounded-full flex flex-col items-center justify-center">
                      <strong className="text-[1.8rem] font-bold text-[#0f172a]">98%</strong>
                      <span className="text-[0.75rem] text-[#64748b]">Score</span>
                    </div>
                  </div>
                  <div className="text-[0.9rem] leading-[1.5] text-[#4b5563]">
                    Aprobación crediticia instantánea. Cliente corporativo verificado sin incidencias financieras.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side: Text & Accordion */}
        <motion.div
          className="flex-1 flex flex-col w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white px-[14px] py-[6px] rounded-[20px] border border-[#e2e8f0] text-[0.75rem] font-bold text-[#334155] tracking-[0.05em]"
              style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              QUIÉNES SOMOS
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-[3rem] font-extrabold text-[#111827] leading-[1.1] mb-12 tracking-[-0.02em] md:text-[2.2rem]">
            Todo lo que necesitas para tu liquidez en un solo lugar.
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className="relative flex bg-white border border-[#e2e8f0] rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden"
                  style={{ background: isActive ? '#f1f5f9' : '#ffffff' }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1.25rem] font-bold text-[#111827] m-0">{tab.title}</h3>
                    <p className="text-[0.95rem] text-[#4b5563] leading-[1.5] m-0">{tab.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
