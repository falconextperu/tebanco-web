"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Target, Eye, Heart, Users, TrendingUp, Globe,
  Lightbulb, Shield, Handshake, Award, Building, Star, Newspaper
} from 'lucide-react';
import styles from './NosotrosPage.module.css';
import { ContactoInline } from './ContactoInline';

/* ─── DATA ─── */
const stats = [
  { num: "S/ 500M+", label: "en facturas financiadas" },
  { num: "2,000+", label: "empresas atendidas" },
  { num: "98%", label: "tasa de satisfacción" },
  { num: "Desde 2020", label: "transformando el factoring en Perú" },
];

const valores = [
  {
    icon: <Lightbulb size={26} strokeWidth={1.5} />,
    title: "Innovación constante",
    desc: "Cada proceso en Fluxa Finance está diseñado para ser más inteligente, rápido y eficiente que ayer. La tecnología es nuestro motor."
  },
  {
    icon: <Shield size={26} strokeWidth={1.5} />,
    title: "Transparencia radical",
    desc: "Sin letra chica, sin sorpresas. Cada tasa, cada comisión, cada operación es explicada de forma clara antes de que tomes cualquier decisión."
  },
  {
    icon: <Handshake size={26} strokeWidth={1.5} />,
    title: "Confianza mutua",
    desc: "Construimos relaciones de largo plazo. Cada empresa e inversionista que confía en nosotros es tratado como un socio estratégico."
  },
  {
    icon: <Users size={26} strokeWidth={1.5} />,
    title: "Impacto real",
    desc: "Nuestro trabajo se mide en empleos mantenidos, empresas que crecen y familias que prosperan gracias al capital que desbloqueamos."
  },
  {
    icon: <TrendingUp size={26} strokeWidth={1.5} />,
    title: "Excelencia operativa",
    desc: "Desembolsamos en 24–48 horas porque entendemos que el tiempo en los negocios es el recurso más valioso que existe."
  },
  {
    icon: <Globe size={26} strokeWidth={1.5} />,
    title: "Visión global",
    desc: "Construimos una plataforma que no solo sirve al Perú de hoy, sino que está lista para escalar a toda Latinoamérica mañana."
  },
];

const equipo = [
  {
    nombre: "Carlos Mendoza",
    cargo: "CEO & Co-Fundador",
    bio: "Ex-Banca de Inversión. 15 años estructurando financiamiento corporativo en Lima y Nueva York.",
    inicial: "CM",
    color: "#583e9b"
  },
  {
    nombre: "Valeria Torres",
    cargo: "CTO & Co-Fundadora",
    bio: "Ingeniera de sistemas con experiencia en fintechs de España y Chile. Líder de nuestra arquitectura tech.",
    inicial: "VT",
    color: "#0891b2"
  },
  {
    nombre: "Diego Ramírez",
    cargo: "Chief Risk Officer",
    bio: "Ex-SBS. Especialista en gestión de riesgo crediticio y cumplimiento regulatorio fintech.",
    inicial: "DR",
    color: "#059669"
  },
  {
    nombre: "Ana Castillo",
    cargo: "VP Comercial",
    bio: "Experta en desarrollo de negocios B2B. Ha gestionado carteras de más de S/ 200M en factoring.",
    inicial: "AC",
    color: "#d97706"
  },
];

const prensa = [
  {
    medio: "Forbes Perú",
    titulo: "Las 100 mejores startups del Perú en 2025",
    desc: "Fluxa Finance figura entre las startups financieras más disruptivas e innovadoras del ecosistema peruano.",
    icon: <Award size={20} />,
  },
  {
    medio: "Semana Económica",
    titulo: "Fintech y el fomento de la competencia",
    desc: "El modelo de Fluxa Finance citado como referencia en la democratización del crédito para PYMEs.",
    icon: <Newspaper size={20} />,
  },
  {
    medio: "El Comercio",
    titulo: "¿Falta de liquidez? Reactívalo de forma 100% digital",
    desc: "Cómo las empresas peruanas usan el factoring digital para superar brechas de capital y crecer.",
    icon: <Building size={20} />,
  },
];

/* ─── ANIMATION VARIANTS ─── */
const containerV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemV = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

/* ─── COMPONENT ─── */
export const NosotrosPage = () => {
  return (
    <div className={styles.wrapper}>

      {/* ────────── HERO ────────── */}
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className="container">
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Nosotros</span>
          </div>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" as const }}
          >
            <div className={styles.heroBadge}>
              <Star size={13} strokeWidth={2.5} />
              Fintech peruana · Regulada por la SBS
            </div>
            <h1 className={styles.heroTitle}>
              Transformando cómo<br />
              <span className={styles.heroHL}>el dinero fluye</span><br />
              en los negocios
            </h1>
            <p className={styles.heroDesc}>
              Somos la plataforma fintech peruana que conecta empresas que necesitan liquidez con inversionistas que buscan rentabilidad real. Todo 100% digital, seguro y transparente.
            </p>
            <div className={styles.heroActions}>
              <a href="http://localhost:5174/registro" className={styles.btnPrimary}>
                Únete a Fluxa Finance
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <Link href="/servicios/factoring" className={styles.btnGhost}>
                Ver nuestros servicios
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — COMENTADO TEMPORALMENTE
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        */}
      </section>

      {/* ────────── QUIÉNES SOMOS ────────── */}
      <section className={styles.quienesSomos}>
        <div className="container">
          <div className={styles.quienesGrid}>
            <motion.div
              className={styles.quienesText}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.sectionTag}>¿Quiénes somos?</div>
              <h2 className={styles.sectionTitle}>
                Nacimos para democratizar el acceso al capital
              </h2>
              <p className={styles.sectionPara}>
                Fluxa Finance nació de una premisa simple: en el Perú, miles de empresas con facturas reales y clientes sólidos no pueden acceder a liquidez porque el sistema financiero tradicional es lento, burocrático y excluyente.
              </p>
              <p className={styles.sectionPara}>
                Somos una plataforma tecnológica que resuelve ese problema en horas, no semanas. Conectamos empresas con capital de trabajo inmediato y ofrecemos a los inversionistas una alternativa de alta rentabilidad respaldada por activos reales.
              </p>
              <p className={styles.sectionPara}>
                Operamos bajo el marco de la <strong>Ley N° 29623</strong> de Factoring y estamos supervisados por la Superintendencia de Banca, Seguros y AFP (SBS). Tu dinero está protegido.
              </p>
            </motion.div>

            <motion.div
              className={styles.quienesVisual}
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Floating glass cards */}
              <div className={styles.glassCard} style={{ top: '0', left: '0' }}>
                <div className={styles.glassIcon} style={{ background: 'rgba(88,62,155,0.15)', color: '#583e9b' }}>
                  <Target size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.glassTitle}>Misión</div>
                  <div className={styles.glassSub}>Liquidez para todos</div>
                </div>
              </div>
              <div className={styles.glassCard} style={{ top: '80px', right: '0' }}>
                <div className={styles.glassIcon} style={{ background: 'rgba(8,145,178,0.15)', color: '#0891b2' }}>
                  <Eye size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.glassTitle}>Visión</div>
                  <div className={styles.glassSub}>El futuro del fintech LATAM</div>
                </div>
              </div>
              <div className={styles.glassCard} style={{ bottom: '0', left: '10%' }}>
                <div className={styles.glassIcon} style={{ background: 'rgba(5,150,105,0.15)', color: '#059669' }}>
                  <Heart size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.glassTitle}>Valores</div>
                  <div className={styles.glassSub}>Transparencia & Confianza</div>
                </div>
              </div>
              <div className={styles.visualCenter}>
                <div className={styles.vcCircle}>
                  <img src="/logos/fluxalogo.svg" alt="Fluxa Finance" className={styles.vcLogo} />
                  <span className={styles.vcBrand}>FLUXA FINANCE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────── MISIÓN & VISIÓN ────────── */}
      <section className={styles.mvSection}>
        <div className="container">
          <div className={styles.mvGrid}>
            <motion.div
              className={styles.mvCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.mvIconBox} style={{ background: 'rgba(88,62,155,0.1)', color: '#583e9b' }}>
                <Target size={32} strokeWidth={1.3} />
              </div>
              <h3 className={styles.mvTitle}>Nuestra Misión</h3>
              <p className={styles.mvDesc}>
                Democratizar el acceso al capital de trabajo para las empresas peruanas a través de tecnología, velocidad y transparencia — eliminando las barreras del sistema financiero tradicional.
              </p>
            </motion.div>

            <motion.div
              className={`${styles.mvCard} ${styles.mvCardDark}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className={styles.mvIconBox} style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>
                <Eye size={32} strokeWidth={1.3} />
              </div>
              <h3 className={styles.mvTitleLight}>Nuestra Visión</h3>
              <p className={styles.mvDescLight}>
                Ser la plataforma fintech de factoring líder en Latinoamérica, reconocida por su impacto en la inclusión financiera, la rentabilidad de sus inversionistas y la agilidad para sus clientes empresariales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────── VALORES ────────── */}
      <section className={styles.valoresSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Lo que nos define</div>
            <h2 className={styles.sectionTitle}>Nuestros valores</h2>
            <p className={styles.sectionDescCenter}>
              Cada decisión que tomamos en Fluxa Finance parte de estos principios fundamentales.
            </p>
          </motion.div>

          <motion.div
            className={styles.valoresGrid}
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {valores.map((v, i) => (
              <motion.div key={i} className={styles.valorCard} variants={itemV}>
                <div className={styles.valorIcon}>{v.icon}</div>
                <h3 className={styles.valorTitle}>{v.title}</h3>
                <p className={styles.valorDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────────── CONTACTO ────────── */}
      <ContactoInline />

      {/*
      <section className={styles.equipoSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Las personas detrás</div>
            <h2 className={styles.sectionTitle}>Nuestro equipo directivo</h2>
            <p className={styles.sectionDescCenter}>
              Líderes con trayectoria en banca, tecnología y mercados de capitales.
            </p>
          </motion.div>

          <motion.div
            className={styles.equipoGrid}
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {equipo.map((p, i) => (
              <motion.div key={i} className={styles.personaCard} variants={itemV}>
                <div className={styles.personaAvatar} style={{ background: p.color }}>
                  {p.inicial}
                </div>
                <h3 className={styles.personaNombre}>{p.nombre}</h3>
                <div className={styles.personaCargo}>{p.cargo}</div>
                <p className={styles.personaBio}>{p.bio}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.joinBanner}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.joinText}>
              <h3 className={styles.joinTitle}>¿Quieres ser parte del equipo?</h3>
              <p className={styles.joinDesc}>Estamos construyendo el futuro del fintech en Perú. Si eres apasionado por la tecnología y las finanzas, queremos conocerte.</p>
            </div>
            <a href="https://www.linkedin.com/company/fluxa-finance" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Ver vacantes abiertas
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </section>
      */}

      {/* ────────── PRENSA — COMENTADO TEMPORALMENTE ────────── */}
      {/*
      <section className={styles.prensaSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>Medios de comunicación</div>
            <h2 className={styles.sectionTitle}>Fluxa Finance en prensa</h2>
          </motion.div>

          <motion.div
            className={styles.prensaGrid}
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {prensa.map((p, i) => (
              <motion.div key={i} className={styles.prensaCard} variants={itemV}>
                <div className={styles.prensaMedio}>
                  <span className={styles.prensaMedioIcon}>{p.icon}</span>
                  {p.medio}
                </div>
                <h3 className={styles.prensaTitulo}>{p.titulo}</h3>
                <p className={styles.prensaDesc}>{p.desc}</p>
                <a href="#" className={styles.prensaLink}>
                  Leer nota
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}

      {/* ────────── CTA FINAL ────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ctaGlowA} />
            <div className={styles.ctaGlowB} />
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                ¿Listo para empezar con<br />Fluxa Finance?
              </h2>
              <p className={styles.ctaDesc}>
                Más de 2,000 empresas ya confían en nosotros. Únete hoy y descubre por qué somos la plataforma fintech de factoring más confiable del Perú.
              </p>
              <div className={styles.ctaActions}>
                <a href="http://localhost:5174/registro" className={styles.ctaBtnPrimary}>
                  Crear cuenta gratis
                  <ArrowRight size={18} strokeWidth={2.5} />
                </a>
                <Link href="/servicios/factoring" className={styles.ctaBtnOutline}>
                  Explorar servicios
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
