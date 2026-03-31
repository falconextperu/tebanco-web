"use client";

import React from 'react';
import styles from './HowItWorks.module.css';
import { ShoppingCart, Package, FileText, Send, CircleDollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart size={28} strokeWidth={1.5} />,
      title: 'Venta a crédito',
      desc: 'Realizas la venta a crédito de tus productos.',
      colorClass: styles.color1
    },
    {
      icon: <Package size={28} strokeWidth={1.5} />,
      title: 'Entrega de productos',
      desc: 'Entregas los productos o servicios a tu cliente.',
      colorClass: styles.color2
    },
    {
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: 'Recepción de factura',
      desc: 'Tu cliente recepciona la factura conforme.',
      colorClass: styles.color3
    },
    {
      icon: <Send size={28} strokeWidth={1.5} />,
      title: 'Envío de factura',
      desc: 'Envías la factura negociable a TeBanco.',
      colorClass: styles.color4
    },
    {
      icon: <CircleDollarSign size={28} strokeWidth={1.5} />,
      title: 'Desembolso rápido',
      desc: 'Te desembolsamos en cuestión de horas.',
      colorClass: styles.color5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  };

  return (
    <section className={styles.howItWorksSection} id="como-funciona">
      {/* Background Soft Blobs */}
      <div className={styles.bgBlob1}></div>
      <div className={styles.bgBlob2}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.tagWrap}>
            <span className={styles.tagText}>CÓMO FUNCIONA</span>
          </div>
          <h2 className={styles.mainTitle}>
            Obtener financiación con <br/><span className={styles.highlight}>TeBanco</span> es muy sencillo
          </h2>
          <p className={styles.subtitle}>
            Sigue estos 5 pasos y adelanta el cobro de tus facturas hoy mismo.
          </p>
        </motion.div>

        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className={styles.stepCard} variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className={`${styles.cardIcon} ${step.colorClass}`}>
                <div className={styles.stepNumber}>{index + 1}</div>
                {step.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};


