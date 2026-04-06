import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Fluxa Finance — Factoring Inmediato para tu Empresa',
  description: 'Convierte tus facturas en liquidez inmediata con Fluxa Finance. Factoring 100% digital, seguro y transparente. Supervisado por la SBS.',
  icons: {
    icon: '/logos/fluxalogo.svg',
    shortcut: '/logos/fluxalogo.svg',
    apple: '/logos/fluxalogo.svg',
  },
  openGraph: {
    title: 'Fluxa Finance — Factoring Inmediato',
    description: 'Convierte tus facturas en liquidez inmediata. Plataforma fintech peruana regulada por la SBS.',
    siteName: 'Fluxa Finance',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
