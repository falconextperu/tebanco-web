import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NosotrosPage } from "@/components/pages/nosotros/NosotrosPage";

export const metadata = {
  title: "Quiénes Somos | Fluxa — Fintech de Factoring en Perú",
  description: "Descubre quiénes somos, nuestra misión, visión y valores. Fluxa es la plataforma fintech peruana que transforma el acceso al capital para empresas e inversionistas.",
};

export default function Nosotros() {
  return (
    <>
      <Header />
      <main>
        <NosotrosPage />
      </main>
      <Footer />
    </>
  );
}
