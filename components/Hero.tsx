import React from 'react';
import Image from 'next/image';
import Button from './UI/Button';

const Hero = ({ dictionary }: { dictionary: any }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1c170d] mb-8 leading-tight">
            {dictionary.hero.title}
          </h1>
          <p className="text-xl text-[#9b844b] mb-10 max-w-lg">
            {dictionary.hero.subtitle}
          </p>
          <Button variant="primary" className="text-lg px-8 py-3">
            {dictionary.hero.cta}
          </Button>
        </div>
        <div className="order-1 md:order-2 animate-fadeIn flex justify-center">
          <div className="relative aspect-[320/572] w-full max-w-sm rounded-xl overflow-hidden shadow-xl border-2 border-borderSoft">
            <Image
              src="/images/hero.jpg"
              alt="Financial Advisor"
              width={320}
              height={572}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
