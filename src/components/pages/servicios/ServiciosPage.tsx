"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LiquidezCalculatorSection } from '@/components/shared/LiquidezCalculatorSection';
import {
  CheckCircle2, ArrowRight, Clock, Shield, TrendingUp, FileText,
  BarChart3, Users, DollarSign, ChevronDown, Zap, Lock, HeadphonesIcon,
  Mail, CircleDollarSign
} from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';
import { RespaldoSection } from '@/components/sections/RespaldoSection';
import { EvaluaSection } from '@/components/sections/EvaluaSection';

const benefits = [
  { icon: <Zap size={28} strokeWidth={1.5} />, title: "Liquidez en 24–48 horas", desc: "Desembolso garantizado tras la confirmación de tus facturas. Sin esperas interminables." },
  { icon: <Shield size={28} strokeWidth={1.5} />, title: "Sin deuda en tu balance", desc: "El factoring no es un crédito tradicional. No afecta tu capacidad de endeudamiento." },
  { icon: <TrendingUp size={28} strokeWidth={1.5} />, title: "Mejora tu flujo de caja", desc: "Accede al capital que necesitas para crecer sin esperar los plazos de cobro habituales." },
  { icon: <Lock size={28} strokeWidth={1.5} />, title: "Sin costos ocultos", desc: "Tasa de descuento clara y justa. Conoces exactamente cuánto recibirás antes de operar." },
  { icon: <Users size={28} strokeWidth={1.5} />, title: "Reducción del riesgo de cobranza", desc: "Nos encargamos de gestionar el cobro por ti. Tú te enfocas en hacer crecer tu negocio." },
  { icon: <HeadphonesIcon size={28} strokeWidth={1.5} />, title: "Asesoría personalizada", desc: "Un ejecutivo dedicado evalúa tus facturas y te ofrece la mejor solución para tu empresa." }
];

const steps = [
  { number: "01", title: "Registra tu empresa", desc: "Crea tu cuenta en minutos y sube los documentos básicos de tu empresa.", icon: <FileText size={24} strokeWidth={1.5} /> },
  { number: "02", title: "Carga tus facturas", desc: "Sube tus facturas electrónicas pendientes de cobro a nuestra plataforma.", icon: <BarChart3 size={24} strokeWidth={1.5} /> },
  { number: "03", title: "Evaluación express", desc: "Nuestros asesores evalúan las facturas y te proponen una tasa justa sin costos ocultos.", icon: <Clock size={24} strokeWidth={1.5} /> },
  { number: "04", title: "Recibe tu dinero", desc: "Aprueba la operación y recibe entre el 85% – 90% de tus facturas directo a tu cuenta.", icon: <DollarSign size={24} strokeWidth={1.5} /> }
];

const faqs = [
  { q: "¿Qué es el factoring y cómo funciona?", a: "El factoring es un servicio financiero que permite a las empresas obtener liquidez inmediata mediante la venta de sus facturas por cobrar a una entidad financiera. Fluxa anticipa el monto de tus facturas y gestiona el cobro en tu lugar." },
  { q: "¿Qué beneficios tiene el factoring para mi empresa?", a: "El factoring permite mejorar el flujo de caja, reducir riesgos de cobranza y acceder a capital de trabajo sin endeudamiento tradicional. No afecta tu score crediticio y el proceso es totalmente digital." },
  { q: "¿Qué tipo de facturas se pueden negociar?", a: "Se pueden negociar facturas electrónicas emitidas a empresas privadas, siempre que cumplan con los requisitos establecidos por la Ley N° 29623 de Factoring en Perú." },
  { q: "¿Cuánto tiempo tarda el desembolso?", a: "Una vez aprobada la operación, el desembolso puede realizarse en un plazo de 24 a 48 horas hábiles. En muchos casos incluso el mismo día." },
  { q: "¿Cómo solicito el factoring con Fluxa?", a: "Solo debes crear una cuenta, cargar tus facturas y un asesor se pondrá en contacto para evaluar tu operación y ofrecerte una solución rápida y personalizada." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

export const ServiciosPage = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div>

      {/* ────────── HERO ────────── */}
      <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[rgba(8,8,22,0.38)]" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 z-[6] w-[20%] bg-gradient-to-r from-[#050a1e]/80 via-[#0a1232]/30 to-transparent" />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 z-[6] w-[16%] bg-gradient-to-l from-[#050a1e] via-[#0a1232]/30 to-transparent" />

        <motion.img
          src="/svg/heroservicios.svg"
          alt="Fluxa — Servicios"
          className="pointer-events-none absolute inset-0 w-full h-full select-none object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-full px-6 py-8 text-center lg:ml-auto lg:mr-[8%] lg:max-w-[520px] lg:px-0 lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="mb-6 text-[clamp(2.2rem,1.3vw,3.8rem)] font-normal leading-[1.1] tracking-[-0.01em] text-white">
            Transformando<br />
            cómo <strong className="font-extrabold">fluye el<br />capital en las<br />empresas.</strong>
          </h1>
          <p className="mb-8 text-[1rem] leading-[1.65] text-white lg:text-[1.4rem] lg:max-w-[400px]">
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

      {/* ────────── CALCULADORA ────────── */}
      <LiquidezCalculatorSection
        defaultTab="factoring"
        titleBold="Calcula tu liquidez"
        titleRest="en minutos."
        subtitle="Ingresa el monto de tu factura y descubre cuánto capital podrías recibir para seguir avanzando."
        className="py-20"
        hideTabs
      />

      {/* ────────── OBTÉN LIQUIDEZ EN PASOS ────────── */}
      <section className="relative py-16 bg-white overflow-hidden lg:py-24">
        <img
          src="/svg/vectorfluxa.svg"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-[0]"
        />
        <div className="container relative z-[2]">

          {/* Header */}
          <motion.div
            className="text-center mb-10 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h2 className="text-[2rem] font-bold text-[#11152a] leading-[1.15] lg:text-[2.8rem]">
              Obtén liquidez en pocos pasos.
            </h2>
            <p className="mt-4 text-[1rem] text-[#4a4e6b] max-w-[520px] mx-auto leading-[1.65]">
              Sube tus documentos, valida tus facturas y recibe el adelanto que tu empresa necesita de forma rápida y segura.
            </p>
          </motion.div>

          {/* Two-column */}
          <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-16">

            {/* Left — steps */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {[
                {
                  icon: <Mail size={22} strokeWidth={1.6} className="text-[#583e9b]" />,
                  title: 'Envíanos 3 documentos',
                  desc: 'Copia literal o vigencia de poder, DNI del representante legal y el contrato firmado.',
                },
                {
                  icon: <FileText size={22} strokeWidth={1.6} className="text-[#583e9b]" />,
                  title: 'Sube tus facturas',
                  desc: 'Evaluamos las facturas de tu cliente para proponerte una tasa de descuento justa (sin costos ocultos).',
                },
                {
                  icon: <CircleDollarSign size={22} strokeWidth={1.6} className="text-[#583e9b]" />,
                  title: 'Recibe el adelanto de tu dinero',
                  desc: 'Recibe entre el 85% – 90% del dinero de tus facturas a tus cuentas bancarias.',
                },
              ].map((step) => (
                <div key={step.title} className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-[48px] h-[48px] rounded-full flex items-center justify-center"
                    style={{ background: '#ede8fb' }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-bold text-[#11152a] mb-1">{step.title}</h3>
                    <p className="text-[0.9rem] text-[#4a4e6b] leading-[1.65]">{step.desc}</p>
                  </div>
                </div>
              ))}

              <a
                href="/contacto"
                className="mt-2 inline-block rounded-full bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-8 py-[13px] text-[0.95rem] font-bold text-white shadow-[0_8px_22px_rgba(144,23,215,0.3)] w-full text-center lg:w-auto lg:self-start"
              >
                Simular adelanto
              </a>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <img
                src="/svg/liquida.svg"
                alt="Hombre recibiendo liquidez con Fluxa"
                className="w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 20px 60px rgba(17,21,42,0.1)' }}
              />
            </motion.div>
          </div>

        </div>
      </section>
      <RespaldoSection />
      <FAQ />
      <EvaluaSection />

    </div>
  );
};
