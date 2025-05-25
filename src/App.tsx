import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisaServices from "./pages/VisaServices";
import HolidayPackages from "./pages/HolidayPackages";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DocumentChecklist from "./pages/DocumentChecklist";
import VisaProcess from "./pages/VisaProcess";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/holiday-packages" element={<HolidayPackages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/document-checklist" element={<DocumentChecklist />} />
          <Route path="/visa-process" element={<VisaProcess />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
