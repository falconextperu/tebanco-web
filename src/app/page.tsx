import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { Sponsors } from "@/components/Sponsors";
import { AboutUs } from "@/components/AboutUs";
import { Mission } from "@/components/Mission";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        {/* <Sponsors /> */}
        {/* <AboutUs /> */}
        {/* <Mission /> */}
        <HowItWorks />
        {/* <Stats /> */}
        {/* <Features /> */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
