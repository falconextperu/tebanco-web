import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FactoringPage } from "@/components/pages/servicios/FactoringPage";

export const metadata = {
  title: "Factoring en Perú | Liquidez Inmediata para tu Empresa — Fluxa",
  description: "Convierte tus facturas en efectivo de manera rápida y segura. Servicio de Factoring profesional con desembolso en 24-48 horas. Solicita tu anticipo hoy.",
};

export default function Factoring() {
  return (
    <>
      <Header />
      <main>
        <FactoringPage />
      </main>
      <Footer />
    </>
  );
}
