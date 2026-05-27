import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroInversor } from "@/components/pages/inversionistas/HeroInversor";
import { BeneficiosInversor } from "@/components/pages/inversionistas/BeneficiosInversor";
import { SimuladorInversor } from "@/components/pages/inversionistas/SimuladorInversor";
import { FaqInversor } from "@/components/pages/inversionistas/FaqInversor";
import { InvierteInfoSection } from "@/components/sections/InvierteInfoSection";

export const metadata: Metadata = {
  title: 'Invierte en Factoring | Hasta 18% de Rentabilidad Anual',
  description:
    'Invierte en facturas comerciales con Fluxa y obtén hasta 18% de rentabilidad anual. Sin comisiones, con respaldo CAVALI y regulado por la SBS. La inversión alternativa más segura del Perú.',
  keywords: [
    'inversión factoring Perú', 'invertir en facturas', 'rentabilidad 18% anual',
    'inversión alternativa Perú', 'fintech inversión', 'inversión segura Perú',
    'CAVALI inversión', 'retorno factoring', 'inversionistas fintech',
  ],
  alternates: { canonical: '/inversionistas' },
  openGraph: {
    title: 'Invierte en Factoring | Hasta 18% Rentabilidad — Fluxa',
    description:
      'Obtén hasta 18% de rentabilidad anual invirtiendo en facturas comerciales. Respaldado por CAVALI.',
    url: '/inversionistas',
  },
};

const investmentSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: 'Inversión en Factoring Fluxa',
  description:
    'Producto de inversión alternativa en facturas comerciales. Rentabilidad de hasta 18% anual, sin comisiones ocultas, respaldado por CAVALI y regulado por la SBS.',
  provider: { '@type': 'Organization', name: 'Fluxa', url: 'https://fluxa.pe' },
  areaServed: { '@type': 'Country', name: 'Perú' },
  category: 'Inversión Alternativa',
  annualPercentageRate: '18',
};

export default function InversionistasPage() {
  return (
    <>
      <Script id="investment-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investmentSchema) }} />
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
