import React from "react";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import Stores from "./components/Stores";
import AppQR from "../components/HomeSections/AppQR";

const DashboardPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <ImageSlider />
        <Stores />
        <AppQR />
      </div>
    </main>
  );
};

export default DashboardPage;
