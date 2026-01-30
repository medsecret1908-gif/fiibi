import React from 'react';
import ContactForm from '../../../components/ContactForm';
import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../dictionaries'

const ContactPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-[#1c170d] mb-6">
        {dictionary.contact.title}
      </h1>
      <div className="space-y-6">
        <div className="prose text-[#1c170d]">
          {/* <p>
            Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein Beratungsgespräch vereinbaren? 
            Nutzen Sie unser Kontaktformular - wir melden uns schnellstmöglich bei Ihnen.
          </p> */ }
          {/* Temporary placeholder or added to dict */}
        </div>
        <ContactForm dictionary={dictionary} />
      </div>
    </div>
  );
};

export default ContactPage;
