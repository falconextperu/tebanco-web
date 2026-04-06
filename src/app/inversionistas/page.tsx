import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroInversor } from "@/components/inversionistas/HeroInversor";
import { BeneficiosInversor } from "@/components/inversionistas/BeneficiosInversor";
import { SimuladorInversor } from "@/components/inversionistas/SimuladorInversor";
import { TestimoniosInversor } from "@/components/inversionistas/TestimoniosInversor";
import { FaqInversor } from "@/components/inversionistas/FaqInversor";

export const metadata: Metadata = {
  title: 'Inversiones en Factoring | Fluxa Finance',
  description: 'Invierte en facturas comerciales con Fluxa Finance y obtén hasta el 18% de rentabilidad anual sin comisiones ocultas.',
};

export default function InversionistasPage() {
  return (
    <>
      <Header />
      <main>
        <HeroInversor />
        <SimuladorInversor />
        <BeneficiosInversor />
        {/* <TestimoniosInversor /> — COMENTADO TEMPORALMENTE */}
        <FaqInversor />
      </main>
      <Footer />
    </>
  );
}
