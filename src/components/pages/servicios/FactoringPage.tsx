"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LiquidezCalculatorSection } from '@/components/shared/LiquidezCalculatorSection';
import {
  CheckCircle2, ArrowRight, Clock, Shield, TrendingUp, FileText,
  BarChart3, Users, DollarSign, ChevronDown, Zap, Lock, HeadphonesIcon
} from 'lucide-react';

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

export const FactoringPage = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="pt-[90px]">

      {/* HERO */}
      <section className="bg-[#11152a] py-24 pb-28 relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(88,62,155,0.35) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div className="container">
          <div className="flex items-center gap-2 mb-10 text-[0.85rem] text-white/50">
            <Link href="/" className="text-white/50 no-underline transition-colors duration-200 hover:text-white/90">Inicio</Link>
            <span className="text-white/30">/</span>
            <Link href="/#servicios" className="text-white/50 no-underline transition-colors duration-200 hover:text-white/90">Servicios</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">Factoring</span>
          </div>

          <motion.div
            className="max-w-[780px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <div className="inline-flex items-center gap-[6px] bg-[rgba(88,62,155,0.25)] border border-[rgba(88,62,155,0.4)] text-white/90 text-[0.78rem] font-semibold tracking-[0.04em] py-[6px] px-[14px] rounded-full mb-6">
              <Zap size={14} strokeWidth={2.5} />
              Servicio Financiero Regulado · Ley N° 29623
            </div>
            <h1 className="text-[4rem] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6 lg:text-[3rem] sm:text-[2.2rem]">
              Convierte tus facturas en<br />
              <span className="text-[#a78bfa]">liquidez inmediata</span>
            </h1>
            <p className="text-[1.2rem] text-white/65 leading-[1.6] max-w-[600px] mb-10">
              Adelanta el cobro de tus facturas pendientes en 24–48 horas. Sin deuda, sin costos ocultos, sin complicaciones. Tu empresa sigue creciendo sin pausas.
            </p>
            <div className="flex items-center gap-4 flex-wrap mb-12">
              <a href="http://localhost:5174/registro"
                className="inline-flex items-center gap-2 bg-[#583e9b] text-white rounded-lg py-[14px] px-7 font-semibold text-base no-underline transition-all duration-200 hover:bg-[#4a3280] hover:-translate-y-0.5">
                Solicitar financiación
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="#como-funciona"
                className="inline-flex items-center text-white/80 border border-white/20 rounded-lg py-[14px] px-6 font-medium text-base no-underline transition-all duration-200 hover:border-white/50 hover:text-white">
                Ver cómo funciona
              </a>
            </div>

            <div className="flex items-center gap-10 flex-wrap sm:gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[2rem] font-extrabold text-white tracking-[-0.03em] sm:text-[1.5rem]">85–90%</span>
                <span className="text-[0.82rem] text-white/50">del valor de tus facturas</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-[2rem] font-extrabold text-white tracking-[-0.03em] sm:text-[1.5rem]">24–48h</span>
                <span className="text-[0.82rem] text-white/50">tiempo de desembolso</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-[2rem] font-extrabold text-white tracking-[-0.03em] sm:text-[1.5rem]">0%</span>
                <span className="text-[0.82rem] text-white/50">deuda en tu balance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LiquidezCalculatorSection
        defaultTab="factoring"
        titleBold="Calcula tu liquidez"
        titleRest="en minutos."
        subtitle="Ingresa el monto de tu factura y descubre cuánto capital podrías recibir para seguir avanzando."
        className="py-20"
      />

      {/* QUÉ ES FACTORING */}
      <section className="py-28 bg-white">
        <div className="container">
          <div className="flex items-center gap-20 lg:flex-col lg:gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <div className="inline-block text-[0.75rem] font-bold tracking-[0.08em] text-[#583e9b] uppercase mb-4">¿Qué es el Factoring?</div>
              <h2 className="text-[2.5rem] font-extrabold text-[#11152a] leading-[1.2] mb-5 sm:text-[2rem]">
                La solución financiera que tu empresa necesita hoy
              </h2>
              <p className="text-[1.05rem] text-[#64748b] leading-[1.7] mb-5">
                El factoring es un servicio financiero que te permite convertir tus facturas por cobrar en efectivo inmediato, sin necesidad de esperar los plazos de pago de tus clientes.
              </p>
              <p className="text-[1.05rem] text-[#64748b] leading-[1.7] mb-5">
                En Fluxa, adquirimos tus facturas electrónicas y te adelantamos entre el 85% y 90% de su valor el mismo día. Nosotros nos encargamos del cobro; tú te enfocas en crecer.
              </p>
              <ul className="list-none p-0 mt-6 flex flex-col gap-3">
                {["Proceso 100% digital", "Sin garantías hipotecarias", "Aprobación en el día", "Atención ejecutiva personalizada"].map((item) => (
                  <li key={item} className="flex items-center gap-[10px] text-[0.95rem] font-medium text-[#334155]">
                    <CheckCircle2 size={18} strokeWidth={2} className="text-[#583e9b] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            >
              <div className="bg-white rounded-[20px] shadow-[0_25px_70px_rgba(17,21,42,0.1)] overflow-hidden w-full max-w-[400px] border border-black/[0.04]">
                <div className="bg-[#f8fafc] px-4 py-3 flex items-center gap-[6px] border-b border-[#e2e8f0]">
                  <span className="w-3 h-3 rounded-full block" style={{ background: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full block" style={{ background: '#febc2e' }} />
                  <span className="w-3 h-3 rounded-full block" style={{ background: '#28c840' }} />
                  <span className="text-[0.75rem] font-medium text-[#94a3b8] ml-auto">Fluxa — Portal</span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[0.88rem]">
                    <span className="text-[#94a3b8] text-[0.8rem]">Factura N° 001-1284</span>
                    <span className="text-[0.72rem] bg-[#dcfce7] text-[#16a34a] py-0.5 px-2 rounded-[20px] font-semibold">CAVALI Verificada</span>
                  </div>
                  <div className="text-[2rem] font-extrabold text-[#11152a] tracking-[-0.02em]">S/ 85,000.00</div>
                  <div className="text-[0.78rem] text-[#94a3b8] -mt-3">Valor total de la factura</div>
                  <div className="h-px bg-[#f1f5f9]" />
                  <div className="flex justify-between items-center text-[0.88rem]">
                    <span className="text-[#94a3b8] text-[0.8rem]">Anticipo disponible</span>
                    <span className="text-[#16a34a] font-bold">S/ 76,500.00</span>
                  </div>
                  <div className="flex justify-between items-center text-[0.88rem]">
                    <span className="text-[#94a3b8] text-[0.8rem]">Tasa aplicada</span>
                    <span className="text-[#11152a]">2.1% mensual</span>
                  </div>
                  <div className="flex justify-between items-center text-[0.88rem]">
                    <span className="text-[#94a3b8] text-[0.8rem]">Desembolso estimado</span>
                    <span className="text-[#16a34a] font-bold">24 horas</span>
                  </div>
                  <a href="http://localhost:5174/registro"
                    className="flex items-center justify-center gap-2 bg-[#583e9b] text-white rounded-lg py-3 text-[0.9rem] font-semibold no-underline transition-colors duration-200 hover:bg-[#4a3280] mt-2">
                    Solicitar anticipo
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-28 bg-[#fcfcfd]">
        <div className="container">
          <motion.div
            className="text-center max-w-[700px] mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block text-[0.75rem] font-bold tracking-[0.08em] text-[#583e9b] uppercase mb-4">Beneficios</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#11152a] leading-[1.2] mb-5 sm:text-[2rem]">Por qué elegir Fluxa</h2>
            <p className="text-[1.05rem] text-[#64748b] leading-[1.7]">
              Diseñamos nuestro servicio de factoring pensando en las necesidades reales de las empresas peruanas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {benefits.map((b, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-10 px-8 border border-black/[0.04] shadow-[0_4px_20px_rgba(17,21,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(17,21,42,0.08)]"
                variants={itemVariants}>
                <div className="text-[#583e9b] mb-5">{b.icon}</div>
                <h3 className="text-[1.1rem] font-bold text-[#11152a] mb-3">{b.title}</h3>
                <p className="text-[0.9rem] text-[#64748b] leading-[1.6]">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-28 bg-white" id="como-funciona">
        <div className="container">
          <motion.div
            className="text-center max-w-[700px] mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block text-[0.75rem] font-bold tracking-[0.08em] text-[#583e9b] uppercase mb-4">Proceso</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#11152a] leading-[1.2] mb-5 sm:text-[2rem]">¿Cómo funciona el Factoring?</h2>
            <p className="text-[1.05rem] text-[#64748b] leading-[1.7]">
              4 pasos simples para convertir tus facturas en capital de trabajo.
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-6 relative lg:grid-cols-2 sm:grid-cols-1">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-[#f8fafc] rounded-2xl p-8 px-6 relative text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              >
                <div className="text-[3rem] font-black text-[rgba(88,62,155,0.08)] tracking-[-0.03em] leading-none mb-4">{step.number}</div>
                <div className="w-[52px] h-[52px] bg-[rgba(88,62,155,0.1)] text-[#583e9b] rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-[#11152a] mb-[0.6rem]">{step.title}</h3>
                <p className="text-[0.85rem] text-[#64748b] leading-[1.5]">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute right-[-0.75rem] top-1/2 -translate-y-1/2 text-[#cbd5e1] z-[2] lg:hidden">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS DE FACTORING */}
      <section className="py-28 bg-[#11152a]">
        <div className="container">
          <motion.div
            className="text-center max-w-[700px] mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block text-[0.75rem] font-bold tracking-[0.08em] text-[#a78bfa] uppercase mb-4">Modalidades</div>
            <h2 className="text-[2.5rem] font-extrabold text-white leading-[1.2] mb-5 sm:text-[2rem]">Tipos de Factoring disponibles</h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
            <motion.div
              className="bg-[rgba(88,62,155,0.25)] border border-[rgba(88,62,155,0.5)] rounded-2xl p-10 px-8 relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-[#583e9b] text-white text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full tracking-[0.04em] mb-5">Más popular</div>
              <h3 className="text-[1.25rem] font-bold text-white mb-4">Factoring sin Recurso</h3>
              <p className="text-[0.9rem] text-white/60 leading-[1.6] mb-6">
                Fluxa asume el riesgo de impago del deudor. Si tu cliente no paga, tú no pierdes. La opción más segura para tu empresa.
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-[0.6rem]">
                {["Sin riesgo de impago para ti", "Ideal para facturas grandes", "Mayor seguridad financiera"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[0.88rem] text-white/75">
                    <CheckCircle2 size={16} className="text-[#a78bfa] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-10 px-8 relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-[1.25rem] font-bold text-white mb-4">Factoring con Recurso</h3>
              <p className="text-[0.9rem] text-white/60 leading-[1.6] mb-6">
                Obtienes la liquidez inmediata y en caso de impago, se te notifica para gestionar el cobro. Las tasas son más competitivas.
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-[0.6rem]">
                {["Tasas más bajas", "Ideal para clientes confiables", "Mayor volumen disponible"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[0.88rem] text-white/75">
                    <CheckCircle2 size={16} className="text-[#a78bfa] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-10 px-8 relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-[1.25rem] font-bold text-white mb-4">Factoring Internacional</h3>
              <p className="text-[0.9rem] text-white/60 leading-[1.6] mb-6">
                Adelanta facturas de exportaciones. Convierte tus cuentas por cobrar del extranjero en capital disponible de inmediato.
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-[0.6rem]">
                {["Facturas en USD / EUR", "Coberturas en múltiples países", "Asesoría en comercio exterior"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[0.88rem] text-white/75">
                    <CheckCircle2 size={16} className="text-[#a78bfa] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container">
          <div className="flex gap-20 items-start lg:flex-col lg:gap-12">
            <motion.div
              className="flex-none w-[340px] lg:w-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block text-[0.75rem] font-bold tracking-[0.08em] text-[#583e9b] uppercase mb-4">Preguntas frecuentes</div>
              <h2 className="text-[2.5rem] font-extrabold text-[#11152a] leading-[1.2] mb-5 sm:text-[2rem]">
                Todo lo que necesitas saber sobre el factoring
              </h2>
              <p className="text-[1.05rem] text-[#64748b] leading-[1.7] mb-5">
                ¿Tienes más preguntas? Nuestros asesores están disponibles para ayudarte.
              </p>
              <a href="http://localhost:5174/registro"
                className="inline-flex items-center gap-2 bg-[#583e9b] text-white rounded-lg py-[14px] px-7 font-semibold text-base no-underline transition-all duration-200 hover:bg-[#4a3280] hover:-translate-y-0.5">
                Habla con un asesor
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-[#e2e8f0] cursor-pointer py-5 transition-all duration-200"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className={`flex justify-between items-center gap-4 font-semibold text-base transition-colors duration-200 ${openFaq === i ? 'text-[#583e9b]' : 'text-[#11152a]'}`}>
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180 text-[#583e9b]' : 'text-[#94a3b8]'}`}
                    />
                  </div>
                  {openFaq === i && (
                    <motion.div
                      className="pt-3 text-[0.92rem] text-[#64748b] leading-[1.7] overflow-hidden"
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

      {/* CTA FINAL */}
      <section className="py-28 bg-[#fcfcfd]">
        <div className="container">
          <motion.div
            className="bg-[#11152a] rounded-[24px] py-20 px-12 text-center relative overflow-hidden sm:py-12 sm:px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(88,62,155,0.4) 0%, transparent 65%)', filter: 'blur(80px)' }} />
            <h2 className="text-[3rem] font-extrabold text-white leading-[1.15] mb-5 relative z-[2] sm:text-[2rem]">
              ¿Listo para convertir tus facturas en liquidez?
            </h2>
            <p className="text-[1.1rem] text-white/60 mb-10 relative z-[2]">
              Regístrate hoy y recibe tu primera evaluación en menos de 24 horas. Sin compromisos.
            </p>
            <div className="relative z-[2]">
              <a href="http://localhost:5174/registro"
                className="inline-flex items-center gap-[10px] bg-[#583e9b] text-white rounded-[10px] py-4 px-9 font-bold text-[1.05rem] no-underline transition-all duration-200 hover:bg-[#4a3280] hover:-translate-y-0.5">
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
