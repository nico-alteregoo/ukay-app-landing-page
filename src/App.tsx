import { PageFrame } from "@/components/layout/PageFrame";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/components/sections/Hero";
import { AuctionShowcase } from "@/components/sections/AuctionShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { WhyUkay } from "@/components/sections/WhyUkay";
import { SocialProof } from "@/components/sections/SocialProof";
import { Waitlist } from "@/components/sections/Waitlist";
import { Faq } from "@/components/sections/Faq";

export default function App() {
  return (
    <div className="min-h-dvh bg-paper">
      <PageFrame />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-oxblood focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Nav />
      <main id="main">
        <Hero />
        <AuctionShowcase />
        <HowItWorks />
        <Categories />
        <WhyUkay />
        <SocialProof />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
