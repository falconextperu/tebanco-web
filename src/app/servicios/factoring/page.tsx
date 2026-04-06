import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FactoringPage } from "@/components/servicios/FactoringPage";

export const metadata = {
  title: "Factoring en Perú | Liquidez Inmediata para tu Empresa — Fluxa Finance",
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
