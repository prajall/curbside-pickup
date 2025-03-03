import React from "react";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";

const DashboardPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <ImageSlider />
      </div>
    </main>
  );
};

export default DashboardPage;
