import React from 'react';
import { Icons } from '../UI/Icons';

interface ServiceCardProps {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  showLearnMore?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, showLearnMore = false }) => {
  const IconComponent = Icons[icon];
  
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="flex flex-col items-center text-center space-y-4 mb-4">
        <IconComponent className="text-[#9b844b] w-10 h-10" />
        <h3 className="text-[16px] md:text-[17px] font-semibold tracking-tight text-[#1c170d] leading-snug">
          {title}
        </h3>
      </div>
      <p className="text-sm text-[#7a6a3b] leading-normal mt-auto line-clamp-2">
        {description}
      </p>
      {showLearnMore && (
        <button className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#1c170d] bg-[#f4c653] hover:bg-[#e0b548] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f4c653]">
          Mehr erfahren
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
