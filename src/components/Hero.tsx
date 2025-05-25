
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          ✈️ <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Change the way you travel.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          We all dream of flying—of chasing horizons and answering life's little questions mid-journey. 
          But before the adventure begins, you need a visa and a plan that won't empty your wallet. 
          At Benzyleo, we make both easy. Fast visa approvals, budget-friendly travel packages, 
          and yes—even travel insurance. You're in safe hands. Let the journey begin.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="text-lg px-8 py-6 rounded-xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link to="/holiday-packages">
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
