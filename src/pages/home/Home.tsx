import React from "react";
import HeroSection from "../../components/pages/home/hero-section/HeroSection";
import InventorySection from "../../components/pages/home/inventory-section/InventorySection";
import AboutSection from "../../components/pages/home/about-section/AboutSection";
import FactsCounterSection from "../../components/pages/home/facts-counter-section/FactsCounterSection";
import FeaturesSection from "../../components/pages/home/features-section/FeaturesSection";
import StoreSection from "../../components/pages/home/store-section/StoreSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InventorySection />
      <AboutSection />
      <FactsCounterSection />
      <FeaturesSection />
      <StoreSection />
    </div>
  );
};

export default Home;
