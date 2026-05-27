import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const siteUrl = 'https://fluxa.pe';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Fluxa — Factoring Inmediato para tu Empresa en Perú',
    template: '%s | Fluxa',
  },
  description:
    'Convierte tus facturas en liquidez inmediata con Fluxa. Plataforma fintech peruana 100% digital, regulada por la SBS y respaldada por CAVALI. Desembolso en 24–48 horas.',
  keywords: [
    'factoring Perú',
    'factoring online',
    'anticipar facturas',
    'liquidez empresarial',
    'financiamiento de facturas',
    'descuento de facturas',
    'fintech Perú',
    'inversión en factoring',
    'rentabilidad factoring',
    'capital de trabajo',
    'factoring digital',
    'SBS regulado',
    'CAVALI',
    'fluxa factoring',
    'factoring para empresas',
  ],
  authors: [{ name: 'Fluxa', url: siteUrl }],
  creator: 'Fluxa',
  publisher: 'Fluxa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/svg/logohead.svg',
    shortcut: '/svg/logohead.svg',
    apple: '/svg/logohead.svg',
  },
  openGraph: {
    title: 'Fluxa — Factoring Inmediato para tu Empresa en Perú',
    description:
      'Convierte tus facturas en liquidez inmediata. Fintech peruana regulada por la SBS. Desembolso en 24–48 horas.',
    url: siteUrl,
    siteName: 'Fluxa',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/images/logofluxa.png',
        width: 1200,
        height: 630,
        alt: 'Fluxa — Factoring Fintech Perú',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fluxa — Factoring Inmediato para tu Empresa en Perú',
    description:
      'Convierte tus facturas en liquidez inmediata. Fintech regulada por la SBS.',
    images: ['/images/logofluxa.png'],
  },
  alternates: {
    canonical: siteUrl,
    languages: { 'es-PE': siteUrl },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Fluxa',
  url: siteUrl,
  logo: `${siteUrl}/svg/logohead.svg`,
  description:
    'Plataforma fintech peruana de factoring regulada por la SBS. Convierte facturas en liquidez en 24–48 horas.',
  foundingLocation: { '@type': 'Country', name: 'Perú' },
  areaServed: { '@type': 'Country', name: 'Perú' },
  serviceType: [
    'Factoring',
    'Financiamiento de Facturas',
    'Inversión en Factoring',
    'Capital de Trabajo',
  ],
  knowsAbout: [
    'Factoring',
    'Fintech',
    'Liquidez Empresarial',
    'Inversión Alternativa',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
