import React from "react";
import Marquee from "@/components/ui/marquee";

// Defining the services array with a type
const services: string[] = [
  "App Design",
  "Website design",
  "App Development",
  "No-code Development",
  "Digital Marketing",
  "Graphics Design",
  "Branding Promotion",
  "Software Development",
];

const MarqueeSection: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full overflow-hidden py-2">
      {/* First Marquee */}
      <Marquee
        pauseOnHover={true} // ensure the correct type is passed for pauseOnHover
        className="[--duration:20s] text-white font-medium bg-[#DE2329]"
      >
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-lg whitespace-nowrap">{service}</span>
            <span className="text-2xl mx-2">♦</span>
          </div>
        ))}
      </Marquee>

      {/* Second Marquee with reversed content */}
      <Marquee
        reverse={true} // ensure the correct type is passed for reverse
        pauseOnHover={true} // ensure the correct type is passed for pauseOnHover
        className="[--duration:20s] font-medium bg-black text-[#DE2329]"
      >
        {services
          .slice() // Creating a new array to reverse it
          .reverse()
          .map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-lg whitespace-nowrap">{service}</span>
              <span className="text-2xl mx-2">♦</span>
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;