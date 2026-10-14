import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { GiftTeaser } from "@/components/home/GiftTeaser";
import { LocationPreview } from "@/components/home/LocationPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <DoctorsPreview />
      <GiftTeaser />
      <LocationPreview />
    </>
  );
}
