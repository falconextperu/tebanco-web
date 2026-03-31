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
      {/* Background Soft Glows */}
      <motion.div 
        className={styles.glowLeft}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className={styles.glowRight}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container">

        {/* Top Content Layout */}
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className={styles.title}>
            Adelanta tus facturas al instante.<br />
            Seguro Simple Global.
          </motion.h1>
          <motion.p variants={itemVariants} className={styles.description}>
            Obtén liquidez inmediata, gestiona tus cobros directamente y asegura el crecimiento
            de tu empresa — todo desde un panel impecablemente simple.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.emailCapture}>
            <input 
              type="text" 
              placeholder="¿Listo para comenzar?" 
              className={styles.emailInput} 
            />
            <a href="http://localhost:5174/registro" className={styles.submitBtn}>
              <div className={styles.btnIconBox}>
                <ArrowRight size={16} color="#fff" />
              </div>
              Abrir Cuenta
            </a>
          </motion.div>
        </motion.div>

        {/* Center Mockup Visuals */}
        <div className={styles.heroVisual}>

          {/* Main Focused Phone */}
          <motion.div 
            className={styles.phoneCentered}
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" as const } }}
          >
            <div className={styles.notch}></div>
            <div className={styles.phoneHeader}>
              <div className={styles.phArrow}>‹</div>
              <div className={styles.phTitle}></div>
              <div className={styles.phMore}>•••</div>
            </div>

            <div className={styles.phoneBody}>
              <div className={styles.phTabs}>
                <div className={styles.phTabActive}>Diario</div>
                <div className={styles.phTab}>Semanal</div>
                <div className={styles.phTab}>Mensual</div>
              </div>

              <div className={styles.phChartArea}>
                <div className={styles.phBarGroup}>
                  <div className={styles.phBar} style={{ height: '40px' }} />
                  <div className={styles.phBar} style={{ height: '70px' }} />
                  <div className={styles.phBarActive} style={{ height: '110px' }}>
                    <div className={styles.phTooltip}>$3,24.00</div>
                  </div>
                  <div className={styles.phBar} style={{ height: '50px' }} />
                  <div className={styles.phBar} style={{ height: '60px' }} />
                </div>
                <div className={styles.phDays}>
                  <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span>
                </div>
              </div>

              <div className={styles.phSectionLabel}>
                Tus facturas ingresadas <span>(2)</span>
              </div>

              <div className={styles.phCard}>
                <div className={styles.pCardHead}>
                  <span>Factura Aprobada</span>
                  <CheckCircle2 size={14} color="#fff" />
                </div>
                <div className={styles.pCardVal}>$12,345</div>
                <div className={styles.pCardFoot}>
                  <span>RETAIL CORP</span>
                  <span>08/24</span>
                </div>
              </div>

              <div className={styles.phCard2}>
                <div className={styles.pCardHead}>
                  <span>Factura Pendiente</span>
                </div>
                <div className={styles.pCardVal}>$60,8</div>
              </div>

            </div>
          </motion.div>

          {/* Left Floating Card - Chart */}
          <motion.div 
            className={styles.floatLeft}
            variants={leftFloatVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.flTabs}>
              <span>Día</span><span>Sem</span><span className={styles.flTabActive}>Mes</span><span>Año</span><span>Todo</span>
            </div>
            <div className={styles.flTotal}>+45.2k$</div>
            <div className={styles.flSvgBox}>
              <svg viewBox="0 0 250 100" className={styles.flSvg}>
                <path d="M0,80 Q25,50 50,70 T100,50 T150,80 T200,40 L250,55 L250,110 L0,110 Z" fill="rgba(59, 130, 246, 0.15)" />
                <path d="M0,80 Q25,50 50,70 T100,50 T150,80 T200,40 L250,55" fill="none" stroke="#2563eb" strokeWidth="3" />
                <circle cx="100" cy="50" r="5" fill="#2563eb" stroke="#fff" strokeWidth="2.5" />
                <line x1="100" y1="50" x2="100" y2="100" stroke="#cbd5e1" strokeDasharray="4 4" />
              </svg>
            </div>
            <div className={styles.flMonths}>
              <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </motion.div>

          {/* Right Floating Card - List */}
          <motion.div 
            className={styles.floatRight}
            variants={rightFloatVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
          >

            <div className={styles.frItem}>
              <div className={styles.frIcon} style={{ background: '#e0f2fe', color: '#0ea5e9' }}>
                <Grid size={16} />
              </div>
              <div className={styles.frText}>
                <div className={styles.frTitle}>Línea Aprobada</div>
                <div className={styles.frSub}>Disponible hoy</div>
              </div>
              <div className={styles.frAmount}>$24,345.00</div>
            </div>

            <div className={styles.frItem}>
              <div className={styles.frIcon} style={{ background: '#f3e8ff', color: '#9333ea' }}>
                <Bookmark size={16} />
              </div>
              <div className={styles.frText}>
                <div className={styles.frTitle}>Facturas Clientes</div>
                <div className={styles.frSub}>18 Transacciones</div>
              </div>
              <div className={styles.frAmount}>$12,230.00</div>
            </div>

            <div className={styles.frItem}>
              <div className={styles.frIcon} style={{ background: '#dcfce7', color: '#16a34a' }}>
                <Settings size={16} />
              </div>
              <div className={styles.frText}>
                <div className={styles.frTitle}>Ahorro Generado</div>
                <div className={styles.frSub}>Beneficios de liquidez</div>
              </div>
              <div className={styles.frAmount}>$1,230.00</div>
            </div>

          </motion.div>

        </div>
      </div>

    </div>
  );
};
