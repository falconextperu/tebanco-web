import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NosotrosPage } from "@/components/nosotros/NosotrosPage";

export const metadata = {
  title: "Quiénes Somos | Fluxa Finance — Fintech de Factoring en Perú",
  description: "Descubre quiénes somos, nuestra misión, visión y valores. Fluxa Finance es la plataforma fintech peruana que transforma el acceso al capital para empresas e inversionistas.",
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
