
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Star, Calendar, Shield, MessageSquare, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const impacts = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      text: "Helped hundreds bypass long waits"
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      text: "Trusted by tourists, students, professionals"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      text: "No bots. No scripts. 100% compliant"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: "📅 Fast Appointments",
      description: "Get your visa appointment in weeks, not months"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "✅ No Bots",
      description: "100% human-assisted, compliant process"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: "📲 Personal WhatsApp Support",
      description: "Direct communication throughout your journey"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "💵 Pay Only on Confirmation",
      description: "No upfront fees, pay only when appointment is secured"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              🧍‍♂️ About Us
            </h1>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              🌟 Benzyleo Holidays Pvt Ltd – Visa Appointment Experts
            </h2>
          </div>

          {/* Our Story */}
          <Card className="bg-white shadow-xl rounded-2xl border-0 mb-12">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-900">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Born from personal frustration with US visa delays, Benzyleo Holidays Pvt Ltd was created by travel veterans who wanted to simplify the visa experience. We understand the pain of waiting months for a simple appointment, and we're here to change that.
              </p>
            </CardContent>
          </Card>

          {/* Our Impact */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Our Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {impacts.map((impact, index) => (
                <Card key={index} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {impact.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{impact.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Why Choose Us</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h4>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-2xl border-0">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">✅ Ready to Fast-Track Your US Visa?</h3>
              <p className="text-xl mb-8 opacity-90">
                Book your priority appointment now and skip the queue.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold"
              >
                <Link to="/contact">
                  🔵 Book Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
