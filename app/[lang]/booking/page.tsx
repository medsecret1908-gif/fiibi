import React from 'react';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../dictionaries';
import Script from 'next/script';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang);
    return {
        title: dictionary.booking.title,
        description: dictionary.booking.description,
    };
}

const BookingPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1c170d] mb-4">
                        {dictionary.booking.heading}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {dictionary.booking.description}
                    </p>
                </div>

                {/* Calendly Inline Widget */}
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/kisb/30min?hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '700px' }}
                />
            </div>

            {/* Calendly Widget Script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </>
    );
};

export default BookingPage;
