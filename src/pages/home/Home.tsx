import React from "react";
import HeroSection from "../../components/pages/home/hero-section/HeroSection";
import InventorySection from "../../components/pages/home/inventory-section/InventorySection";
import AboutSection from "../../components/pages/home/about-section/AboutSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InventorySection />
      <AboutSection />
    </div>
  );
};

export default Home;
