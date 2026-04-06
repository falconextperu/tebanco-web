import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactoPage } from "@/components/contacto/ContactoPage";

export const metadata = {
  title: "Contáctanos | Fluxa Finance — Asesoría Financiera Especializada",
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
