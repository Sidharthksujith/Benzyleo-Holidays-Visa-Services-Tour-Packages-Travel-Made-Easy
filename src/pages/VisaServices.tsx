
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Clock, Shield } from "lucide-react";

const VisaServices = () => {
  const visaTypes = [
    {
      flag: "🇺🇸",
      country: "US Visa",
      description: "Fast-track your US visa appointment",
      features: ["Early appointments", "No bots or scripts", "Pay after confirmation"]
    },
    {
      flag: "🇬🇧",
      country: "UK Visa",
      description: "Expedited UK visa processing",
      features: ["Tourist & Business", "Student visas", "Work permits"]
    },
    {
      flag: "🇨🇦",
      country: "Canada Visa",
      description: "Canadian visa assistance",
      features: ["Visitor visas", "Study permits", "Work permits"]
    },
    {
      flag: "🇦🇪",
      country: "UAE Visa",
      description: "Quick UAE visa processing",
      features: ["Tourist visas", "Business visas", "Transit visas"]
    },
    {
      flag: "🇹🇭",
      country: "Thailand Visa",
      description: "Thailand visa on arrival support",
      features: ["Tourist visas", "Business visas", "Multiple entry"]
    },
    {
      flag: "🇻🇳",
      country: "Vietnam Visa",
      description: "Vietnam e-visa assistance",
      features: ["E-visa support", "Tourist visas", "Business visas"]
    },
    {
      flag: "🇸🇬",
      country: "Singapore Visa",
      description: "Singapore visa processing",
      features: ["Tourist visas", "Business visas", "Transit visas"]
    },
    {
      flag: "🇦🇺",
      country: "Australia Visa",
      description: "Australian visa applications",
      features: ["Tourist visas", "Student visas", "Work visas"]
    },
    {
      flag: "🇪🇺",
      country: "Schengen Visa",
      description: "Schengen area visa processing",
      features: ["26 countries access", "Tourist & Business", "Multiple entry"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              🛃 Visa Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hassle-free visa appointments to 121+ destinations worldwide. 
              Skip the queues and get your visa faster than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{visa.flag}</div>
                  <CardTitle>{visa.country}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{visa.description}</p>
                  <ul className="space-y-2 text-sm">
                    {visa.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-xl">
              Get Your Visa Appointment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaServices;
