import { Navbar } from "@/components/Shared/Navbar";
import { FirtsBlock } from "./components/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirtsBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
}
