"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle,
  CheckCircle2, Send, ChevronDown
} from 'lucide-react';
import styles from './ContactoPage.module.css';

/* ─── DATA ─── */
const channels = [
  {
    icon: <Phone size={26} strokeWidth={1.5} />,
    label: "Llámanos",
    value: "(01) 710 - 2300",
    sub: "Lun – Vie · 9 AM a 6 PM",
    href: "tel:+5117102300",
    color: "#583e9b",
    bg: "rgba(88,62,155,0.08)"
  },
  {
    icon: <Mail size={26} strokeWidth={1.5} />,
    label: "Escríbenos",
    value: "contacto@fluxafinance.pe",
    sub: "Respondemos en menos de 24h",
    href: "mailto:contacto@fluxafinance.pe",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)"
  },
  {
    icon: <MessageCircle size={26} strokeWidth={1.5} />,
    label: "WhatsApp",
    value: "+51 942 748 440",
    sub: "Chat directo con un asesor",
    href: "https://wa.me/51942748440",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)"
  },
  {
    icon: <MapPin size={26} strokeWidth={1.5} />,
    label: "Visítanos",
    value: "Av. Circunvalación Golf Los Incas 134",
    sub: "Piso 16, Torre 2 · Santiago de Surco",
    href: "https://maps.app.goo.gl/bciaqoUU25sUv1dXA",
    color: "#d97706",
    bg: "rgba(217,119,6,0.08)"
  }
];

const servicios = [
  "Factoring",
  "Inversiones en Factoring",
  "Asesoría Financiera",
  "Otro"
];

const faqs = [
  {
    q: "¿En cuánto tiempo me contactan tras enviar el formulario?",
    a: "Nuestro equipo comercial se pone en contacto dentro de las siguientes 24 horas hábiles. Si tu consulta es urgente, te recomendamos contactarnos por WhatsApp para atención inmediata."
  },
  {
    q: "¿Qué documentos necesito para solicitar factoring?",
    a: "Para evaluar tu solicitud necesitamos: RUC activo, estados financieros recientes, y las facturas que deseas financiar. Un asesor te guiará durante todo el proceso."
  },
  {
    q: "¿Puedo agendar una reunión virtual?",
    a: "Sí. Una vez que te contactes con nosotros, tu asesor asignado puede coordinar una videollamada de diagnóstico sin costo, en el horario que más te convenga."
  },
  {
    q: "¿Tienen oficina física?",
    a: "Sí, estamos ubicados en Av. Circunvalación del Club Golf Los Incas 134, Edificio Patio Panorama, Piso 16 Torre 2, Surco — Lima. Atendemos previa cita."
  }
];

export const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '', ruc: '', telefono: '', email: '', servicio: '', mensaje: '', aceptaTerminos: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    <div className={styles.wrapper}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Contacto</span>
          </div>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <div className={styles.heroBadge}>
              <Clock size={13} strokeWidth={2.5} />
              Lun – Vie · 9 AM a 6 PM · Respuesta en 24h
            </div>
            <h1 className={styles.heroTitle}>
              Hablemos sobre<br />
              <span className={styles.heroHL}>el futuro de tu negocio</span>
            </h1>
            <p className={styles.heroDesc}>
              Nuestros asesores especializados están listos para analizar tu caso y ofrecerte la solución financiera que tu empresa necesita. Sin compromisos, sin costos ocultos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CANALES DE CONTACTO ── */}
      <section className={styles.channelsSection}>
        <div className="container">
          <div className={styles.channelsGrid}>
            {channels.map((ch, i) => (
              <motion.a
                key={i}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.channelCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={styles.channelIcon} style={{ background: ch.bg, color: ch.color }}>
                  {ch.icon}
                </div>
                <div className={styles.channelInfo}>
                  <span className={styles.channelLabel} style={{ color: ch.color }}>{ch.label}</span>
                  <span className={styles.channelValue}>{ch.value}</span>
                  <span className={styles.channelSub}>{ch.sub}</span>
                </div>
                <ArrowRight size={18} className={styles.channelArrow} style={{ color: ch.color }} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.mainGrid}>

            {/* LEFT — Info extra */}
            <motion.div
              className={styles.infoPanel}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.sectionTag}>¿Por qué contactarnos?</div>
              <h2 className={styles.infoTitle}>
                Asesoría financiera que transforma tu negocio
              </h2>
              <p className={styles.infoDesc}>
                En Fluxa Finance no solo resolvemos consultas — analizamos tu situación financiera y te ofrecemos una solución diseñada específicamente para ti.
              </p>
              <ul className={styles.infoList}>
                {[
                  "Evaluación gratuita de tu caso",
                  "Respuesta en menos de 24 horas",
                  "Asesor dedicado durante todo el proceso",
                  "Sin burocracia, 100% digital",
                  "Regulados y supervisados por la SBS"
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} strokeWidth={2} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.horario}>
                <div className={styles.horarioBadge}>
                  <Clock size={16} strokeWidth={1.5} />
                  Horario de atención
                </div>
                <div className={styles.horarioRows}>
                  <div className={styles.horarioRow}>
                    <span>Lunes — Viernes</span>
                    <span className={styles.horarioTime}>9:00 AM — 6:00 PM</span>
                  </div>
                  <div className={styles.horarioRow}>
                    <span>Sábados</span>
                    <span className={styles.horarioTime}>9:00 AM — 1:00 PM</span>
                  </div>
                </div>
              </div>

              <div className={styles.socialRow}>
                <a href="#" className={styles.socialBtn} title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} title="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} title="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              className={styles.formPanel}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <CheckCircle2 size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
                  <p className={styles.successDesc}>
                    Gracias por contactarnos. Un asesor se pondrá en contacto contigo en menos de 24 horas hábiles.
                  </p>
                  <button className={styles.successBtn} onClick={() => setSubmitted(false)}>
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Déjanos tus datos</h2>
                    <p className={styles.formSubtitle}>Completa el formulario y un asesor te contactará pronto.</p>
                  </div>

                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row2}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>Nombre / Razón Social *</label>
                        <input
                          type="text" name="nombre" value={formData.nombre}
                          onChange={handleChange} required
                          className={styles.input} placeholder="Ej. Juan Pérez / Mi Empresa SAC"
                        />
                      </div>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>RUC</label>
                        <input
                          type="text" name="ruc" value={formData.ruc}
                          onChange={handleChange}
                          className={styles.input} placeholder="20xxxxxxxxx"
                        />
                      </div>
                    </div>

                    <div className={styles.row2}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>Teléfono *</label>
                        <input
                          type="tel" name="telefono" value={formData.telefono}
                          onChange={handleChange} required
                          className={styles.input} placeholder="+51 9xx xxx xxx"
                        />
                      </div>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>Correo electrónico *</label>
                        <input
                          type="email" name="email" value={formData.email}
                          onChange={handleChange} required
                          className={styles.input} placeholder="tu@empresa.com"
                        />
                      </div>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Tipo de servicio</label>
                      <div className={styles.selectWrapper}>
                        <select
                          name="servicio" value={formData.servicio}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="">Selecciona una opción…</option>
                          {servicios.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown size={16} className={styles.selectChevron} />
                      </div>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Mensaje (opcional)</label>
                      <textarea
                        name="mensaje" value={formData.mensaje}
                        onChange={handleChange} rows={4}
                        className={styles.textarea}
                        placeholder="Cuéntanos brevemente sobre tu empresa y qué tipo de financiamiento necesitas…"
                      />
                    </div>

                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox" name="aceptaTerminos"
                        checked={formData.aceptaTerminos}
                        onChange={handleChange} required
                        className={styles.checkbox}
                      />
                      <span>
                        He leído y autorizo el tratamiento de mis datos personales según la{" "}
                        <Link href="#" className={styles.termLink}>Política de Privacidad</Link>{" "}
                        de Fluxa Finance.
                      </span>
                    </label>

                    <button type="submit" className={styles.btnSubmit}>
                      Enviar mensaje
                      <Send size={16} strokeWidth={2.5} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MAPA + DIRECCIÓN ── */}
      <section className={styles.mapaSection}>
        <div className="container">
          <motion.div
            className={styles.mapaCard}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.mapaInfo}>
              <div className={styles.sectionTag}>Ubicación</div>
              <h2 className={styles.mapaTitle}>Nuestra oficina en Lima</h2>
              <div className={styles.mapaDir}>
                <MapPin size={20} strokeWidth={1.5} className={styles.mapaDirIcon} />
                <div>
                  <strong>Edificio Patio Panorama</strong><br />
                  Av. Circunvalación del Club Golf Los Incas 134<br />
                  Piso 16, Torre 2 — Santiago de Surco, Lima
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/bciaqoUU25sUv1dXA"
                target="_blank" rel="noopener noreferrer"
                className={styles.mapaBtn}
              >
                Ver en Google Maps
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
            <div className={styles.mapaEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1!2d-76.9786!3d-12.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzAwLjAiUyA3NsKwNTgnNDMuMCJX!5e0!3m2!1ses!2spe!4v1617000000000!5m2!1ses!2spe"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Oficina Fluxa Finance"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className="container">
          <motion.div
            className={styles.faqHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Preguntas frecuentes</div>
            <h2 className={styles.faqTitle}>Resolvemos tus dudas</h2>
          </motion.div>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ''}`} />
                </div>
                {openFaq === i && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>¿Prefieres una llamada directa?</h2>
            <p className={styles.ctaDesc}>
              Llámanos ahora y un asesor experto resolverá todas tus dudas en tiempo real.
            </p>
            <div className={styles.ctaActions}>
              <a href="tel:+5117102300" className={styles.ctaBtnPrimary}>
                <Phone size={18} strokeWidth={2} />
                (01) 710 - 2300
              </a>
              <a href="https://wa.me/51942748440" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnWhatsapp}>
                <MessageCircle size={18} strokeWidth={2} />
                WhatsApp directo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
