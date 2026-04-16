import { HeroSection } from "@/components/landing-page/hero-section";
import {FeaturedProducts} from "@/components/landing-page/featured-products";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import {Suspense} from "react";
import {LoaderIcon} from "lucide-react";
export default function Home() {
    /*Header is above the HeroSection since its on Layout.tsx*/
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
        <Suspense fallback={<div>Loading... <LoaderIcon className={"size-4 animate-spin"}/></div>}/>
      <RecentlyLaunchedProducts />
        <Suspense />
    </div>
  );
  /*Footer is at the bottom since its on Layout.tsx*/
}
