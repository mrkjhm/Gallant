"use client";

import CTASection from "../components/sections/CTASection";
import FeaturesSection from "../components/sections/FeaturesSection";
import LandingPage from "../components/sections/LandingPage";
import ServicesPreview from "../components/sections/ServicesPreview";
import TeamSection from "../components/sections/TeamSection";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <FeaturesSection />
      {/* <AboutSection /> */}
      {/* <ServiceSection /> */}
      <ServicesPreview />
      <CTASection />
      <TeamSection />

    </main>
  );
}
