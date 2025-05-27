import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";

const DocumentChecklist = () => {
  const sections = [
    {
      icon: "🧾",
      title: "General Documents",
      items: [
        "Valid Passport (incl. old ones)",
        "Cover Letter (📥 Download Template)",
        "Appointment Confirmation Letter",
        "DS-160 Confirmation Page",
        "Previous Visas & Entry/Exit Stamps (last 10 years)",
        "3-Year IT Returns",
        "Dropbox Photo (if applicable) – 2x2\", matte, white bg"
      ]
    },
    {
      icon: "💼",
      title: "Employment & Finance Docs",
      items: [
        "Employed – Salary slips, letter from employer",
        "Self-Employed – Business license, tax records",
        "Investments – Property, shares (optional)"
      ]
    },
    {
      icon: "👶",
      title: "For Minors",
      items: [
        "Birth Certificate, Student ID",
        "Parent(s)' Passport & ID",
        "Consent if traveling with one parent"
      ]
    },
    {
      icon: "💸",
      title: "If Trip is Sponsored",
      items: [
        "Sponsor's Bank Statement",
        "Sponsor Letter 📥 Download Template"
      ]
    },
    {
      icon: "🏠",
      title: "If Invited by Family/Friends in US",
      items: [
        "Invitation Letter with host's details 📥 Download Template"
      ]
    },
    {
      icon: "🏢",
      title: "If Invited by a US Company",
      items: [
        "Company Letterhead invitation 📥 Download Template"
      ]
    },
    {
      icon: "🧳",
      title: "Business Travelers",
      items: [
        "Company Cover Letter 📥 Download Template"
      ]
    }
  ];

  const handleTemplateDownload = (templateType: string) => {
    if (templateType === "Cover Letter") {
      window.open("https://docs.google.com/document/d/1XW_aXCyu11lp7toyJbYAmIRcuojvkaD5ID_zKCra3v0/edit?tab=t.0#heading=h.erczin1w2702", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              📑 Document Checklist
            </h1>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              🛂 US Visa Document Checklist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete document checklist to ensure your US visa application is ready for submission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <span className="text-2xl mr-3">{section.icon}</span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          {item.includes("📥 Download Template") ? (
                            <span className="flex items-center justify-between w-full">
                              <span>{item.replace(" 📥 Download Template", "")}</span>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="ml-2"
                                onClick={() => handleTemplateDownload(item.replace(" (📥 Download Template)", ""))}
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Template
                              </Button>
                            </span>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-xl">
              Need Help with Documents? Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocumentChecklist;
