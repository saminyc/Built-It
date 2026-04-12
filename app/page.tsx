import { HeroSection } from "@/components/landing-page/hero-section";
import {FeaturedProducts} from "@/components/landing-page/featured-products";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
export default function Home() {
    /*Header is above the HeroSection since its on Layout.tsx*/
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
    </div>
  );
  /*Footer is at the bottom since its on Layout.tsx*/
}
