"use client";

import React from 'react';
import styles from './HowItWorks.module.css';
import { Mail, FileText, BadgeDollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Mail size={24} strokeWidth={2} />,
      title: 'Envíanos 3 documentos',
      desc: 'Copia literal o vigencia de poder, DNI del representante legal y el contrato firmado.'
    },
    {
      icon: <FileText size={24} strokeWidth={2} />,
      title: 'Sube tus facturas',
      desc: 'Evaluamos las facturas de tu cliente para proponerte una tasa de descuento justa (sin costos ocultos).'
    },
    {
      icon: <BadgeDollarSign size={24} strokeWidth={2} />,
      title: 'Recibe el adelanto de tu dinero',
      desc: 'Recibe entre el 85% - 90% del dinero de tus facturas a tus cuentas bancarias.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className={styles.howItWorksSection} id="como-funciona">
      <div className="container">

        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            Haz factoring con Fluxa Finance en 3 simples pasos
          </h2>
          <p className={styles.subtitle}>
            Regístrate y en menos de 5 minutos tendrás tu cuenta Fluxa.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.stepsContainer}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} className={styles.stepItem} variants={itemVariants}>
                <div className={styles.iconWrapper}>
                  {step.icon}
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/6694896/pexels-photo-6694896.jpeg"
              alt="Cliente sonriendo FLUXA FINANCE"
              className={styles.image}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};


