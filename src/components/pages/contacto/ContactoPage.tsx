"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle,
  CheckCircle2, Send, ChevronDown
} from 'lucide-react';

/* ─── DATA ─── */
const channels = [
  {
    icon: <Phone size={26} strokeWidth={1.5} />,
    label: "Llámanos",
    value: "+51 947 542 277",
    sub: "Lun – Vie · 9 AM a 6 PM",
    href: "tel:+51947542277",
    color: "#583e9b",
    bg: "rgba(88,62,155,0.08)"
  },
  {
    icon: <Mail size={26} strokeWidth={1.5} />,
    label: "Escríbenos",
    value: "mpariona@fluxa.pe",
    sub: "Respondemos en menos de 24h",
    href: "mailto:mpariona@fluxa.pe",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)"
  },
  {
    icon: <MessageCircle size={26} strokeWidth={1.5} />,
    label: "WhatsApp",
    value: "+51 947 542 277",
    sub: "Chat directo con un asesor",
    href: "https://wa.me/51947542277",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)"
  },
  {
    icon: <MapPin size={26} strokeWidth={1.5} />,
    label: "Visítanos",
    value: "Av. Juan de Arona 755",
    sub: "Piso 2 — San Isidro",
    href: "https://www.google.com/maps?q=-12.096123447528354,-77.02798394678064",
    color: "#d97706",
    bg: "rgba(217,119,6,0.08)"
  }
];

const servicios = ["Factoring", "Inversiones en Factoring", "Asesoría Financiera", "Otro"];

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
    a: "Sí, estamos ubicados en Av. Paseo de la República 3617. Piso 10, San Isidro — Lima. Atendemos previa cita."
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

  const inputClass = "w-full bg-[#f8fafc] border border-black/[0.07] rounded-[10px] py-[0.85rem] px-4 text-[0.95rem] text-[#11152a] outline-none font-[inherit] transition-all duration-200 focus:border-[#583e9b] focus:shadow-[0_0_0_4px_rgba(88,62,155,0.09)] focus:bg-white";

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[rgba(8,8,22,0.40)]" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 z-[6] w-[10%] bg-gradient-to-r from-[#050a1e]/60 to-transparent" />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 z-[6] w-[16%] bg-gradient-to-l from-[#050a1e] via-[#0a1232]/30 to-transparent" />

        <motion.img
          src="/svg/herocontacto.svg"
          alt="Fluxa — Contacto"
          className="pointer-events-none absolute inset-0 w-full h-full select-none object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Text block — LEFT side */}
        <motion.div
          className="relative z-10 mx-auto max-w-full px-6 py-8 text-center lg:ml-[8%] lg:mr-0 lg:max-w-[500px] lg:px-0 lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="mb-6 text-[clamp(2.2rem,1.3vw,3.6rem)] font-normal leading-[1.1] tracking-[-0.01em] text-white">
            Hablemos sobre <strong className="font-extrabold">el<br />futuro de tu negocio</strong>
          </h1>
          <p className="mb-8 text-[1rem] leading-[1.65] text-white/85 lg:text-[1.1rem] lg:max-w-[400px]">
            Nuestros asesores especializados están listos para analizar tu caso y ofrecerte la solución financiera que tu empresa necesita. Sin compromisos, sin costos ocultos.
          </p>
          <a
            href="https://wa.me/51947542277"
            target="_blank" rel="noopener noreferrer"
            className="inline-block whitespace-nowrap rounded-[50px] bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-[42px] py-[15px] text-[1rem] font-bold leading-none text-white shadow-[0_10px_24px_rgba(128,29,197,0.36)]"
          >
            Habla con un asesor
          </a>
        </motion.div>
      </section>

      {/* ── CANALES DE CONTACTO ── */}
      <section className="py-14 bg-white lg:py-20">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-4 mx-auto lg:grid-cols-3 lg:gap-6 lg:max-w-[900px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Llámanos */}
            {[
              {
                icon: <Phone size={24} strokeWidth={1.6} className="text-white" />,
                label: 'Llámanos',
                value: '+51 947 542 277',
                sub: 'Lun – Vie · 9 AM a 6 PM',
                href: 'tel:+51947542277',
              },
              {
                icon: <img src="/svg/wsp.svg" alt="WhatsApp" className="w-[24px] h-[24px] object-contain brightness-0 invert" />,
                label: 'WhatsApp',
                value: '+51 947 542 277',
                sub: 'Chat directo con un asesor',
                href: 'https://wa.me/51947542277',
              },
              {
                icon: <Mail size={24} strokeWidth={1.6} className="text-white" />,
                label: 'Escríbenos',
                value: 'mpariona@fluxa.pe',
                sub: 'Respondemos en menos de 24h',
                href: 'mailto:mpariona@fluxa.pe',
              },
            ].map((ch) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-col gap-4 bg-white rounded-2xl p-7 no-underline"
                style={{ border: '1px solid rgba(17,21,42,0.08)', boxShadow: '0 4px 24px rgba(17,21,42,0.06)' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                {/* Icon + label row */}
                <div className="flex items-center gap-3">
                  <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#11152a' }}>
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-[1rem] font-bold text-[#11152a] leading-[1.2]">{ch.label}</p>
                    <p className="text-[0.88rem] text-[#583e9b] font-semibold mt-[2px]">{ch.value}</p>
                  </div>
                </div>

                {/* Full-width arrow separator */}
                <div className="flex items-center w-full">
                  <div className="flex-1" style={{ borderTop: '1px solid rgb(102,0,126)' }} />
                  <span className="text-[1rem] leading-none" style={{ color: 'rgb(102,0,126)' }}>→</span>
                </div>

                {/* Sub */}
                <p className="text-[0.85rem] text-[#6b6b8a] leading-[1.5]">{ch.sub}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(180deg, #0d0b2e 0%, #111340 100%)' }}>
        <div className="container">

          {/* Title */}
          <motion.h2
            className="text-center text-[2rem] font-normal text-white leading-[1.2] mb-8 lg:text-[2.6rem] lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <strong className="font-bold">Asesoría financiera</strong> que<br />
            transforma tu negocio
          </motion.h2>

          {/* Form card — white */}
          <motion.div
            className="max-w-[780px] mx-auto rounded-2xl overflow-hidden pt-2 px-4 pb-6 bg-[#29295A] lg:px-10 lg:pb-10"
            style={{ border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 24px 60px rgba(0,0,0,0.3)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Card header */}
            <div className="text-center py-6 px-8">
              <p className="text-[0.8rem] font-bold tracking-[0.12em] text-white uppercase mb-1">Déjanos tus datos</p>
              <p className="text-[0.85rem] text-white/50">Completa el formulario y un asesor te contactará pronto.</p>
            </div>

            {/* White form body */}
            <div className="bg-white rounded-xl p-5 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-5 py-10">
                  <CheckCircle2 size={48} strokeWidth={1.5} className="text-[#583e9b]" />
                  <h3 className="text-[1.5rem] font-extrabold text-[#11152a]">¡Mensaje enviado!</h3>
                  <p className="text-base text-[#64748b] leading-[1.65] max-w-[340px]">
                    Gracias. Un asesor se pondrá en contacto contigo en menos de 24 horas hábiles.
                  </p>
                  <button
                    className="border border-[#583e9b] text-[#583e9b] rounded-full py-[10px] px-7 text-[0.95rem] font-semibold cursor-pointer bg-transparent font-[inherit] transition-all duration-200 hover:bg-[#583e9b] hover:text-white"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[0.82rem] font-semibold text-[#334155]">Nombre / Razón Social *</label>
                      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputClass} placeholder="Ej." />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[0.82rem] font-semibold text-[#334155]">RUC</label>
                      <input type="text" name="ruc" value={formData.ruc} onChange={handleChange} className={inputClass} placeholder="20xxxxxxxxx" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[0.82rem] font-semibold text-[#334155]">Teléfono *</label>
                      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className={inputClass} placeholder="+51 xxx xxx xxx" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[0.82rem] font-semibold text-[#334155]">Correo electrónico *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="Tu@empresa.com" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[0.82rem] font-semibold text-[#334155]">Tipo de servicio</label>
                    <div className="relative">
                      <select name="servicio" value={formData.servicio} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-10`}>
                        <option value="">Selecciona una opción</option>
                        {servicios.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[0.82rem] font-semibold text-[#334155]">Mensaje (opcional)</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} className={`${inputClass} resize-y min-h-[110px]`} placeholder="Cuéntanos brevemente sobre tu empresa..." />
                  </div>

                  <label className="flex items-start gap-[10px] text-[0.82rem] text-[#64748b] leading-[1.5] cursor-pointer">
                    <input
                      type="checkbox" name="aceptaTerminos" checked={formData.aceptaTerminos} onChange={handleChange} required
                      className="mt-[2px] flex-shrink-0 w-4 h-4 cursor-pointer accent-[#583e9b]"
                    />
                    <span>
                      He leído y autorizo el tratamiento de mis datos personales según la{" "}
                      <Link href="#" className="text-[#583e9b] underline">Política de Privacidad</Link>{" "}
                      de Fluxa.
                    </span>
                  </label>

                  <div className="flex justify-center pt-1">
                    <button
                      type="submit"
                      className="rounded-full bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-12 py-[14px] text-base font-bold text-white cursor-pointer border-none font-[inherit] shadow-[0_8px_22px_rgba(144,23,215,0.35)] transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── MAPA + DIRECCIÓN ── */}
      <style>{`
        .map-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) { .map-grid { grid-template-columns: 1fr 1.8fr; } }
      `}</style>
      <section className="relative py-14 overflow-hidden lg:py-20" style={{ background: '#edeaf7' }}>
        <img
          src="/svg/fondoinformacion.svg"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-[0]"
        />
        <div className="container relative z-[2]">
          <motion.div
            className="map-grid grid rounded-2xl overflow-hidden"
            style={{ background: '#fff', boxShadow: '0 12px 48px rgba(88,62,155,0.10)' }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left — text */}
            <div className="p-7 flex flex-col gap-5 justify-center lg:p-12">
              <h2 className="text-[1.6rem] font-normal text-[#11152a] leading-[1.25] lg:text-[1.9rem]">
                Nuestra oficina en<br />
                <strong className="font-extrabold">San Isidro</strong>
              </h2>
              <div className="flex items-start gap-3 text-[0.92rem] text-[#4a4e6b] leading-[1.7]">
                <MapPin size={18} strokeWidth={1.6} className="flex-shrink-0 mt-[3px]" style={{ color: '#583e9b' }} />
                <div>
                  <strong className="text-[#11152a]">Centro Empresarial</strong><br />
                  Av. Juan de Arona 755<br />
                  Piso 2 — San Isidro, Lima
                </div>
              </div>
              <a
                href="https://www.google.com/maps?q=-12.096123447528354,-77.02798394678064"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full text-white text-[0.9rem] font-semibold no-underline w-fit px-6 py-[11px] transition-all duration-200 hover:opacity-90"
                style={{ background: '#2d1269' }}
              >
                Ver en Google Maps
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>

            {/* Right — map */}
            <div className="w-full min-h-[260px] lg:min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1!2d-77.0279839!3d-12.0961234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzQ2LjAiUyA3N8KwMDEnNDAuNyJX!5e0!3m2!1ses!2spe!4v1714935000000!5m2!1ses!2spe"
                width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: '260px' }} allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Oficina Fluxa"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
