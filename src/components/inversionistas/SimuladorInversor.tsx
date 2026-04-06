"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, Percent, DollarSign, Calendar, TrendingUp, ShieldAlert, BadgeCheck } from 'lucide-react';
import styles from './SimuladorInversor.module.css';

export const SimuladorInversor = () => {
  const [rawAmount, setRawAmount] = useState<string>('10000');
  const [months, setMonths] = useState<number>(3);
  
  // Calc logic
  const numericAmount = parseFloat(rawAmount.replace(/,/g, '')) || 0;
  
  const getRate = (amt: number) => {
    if (amt < 10000) return 8.0;
    if (amt < 20000) return 10.0;
    if (amt < 50000) return 13.0;
    return 18.0;
  };

  const currentRate = getRate(numericAmount);
  
  // Formulas
  const grossReturn = numericAmount * (currentRate / 100) * (months / 12);
  const tax = grossReturn * 0.05; // 5% Retencion Peru
  const netReturn = grossReturn - tax;
  const totalReceived = numericAmount + netReturn;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // allow only numbers
    const val = e.target.value.replace(/[^0-9]/g, '');
    setRawAmount(val);
  };

  // Bar configurations for visual chart
  const barChart = [
    { label: '3 meses', val: 3, h: '40%' },
    { label: '6 meses', val: 6, h: '65%' },
    { label: '12 meses', val: 12, h: '100%' }
  ];

  return (
    <section className={styles.simuladorSection} id="simulador">
      <div className={`container ${styles.container}`}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.title}>
            Simula las ganancias <br/> de tu inversión
          </h2>
          <p className={styles.subtitle}>
            Descubre cuánto puede crecer tu patrimonio. A mayor capital, mejor tasa. Total transparencia y sin costos ocultos operativos.
          </p>
        </motion.div>

        <div className={styles.mainGrid}>
          
          {/* LADO IZQUIERDO: FORMULARIO */}
          <motion.div 
            className={styles.formPanel}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.formTitle}>Calcula tus retornos</h3>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>¿Cuál sería tu monto inicial?</label>
              <div className={styles.inputWrapper}>
                <span className={styles.prefix}>S/</span>
                <input 
                  type="text" 
                  value={rawAmount} 
                  onChange={handleAmountChange}
                  className={styles.input} 
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>¿Durante cuánto tiempo?</label>
              <div className={styles.inputWrapper}>
                <select 
                  className={styles.inputSelect}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                >
                  <option value={3}>3 meses</option>
                  <option value={6}>6 meses</option>
                  <option value={12}>12 meses</option>
                </select>
                <span className={styles.selectIcon}>▼</span>
              </div>
            </div>

            <button className={styles.btnCalcular}>
              Calcular Inversión
            </button>

            <div className={styles.disclaimer}>
              <Info size={16} className={styles.infoIcon} />
              <span>
                Simulador con fines informativos, no constituye oferta vinculante. 
                Si inviertes de S/ 10k a S/ 20k aplicamos 10%. De S/ 20k a S/ 50k un 13%. 
                Superiores a S/ 50k acceden a nuestra mejor tasa (18%).
              </span>
            </div>

          </motion.div>

          {/* LADO DERECHO: RESULTADOS */}
          <motion.div 
            className={styles.resultsPanel}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
            <div className={styles.barsContainer}>
              {barChart.map((bar) => {
                const isActive = bar.val === months;
                // Calculate pseudo-total to show on top of bars
                const localGross = numericAmount * (currentRate / 100) * (bar.val / 12);
                const localNet = localGross - (localGross * 0.05);
                const localTotal = numericAmount + localNet;

                return (
                  <div key={bar.val} className={`${styles.barCol} ${isActive ? styles.barActive : ''}`}>
                    <div className={styles.barTooltip}>
                      <span className={styles.barVal}>S/ {formatCurrency(localTotal)}</span>
                      <span className={styles.barRate}>{currentRate.toFixed(2)}% E.A.</span>
                    </div>
                    <div className={styles.barTrackWrapper}>
                      <div className={styles.barTrack} style={{ height: bar.h }}></div>
                    </div>
                    <span className={styles.barLabel}>{bar.label}</span>
                  </div>
                );
              })}
            </div>

            <div className={styles.summaryTable}>
              
              <div className={styles.summaryRow}>
                <div className={styles.summaryRowLeft}>
                  <Percent size={18} className={styles.srIcon} />
                  <span>Tasa E.A. (Efectiva Anual)</span>
                </div>
                <div className={styles.summaryRowRight}>
                  {currentRate.toFixed(2)}% E.A. <Info size={14} className={styles.srIcon} />
                </div>
              </div>

              <div className={styles.summaryRow}>
                <div className={styles.summaryRowLeft}>
                  <DollarSign size={18} className={styles.srIcon} />
                  <span>Inicias con</span>
                </div>
                <div className={styles.summaryRowRight}>
                  S/ {formatCurrency(numericAmount)}
                </div>
              </div>

              <div className={styles.summaryRow}>
                <div className={styles.summaryRowLeft}>
                  <Calendar size={18} className={styles.srIcon} />
                  <span>Plazo elegido</span>
                </div>
                <div className={styles.summaryRowRight}>
                  {months} meses
                </div>
              </div>

              <div className={styles.summaryRow}>
                <div className={styles.summaryRowLeft}>
                  <TrendingUp size={18} className={styles.srIcon} />
                  <span>Rendimientos</span>
                </div>
                <div className={`${styles.summaryRowRight} ${styles.greenText}`}>
                  + S/ {formatCurrency(grossReturn)}
                </div>
              </div>

              <div className={styles.summaryRow}>
                <div className={styles.summaryRowLeft}>
                  <ShieldAlert size={18} className={styles.srIcon} />
                  <span>Retención IR (5%)</span>
                </div>
                <div className={`${styles.summaryRowRight} ${styles.redText}`}>
                  - S/ {formatCurrency(tax)}
                </div>
              </div>

              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <div className={styles.summaryRowLeft}>
                  <BadgeCheck size={22} className={styles.srIcon} style={{color: '#2563eb'}} />
                  <span>Recibirás en total</span>
                </div>
                <div className={styles.summaryRowRight}>
                  S/ {formatCurrency(totalReceived)}
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
