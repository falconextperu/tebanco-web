"use client";

import React from 'react';
import styles from './Mission.module.css';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className={styles.missionSection} id="mision">
      {/* Background Glows to add life */}
      <motion.div
        className={styles.glowTopRight}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className={styles.glowBottomLeft}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Top Region: Mission & Stats */}
        <motion.div
          className={styles.topRegion}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.tagWrap}>
            <span className={styles.tagText}>NUESTRA MISIÓN</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className={styles.mainTitle}>
            Hemos ayudado a <br />
            <span>empresas innovadoras</span>
          </motion.h2>
          <motion.p variants={itemVariants} className={styles.subtitle}>
            Transformamos tus cuentas por cobrar en efectivo al instante,
            permitiendo que empresas de todos los tamaños operen sin estrés
            financiero y aceleren su crecimiento sostenido sin recurrir a deuda.
          </motion.p>

          <motion.div variants={containerVariants} className={styles.statsRow}>
            <motion.div variants={itemVariants} className={styles.statItem}>
              <h3>30%</h3>
              <p>Aumento en liquidez</p>
            </motion.div>
            <motion.div variants={itemVariants} className={styles.statItem}>
              <h3>+$5M</h3>
              <p>Facturas fondeadas</p>
            </motion.div>
            <motion.div variants={itemVariants} className={styles.statItem}>
              <h3>48h</h3>
              <p>Tiempo de aprobación</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Region: Split Layout */}
        <div className={styles.bottomRegion}>

          {/* Left Side: Mockup Canvas */}
          <motion.div
            className={styles.mockupSide}
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.mockupCanvas}>

              <motion.div className={styles.transactionCard} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className={styles.tcIcon}>
                  <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.4rem' }}>C</span>
                </div>
                <div className={styles.tcText}>
                  <strong>Constructora Sur</strong>
                  <span>Liquidación Factura #1002</span>
                </div>
                <div className={styles.tcAmount}>+$15,000.00</div>
              </motion.div>

              <motion.div className={styles.transactionCard} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className={styles.tcIcon}>
                  <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.2rem' }}>D</span>
                </div>
                <div className={styles.tcText}>
                  <strong>Distribuidora Andes</strong>
                  <span>Adelanto Factura #405</span>
                </div>
                <div className={styles.tcAmount}>+$5,500.00</div>
              </motion.div>

              <motion.div className={styles.transactionCard} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className={styles.tcIcon}>
                  <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.4rem', fontStyle: 'italic' }}>M</span>
                </div>
                <div className={styles.tcText}>
                  <strong>Minera Tech S.A.</strong>
                  <span>Fondeo de Factura #890</span>
                </div>
                <div className={styles.tcAmount}>+$12,200.00</div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className={styles.contentSide}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className={styles.sideTitle}>
              Transformando <br />
              Facturas en Efectivo, <br />
              <span>en un Solo Clic.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.sideText}>
              Liberamos el capital inmovilizado en tus facturas pendientes. Nuestro modelo te permite cobrar de inmediato, delegando el riesgo y el proceso de cobranza.
            </motion.p>

            <motion.ul variants={containerVariants} className={styles.checkList}>
              <motion.li variants={itemVariants}>
                <div className={styles.checkIcon}>
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <span>Evaluación crediticia de tus clientes 100% automatizada.</span>
              </motion.li>
              <motion.li variants={itemVariants}>
                <div className={styles.checkIcon}>
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <span>Fondeo directo a tu cuenta sin comisiones ocultas o demoras.</span>
              </motion.li>
            </motion.ul>

            <motion.button
              variants={itemVariants}
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
