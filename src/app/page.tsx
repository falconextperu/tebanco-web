import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { InversionSection } from "@/components/sections/InversionSection";
import { EvaluaSection } from "@/components/sections/EvaluaSection";
import { Footer } from "@/components/layout/Footer";
import { LiquidezCalculatorSection } from "@/components/shared/LiquidezCalculatorSection";
import { RespaldoSection } from "@/components/sections/RespaldoSection";

export const metadata: Metadata = {
  title: 'Fluxa — Factoring Inmediato para tu Empresa en Perú',
  description:
    'Convierte tus facturas en liquidez inmediata con Fluxa. Factoring 100% digital, sin comisiones ocultas, regulado por la SBS y respaldado por CAVALI. Desembolso en 24–48 horas.',
  keywords: [
    'factoring Perú', 'factoring online', 'anticipar facturas Perú',
    'liquidez inmediata empresa', 'financiamiento facturas Perú',
    'fintech Perú', 'factoring digital', 'SBS', 'CAVALI',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fluxa — Factoring Inmediato para tu Empresa en Perú',
    description:
      'Convierte tus facturas en liquidez en 24–48 horas. Fintech peruana regulada por la SBS.',
    url: '/',
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fluxa',
  url: 'https://fluxa.pe',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://fluxa.pe/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: 'Factoring Fluxa',
  description:
    'Servicio de factoring digital para empresas peruanas. Anticipa el cobro de tus facturas en 24–48 horas sin burocracia.',
  provider: { '@type': 'Organization', name: 'Fluxa', url: 'https://fluxa.pe' },
  areaServed: { '@type': 'Country', name: 'Perú' },
  feesAndCommissionsSpecification: 'Sin comisiones ocultas. Tasa competitiva según el monto y plazo.',
};

export default function Home() {
  return (
    <>
      <Script id="website-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <Script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <InversionSection />
        <LiquidezCalculatorSection />
        <RespaldoSection />
      </main>
      <Footer />
    </>
  );
}
