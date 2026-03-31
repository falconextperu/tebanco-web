"use client";

import React from 'react';
import styles from './Stats.module.css';
import { motion } from 'framer-motion';

export const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className={styles.featuresSection} id="beneficios">
      {/* Soft Background Wave Glows */}
      <div className={styles.bgWaves}></div>

      <div className="container">
        
        {/* Top Header */}
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className={styles.pill}>Beneficios</span>
          <h2 className={styles.title}>Herramientas Potentes<br/>Para Finanzas Simples.</h2>
        </motion.div>

        {/* 3 Column Cards Grid */}
        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Card 1: Simulator / Quote */}
          <motion.div className={styles.featureCard} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 }}}>
             <div className={`${styles.fcVisual} ${styles.alignBottom}`}>
                <div className={styles.creditCard}>
                  <div className={styles.ccTop}>
                     <span>Monto a Recibir Estimado</span>
                     <span className={styles.ccWifi}>)))</span>
                  </div>
                  <div className={styles.ccAmount}>S/ 12,345</div>
                  <div className={styles.ccBottom}>
                    <div className={styles.ccUser}>SIMULADOR TEBANCO</div>
                    <div className={styles.ccNumbers}>
                       <span>Tasa: 1.5% mensual</span>
                       <div className={styles.ccLogo}>
                          <div className={styles.ccDotRed}></div>
                          <div className={styles.ccDotYellow}></div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
             <div className={styles.fcText}>
                <h3>Simulador de Adelantos Dinámico</h3>
                <p>Calcula al instante cuánto recibirás por tu factura. Conoce la tasa y el monto exacto antes de confirmar, sin sorpresas.</p>
             </div>
          </motion.div>

          {/* Card 2: Fast-track approval */}
          <motion.div className={styles.featureCard} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 }}}>
             <div className={styles.fcVisual}>
                <div className={styles.activityBox}>
                   <div className={styles.abTitle}>Rastreo de Operación</div>
                   
                   <div className={styles.abItem}>
                     <div className={styles.abAvatar} style={{background: '#fed7aa', color: '#b45309'}}>XML</div>
                     <div className={styles.abInfo}>
                       <strong>Factura validada en SUNAT</strong>
                       <span>16:05 hrs</span>
                     </div>
                   </div>

                   <div className={styles.abItem}>
                     <div className={styles.abAvatar} style={{background: '#bbf7d0', color: '#166534'}}>TB</div>
                     <div className={styles.abInfo}>
                       <strong>TeBanco: Riesgo Aprobado</strong>
                       <span>16:15 hrs</span>
                     </div>
                   </div>
                   
                </div>
             </div>
             <div className={styles.fcText}>
                <h3>Evaluación Automatizada (Fast-Track)</h3>
                <p>Nuestros algoritmos evalúan a tu cliente en tiempo real. Obtén aprobaciones en minutos, adiós a las esperas bancarias.</p>
             </div>
          </motion.div>

          {/* Card 3: Revenue / Chart */}
          <motion.div className={styles.featureCard} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 }}}>
             <div className={`${styles.fcVisual} ${styles.alignBottom}`}>
                <div className={styles.chartBox}>
                   <div className={styles.cbTitle}>Línea de Crédito Rotativa</div>
                   <div className={styles.cbAmount}>S/ 54,742</div>
                   
                   <div className={styles.cbGraph}>
                      <div className={styles.cbCol}><span>Ene</span><span className={styles.cbBar} style={{height: '35%'}}></span></div>
                      <div className={styles.cbCol}><span>Feb</span><span className={styles.cbBar} style={{height: '60%'}}></span></div>
                      <div className={styles.cbCol}><span>Mar</span><span className={styles.cbBar} style={{height: '45%'}}></span></div>
                      <div className={styles.cbCol}><span>Abr</span><span className={styles.cbBar} style={{height: '75%'}}></span></div>
                      <div className={styles.cbCol}><span>May</span><span className={styles.cbBarActive} style={{height: '100%'}}></span></div>
                   </div>
                </div>
             </div>
             <div className={styles.fcText}>
                <h3>Trazabilidad y Control Total</h3>
                <p>Monitorea tu límite de crédito, los adelantos recibidos y los cobros gestionados desde un solo dashboard centralizado.</p>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
