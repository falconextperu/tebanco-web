import { Metadata } from 'next';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroInversor } from "@/components/pages/inversionistas/HeroInversor";
import { BeneficiosInversor } from "@/components/pages/inversionistas/BeneficiosInversor";
import { SimuladorInversor } from "@/components/pages/inversionistas/SimuladorInversor";
import { FaqInversor } from "@/components/pages/inversionistas/FaqInversor";
import { InvierteInfoSection } from "@/components/sections/InvierteInfoSection";

export const metadata: Metadata = {
  title: 'Inversiones en Factoring | Fluxa',
  description: 'Invierte en facturas comerciales con Fluxa y obtén hasta el 18% de rentabilidad anual sin comisiones ocultas.',
};

export default function InversionistasPage() {
  return (
    <>
      <Header />
      <main>
        <HeroInversor />
        <SimuladorInversor />
        <InvierteInfoSection />
        <FaqInversor />
      </main>
      <Footer />
    </>
  );
}
