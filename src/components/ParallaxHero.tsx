
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/15 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="transform transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            ✈️ <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Change the way you travel.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            We all dream of flying—of chasing horizons and answering life's little questions mid-journey. 
            But before the adventure begins, you need a visa and a plan that won't empty your wallet. 
            At Benzyleo, we make both easy. Fast visa approvals, budget-friendly travel packages, 
            and yes—even travel insurance. You're in safe hands. Let the journey begin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/visa-services">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Link to="/holiday-packages">
                Explore Packages
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
