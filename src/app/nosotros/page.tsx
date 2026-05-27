import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NosotrosPage } from "@/components/pages/nosotros/NosotrosPage";

export const metadata: Metadata = {
  title: 'Quiénes Somos | Fintech de Factoring en Perú',
  description:
    'Fluxa es la plataforma fintech peruana que transforma el acceso al capital. Conoce nuestra misión, visión y el equipo detrás de la solución de factoring más ágil del Perú.',
  keywords: [
    'quiénes somos Fluxa', 'empresa fintech Perú', 'equipo factoring Perú',
    'misión visión fintech', 'startup fintech peruana', 'empresa factoring digital',
  ],
  alternates: { canonical: '/nosotros' },
  openGraph: {
    title: 'Quiénes Somos | Fluxa — Fintech de Factoring en Perú',
    description:
      'Conoce el equipo y la misión detrás de Fluxa, la plataforma fintech peruana de factoring.',
    url: '/nosotros',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Quiénes Somos — Fluxa',
  description:
    'Página sobre la empresa Fluxa, plataforma fintech peruana de factoring regulada por la SBS.',
  url: 'https://fluxa.pe/nosotros',
  mainEntity: {
    '@type': 'Organization',
    name: 'Fluxa',
    url: 'https://fluxa.pe',
    description:
      'Plataforma fintech peruana de factoring digital. Ayudamos a empresas a convertir facturas en liquidez inmediata.',
  },
};

export default function Nosotros() {
  return (
    <>
      <Script id="about-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Header />
      <main>
        <NosotrosPage />
      </main>
      <Footer />
    </>
  );
}
