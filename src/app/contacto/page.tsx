import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactoPage } from "@/components/pages/contacto/ContactoPage";

export const metadata = {
  title: "Contáctanos | Fluxa — Asesoría Financiera Especializada",
  description: "¿Tienes alguna consulta sobre factoring o inversiones? Nuestro equipo de asesores está disponible de lunes a viernes para ayudarte. Escríbenos o llámanos hoy.",
};

export default function Contacto() {
  return (
    <>
      <Header />
      <main>
        <ContactoPage />
      </main>
      <Footer />
    </>
  );
}
