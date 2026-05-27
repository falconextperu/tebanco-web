import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiciosPage } from "@/components/pages/servicios/ServiciosPage";

export const metadata = {
  title: "Servicios | Factoring y Soluciones Financieras — Fluxa",
  description: "Descubre los servicios de Fluxa: factoring, financiamiento de facturas y soluciones de liquidez inmediata para empresas peruanas.",
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
