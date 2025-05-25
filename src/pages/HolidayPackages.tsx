import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HolidayPackages = () => {
  const packages = [
    {
      flag: "🇦🇪",
      country: "Dubai",
      title: "Unforgettable 6-Day Dubai + Abu Dhabi Experience",
      description: "Experience 6 days of pure excitement in Dubai and Abu Dhabi! From your warm airport welcome to thrilling city tours, dazzling Dhow Cruise dinners, and heart-pounding desert safaris — every moment is unforgettable. Marvel at the Burj Khalifa, explore the Grand Mosque, ride camels, and soak in luxury and adventure. The perfect blend of culture, fun, and breathtaking views — all in one incredible getaway!",
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
      description: "Begin your journey in charming Tbilisi with cobblestone streets, ancient churches, and panoramic views from Mtatsminda Park. Wander through Mtskheta, then head to the mountains of Kazbegi and Gudauri for breathtaking views. Sip wine in Kakheti, stroll through Sighnaghi, and soak in Georgia's culture, beauty, and heritage.",
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
      description: "Dive into the best of Thailand with a journey full of wonder! Enjoy private transfers, the Alcazar Show, the Floating Market, and Underwater World. Visit Noong Nooch Village, Safari World, Marine Park, and end with a magical dinner cruise in Bangkok. An unforgettable mix of thrill and culture.",
      price: "₹9,999",
      duration: "3 Nights / 4 Days | Pattaya | Min. 2 Pax",
      includes: [
        "3-Star Hotel Stay",
        "Alcazar Show",
        "Coral Island Tour with Speedboat & Lunch",
        "Private Transfers Included"
      ],
      tagline: "Experience the vibrant charm of Pattaya with unbeatable value!",
      colors: "from-purple-500 to-blue-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              🌍 Holiday Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated global experiences, crafted with care. Discover breathtaking destinations 
              with our thoughtfully designed travel packages.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-300 ${pkg.bgColor} border-0 shadow-lg rounded-2xl overflow-hidden`}>
                <CardContent className="p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="text-center lg:text-left flex-shrink-0">
                      <div className="text-8xl mb-4">{pkg.flag}</div>
                      <h2 className={`text-4xl font-bold bg-gradient-to-r ${pkg.colors} bg-clip-text text-transparent`}>
                        {pkg.country}
                      </h2>
                      
                      {pkg.price && (
                        <div className="mt-6 p-4 bg-white/70 rounded-xl">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${pkg.colors} bg-clip-text text-transparent`}>
                            {pkg.price}
                          </div>
                          <div className="text-sm text-gray-600">per person</div>
                          <div className="text-xs text-gray-500 mt-1">{pkg.duration}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {pkg.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {pkg.description}
                      </p>

                      {pkg.includes && (
                        <div className="mb-6 p-4 bg-white/50 rounded-xl">
                          <div className="font-semibold mb-3 text-gray-800">Package Includes:</div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                            {pkg.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                          
                          {pkg.destinations && (
                            <div className="mt-4 pt-3 border-t border-gray-200">
                              <div className="font-semibold text-gray-800">Destinations:</div>
                              <div className="text-gray-600 text-sm">{pkg.destinations}</div>
                            </div>
                          )}
                          
                          {pkg.tagline && (
                            <div className="mt-4 text-center">
                              <em className={`bg-gradient-to-r ${pkg.colors} bg-clip-text text-transparent font-medium`}>
                                {pkg.tagline}
                              </em>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <Button 
                        size="lg"
                        className={`bg-gradient-to-r ${pkg.colors} hover:opacity-90 text-white border-0 rounded-xl px-8 py-6 text-lg`}
                      >
                        Book {pkg.country} Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayPackages;
