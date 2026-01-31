'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from './UI/Button';
import { Icons } from './UI/Icons';
import { GermanFlag, UKFlag, RussianFlag } from './UI/Flags';
import { Locale } from '../i18n-config';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  // Simple check since pathname now includes lang
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`text-[#1c170d] hover:text-[#9b844b] transition-colors duration-200 border-b-2 ${isActive ? 'border-[#9b844b] font-bold' : 'border-transparent'
        }`}
    >
      {children}
    </Link>
  );
};

const HeaderNav = ({ dictionary, lang }: { dictionary: any, lang: Locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = newLang;
    return segments.join('/');
  };

  return (
    <header className="bg-white py-4 shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-xl font-bold text-[#1c170d]">Fiibi</Link>

        <nav className="hidden md:flex items-center gap-8">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 mr-4 bg-gray-100 rounded-full px-2 py-1">
            <Link
              href={switchLanguage('de')}
              className={`p-1.5 rounded-full transition-colors ${lang === 'de' ? 'bg-[#f4c653] shadow-sm' : 'hover:bg-gray-200 opacity-60 hover:opacity-100'}`}
              aria-label="Deutsch"
            >
              <GermanFlag className="w-5 h-auto rounded-[2px]" />
            </Link>
            <Link
              href={switchLanguage('en')}
              className={`p-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-[#f4c653] shadow-sm' : 'hover:bg-gray-200 opacity-60 hover:opacity-100'}`}
              aria-label="English"
            >
              <UKFlag className="w-5 h-auto rounded-[2px]" />
            </Link>
            <Link
              href={switchLanguage('ru')}
              className={`p-1.5 rounded-full transition-colors ${lang === 'ru' ? 'bg-[#f4c653] shadow-sm' : 'hover:bg-gray-200 opacity-60 hover:opacity-100'}`}
              aria-label="Русский"
            >
              <RussianFlag className="w-5 h-auto rounded-[2px]" />
            </Link>
          </div>

          <NavLink href={`/${lang}`}>{dictionary.navigation.services}</NavLink>
          <NavLink href={`/${lang}/about`}>{dictionary.navigation.about}</NavLink>
          <NavLink href={`/${lang}/contact`}>{dictionary.navigation.contact}</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link href={`/${lang}/booking`}>
            <Button variant="primary" className="hidden md:block">
              {dictionary.hero.cta}
            </Button>
          </Link>
          <button
            className="md:hidden text-[#1c170d] hover:text-[#9b844b] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Icons.close size={24} /> : <Icons.menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50 border-t border-gray-200">
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">Sprache / Language / Язык:</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={switchLanguage('de')}
                    className={`p-1.5 rounded-lg transition-colors ${lang === 'de' ? 'bg-[#f4c653] shadow-sm' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <GermanFlag className="w-6 h-auto rounded-[2px]" />
                  </Link>
                  <Link
                    href={switchLanguage('en')}
                    className={`p-1.5 rounded-lg transition-colors ${lang === 'en' ? 'bg-[#f4c653] shadow-sm' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <UKFlag className="w-6 h-auto rounded-[2px]" />
                  </Link>
                  <Link
                    href={switchLanguage('ru')}
                    className={`p-1.5 rounded-lg transition-colors ${lang === 'ru' ? 'bg-[#f4c653] shadow-sm' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <RussianFlag className="w-6 h-auto rounded-[2px]" />
                  </Link>
                </div>
              </div>

              <nav className="flex flex-col gap-4">
                <Link
                  href={`/${lang}`}
                  className="text-[#1c170d] hover:text-[#9b844b] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {dictionary.navigation.services}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="text-[#1c170d] hover:text-[#9b844b] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {dictionary.navigation.about}
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="text-[#1c170d] hover:text-[#9b844b] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {dictionary.navigation.contact}
                </Link>
                <Link href={`/${lang}/booking`}>
                  <Button
                    variant="primary"
                    className="mt-4 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {dictionary.hero.cta}
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
