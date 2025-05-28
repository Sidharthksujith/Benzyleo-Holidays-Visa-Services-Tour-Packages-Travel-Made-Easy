
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 300); // Wait for fade out
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 transition-opacity duration-300 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/cb8db2a3-9f62-4ad7-b68e-8888ebfd2e08.png" 
            alt="Benzyleo" 
            className="h-20 w-20 object-contain"
          />
        </div>
        
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#057EE6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              className="transition-all duration-75 ease-out"
            />
          </svg>
          
          {/* Counter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-medium text-[#057EE6]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        
        <p className="mt-6 text-gray-600 font-light">Loading your journey...</p>
      </div>
    </div>
  );
};

export default Preloader;
