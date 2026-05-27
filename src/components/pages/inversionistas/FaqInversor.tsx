"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Puedo invertir desde el extranjero?",
    answer: "Sí, es posible invertir desde cualquier parte del mundo. Sin embargo, debes contar con una cuenta bancaria peruana para los traslados de fondos y aceptar la retención de impuestos correspondiente para cuentas no domiciliadas según las normativas vigentes aplicables."
  },
  {
    question: "¿Cómo generan la rentabilidad que ofrecen?",
    answer: "Nuestra rentabilidad se genera conectando inversores directamente con facturas pendientes de cobro de empresas triple A y corporativos sólidos. No cobramos comisiones de éxito ni honorarios de gestión ocultos, lo que permite que el total del retorno (hasta 18% anual) vaya directo a tu cuenta bancaria."
  },
  {
    question: "¿Cuál es el riesgo de la inversión?",
    answer: "El riesgo es significativamente bajo. Cada factura tiene como respaldo a una empresa pagadora grande y solvente (mineras, retail, agroexportadoras) que hemos analizado exhaustivamente. Además, nuestra plataforma te permite diversificar en cientos de facturas."
  },
  {
    question: "¿Cuándo y cómo recibo mi dinero?",
    answer: "Al término del ciclo de la factura (usualmente entre 30 a 90 días), la empresa deudora nos paga y nosotros depositamos inmediatamente el capital junto con tu ganancia estipulada a la cuenta bancaria que vinculaste a tu perfil."
  }
];

export const FaqInversor = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 overflow-hidden sm:py-20" id="faq-inversor"
      style={{ background: 'radial-gradient(ellipse at 60% 80%, #3730a3 0%, #1e1b4b 55%, #12103a 100%)' }}>

      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(88,62,155,0.35) 0%, transparent 65%)' }} />

      <div className="container relative z-[2]">

        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-[3rem] font-normal text-white leading-[1.2] tracking-[-0.01em] sm:text-[2.2rem]">
            Preguntas Frecuentes<br />
            <span className="font-extrabold">sobre inversión</span>
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="max-w-[860px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-2xl overflow-hidden transition-colors duration-300"
                style={{
                  background: isOpen ? '#ffffff' : 'rgba(255,255,255,0.07)',
                  border: isOpen ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <button
                  className="flex items-center justify-between w-full px-8 py-6 text-left cursor-pointer border-none bg-transparent sm:px-6 sm:py-5"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-[1.05rem] font-semibold leading-snug ${isOpen ? 'text-[#4c2a9e]' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#4c2a9e]' : 'text-[#a78bfa]'}`}>
                    <Plus size={20} strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-8 pt-0 pb-7 m-0 text-[0.95rem] leading-[1.7] text-[#374151] sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
