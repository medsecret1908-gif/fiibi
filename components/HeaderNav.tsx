'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './UI/Button';
import { Icons } from './UI/Icons';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-[#1c170d] hover:text-[#9b844b] transition-colors duration-200 border-b-2 ${
        isActive ? 'border-[#9b844b] font-bold' : 'border-transparent'
      }`}
    >
      {children}
    </Link>
  );
};

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white py-4 shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        <div className="text-xl font-bold text-[#1c170d]">Fiibi</div>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Startseite</NavLink>
          <NavLink href="/about">Über uns</NavLink>
          <NavLink href="/services">Leistungen</NavLink>
          <NavLink href="/contact">Kontakt</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden md:block">
            Beratung buchen
          </Button>
          <button 
            className="md:hidden text-[#1c170d] hover:text-[#9b844b] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Icons.close size={24} /> : <Icons.menu size={24} />}
          </button>
          
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <Link 
                  href="/" 
                  className={`text-[#1c170d] hover:text-[#9b844b] transition-colors border-l-2 pl-2 ${
                    usePathname() === '/' ? 'border-[#9b844b] font-bold' : 'border-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Startseite
                </Link>
                <Link 
                  href="/about" 
                  className={`text-[#1c170d] hover:text-[#9b844b] transition-colors border-l-2 pl-2 ${
                    usePathname() === '/about' ? 'border-[#9b844b] font-bold' : 'border-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Über uns
                </Link>
                <Link 
                  href="/services" 
                  className={`text-[#1c170d] hover:text-[#9b844b] transition-colors border-l-2 pl-2 ${
                    usePathname() === '/services' ? 'border-[#9b844b] font-bold' : 'border-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Leistungen
                </Link>
                <Link 
                  href="/contact" 
                  className={`text-[#1c170d] hover:text-[#9b844b] transition-colors border-l-2 pl-2 ${
                    usePathname() === '/contact' ? 'border-[#9b844b] font-bold' : 'border-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </Link>
                <Button 
                  variant="primary" 
                  className="mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Beratung buchen
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
