
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Clock, Shield } from "lucide-react";

const VisaServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
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
            <Card className="bg-white shadow-lg rounded-2xl border-0">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🇺🇸</div>
                <CardTitle>US Visa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Fast-track your US visa appointment</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Early appointments</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />No bots or scripts</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Pay after confirmation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-2xl border-0">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🇬🇧</div>
                <CardTitle>UK Visa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Expedited UK visa processing</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Tourist & Business</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Student visas</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Work permits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-2xl border-0">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🇨🇦</div>
                <CardTitle>Canada Visa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Canadian visa assistance</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Visitor visas</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Study permits</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Work permits</li>
                </ul>
              </CardContent>
            </Card>
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
