"use client";

import React from 'react';
import styles from './Hero.module.css';
import { ChevronRight, Settings, Grid, Bookmark, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any, delay: 0.3 }
    }
  };

  const leftFloatVariants = {
    hidden: { opacity: 0, x: -30, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.7 }
    }
  };

  const rightFloatVariants = {
    hidden: { opacity: 0, x: 30, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.9 }
    }
  };

  return (
    <div className={styles.heroWrapper} id="inicio">
      <div className={`container ${styles.containerFlex}`}>

        {/* Left Content Layout */}
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className={styles.title}>
            Optimiza tu flujo de efectivo con soluciones de factoring
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.description}>
            Convierte tus facturas en liquidez inmediata para hacer crecer tu negocio.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.buttonGroup}>
            <a href="/inversionistas#simulador" className={styles.btnPrimary}>
              Simular factoring
            </a>
            <a href="/servicios/factoring" className={styles.btnSecondary}>
              Más información
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual mock */}
        <div className={styles.heroVisual}>
          <motion.div 
            className={styles.customImageWrapper}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
             <img src="/logos/hero.jpeg" alt="Hero representation" className={styles.customImage} />
          </motion.div>
        </div>

      </div>
    </div>
  );
};
