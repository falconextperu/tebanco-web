import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { InversionSection } from "@/components/sections/InversionSection";
import { FAQ } from "@/components/sections/FAQ";
import { EvaluaSection } from "@/components/sections/EvaluaSection";
import { Footer } from "@/components/layout/Footer";
import { LiquidezCalculatorSection } from "@/components/shared/LiquidezCalculatorSection";
import { RespaldoSection } from "@/components/sections/RespaldoSection";

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
        <InversionSection />
        <LiquidezCalculatorSection />
        <RespaldoSection />
        {/* <Stats /> */}
        {/* <Features /> */}
        {/* <FAQ />
        <EvaluaSection /> */}
      </main>
      <Footer />
    </>
  );
}
