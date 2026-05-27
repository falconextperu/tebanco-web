import type { Metadata } from 'next';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiciosPage } from "@/components/pages/servicios/ServiciosPage";

export const metadata: Metadata = {
  title: 'Servicios | Factoring y Soluciones de Liquidez para Empresas',
  description:
    'Descubre los servicios de Fluxa: factoring de facturas, financiamiento de capital de trabajo y soluciones de liquidez inmediata para empresas peruanas. 100% digital y regulado.',
  keywords: [
    'servicios factoring Perú', 'soluciones financieras empresa',
    'financiamiento capital trabajo', 'liquidez empresas Perú',
    'factoring sin garantía', 'plataforma fintech servicios',
  ],
  alternates: { canonical: '/servicios' },
  openGraph: {
    title: 'Servicios de Factoring y Liquidez — Fluxa',
    description:
      'Soluciones financieras 100% digitales para empresas peruanas. Factoring, capital de trabajo y más.',
    url: '/servicios',
  },
};

export default function Servicios() {
  return (
    <>
      <Header />
      <main>
        <ServiciosPage />
      </main>
      <Footer />
    </>
  );
}
