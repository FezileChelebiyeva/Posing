import React from "react";
import HeroSection from "../../components/pages/home/hero-section/HeroSection";
import InventorySection from "../../components/pages/home/inventory-section/InventorySection";
import AboutSection from "../../components/pages/home/about-section/AboutSection";
import FactsCounterSection from "../../components/pages/home/facts-counter-section/FactsCounterSection";
import FeaturesSection from "../../components/pages/home/features-section/FeaturesSection";
import StoreSection from "../../components/pages/home/store-section/StoreSection";
import PricingSection from "../../components/pages/home/pricing-section/PricingSection";
import OurClientsSection from "../../components/pages/home/our-clients/OurClientsSection";
import PartnersSection from "../../components/pages/home/partners-secton/PartnersSection";
import QuestionsSection from "../../components/pages/home/questions-section/QuestionsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InventorySection />
      <AboutSection />
      <FactsCounterSection />
      <FeaturesSection />
      <StoreSection />
      <PricingSection />
      <OurClientsSection />
      <PartnersSection />
      <QuestionsSection />
    </div>
  );
};

export default Home;
