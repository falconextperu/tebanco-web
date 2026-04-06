"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, Clock, Shield, TrendingUp, FileText,
  BarChart3, Users, DollarSign, ChevronDown, Zap, Lock, HeadphonesIcon
} from 'lucide-react';
import styles from './FactoringPage.module.css';

const benefits = [
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "Liquidez en 24–48 horas",
    desc: "Desembolso garantizado tras la confirmación de tus facturas. Sin esperas interminables."
  },
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: "Sin deuda en tu balance",
    desc: "El factoring no es un crédito tradicional. No afecta tu capacidad de endeudamiento."
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    title: "Mejora tu flujo de caja",
    desc: "Accede al capital que necesitas para crecer sin esperar los plazos de cobro habituales."
  },
  {
    icon: <Lock size={28} strokeWidth={1.5} />,
    title: "Sin costos ocultos",
    desc: "Tasa de descuento clara y justa. Conoces exactamente cuánto recibirás antes de operar."
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Reducción del riesgo de cobranza",
    desc: "Nos encargamos de gestionar el cobro por ti. Tú te enfocas en hacer crecer tu negocio."
  },
  {
    icon: <HeadphonesIcon size={28} strokeWidth={1.5} />,
    title: "Asesoría personalizada",
    desc: "Un ejecutivo dedicado evalúa tus facturas y te ofrece la mejor solución para tu empresa."
  }
];

const steps = [
  {
    number: "01",
    title: "Registra tu empresa",
    desc: "Crea tu cuenta en minutos y sube los documentos básicos de tu empresa.",
    icon: <FileText size={24} strokeWidth={1.5} />
  },
  {
    number: "02",
    title: "Carga tus facturas",
    desc: "Sube tus facturas electrónicas pendientes de cobro a nuestra plataforma.",
    icon: <BarChart3 size={24} strokeWidth={1.5} />
  },
  {
    number: "03",
    title: "Evaluación express",
    desc: "Nuestros asesores evalúan las facturas y te proponen una tasa justa sin costos ocultos.",
    icon: <Clock size={24} strokeWidth={1.5} />
  },
  {
    number: "04",
    title: "Recibe tu dinero",
    desc: "Aprueba la operación y recibe entre el 85% – 90% de tus facturas directo a tu cuenta.",
    icon: <DollarSign size={24} strokeWidth={1.5} />
  }
];

const faqs = [
  {
    q: "¿Qué es el factoring y cómo funciona?",
    a: "El factoring es un servicio financiero que permite a las empresas obtener liquidez inmediata mediante la venta de sus facturas por cobrar a una entidad financiera. Fluxa Finance anticipa el monto de tus facturas y gestiona el cobro en tu lugar."
  },
  {
    q: "¿Qué beneficios tiene el factoring para mi empresa?",
    a: "El factoring permite mejorar el flujo de caja, reducir riesgos de cobranza y acceder a capital de trabajo sin endeudamiento tradicional. No afecta tu score crediticio y el proceso es totalmente digital."
  },
  {
    q: "¿Qué tipo de facturas se pueden negociar?",
    a: "Se pueden negociar facturas electrónicas emitidas a empresas privadas, siempre que cumplan con los requisitos establecidos por la Ley N° 29623 de Factoring en Perú."
  },
  {
    q: "¿Cuánto tiempo tarda el desembolso?",
    a: "Una vez aprobada la operación, el desembolso puede realizarse en un plazo de 24 a 48 horas hábiles. En muchos casos incluso el mismo día."
  },
  {
    q: "¿Cómo solicito el factoring con Fluxa Finance?",
    a: "Solo debes crear una cuenta, cargar tus facturas y un asesor se pondrá en contacto para evaluar tu operación y ofrecerte una solución rápida y personalizada."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

export const FactoringPage = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className={styles.wrapper}>

      {/* ──── HERO SECTION ──── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios">Servicios</Link>
            <span>/</span>
            <span>Factoring</span>
          </div>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <div className={styles.heroBadge}>
              <Zap size={14} strokeWidth={2.5} />
              Servicio Financiero Regulado · Ley N° 29623
            </div>
            <h1 className={styles.heroTitle}>
              Convierte tus facturas en<br />
              <span className={styles.heroHighlight}>liquidez inmediata</span>
            </h1>
            <p className={styles.heroDesc}>
              Adelanta el cobro de tus facturas pendientes en 24–48 horas. Sin deuda, sin costos ocultos, sin complicaciones. Tu empresa sigue creciendo sin pausas.
            </p>
            <div className={styles.heroActions}>
              <a href="http://localhost:5174/registro" className={styles.btnPrimary}>
                Solicitar financiación
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="#como-funciona" className={styles.btnOutline}>
                Ver cómo funciona
              </a>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>85–90%</span>
                <span className={styles.statLabel}>del valor de tus facturas</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>24–48h</span>
                <span className={styles.statLabel}>tiempo de desembolso</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>0%</span>
                <span className={styles.statLabel}>deuda en tu balance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── QUÉ ES FACTORING ──── */}
      <section className={styles.whatSection}>
        <div className="container">
          <div className={styles.whatGrid}>
            <motion.div
              className={styles.whatText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <div className={styles.sectionTag}>¿Qué es el Factoring?</div>
              <h2 className={styles.sectionTitle}>
                La solución financiera que tu empresa necesita hoy
              </h2>
              <p className={styles.sectionDesc}>
                El factoring es un servicio financiero que te permite convertir tus facturas por cobrar en efectivo inmediato, sin necesidad de esperar los plazos de pago de tus clientes.
              </p>
              <p className={styles.sectionDesc}>
                En Fluxa Finance, adquirimos tus facturas electrónicas y te adelantamos entre el 85% y 90% de su valor el mismo día. Nosotros nos encargamos del cobro; tú te enfocas en crecer.
              </p>
              <ul className={styles.checkList}>
                {["Proceso 100% digital", "Sin garantías hipotecarias", "Aprobación en el día", "Atención ejecutiva personalizada"].map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} strokeWidth={2} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.whatVisual}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            >
              <div className={styles.visualCard}>
                <div className={styles.vcHeader}>
                  <span className={styles.vcDot} style={{ background: '#ff5f57' }} />
                  <span className={styles.vcDot} style={{ background: '#febc2e' }} />
                  <span className={styles.vcDot} style={{ background: '#28c840' }} />
                  <span className={styles.vcTitle}>Fluxa Finance — Portal</span>
                </div>
                <div className={styles.vcBody}>
                  <div className={styles.vcRow}>
                    <span className={styles.vcLabel}>Factura N° 001-1284</span>
                    <span className={styles.vcStatus}>CAVALI Verificada</span>
                  </div>
                  <div className={styles.vcAmount}>S/ 85,000.00</div>
                  <div className={styles.vcSub}>Valor total de la factura</div>
                  <div className={styles.vcDivider} />
                  <div className={styles.vcRow}>
                    <span className={styles.vcLabel}>Anticipo disponible</span>
                    <span className={styles.vcGreen}>S/ 76,500.00</span>
                  </div>
                  <div className={styles.vcRow}>
                    <span className={styles.vcLabel}>Tasa aplicada</span>
                    <span>2.1% mensual</span>
                  </div>
                  <div className={styles.vcRow}>
                    <span className={styles.vcLabel}>Desembolso estimado</span>
                    <span className={styles.vcGreen}>24 horas</span>
                  </div>
                  <a href="http://localhost:5174/registro" className={styles.vcBtn}>
                    Solicitar anticipo
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── BENEFICIOS ──── */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Beneficios</div>
            <h2 className={styles.sectionTitle}>Por qué elegir Fluxa Finance</h2>
            <p className={styles.sectionDesc}>
              Diseñamos nuestro servicio de factoring pensando en las necesidades reales de las empresas peruanas.
            </p>
          </motion.div>

          <motion.div
            className={styles.benefitsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {benefits.map((b, i) => (
              <motion.div key={i} className={styles.benefitCard} variants={itemVariants}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── CÓMO FUNCIONA ──── */}
      <section className={styles.stepsSection} id="como-funciona">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Proceso</div>
            <h2 className={styles.sectionTitle}>¿Cómo funciona el Factoring?</h2>
            <p className={styles.sectionDesc}>
              4 pasos simples para convertir tus facturas en capital de trabajo.
            </p>
          </motion.div>

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              >
                <div className={styles.stepNum}>{step.number}</div>
                <div className={styles.stepIconBox}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepArrow}><ArrowRight size={20} /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── TIPOS DE FACTORING ──── */}
      <section className={styles.typesSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Modalidades</div>
            <h2 className={styles.sectionTitle}>Tipos de Factoring disponibles</h2>
          </motion.div>

          <div className={styles.typesGrid}>
            <motion.div
              className={`${styles.typeCard} ${styles.typeCardHighlight}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.typeBadge}>Más popular</div>
              <h3 className={styles.typeTitle}>Factoring sin Recurso</h3>
              <p className={styles.typeDesc}>
                Fluxa Finance asume el riesgo de impago del deudor. Si tu cliente no paga, tú no pierdes. La opción más segura para tu empresa.
              </p>
              <ul className={styles.typeFeatures}>
                <li><CheckCircle2 size={16} /> Sin riesgo de impago para ti</li>
                <li><CheckCircle2 size={16} /> Ideal para facturas grandes</li>
                <li><CheckCircle2 size={16} /> Mayor seguridad financiera</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.typeCard}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className={styles.typeTitle}>Factoring con Recurso</h3>
              <p className={styles.typeDesc}>
                Obtienes la liquidez inmediata y en caso de impago, se te notifica para gestionar el cobro. Las tasas son más competitivas.
              </p>
              <ul className={styles.typeFeatures}>
                <li><CheckCircle2 size={16} /> Tasas más bajas</li>
                <li><CheckCircle2 size={16} /> Ideal para clientes confiables</li>
                <li><CheckCircle2 size={16} /> Mayor volumen disponible</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.typeCard}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={styles.typeTitle}>Factoring Internacional</h3>
              <p className={styles.typeDesc}>
                Adelanta facturas de exportaciones. Convierte tus cuentas por cobrar del extranjero en capital disponible de inmediato.
              </p>
              <ul className={styles.typeFeatures}>
                <li><CheckCircle2 size={16} /> Facturas en USD / EUR</li>
                <li><CheckCircle2 size={16} /> Coberturas en múltiples países</li>
                <li><CheckCircle2 size={16} /> Asesoría en comercio exterior</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqGrid}>
            <motion.div
              className={styles.faqLeft}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.sectionTag}>Preguntas frecuentes</div>
              <h2 className={styles.sectionTitle}>Todo lo que necesitas saber sobre el factoring</h2>
              <p className={styles.sectionDesc}>
                ¿Tienes más preguntas? Nuestros asesores están disponibles para ayudarte.
              </p>
              <a href="http://localhost:5174/registro" className={styles.btnPrimary}>
                Habla con un asesor
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </motion.div>

            <motion.div
              className={styles.faqRight}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {faqs.map((faq, i) => (
                <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={styles.faqChevron} />
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CTA FINAL ──── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>¿Listo para convertir tus facturas en liquidez?</h2>
            <p className={styles.ctaDesc}>
              Regístrate hoy y recibe tu primera evaluación en menos de 24 horas. Sin compromisos.
            </p>
            <div className={styles.ctaActions}>
              <a href="http://localhost:5174/registro" className={styles.ctaBtn}>
                Comenzar ahora — es gratis
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
