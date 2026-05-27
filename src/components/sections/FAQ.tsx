"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "¿Qué es el factoring y cómo beneficia a mi empresa?",
    answer: "El factoring es una herramienta financiera donde TeBanco adelanta el pago de tus facturas por cobrar. Te permite obtener liquidez inmediata sin esperar 30, 60 o 90 días para el cobro, mejorando tu flujo de caja operativo para reinversiones, pago de proveedores o planillas."
  },
  {
    question: "¿Qué requisitos necesito para anticipar mis facturas?",
    answer: "Solo necesitas ser una empresa formalmente constituida (RUC), contar con facturas electrónicas emitidas (conformidad validada en Sunat) a empresas con buen historial crediticio. Nuestro proceso de evaluación y perfilamiento cruzado toma minutos y es 100% digital."
  },
  {
    question: "¿Cuánto tiempo demora el desembolso desde que subo mi documento?",
    answer: "Gracias a nuestra plataforma Fast-Track y conexión directa con el facturador electrónico, la evaluación de riesgo toma apenas minutos. Una vez aceptada la oferta y firmada digitalmente la transacción, el desembolso se envía por transferencia ese mismo día útil."
  },
  {
    question: "¿El factoring compromete mis calificaciones y líneas bancarias?",
    answer: "En absoluto. La operación de factoring no se registra como una deuda tradicional tuya, dado que se trata de la cesión o venta de un derecho de cobro que el cliente se compromete a pagarnos. De esa forma, mantienes libres e intactas todas tus líneas de crédito convencionales."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 overflow-hidden lg:py-32" id="faq"
      style={{ background: 'radial-gradient(ellipse at 60% 80%, #3730a3 0%, #1e1b4b 55%, #12103a 100%)' }}>

      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(88,62,155,0.35) 0%, transparent 65%)' }} />

      <div className="container relative z-[2]">

        {/* Title */}
        <motion.div
          className="text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[2.2rem] font-normal text-white leading-[1.2] tracking-[-0.01em] lg:text-[3rem]">
            Todo lo que necesita<br />
            <span className="font-extrabold">saber sobre Factoring</span>
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
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden transition-colors duration-300"
                style={{
                  background: isOpen ? '#ffffff' : 'rgba(255,255,255,0.07)',
                  border: isOpen ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <button
                  className="flex items-center justify-between w-full px-5 py-5 text-left cursor-pointer border-none bg-transparent lg:px-8 lg:py-6"
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
                      <p className="px-5 pt-0 pb-6 m-0 text-[0.95rem] leading-[1.7] text-[#374151] lg:px-8 lg:pb-7">
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
