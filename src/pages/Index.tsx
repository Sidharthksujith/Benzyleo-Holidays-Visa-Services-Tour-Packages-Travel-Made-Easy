
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ParallaxHero from "@/components/ParallaxHero";
import ServiceCards from "@/components/ServiceCards";
import USVisaSection from "@/components/USVisaSection";
import HolidayPackagesPreview from "@/components/HolidayPackagesPreview";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import Preloader from "@/components/Preloader";
import AnimatedMetrics from "@/components/AnimatedMetrics";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <ParallaxHero />
        <ServiceCards />
        <AnimatedMetrics />
        <USVisaSection />
        <HolidayPackagesPreview />
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default Index;
