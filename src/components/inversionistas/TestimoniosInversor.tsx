"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import styles from './TestimoniosInversor.module.css';

export const TestimoniosInversor = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Alfredo G.",
      role: "Inversionista Recurrente",
      text: "La plataforma es muy intuitiva. Las facturas son atractivas con muy buenas tasas de rendimiento y la comunicación con los asesores es 10/10."
    },
    {
      name: "Miguel A.",
      role: "Inversionista Corporativo",
      text: "Considero que TeBanco es la Fintech más seria y profesional en Perú para invertir en facturas negociables. Retornos totalmente transparentes."
    },
    {
      name: "Angela M.",
      role: "Inversionista Independiente",
      text: "Buena alternativa de inversión con tasas altas. Siempre debes conocer el mercado en el que estés invirtiendo y diversificarlo. ¡Totalmente recomendados!"
    }
  ];

  return (
    <section className={styles.testimoniosSection} ref={scrollRef}>
      <div className={`container ${styles.container}`}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div className={styles.ratingBadge}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span>+18 mil inversionistas activos</span>
          </div>
          <h2 className={styles.title}>
            Confían en <span>nuestra plataforma</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((testimonio, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.15), ease: "easeOut" as const }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className={styles.quoteIcon}>
                <Quote size={28} />
              </div>
              <p className={styles.text}>"{testimonio.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonio.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonio.name}</h4>
                  <span>{testimonio.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
