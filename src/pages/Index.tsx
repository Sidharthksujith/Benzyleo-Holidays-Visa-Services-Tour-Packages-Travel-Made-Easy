
import Header from "@/components/Header";
import ParallaxHero from "@/components/ParallaxHero";
import ServiceCards from "@/components/ServiceCards";
import USVisaSection from "@/components/USVisaSection";
import HolidayPackagesPreview from "@/components/HolidayPackagesPreview";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <ParallaxHero />
      <ServiceCards />
      <USVisaSection />
      <HolidayPackagesPreview />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
