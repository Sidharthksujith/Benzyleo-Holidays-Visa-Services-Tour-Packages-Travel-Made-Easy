
import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCards = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "🛃 Visa Services",
      description: "Hassle-free visa appointments to 121+ destinations.",
      link: "/visa-services"
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: "🌴 Holiday Packages",
      description: "Curated global experiences, crafted with care.",
      link: "/holiday-packages"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "🛡️ Travel Insurance",
      description: "Stay safe with full travel coverage.",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
