"use client";

import React from 'react';
import styles from './TrustSection.module.css';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section className={styles.trustSection}>
      <div className={styles.containerWrap}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Confianza que fluye con tu negocio
          </h2>
          <p className={styles.description}>
            En Fluxa Finance, te ofrecemos liquidez rápida y segura mediante el adelanto de tus facturas pendientes con nuestro servicio de factoring.
          </p>
        </div>

        <div className={styles.grid}>
          
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.iconBox}>
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Seguridad y transparencia</h3>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.iconBox}>
              <Zap size={40} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Liquidez inmediata</h3>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.iconBox}>
              <RefreshCw size={40} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Proceso ágil y sencillo</h3>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};
