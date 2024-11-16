import React from "react";
import HeroSection from "../../components/pages/home/hero-section/HeroSection";
import InventorySection from "../../components/pages/home/inventory-section/InventorySection";
import AboutSection from "../../components/pages/home/about-section/AboutSection";
import FactsCounterSection from "../../components/pages/home/facts-counter-section/FactsCounterSection";
import FeaturesSection from "../../components/pages/home/features-section/FeaturesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InventorySection />
      <AboutSection />
      <FactsCounterSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
