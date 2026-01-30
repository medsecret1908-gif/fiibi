import React from 'react';
import { Icons } from './UI/Icons';

const Footer = () => {
  return (
    <footer className="bg-white text-[#1c170d] py-12 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tight mb-3">Fiibi Finanzdienstleistungen</h3>
            <p className="text-[#9b844b]">© {new Date().getFullYear()} Alle Rechte vorbehalten</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#9b844b] hover:text-[#1c170d] transition-colors duration-200">
              <Icons.email size={24} />
            </a>
            <a href="#" className="text-[#9b844b] hover:text-[#1c170d] transition-colors duration-200">
              <Icons.phone size={24} />
            </a>
            <a href="#" className="text-[#9b844b] hover:text-[#1c170d] transition-colors duration-200">
              <Icons.location size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-8 text-sm">
            <a href="/impressum" className="text-[#9b844b] hover:text-[#1c170d] transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-[#9b844b] hover:text-[#1c170d] transition-colors">Datenschutz</a>
            <a href="/agb" className="text-[#9b844b] hover:text-[#1c170d] transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
