'use client';

import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  {
    id: 'adelanto',
    title: 'Adelanto de Facturas',
    description: 'Convierte tus cuentas por cobrar en efectivo de inmediato. Olvídate de esperar 30, 60 o 90 días para disponer de tu liquidez.',
  },
  {
    id: 'gestion',
    title: 'Gestión de Cobranza',
    description: 'Delegamos la gestión del cobro para que tu equipo se enfoque en vender. Nosotros nos encargamos del seguimiento con tu cliente.',
  },
  {
    id: 'riesgo',
    title: 'Evaluación de Riesgo',
    description: 'Analizamos a tus clientes de manera automatizada para asegurar operaciones seguras y transparentes al instante.',
  }
];

export const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  return (
    <section className={styles.aboutSection} id="nosotros">
      <div className={`container ${styles.aboutContainer}`}>

        {/* Left Side: Visuals */}
        <motion.div 
          className={styles.visualsSide}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <div className={styles.visualCanvas}>
            <AnimatePresence mode="wait">
              {activeTab === 'adelanto' && (
                <motion.div key="adelanto" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className={styles.cardAdelanto}>
                  <div className={styles.caHeader}>
                    <span>Liquidez del Mes</span>
                    <div className={styles.caAmount}>$ 18,500.00</div>
                    <div className={styles.caSub}>Crecimiento del 12% respecto al mes anterior</div>
                  </div>
                  <div className={styles.caGraph}>
                    <div className={styles.caBarGroup}>
                      <div className={styles.caBar} style={{ height: '40%' }}></div>
                      <span className={styles.caLabel}>Abr</span >
                    </div>
                    <div className={styles.caBarGroup}>
                      <div className={styles.caBar} style={{ height: '55%' }}></div>
                      <span className={styles.caLabel}>May</span>
                    </div>
                    <div className={styles.caBarGroup}>
                      <div className={styles.caBarActive} style={{ height: '85%' }}>
                        <div className={styles.caTooltip}>$20,000</div>
                      </div>
                      <span className={styles.caLabelActive}>Jun</span>
                    </div>
                    <div className={styles.caBarGroup}>
                      <div className={styles.caBar} style={{ height: '30%' }}></div>
                      <span className={styles.caLabel}>Jul</span>
                    </div>
                  </div>
                  <div className={styles.lineGrid}></div>
                </motion.div>
              )}

              {activeTab === 'gestion' && (
                <motion.div key="gestion" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className={styles.cardGestion}>
                  <div className={styles.cgHeader}>Seguimiento en Tiempo Real</div>

                  <div className={styles.cgList}>
                    <div className={styles.cgItem}>
                      <div className={styles.cgDot} style={{ background: '#22c55e' }}></div>
                      <div className={styles.cgInfo}>
                        <strong>Factura #A-102 Cobrada</strong>
                        <span>Hace 2 horas</span>
                      </div>
                    </div>
                    <div className={styles.cgItem}>
                      <div className={styles.cgDot} style={{ background: '#f59e0b' }}></div>
                      <div className={styles.cgInfo}>
                        <strong>Factura #B-403 Pendiente</strong>
                        <span>Recordatorio enviado</span>
                      </div>
                    </div>
                    <div className={styles.cgItem}>
                      <div className={styles.cgDot} style={{ background: '#3b82f6' }}></div>
                      <div className={styles.cgInfo}>
                        <strong>Factura #C-901 Aprobada</strong>
                        <span>Fondeo programado</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'riesgo' && (
                <motion.div key="riesgo" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className={styles.cardRiesgo}>
                  <div className={styles.crCircleProgress}>
                    <div className={styles.crInner}>
                      <strong>98%</strong>
                      <span>Score</span>
                    </div>
                  </div>
                  <div className={styles.crText}>
                    Aprobación crediticia instantánea. Cliente corporativo verificado sin incidencias financieras.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side: Text & Accordion */}
        <motion.div 
          className={styles.contentSide}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.tagWrap}>
            <span className={styles.tagText}>QUIÉNES SOMOS</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className={styles.title}>
            Todo lo que necesitas para tu liquidez en un solo lugar.
          </motion.h2>

          <motion.div variants={itemVariants} className={styles.accordion}>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`${styles.tabItem} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className={styles.tabContent}>
                    <h3 className={styles.tabTitle}>{tab.title}</h3>
                    <p className={styles.tabDesc}>{tab.description}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
