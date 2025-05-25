
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HolidayPackagesPreview = () => {
  const packages = [
    {
      flag: "🇦🇪",
      country: "Dubai",
      title: "Unforgettable 6-Day Dubai + Abu Dhabi Experience",
      description: "Experience 6 days of pure excitement in Dubai and Abu Dhabi! From your warm airport welcome to thrilling city tours, dazzling Dhow Cruise dinners, and heart-pounding desert safaris.",
      price: "₹11,000",
      duration: "3 Nights / 4 Days | Min. 4 Pax",
      includes: [
        "4-Star Hotel Stay",
        "English Speaking Guide", 
        "All Entry Tickets",
        "Meals & Transfers Included"
      ],
      tagline: "Explore the luxury of Dubai at an unbeatable price!",
      colors: "from-blue-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-yellow-50"
    },
    {
      flag: "🇬🇪", 
      country: "Georgia",
      title: "Discover Georgia in 5 Days of Magic",
      description: "Begin your journey in charming Tbilisi with cobblestone streets, ancient churches, and panoramic views from Mtatsminda Park. Wander through Mtskheta and the mountains of Kazbegi.",
      price: "₹17,699",
      duration: "3 Nights / 4 Days | Min. 4 Pax",
      includes: [
        "4-Star Stay + Daily Meals",
        "Private Transfers + All Entry Tickets",
        "Cable Car & 4x4 Mountain Rides",
        "English-speaking Guide"
      ],
      destinations: "Tbilisi, Mtskheta, Gudauri, Kazbegi",
      tagline: "Discover the scenic beauty of Georgia!",
      colors: "from-red-600 to-yellow-100",
      bgColor: "bg-gradient-to-br from-red-50 to-yellow-50"
    },
    {
      flag: "🇹🇭",
      country: "Thailand", 
      title: "A Thai Adventure to Remember",
      description: "Dive into the best of Thailand with a journey full of wonder! Enjoy private transfers, the Alcazar Show, the Floating Market, and Underwater World.",
      colors: "from-purple-500 to-blue-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-blue-50"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🌍 Curated Holiday Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations with our carefully crafted travel packages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={`h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 ${pkg.bgColor} border-0 shadow-lg rounded-2xl overflow-hidden`}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{pkg.flag}</div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${pkg.colors} bg-clip-text text-transparent mb-2`}>
                    {pkg.country}
                  </h3>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {pkg.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {pkg.price && (
                  <div className="mb-6 p-4 bg-white/50 rounded-xl border border-gray-200">
                    <div className="text-center mb-4">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${pkg.colors} bg-clip-text text-transparent`}>
                        {pkg.price} per person
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{pkg.duration}</div>
                    </div>
                    
                    <div className="text-sm text-gray-700">
                      <div className="font-semibold mb-2">Includes:</div>
                      <ul className="space-y-1">
                        {pkg.includes?.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {pkg.destinations && (
                        <div className="mt-3">
                          <div className="font-semibold">Destinations:</div>
                          <div className="text-gray-600">{pkg.destinations}</div>
                        </div>
                      )}
                      
                      {pkg.tagline && (
                        <div className="mt-3 text-center">
                          <em className="text-gray-600">{pkg.tagline}</em>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <Button 
                  asChild 
                  className={`w-full bg-gradient-to-r ${pkg.colors} hover:opacity-90 text-white border-0 rounded-xl py-3`}
                >
                  <Link to="/holiday-packages">
                    Book {pkg.country} Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50"
          >
            <Link to="/holiday-packages">
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HolidayPackagesPreview;
