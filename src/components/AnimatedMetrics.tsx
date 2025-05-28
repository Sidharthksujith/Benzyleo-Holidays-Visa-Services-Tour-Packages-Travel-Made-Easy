
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  value: string;
  title: string;
  description: string;
  isVisible: boolean;
}

const MetricCard = ({ value, title, description, isVisible }: MetricCardProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      
      // Handle different value types
      if (value.includes("%")) {
        const numericValue = parseFloat(value);
        animateNumber(0, numericValue, 1500, (current) => `${current.toFixed(1)}%`);
      } else if (value.includes("+")) {
        const numericValue = parseInt(value.replace(/[+,]/g, ""));
        animateNumber(0, numericValue, 2000, (current) => `${Math.floor(current).toLocaleString()}+`);
      } else if (value.includes("★")) {
        const numericValue = parseFloat(value);
        animateNumber(0, numericValue, 1500, (current) => `${current.toFixed(2)} ★`);
      }
    }
  }, [isVisible, hasAnimated, value]);

  const animateNumber = (start: number, end: number, duration: number, formatter: (num: number) => string) => {
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOutCubic;
      
      setDisplayValue(formatter(current));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
      <CardContent className="p-8 text-center">
        <div className="text-4xl md:text-5xl font-light text-[#057EE6] mb-4 tracking-tight">
          {displayValue}
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 font-light leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const AnimatedMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      value: "99.2%",
      title: "Visas On Time",
      description: "Never miss your trip. Visas on Benzyleo arrive 2× faster."
    },
    {
      value: "5,000+",
      title: "Visas Processed",
      description: "Thousands of journeys simplified and counting."
    },
    {
      value: "4.91 ★",
      title: "Customer Rating",
      description: "Trusted by real travelers across platforms and reviews."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 tracking-tight mb-4">
            Why Travelers Trust Benzyleo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#057EE6] to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              title={metric.title}
              description={metric.description}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;
