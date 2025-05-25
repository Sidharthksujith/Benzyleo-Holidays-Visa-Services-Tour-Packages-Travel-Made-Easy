
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertTriangle, Star } from "lucide-react";

const VisaProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Fill DS-160",
      description: "Save confirmation",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      number: "2", 
      title: "Pay Visa Fee",
      description: "Complete payment",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      number: "3",
      title: "Schedule Appointments",
      description: "VAC + Interview",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      number: "4",
      title: "Biometric at VAC",
      description: "Fingerprints & photo",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      number: "5",
      title: "Consular Interview",
      description: "Final interview",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    }
  ];

  const challenges = [
    "Long Waits",
    "Incomplete Docs", 
    "Nervous Interviews",
    "DS-160 Confusion"
  ];

  const howWeHelp = [
    { icon: "✨", text: "Early Appointments" },
    { icon: "📑", text: "Document Assistance" },
    { icon: "📄", text: "DS-160 Help (optional)" },
    { icon: "💬", text: "WhatsApp Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              🔄 Visa Process
            </h1>
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">
              🇺🇸 US Visa Application – Step by Step
            </h2>
          </div>

          {/* Wait Time Alert */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Wait Time Alert</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Badge variant="destructive" className="mb-2">Standard Wait</Badge>
                  <p className="text-lg font-semibold text-red-600">Average wait: 400+ days</p>
                </div>
                <div>
                  <Badge className="bg-green-500 mb-2">With Benzyleo</Badge>
                  <p className="text-lg font-semibold text-green-600">As fast as 3–8 weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Application Steps</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-4 mr-6">
                        <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      {step.icon}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenges and Solutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white shadow-lg rounded-2xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                  Common Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-2xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Star className="h-6 w-6 text-green-500 mr-3" />
                  How Benzyleo Helps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {howWeHelp.map((help, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-xl mr-3">{help.icon}</span>
                      <span className="text-gray-700">{help.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-xl">
              Start Your Visa Process Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaProcess;
