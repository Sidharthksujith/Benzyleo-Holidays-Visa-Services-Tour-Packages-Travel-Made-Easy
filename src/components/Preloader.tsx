
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 30; // Update every 30ms
    const increment = 100 / (duration / interval);

    // Text animation for loading
    const textStates = ["Loading", "Loading.", "Loading..", "Loading..."];
    let textIndex = 0;
    const textTimer = setInterval(() => {
      setLoadingText(textStates[textIndex % textStates.length]);
      textIndex++;
    }, 300);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          clearInterval(textTimer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        {/* Animated Logo with Pulse Effect */}
        <div className="relative mb-12">
          <div className="absolute inset-0 rounded-full bg-[#057EE6] opacity-20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-[#057EE6] opacity-40 animate-pulse"></div>
          <img 
            src="/lovable-uploads/cb8db2a3-9f62-4ad7-b68e-8888ebfd2e08.png" 
            alt="Benzyleo" 
            className="relative h-24 w-24 object-contain animate-pulse"
          />
        </div>
        
        {/* Modern Progress Bar */}
        <div className="w-80 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-light text-gray-600">Preparing your journey</span>
            <span className="text-sm font-medium text-[#057EE6]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#057EE6] to-blue-400 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Animated Dots Loader */}
        <div className="flex space-x-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-[#057EE6] rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-700 font-light text-lg tracking-wide">
          {loadingText}
        </p>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-60" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
