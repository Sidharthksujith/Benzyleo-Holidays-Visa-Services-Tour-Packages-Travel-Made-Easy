
import { useState } from "react";
import { MessageSquare, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-3 animate-fade-in">
          <Button
            className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg"
            onClick={() => window.open('https://wa.me/917356427120', '_blank')}
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 rounded-full p-4 shadow-lg"
            onClick={() => window.open('tel:+917356427120', '_blank')}
          >
            <Phone className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Main FAB */}
      <Button
        className={`rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
