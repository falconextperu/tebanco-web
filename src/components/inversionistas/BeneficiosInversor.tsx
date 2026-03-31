"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, HandCoins, Laptop } from 'lucide-react';
import styles from './BeneficiosInversor.module.css';

export const BeneficiosInversor = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Rentabilidad Superior",
      description: "Genera hasta 18% anual invirtiendo en facturas a plazos cortos, de manera segura y sin intermediarios bancarios pesados."
    },
    {
      icon: <HandCoins size={32} />,
      title: "0% Comisiones Ocultas",
      description: "En TeBanco el monto que inviertes crece. No te cobramos por mantenimiento ni por comisiones de éxito. Todo tu retorno es para ti."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Diversificación Inteligente",
      description: "Invierte desde S/ 500 en cientos de facturas comerciales del sector minero, agroexportador y logístico. Minimiza tu riesgo al instante."
    },
    {
      icon: <Laptop size={32} />,
      title: "100% Digital y Transparente",
      description: "Selecciona las facturas en nuestra plataforma, analiza el riesgo de cada pagador en tiempo real y cobra directamente en tu cuenta bancaria."
    }
  ];

  return (
    <section className={styles.beneficiosSection}>
      <div className={`container ${styles.container}`}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <span className={styles.tag}>LA MEJOR ESTRATEGIA</span>
          <h2 className={styles.title}>
            Invierte con información <br />
            <span className={styles.accent}>a la mano</span>
          </h2>
          <p className={styles.subtitle}>
            Olvídate de las tasas fijas del banco que no superan la inflación. Hemos democratizado el factoring para que tu patrimonio gane valor día a día.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className={styles.iconBox}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
