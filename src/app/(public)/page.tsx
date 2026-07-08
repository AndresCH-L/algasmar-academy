import NavbarLanding from "./landing/components/NavbarLanding";
import HeroLanding from "./landing/components/HeroLanding";
import FeaturesLanding from "./landing/components/FeaturesLanding";
import ProcesoLanding from "./landing/components/ProcesoLanding";
import CursosLanding from "./landing/components/CursosLanding";
import OceanografiaLanding from "./landing/components/OceanografiaLanding";
import MarketplaceLanding from "./landing/components/MarketplaceLanding";
import StatsLanding from "./landing/components/StatsLanding";
import NosotrosLanding from "./landing/components/NosotrosLanding";
import CTALanding from "./landing/components/CTALanding";
import FooterLanding from "./landing/components/FooterLanding";
import FloatingButtons from "./landing/components/FloatingButtons";

export default function Home() {
  return (
    <main className="bg-white">

      <NavbarLanding />

      <HeroLanding />

      <FeaturesLanding />

      <ProcesoLanding />

      <CursosLanding />

      <OceanografiaLanding />

      <MarketplaceLanding />

      <StatsLanding />

      <NosotrosLanding />

      <CTALanding />

      <FooterLanding />

      <FloatingButtons />
    </main>
  );
}