import HeroSection from "@/components/heroSection/HeroSection";
import JoinUsSection from "@/components/JoinUsSection/JoinUsSection";
import Package from "@/components/package/Package";
import PhysicsTransform from "@/components/physicsTransform/PhysicsTransform";
import SwiperComp from "@/components/swiper/SwiperComp";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <SwiperComp />
      <PhysicsTransform />
      <JoinUsSection />
      <Package />
    </div>
  );
}
