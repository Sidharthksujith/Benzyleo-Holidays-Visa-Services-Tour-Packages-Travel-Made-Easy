
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, MapPin, FileText, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import USVisaSection from "@/components/USVisaSection";
import HolidayPackagesPreview from "@/components/HolidayPackagesPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <ServiceCards />
      <USVisaSection />
      <HolidayPackagesPreview />
      <Footer />
    </div>
  );
};

export default Index;
