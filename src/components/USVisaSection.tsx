
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const USVisaSection = () => {
  const visaTimelines = [
    { type: "B1/B2 Tourist Visa", standard: "12+ months", benzyleo: "1–3 months" },
    { type: "F1 Student Visa", standard: "6+ months", benzyleo: "2–3 months" },
    { type: "H1B / L1 Work Visas", standard: "6–12 months", benzyleo: "1–2 months" }
  ];

  const benefits = [
    "Book Early Appointment",
    "Skip 12+ month queues", 
    "No payment until confirmed",
    "Early dates for all visa types",
    "Expedited processing"
  ];

  const handleBookUSVisa = () => {
    const message = "Hi! I'm interested in booking a US visa appointment. Can you help me with the process?";
    const whatsappUrl = `https://wa.me/917356427120?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Get your US visa in 30 days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skip the long wait times and secure your US visa appointment in a fraction of the time. 
            We don't use bots or scripts. You only pay after your appointment is confirmed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Widget */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock className="mr-3 h-6 w-6 text-blue-600" />
                Quick Visa Timelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 font-semibold text-sm text-gray-600 pb-2 border-b">
                  <span>Visa Type</span>
                  <span>Standard Duration</span>
                  <span>Benzyleo Service</span>
                </div>
                {visaTimelines.map((timeline, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{timeline.type}</span>
                    <span className="text-red-600 font-medium">{timeline.standard}</span>
                    <span className="text-green-600 font-bold flex items-center">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      {timeline.benzyleo}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits List */}
          <div className="space-y-8">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-md">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleBookUSVisa}
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 rounded-xl shadow-lg"
            >
              Book Your US Visa Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USVisaSection;
