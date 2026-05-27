"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, HandCoins, Laptop } from 'lucide-react';

export const BeneficiosInversor = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Rentabilidad Superior",
      description: "Genera hasta 18% anual invirtiendo en facturas a plazos cortos, de manera segura y sin intermediarios bancarios pesados."
    },
    {
      icon: <HandCoins size={32} />,
      title: "0% Comisiones Ocultas",
      description: "En TeBanco el monto que inviertes crece. No te cobramos por mantenimiento ni por comisiones de éxito. Todo tu retorno es para ti."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Diversificación Inteligente",
      description: "Invierte desde S/ 500 en cientos de facturas comerciales del sector minero, agroexportador y logístico. Minimiza tu riesgo al instante."
    },
    {
      icon: <Laptop size={32} />,
      title: "100% Digital y Transparente",
      description: "Selecciona las facturas en nuestra plataforma, analiza el riesgo de cada pagador en tiempo real y cobra directamente en tu cuenta bancaria."
    }
  ];

  return (
    <section className="py-32 bg-[#fcfcfd]">
      <div className="container flex flex-col gap-16">

        <motion.div
          className="text-center max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <span className="inline-block py-2 px-4 bg-[rgba(88,62,155,0.08)] text-[#583e9b] text-[0.875rem] font-bold rounded-[2rem] tracking-[0.05em] uppercase mb-6">
            LA MEJOR ESTRATEGIA
          </span>
          <h2 className="text-[3.5rem] font-extrabbold leading-[1.1] text-[#11152a] mb-6 tracking-[-0.02em] lg:text-[3rem] md:text-[2.25rem]">
            Invierte con información <br />
            <span style={{ background: 'linear-gradient(90deg, #583e9b 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              a la mano
            </span>
          </h2>
          <p className="text-[1.25rem] leading-[1.6] text-[#64748b] md:text-[1.125rem]">
            Olvídate de las tasas fijas del banco que no superan la inflación. Hemos democratizado el factoring para que tu patrimonio gane valor día a día.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-black/[0.04] rounded-[1.5rem] p-12 pb-16 relative overflow-hidden cursor-default transition-all duration-[0.4s] group md:p-10"
              style={{ boxShadow: '0 10px 30px rgba(17,21,42,0.04)' }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(88,62,155,0.12)', borderColor: 'rgba(88,62,155,0.15)' }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[0.4s]"
                style={{ background: 'linear-gradient(90deg, #583e9b, #a78bfa)' }}
              />
              <div
                className="inline-flex items-center justify-center w-[4.5rem] h-[4.5rem] bg-[rgba(88,62,155,0.08)] text-[#583e9b] rounded-[1.25rem] mb-8 transition-all duration-[0.4s] group-hover:bg-[#583e9b] group-hover:text-white group-hover:scale-105 group-hover:rotate-[5deg]"
              >
                {benefit.icon}
              </div>
              <h3 className="text-[1.5rem] font-bold text-[#11152a] mb-4">{benefit.title}</h3>
              <p className="text-[1.125rem] leading-[1.6] text-[#64748b]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
