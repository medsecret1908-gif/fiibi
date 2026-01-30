import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesGrid = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[#1c170d]">
            Unsere Leistungen
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              showLearnMore={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
