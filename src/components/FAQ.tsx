"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Plus, Minus } from 'lucide-react';
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
  },
  {
    question: "¿Es segura la información financiera que manejo en la plataforma?",
    answer: "Por supuesto. Operamos bajo las más estrictas normativas de encriptación de datos, resguardando cada transacción, tus montos de facturación, comprobantes XML e identidades de tus clientes conforme a estrictas políticas de confidencialidad para plataformas B2B."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <motion.div 
          className={styles.headerRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Respondiendo preguntas</h2>
        </motion.div>

        <motion.div 
          className={styles.accordionContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={index} variants={itemVariants} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <p className={styles.question}>{faq.question}</p>
                  <motion.div 
                    className={styles.iconBox}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className={styles.accordionBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.bodyInner}>
                        <p className={styles.answer}>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
