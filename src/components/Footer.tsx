import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/17ba47cb-109c-4c46-bb7f-1328afb7f926.png" 
                alt="Benzyleo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl">Benzyleo Holidays Pvt Ltd</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Visa Appointment Experts. Born from personal frustration with US visa delays, 
              we help travelers bypass long waits with fast, compliant appointment booking.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Sunny Building, Aswini Junction, Thrissur, Kerala</p>
              <p>📞 +91 73564 27120</p>
              <p>✉️ info@benzyleo.in</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/visa-services" className="text-gray-300 hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link to="/holiday-packages" className="text-gray-300 hover:text-white transition-colors">Holiday Packages</Link></li>
              <li><Link to="/document-checklist" className="text-gray-300 hover:text-white transition-colors">Document Checklist</Link></li>
              <li><Link to="/visa-process" className="text-gray-300 hover:text-white transition-colors">Visa Process</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-6">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/917356427120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  📱 WhatsApp Support
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/benzyleo_holidays" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  📧 Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Benzyleo Holidays Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
