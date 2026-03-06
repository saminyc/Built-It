import { HeroSection } from "@/components/landing-page/hero-section";
import { FeaturedProducts } from "@/components/landing-page/featured-products";
import {RecentlyLaunchedProducts}from "@/components/landing-page/recently-launched-products";
import {FooterSection} from "@/components/landing-page/footer-section";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
      <FooterSection />
    </div>
  );
}
