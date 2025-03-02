import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HomeSections/HeroSection";
import Stores from "./components/HomeSections/Stores";
import Features from "./components/HomeSections/Features";
import AppQR from "./components/HomeSections/AppQR";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stores />
      <AppQR />
      <Features />
    </div>
  );
}
