"use client";

import React from 'react';
import styles from './Features.module.css';
import { BarChart3, FileText, PieChart, Banknote, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  return (
    <section className={styles.platformsSection} id="plataforma">
      <div className="container">
        
        <motion.div 
          className={styles.headerRow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className={styles.title}>Plataforma potente.<br />Gestión confiable.</h2>
          <p className={styles.description}>
            Transforma tus facturas por cobrar en efectivo en menos de 24 horas. Hemos diseñado un portal exclusivo para tu empresa tan fácil de usar como tu app bancaria favorita, respaldado por la solidez y confianza de TeBanco.
          </p>
        </motion.div>

        <div className={styles.mockupContainer}>
          <motion.div 
            className={styles.selectorList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={listVariants}
          >
            
            <motion.div className={styles.selectCard} variants={cardVariants}>
              <div className={styles.scIcon} style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2152DD 100%)', color: '#fff' }}>
                <BarChart3 size={24} />
              </div>
              <div className={styles.scText}>
                <h4 className={styles.scTitle}>Portal PyME Autónomo</h4>
                <p className={styles.scDesc}>Control total de tu portafolio y límites operativos.</p>
              </div>
            </motion.div>

            <motion.div className={styles.selectCard} variants={cardVariants}>
              <div className={styles.scIcon} style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2152DD 100%)', color: '#fff' }}>
                <FileText size={24} />
              </div>
              <div className={styles.scText}>
                <h4 className={styles.scTitle}>Carga Simplificada</h4>
                <p className={styles.scDesc}>Sube comprobantes XML/PDF para evaluación rápida.</p>
              </div>
            </motion.div>

            <motion.div className={styles.selectCard} variants={cardVariants}>
              <div className={styles.scIcon} style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2152DD 100%)', color: '#fff' }}>
                <PieChart size={24} />
              </div>
              <div className={styles.scText}>
                <h4 className={styles.scTitle}>Factoring Sin Fricciones</h4>
                <p className={styles.scDesc}>TeBanco se encarga de gestionar el cobro por ti.</p>
              </div>
            </motion.div>

            <motion.div className={styles.selectCard} variants={cardVariants}>
              <div className={styles.scIcon} style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2152DD 100%)', color: '#fff' }}>
                <Banknote size={24} />
              </div>
              <div className={styles.scText}>
                <h4 className={styles.scTitle}>Desembolso Inmediato</h4>
                <p className={styles.scDesc}>Transferencias directas a tu cuenta TeBanco al aprobarse.</p>
              </div>
            </motion.div>

            <motion.div className={styles.selectCard} variants={cardVariants}>
              <div className={styles.scIcon} style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2152DD 100%)', color: '#fff' }}>
                <Headset size={24} />
              </div>
              <div className={styles.scText}>
                <h4 className={styles.scTitle}>Asesoría Financiera</h4>
                <p className={styles.scDesc}>Un ejecutivo TeBanco siempre listo para operaciones grandes.</p>
              </div>
            </motion.div>

          </motion.div>

          <motion.div 
            className={styles.devicesVisual}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
          >
            <img 
              src="/logos/bannerfactoring.webp" 
              alt="TeBanco Plataforma Factoring" 
              className={styles.bannerImg} 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
