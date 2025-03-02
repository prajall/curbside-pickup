import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HomeSections/HeroSection";
import Stores from "./components/HomeSections/Stores";
import Features from "./components/HomeSections/Features";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <HeroSection />
        <Stores />
        {/* <Features /> */}
      </div>
    </div>
  );
}
