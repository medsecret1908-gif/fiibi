import React from 'react';
import Hero from '../../components/Hero';
import ServicesGrid from '../../components/Services/ServicesGrid';
import { getDictionary } from '../dictionaries'
import { Locale } from '../../i18n-config'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Hero dictionary={dictionary} lang={lang} />
      <ServicesGrid dictionary={dictionary} lang={lang} />
    </>
  );
}
