"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Target, Eye, Heart, Users, TrendingUp, Globe,
  Lightbulb, Shield, Handshake
} from 'lucide-react';
import { ContactoInline } from './ContactoInline';
import { RespaldoSection } from '@/components/sections/RespaldoSection';
import { NuestrosValoresSection } from '@/components/sections/NuestrosValoresSection';
import { TestimoniosSection } from '@/components/sections/TestimoniosSection';
import { FilosofiaSection } from '@/components/sections/FilosofiaSection';
import { EquipoSection } from '@/components/sections/EquipoSection';
import { EvaluaSection } from '@/components/sections/EvaluaSection';

/* ─── DATA ─── */
const valores = [
  {
    icon: <Lightbulb size={26} strokeWidth={1.5} />,
    title: "Innovación constante",
    desc: "Cada proceso en Fluxa está diseñado para ser más inteligente, rápido y eficiente que ayer. La tecnología es nuestro motor."
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
    <div>

      {/* ────────── HERO ────────── */}
      <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden">
        {/* Dark tint overlay */}
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[rgba(8,8,22,0.38)]" />
        {/* Left edge fade */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 z-[6] w-[20%] bg-gradient-to-r from-[#050a1e]/80 via-[#0a1232]/30 to-transparent" />
        {/* Right edge fade */}
        <div aria-hidden="true" className="absolute inset-y-0 right-0 z-[6] w-[16%] bg-gradient-to-l from-[#050a1e] via-[#0a1232]/30 to-transparent" />

        <motion.img
          src="/svg/heronosotros.svg"
          alt="Fluxa — Quiénes somos"
          className="pointer-events-none absolute inset-0 w-full h-full select-none object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-full px-6 py-8 text-center lg:ml-auto lg:mr-[8%] lg:max-w-[560px] lg:px-0 lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="mb-6 text-[clamp(2.2rem,1.3vw,5rem)] font-normal leading-[1.08] tracking-[0] text-white">
            Transformando<br />
            cómo <strong className="font-extrabold">fluye el<br />capital en las<br />empresas.</strong>
          </h1>
          <p className="mb-8 text-[1rem] leading-[1.6] text-white lg:text-[1.5rem] lg:max-w-[420px]">
            Conectamos empresas que necesitan liquidez con soluciones financieras ágiles, digitales y diseñadas para operaciones reales.
          </p>
          <a
            href="/contacto"
            className="inline-block whitespace-nowrap rounded-[50px] bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-[42px] py-[15px] text-[1rem] font-bold leading-none text-white shadow-[0_10px_24px_rgba(128,29,197,0.36)]"
          >
            Habla con un asesor
          </a>
        </motion.div>
      </section>


      {/* ────────── SOBRE FLUXA ────────── */}
      <section className="relative py-16 bg-white overflow-hidden lg:py-24">

        {/* Full-width background vector */}
        <img
          src="/svg/vectorfluxa.svg"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-[0]"
        />

        <div className="container relative z-[2]">

          {/* ── Two-column: text + image ── */}
          <div className="grid grid-cols-1 gap-10 items-center mb-10 lg:grid-cols-2 lg:gap-16 lg:mb-16">

            {/* Left — copy */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-[2rem] font-normal text-[#11152a] leading-[1.15] tracking-[-0.01em] lg:text-[2.6rem]">
                Sobre <strong className="font-extrabold">FLUXA</strong>
              </h2>
              <p className="text-[0.95rem] text-[#4a4e6b] leading-[1.75]">
                Fluxa nació de una premisa simple: en el Perú, miles de empresas con facturas reales y clientes sólidos no pueden acceder a liquidez porque el sistema financiero tradicional es lento, burocrático y excluyente.
              </p>
              <p className="text-[0.95rem] text-[#4a4e6b] leading-[1.75]">
                Somos una plataforma tecnológica que resuelve ese problema en horas, no semanas. Conectamos empresas con capital de trabajo inmediato y ofrecemos a los inversionistas una alternativa de alta rentabilidad respaldada por activos reales.
              </p>
              <p className="text-[0.95rem] text-[#4a4e6b] leading-[1.75]">
                Operamos bajo el marco de la <strong className="text-[#11152a] font-semibold">Ley N° 29623</strong> de Factoring y estamos supervisados por la Superintendencia de Banca, Seguros y AFP (SBS). Tu dinero está protegido.
              </p>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <img
                src="/svg/sobrefluxa.svg"
                alt="Sobre Fluxa"
                className="w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 20px 60px rgba(17,21,42,0.12)' }}
              />
            </motion.div>
          </div>

          {/* ── Three value cards ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'INNOVACIÓN CONSTANTE',
                desc: 'Cada proceso en Fluxa está diseñado para ser más inteligente, rápido y eficiente que ayer. La tecnología es nuestro motor.',
              },
              {
                title: 'TRANSPARENCIA RADICAL',
                desc: 'Sin letra chica, sin sorpresas. Cada tasa, cada comisión, cada operación es explicada de forma clara antes de que tomes cualquier decisión.',
              },
              {
                title: 'CONFIANZA MUTUA',
                desc: 'Construimos relaciones de largo plazo. Cada empresa e inversionista que confía en nosotros es tratado como un socio estratégico.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="rounded-2xl p-8"
                style={{ background: '#ede8fb' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <h3 className="text-[0.8rem] font-extrabold tracking-[0.06em] text-[#11152a] mb-3 uppercase">
                  {card.title}
                </h3>
                <p className="text-[0.9rem] text-[#4a4e6b] leading-[1.7]">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
          <RespaldoSection />
      <NuestrosValoresSection />
      <TestimoniosSection />
      <FilosofiaSection />
      <EquipoSection />
      <EvaluaSection />
      {/* ────────── CONTACTO ────────── */}
      {/* <ContactoInline /> */}
    </div>
  );
};
