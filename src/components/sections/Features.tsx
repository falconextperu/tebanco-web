"use client";

import React from 'react';
import { BarChart3, FileText, PieChart, Banknote, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const features = [
    { Icon: BarChart3, title: 'Portal PyME Autónomo', desc: 'Control total de tu portafolio y límites operativos.' },
    { Icon: FileText, title: 'Carga Simplificada', desc: 'Sube comprobantes XML/PDF para evaluación rápida.' },
    { Icon: PieChart, title: 'Factoring Sin Fricciones', desc: 'TeBanco se encarga de gestionar el cobro por ti.' },
    { Icon: Banknote, title: 'Desembolso Inmediato', desc: 'Transferencias directas a tu cuenta TeBanco al aprobarse.' },
    { Icon: Headset, title: 'Asesoría Financiera', desc: 'Un ejecutivo TeBanco siempre listo para operaciones grandes.' },
  ];

  return (
    <section className="bg-white relative py-32 overflow-hidden sm:py-20" id="plataforma" style={{ background: '#ffffff' }}>
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top center, rgba(224,242,254,0.6) 0%, rgba(255,255,255,1) 50%)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        <motion.div
          className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-[3.5rem] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.03em] mb-6 lg:text-[2.8rem] sm:text-[2.2rem]">
            Plataforma potente.<br />Gestión confiable.
          </h2>
          <p className="text-[1.2rem] text-[#475569] leading-[1.6]">
            Transforma tus facturas por cobrar en efectivo en menos de 24 horas. Hemos diseñado un portal exclusivo para tu empresa tan fácil de usar como tu app bancaria favorita, respaldado por la solidez y confianza de TeBanco.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-20">

          <motion.div
            className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={listVariants}
          >
            {features.map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                className="bg-white rounded-[20px] p-10 flex flex-col items-start text-left gap-5 cursor-pointer transition-all duration-300 border border-black/[0.03] sm:p-6 sm:w-full"
                style={{
                  width: 'calc(33.333% - 1.5rem)',
                  minWidth: '280px',
                  maxWidth: '380px',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.06)'
                }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                  style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2152DD 100%)', color: '#fff' }}
                >
                  <Icon size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[1.2rem] font-extrabold text-[#0f172a]">{title}</h4>
                  <p className="text-[0.95rem] text-[#64748b] leading-[1.6]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
          >
            <img
              src="/logos/bannerfactoring.webp"
              alt="TeBanco Plataforma Factoring"
              className="rounded-2xl lg:w-[95%]"
              style={{
                width: '90%',
                maxWidth: '1100px',
                height: 'auto',
                objectFit: 'contain',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
              }}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
