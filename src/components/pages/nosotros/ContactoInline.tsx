"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, MessageCircle, ChevronDown } from 'lucide-react';

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

  const inputClass = "w-full bg-white/[0.06] border border-white/10 rounded-[9px] py-[0.8rem] px-4 text-[0.9rem] text-white outline-none font-[inherit] transition-all duration-200 placeholder:text-white/25 focus:border-[rgba(88,62,155,0.6)] focus:shadow-[0_0_0_3px_rgba(88,62,155,0.15)] focus:bg-white/[0.08]";

  return (
    <section className="py-28 bg-[#11152a] relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{ top: '-20%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(88,62,155,0.3) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />

      <div className="container">
        <div
          className="grid items-center relative z-[2] lg:grid-cols-1 lg:gap-12"
          style={{ gridTemplateColumns: '1fr 1.4fr', gap: '5rem' }}
        >

          {/* LEFT — copy */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.08em] text-[#a78bfa] uppercase">¿Listo para empezar?</span>
            <h2 className="text-[2.8rem] font-extrabold text-white leading-[1.15] tracking-[-0.02em] lg:text-[2.2rem]">
              Habla con un asesor<br />
              <span style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Fluxa
              </span>
            </h2>
            <p className="text-base text-white/55 leading-[1.7]">
              Déjanos tus datos y uno de nuestros especialistas te contactará en menos de 24 horas para analizar tu caso sin costo ni compromiso.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="tel:+51947542277"
                className="inline-flex items-center gap-[7px] bg-[rgba(88,62,155,0.2)] border border-[rgba(88,62,155,0.3)] text-[#a78bfa] rounded-lg py-[10px] px-[18px] text-[0.88rem] font-semibold no-underline transition-all duration-200 hover:bg-[rgba(88,62,155,0.35)] hover:border-[rgba(88,62,155,0.5)]"
              >
                <Phone size={16} strokeWidth={1.5} />
                +51 947 542 277
              </a>
              <a
                href="https://wa.me/51947542277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] bg-[rgba(5,150,105,0.15)] border border-[rgba(5,150,105,0.3)] text-[#34d399] rounded-lg py-[10px] px-[18px] text-[0.88rem] font-semibold no-underline transition-all duration-200 hover:bg-[rgba(5,150,105,0.25)] hover:border-[rgba(5,150,105,0.5)]"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            className="bg-white/[0.04] border border-white/[0.08] rounded-[20px] p-10 sm:p-7 sm:px-5"
            style={{ backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-4 py-10 px-4">
                <CheckCircle2 size={44} strokeWidth={1.5} className="text-[#34d399]" />
                <h3 className="text-[1.5rem] font-extrabold text-white">¡Mensaje enviado!</h3>
                <p className="text-[0.95rem] text-white/55">Te contactaremos en menos de 24 horas hábiles.</p>
                <button
                  className="bg-none border border-[rgba(88,62,155,0.4)] text-[#a78bfa] rounded-lg py-[9px] px-5 text-[0.88rem] font-semibold cursor-pointer font-[inherit] transition-all duration-200 hover:bg-[#583e9b] hover:text-white"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                  <div className="flex flex-col gap-[0.45rem]">
                    <label className="text-[0.8rem] font-semibold text-white/60">Nombre / Empresa *</label>
                    <input
                      type="text" name="nombre" value={formData.nombre}
                      onChange={handleChange} required
                      className={inputClass} placeholder="Juan Pérez / Mi Empresa SAC"
                    />
                  </div>
                  <div className="flex flex-col gap-[0.45rem]">
                    <label className="text-[0.8rem] font-semibold text-white/60">Teléfono *</label>
                    <input
                      type="tel" name="telefono" value={formData.telefono}
                      onChange={handleChange} required
                      className={inputClass} placeholder="+51 9xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                  <div className="flex flex-col gap-[0.45rem]">
                    <label className="text-[0.8rem] font-semibold text-white/60">Correo electrónico *</label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange} required
                      className={inputClass} placeholder="tu@empresa.com"
                    />
                  </div>
                  <div className="flex flex-col gap-[0.45rem]">
                    <label className="text-[0.8rem] font-semibold text-white/60">Servicio de interés</label>
                    <div className="relative">
                      <select
                        name="servicio" value={formData.servicio}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer pr-8 text-white/70`}
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="">Selecciona…</option>
                        {servicios.map(s => <option key={s} value={s} style={{ background: '#1e2440', color: '#fff' }}>{s}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-[0.875rem] top-1/2 -translate-y-1/2 text-white/35 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[0.45rem]">
                  <label className="text-[0.8rem] font-semibold text-white/60">Mensaje (opcional)</label>
                  <textarea
                    name="mensaje" value={formData.mensaje}
                    onChange={handleChange} rows={3}
                    className={`${inputClass} resize-y min-h-[80px]`}
                    placeholder="Cuéntanos brevemente sobre tu empresa y qué necesitas…"
                  />
                </div>

                <label className="flex items-start gap-[9px] cursor-pointer">
                  <input
                    type="checkbox" name="acepta"
                    checked={formData.acepta}
                    onChange={handleChange} required
                    className="mt-[2px] flex-shrink-0 w-[15px] h-[15px] cursor-pointer accent-[#583e9b]"
                  />
                  <span className="text-[0.78rem] text-white/40 leading-[1.5]">
                    Acepto el tratamiento de mis datos personales según la Política de Privacidad de Fluxa.
                  </span>
                </label>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-[9px] bg-[#583e9b] text-white border-none rounded-[9px] py-[14px] px-6 text-[0.95rem] font-bold cursor-pointer font-[inherit] transition-all duration-200 hover:bg-[#4a3280] hover:-translate-y-0.5"
                >
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
