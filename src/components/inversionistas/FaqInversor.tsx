"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FaqInversor.module.css';

const faqs = [
  {
    pregunta: "¿Puedo invertir desde el extranjero?",
    respuesta: "Sí, es posible invertir desde cualquier parte del mundo. Sin embargo, debes contar con una cuenta bancaria peruana para los traslados de fondos y aceptar la retención de impuestos correspondiente para cuentas no domiciliadas según las normativas vigentes aplicables."
  },
  {
    pregunta: "¿Cómo generan la rentabilidad que ofrecen?",
    respuesta: "Nuestra rentabilidad se genera conectando inversores directamente con facturas pendientes de cobro de empresas triple A y corporativos sólidos. No cobramos comisiones de éxito ni honorarios de gestión ocultos, lo que permite que el total del retorno (hasta 18% anual) vaya directo a tu cuenta bancaria."
  },
  {
    pregunta: "¿Cuál es el riesgo de la inversión?",
    respuesta: "El riesgo es significativamente bajo. Cada factura tiene como respaldo a una empresa pagadora grande y solvente (mineras, retail, agroexportadoras) que hemos analizado exhaustivamente. Además, nuestra plataforma te permite diversificar en cientos de facturas."
  },
  {
    pregunta: "¿Cuándo y cómo recibo mi dinero?",
    respuesta: "Al término del ciclo de la factura (usualmente entre 30 a 90 días), la empresa deudora nos paga y nosotros depositamos inmediatamente el capital junto con tu ganancia estipulada a la cuenta bancaria que vinculaste a tu perfil."
  }
];

export const FaqInversor = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleLevel = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={`container ${styles.container}`}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <span className={styles.tag}>RESOLVEMOS TUS DUDAS</span>
          <h2 className={styles.title}>
            Preguntas Frecuentes <br/> <span>sobre inversión</span>
          </h2>
          <p className={styles.subtitle}>
            Si tienes consultas específicas, nuestro equipo de asesores patrimoniales está listo para ayudarte.
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
            >
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleLevel(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.pregunta}</span>
                <ChevronDown 
                  className={`${styles.chevron} ${activeIndex === index ? styles.rotate : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.faqAnswerContainer}
                  >
                    <div className={styles.faqAnswer}>
                      {faq.respuesta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
