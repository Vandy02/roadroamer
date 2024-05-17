import Image from "next/image";
import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import SubFooter from "@/components/SubFooter";
import OurObjective from "@/components/OurObjective";

export default function Home() {
  return (
     <div className="">
    <Carousels/>
    <div className="relative"> 
      <Explore />
      <SubFooter />
      <OurObjective/>
    </div>
  </div>
  );  
}
