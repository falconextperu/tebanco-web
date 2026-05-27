import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactoPage } from "@/components/pages/contacto/ContactoPage";

export const metadata: Metadata = {
  title: 'Contáctanos | Asesoría en Factoring e Inversiones',
  description:
    '¿Quieres convertir tus facturas en liquidez o invertir en factoring? Nuestro equipo de asesores está disponible de lunes a viernes para ayudarte. Escríbenos o llámanos hoy.',
  keywords: [
    'contacto Fluxa', 'asesoría factoring Perú', 'contactar fintech',
    'soporte factoring', 'consulta inversión factoring', 'atención cliente Fluxa',
  ],
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contáctanos | Fluxa — Asesoría en Factoring e Inversiones',
    description:
      'Habla con un asesor de Fluxa hoy. Te ayudamos con factoring para tu empresa o inversión en facturas.',
    url: '/contacto',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto — Fluxa',
  url: 'https://fluxa.pe/contacto',
  mainEntity: {
    '@type': 'Organization',
    name: 'Fluxa',
    url: 'https://fluxa.pe',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: 'Spanish',
      areaServed: 'PE',
    },
  },
};

export default function Contacto() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Header />
      <main>
        <ContactoPage />
      </main>
      <Footer />
    </>
  );
}
