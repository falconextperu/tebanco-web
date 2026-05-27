"use client";

import React, { useState } from "react";
import { BadgeCheck, Calendar, DollarSign, Info, Percent, ShieldAlert, TrendingUp } from "lucide-react";

type CalculatorTab = "factoring" | "inversor";

type Props = {
  titleBold?: string;
  titleRest?: string;
  subtitle?: string;
  className?: string;
  defaultTab?: CalculatorTab;
  hideTabs?: boolean;
  cardTitle?: string;
};

export const LiquidezCalculatorSection = ({
  titleBold = "Calcula tu liquidez",
  titleRest = "en minutos.",
  subtitle = "Ingresa el monto de tu factura y descubre cuánto capital podrías recibir para seguir avanzando.",
  className = "",
  defaultTab = "factoring",
  hideTabs = false,
  cardTitle = "Calcula tus retornos",
}: Props) => {
  const [activeTab, setActiveTab] = useState<CalculatorTab>(defaultTab);
  const [amount, setAmount] = useState<string>("10000");
  const [months, setMonths] = useState<number>(3);

  const numericAmount = Number(amount.replace(/[^0-9]/g, "")) || 0;
  const annualRate = activeTab === "factoring" ? 10 : 12;
  const gross = numericAmount * (annualRate / 100) * (months / 12);
  const retention = gross * 0.05;
  const total = numericAmount + gross - retention;

  const fmt = (v: number) => v.toLocaleString("es-PE", { maximumFractionDigits: 0 });

  const bars = [
    { label: "3 meses", value: 3, h: "42%" },
    { label: "6 meses", value: 6, h: "64%" },
    { label: "12 meses", value: 12, h: "90%" },
  ];

  return (
    <section
      id="calculadora-liquidez"
      className={`relative overflow-hidden py-16 lg:py-24 ${className}`}
      style={{ background: "radial-gradient(ellipse at 50% 0%, #2a1f6e 0%, #0f0d2e 55%, #0a0820 100%)" }}
    >
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-[2rem] font-normal text-white leading-[1.1] tracking-[-0.01em] lg:text-[2.8rem]">
            <strong className="font-extrabold">{titleBold}</strong> {titleRest}
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-[480px] mx-auto leading-[1.65]">
            {subtitle}
          </p>
        </div>

        {/* ── Calculator card ── */}
        <div className="max-w-[900px] mx-auto">

          {/* Tabs */}
          {!hideTabs && (
            <div className="flex gap-1">
              {(["factoring", "inversor"] as CalculatorTab[]).map((tab) => {
                const active = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 h-[50px] rounded-t-[18px] text-[0.95rem] font-semibold transition-all duration-200 ${active
                        ? "bg-[#29295A] text-white"
                        : "bg-[#16143a] text-white/45 hover:text-white/70"
                      }`}
                  >
                    {tab === "factoring" ? "Calculadora Factoring" : "Calculadora Inversor"}
                  </button>
                );
              })}
            </div>
          )}

          {/* Card body */}
          <div className={`bg-[#29295A] p-4 lg:p-7 ${hideTabs ? "rounded-[24px]" : "rounded-b-[24px] rounded-tr-[24px]"}`}>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
              {/* LEFT — form */}
              <div className="flex flex-col gap-5 py-2">
                <h3 className="text-[1.5rem] font-extrabold text-white leading-[1.1] lg:text-[1.9rem]">
                  {cardTitle}
                </h3>

                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.88rem] font-medium text-white/70">
                    ¿Cuál sería tu monto inicial?
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[1rem] font-semibold text-[#64748b]">
                      S/
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
                      className="h-[52px] w-full rounded-xl border border-black/5 bg-white pl-10 pr-4 text-[1rem] font-semibold text-[#0f172a] outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.88rem] font-medium text-white/70">
                    ¿Durante cuánto tiempo?
                  </label>
                  <select
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="h-[52px] w-full appearance-none rounded-xl border border-black/5 bg-white px-4 text-[1rem] font-semibold text-[#0f172a] outline-none cursor-pointer"
                  >
                    <option value={3}>3 meses</option>
                    <option value={6}>6 meses</option>
                    <option value={12}>12 meses</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="mt-1 rounded-full bg-[linear-gradient(90deg,#66007E_0%,#B900E4_100%)] px-8 py-[11px] text-[1em] font-bold text-white shadow-[0_8px_22px_rgba(144,23,215,0.35)] w-full lg:w-auto lg:self-start"
                >
                  {activeTab === "factoring" ? "Simular adelanto" : "Simular inversión"}
                </button>
              </div>

              {/* RIGHT — results */}
              <div className="bg-white rounded-[20px] p-4 flex flex-col text-[#1f2937] lg:p-6">

                {/* Bar chart */}
                <div className="flex items-end justify-around gap-3 mb-5" style={{ height: 200 }}>
                  {bars.map((bar) => {
                    const isActive = bar.value === months;
                    const localGross = numericAmount * (annualRate / 100) * (bar.value / 12);
                    const localTotal = numericAmount + localGross - localGross * 0.05;

                    return (
                      <div key={bar.value} className="flex flex-col items-center justify-end h-full w-full">
                        {/* Tooltip above active bar */}
                        <div className={`text-center mb-2 transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                          <div className="text-[0.95rem] font-extrabold text-[#111827]">S/ {fmt(localTotal)}</div>
                          <div className="text-[0.72rem] font-semibold text-[#64748b]">{annualRate.toFixed(2)}% E.A.</div>
                        </div>
                        {/* Bar track */}
                        <div className="w-full flex items-end justify-center flex-1">
                          <div
                            className="w-full rounded-xl transition-all duration-500"
                            style={{
                              height: bar.h,
                              background: isActive
                                ? "linear-gradient(180deg, #6a3fb3 0%, #9f84f6 100%)"
                                : "#d3d7df",
                              boxShadow: isActive ? "0 10px 20px rgba(106,63,179,0.22)" : "none",
                            }}
                          />
                        </div>
                        <span className="mt-2 text-[0.72rem] font-semibold text-[#64748b]">{bar.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Summary rows */}
                <div className="flex flex-col gap-[10px] text-[0.85rem]">
                  <Row icon={<Percent size={15} className="text-[#94a3b8]" />} label="Tasa E.A. (Efectiva Anual)" value={`${annualRate.toFixed(2)}% E.A.`} extra={<Info size={13} className="text-[#94a3b8]" />} />
                  <Row icon={<DollarSign size={15} className="text-[#94a3b8]" />} label="Inicias con" value={`S/ ${fmt(numericAmount)}`} />
                  <Row icon={<Calendar size={15} className="text-[#94a3b8]" />} label="Plazo elegido" value={`${months} meses`} />
                  <Row icon={<TrendingUp size={15} className="text-[#94a3b8]" />} label="Rendimientos" value={`+ S/ ${fmt(gross)}`} valueClass="text-[#10b981]" />
                  <Row icon={<ShieldAlert size={15} className="text-[#94a3b8]" />} label="Retención IR (5%)" value={`- S/ ${fmt(retention)}`} valueClass="text-[#ef4444]" />
                </div>

                {/* Total */}
                <div className="mt-4 pt-4 border-t border-black/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BadgeCheck size={18} className="text-[#2563eb]" />
                    <span className="text-[0.95rem] font-bold text-[#111827]">Recibirás en total</span>
                  </div>
                  <span className="text-[1.5rem] font-extrabold text-[#583e9b]">S/ {fmt(total)}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({
  icon,
  label,
  value,
  valueClass = "text-[#111827]",
  extra,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClass?: string;
  extra?: React.ReactNode;
}) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-[6px] text-[#64748b]">
      {icon}
      <span>{label}</span>
    </div>
    <div className={`flex items-center gap-1 font-bold ${valueClass}`}>
      {value}
      {extra}
    </div>
  </div>
);
