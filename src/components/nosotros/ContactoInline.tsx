"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import styles from './ContactoInline.module.css';

const servicios = ["Factoring", "Inversiones en Factoring", "Asesoría Financiera", "Otro"];

export const ContactoInline = () => {
  const [formData, setFormData] = useState({
    nombre: '', telefono: '', email: '', servicio: '', mensaje: '', acepta: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.inner}>

          {/* LEFT — copy */}
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.tag}>¿Listo para empezar?</span>
            <h2 className={styles.title}>
              Habla con un asesor<br />
              <span className={styles.hl}>Fluxa Finance</span>
            </h2>
            <p className={styles.desc}>
              Déjanos tus datos y uno de nuestros especialistas te contactará en menos de 24 horas para analizar tu caso sin costo ni compromiso.
            </p>
            <div className={styles.quickLinks}>
              <a href="tel:+5117102300" className={styles.quickBtn}>
                <Phone size={16} strokeWidth={1.5} />
                (01) 710 - 2300
              </a>
              <a href="https://wa.me/51942748440" target="_blank" rel="noopener noreferrer" className={styles.quickBtnWa}>
                <MessageCircle size={16} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            className={styles.formBox}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <CheckCircle2 size={44} strokeWidth={1.5} className={styles.successIcon} />
                <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
                <p className={styles.successDesc}>Te contactaremos en menos de 24 horas hábiles.</p>
                <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.label}>Nombre / Empresa *</label>
                    <input
                      type="text" name="nombre" value={formData.nombre}
                      onChange={handleChange} required
                      className={styles.input} placeholder="Juan Pérez / Mi Empresa SAC"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Teléfono *</label>
                    <input
                      type="tel" name="telefono" value={formData.telefono}
                      onChange={handleChange} required
                      className={styles.input} placeholder="+51 9xx xxx xxx"
                    />
                  </div>
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.label}>Correo electrónico *</label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange} required
                      className={styles.input} placeholder="tu@empresa.com"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Servicio de interés</label>
                    <div className={styles.selectWrap}>
                      <select
                        name="servicio" value={formData.servicio}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Selecciona…</option>
                        {servicios.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown size={14} className={styles.selectIcon} />
                    </div>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Mensaje (opcional)</label>
                  <textarea
                    name="mensaje" value={formData.mensaje}
                    onChange={handleChange} rows={3}
                    className={styles.textarea}
                    placeholder="Cuéntanos brevemente sobre tu empresa y qué necesitas…"
                  />
                </div>

                <label className={styles.checkRow}>
                  <input
                    type="checkbox" name="acepta"
                    checked={formData.acepta}
                    onChange={handleChange} required
                    className={styles.checkbox}
                  />
                  <span className={styles.checkText}>
                    Acepto el tratamiento de mis datos personales según la Política de Privacidad de Fluxa Finance.
                  </span>
                </label>

                <button type="submit" className={styles.btnSubmit}>
                  Enviar mensaje
                  <Send size={15} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
