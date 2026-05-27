import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FactoringPage } from "@/components/pages/servicios/FactoringPage";

export const metadata: Metadata = {
  title: 'Factoring en Perú | Liquidez Inmediata para tu Empresa',
  description:
    'Convierte tus facturas en efectivo en 24–48 horas con Fluxa. Factoring digital sin trámites engorrosos, sin comisiones ocultas, regulado por la SBS. Solicita tu anticipo hoy.',
  keywords: [
    'factoring Perú', 'factoring empresas Perú', 'anticipo de facturas',
    'descuento de facturas', 'liquidez inmediata', 'financiamiento facturas',
    'factoring digital Perú', 'capital de trabajo Perú', 'SBS factoring',
  ],
  alternates: { canonical: '/servicios/factoring' },
  openGraph: {
    title: 'Factoring en Perú | Liquidez Inmediata — Fluxa',
    description:
      'Anticipa el cobro de tus facturas en 24–48 horas. Sin burocracia, sin comisiones ocultas.',
    url: '/servicios/factoring',
  },
};

const factoringSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: 'Servicio de Factoring Fluxa',
  description:
    'Factoring digital para empresas peruanas. Anticipa el cobro de tus facturas comerciales en 24–48 horas con tasas competitivas y sin comisiones ocultas.',
  provider: { '@type': 'Organization', name: 'Fluxa', url: 'https://fluxa.pe' },
  areaServed: { '@type': 'Country', name: 'Perú' },
  category: 'Factoring',
};

export default function Factoring() {
  return (
    <>
      <Script id="factoring-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(factoringSchema) }} />
      <Header />
      <main>
        <FactoringPage />
      </main>
      <Footer />
    </>
  );
}
