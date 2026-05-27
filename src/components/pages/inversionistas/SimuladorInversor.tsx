"use client";

import { LiquidezCalculatorSection } from "@/components/shared/LiquidezCalculatorSection";

export const SimuladorInversor = () => {
  return (
    <LiquidezCalculatorSection
      defaultTab="inversor"
      titleBold="Calcula tu liquidez"
      titleRest="en minutos."
      subtitle="Ingresa el monto de tu factura y descubre cuánto capital podrías recibir para seguir avanzando."
      className="py-20"
      hideTabs
      cardTitle="Calcula tu inversión"
    />
  );
};
