"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import styles from './HeroInversor.module.css';

export const HeroInversor = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className={styles.heroSection}>
      {/* Dynamic Background */}
      <div className={styles.bgGlows}>
        <motion.div 
          className={styles.glow1}
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" as const }}
        />
        <motion.div 
          className={styles.glow2}
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
        />
      </div>

      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.contentContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <TrendingUp size={16} className={styles.badgeIcon} />
            <span>Oportunidad de Inversión Premium</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Invierte en Factoring y obtén hasta <br />
            <span className={styles.gradientText}>18% de rentabilidad anual</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.description}>
            Diversifica tu portafolio en soles y dólares. Obtén rendimientos extraordinarios respaldados por facturas comerciales, <strong>sin pagar comisiones de éxito.</strong>
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <a href="http://localhost:5174/registro" className={styles.btnPrimary}>
              Empezar a Invertir <ArrowRight size={20} />
            </a>
            <button className={styles.btnSecondary}>
              Conocer más
            </button>
          </motion.div>

          <motion.div variants={containerVariants} className={styles.featuresRow}>
            <motion.div variants={statsVariants} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4>Bajo Riesgo</h4>
                <p>Respaldado por facturas</p>
              </div>
            </motion.div>
            <div className={styles.divider}></div>
            <motion.div variants={statsVariants} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Zap size={24} />
              </div>
              <div>
                <h4>Alta Liquidez</h4>
                <p>Retorno de 30 a 120 días</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.overlayBottom}></div>
    </section>
  );
};
