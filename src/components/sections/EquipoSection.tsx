"use client";

import React from 'react';
import { motion } from 'framer-motion';

const miembros = [
  {
    name: 'Diego Salazar',
    role: 'Director de Tecnología',
    initials: 'DS',
    featured: false,
  },
  {
    name: 'Valeria Torres',
    role: 'Head of Operaciones Financieras',
    initials: 'VT',
    featured: false,
  },
  {
    name: 'Miguel Pariona',
    role: 'CEO & Founder',
    initials: null,
    featured: true,
  },
  {
    name: 'Andrea Velásquez',
    role: 'CEO & Founder',
    initials: 'AV',
    featured: false,
  },
  {
    name: 'Diego Bazan',
    role: 'Marketing Head',
    initials: 'DB',
    featured: false,
  },
];

export const EquipoSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden lg:py-24">
      <div className="container">

        {/* Title */}
        <motion.h2
          className="text-center text-[2rem] font-normal text-[#11152a] leading-[1.2] mb-10 lg:text-[2.8rem] lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Conoce al equipo <strong className="font-bold">Fluxa</strong>
        </motion.h2>

        {/* Team row */}
        <motion.div
          className="flex items-end justify-center gap-8 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {miembros.map((m) => (
            <motion.div
              key={m.name}
              className="flex flex-col items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {/* Avatar circle */}
              <div
                className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{
                  width: m.featured ? 220 : 160,
                  height: m.featured ? 220 : 160,
                  background: m.featured ? 'transparent' : '#d9d9e3',
                  border: m.featured ? 'none' : '3px solid #e5e5ef',
                }}
              >
                {m.featured ? (
                  <img
                    src="/svg/equipo.svg"
                    alt={m.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <span className="text-[1.5rem] font-semibold text-white/80 select-none">
                    {m.initials}
                  </span>
                )}
              </div>

              {/* Name & role */}
              <div className="text-center" style={{ maxWidth: m.featured ? 200 : 160 }}>
                <p className="text-[1.05rem] font-normal text-[#11152a] leading-[1.3]">{m.name}</p>
                <p className="text-[0.85rem] text-[#6b6b8a] mt-[3px] leading-[1.4]">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
