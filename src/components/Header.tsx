
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b259bbf1-00e9-482d-994f-08f7928db7f6.png" 
              alt="Benzyleo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl text-gray-900">Benzyleo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/visa-services" className="text-gray-600 hover:text-blue-600 transition-colors">Visa Services</Link>
            <Link to="/holiday-packages" className="text-gray-600 hover:text-blue-600 transition-colors">Holiday Packages</Link>
            <Link to="/document-checklist" className="text-gray-600 hover:text-blue-600 transition-colors">Documents</Link>
            <Link to="/visa-process" className="text-gray-600 hover:text-blue-600 transition-colors">Process</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get Started</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/visa-services" className="text-gray-600 hover:text-blue-600 transition-colors">Visa Services</Link>
              <Link to="/holiday-packages" className="text-gray-600 hover:text-blue-600 transition-colors">Holiday Packages</Link>
              <Link to="/document-checklist" className="text-gray-600 hover:text-blue-600 transition-colors">Documents</Link>
              <Link to="/visa-process" className="text-gray-600 hover:text-blue-600 transition-colors">Process</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Button asChild className="w-fit bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
