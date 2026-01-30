'use client';
import React, { useState } from 'react';

const subjects = [
  'Finanzplanung',
  'Anlageberatung',
  'Altersvorsorge',
  'Finanzierungen',
  'Infogespräch',
  'Immobilieninvestment'
];

const ContactForm = ({ dictionary }: { dictionary: any }) => {
  const t = dictionary.contact;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gdprConsent: false
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    gdprConsent: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      gdprConsent: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = t.errors.firstNameRequired;
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t.errors.lastNameRequired;
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired;
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.errors.emailInvalid;
      valid = false;
    }

    if (!formData.subject) {
      newErrors.subject = t.errors.subjectRequired;
      valid = false;
    }

    if (formData.message.length < 20) {
      newErrors.message = t.errors.messageShort;
      valid = false;
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = t.errors.consentRequired;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Fehler beim Senden der Nachricht');
        }

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          gdprConsent: false
        });
      } catch (error) {
        alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6 bg-[#fcfbf8] rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#1c170d]">
            {t.firstName} *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f4c653] focus:ring-[#f4c653] sm:text-sm ${errors.firstName ? 'border-red-500' : 'border'}`}
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#1c170d]">
            {t.lastName} *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f4c653] focus:ring-[#f4c653] sm:text-sm ${errors.lastName ? 'border-red-500' : 'border'}`}
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1c170d]">
          {t.email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f4c653] focus:ring-[#f4c653] sm:text-sm ${errors.email ? 'border-red-500' : 'border'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1c170d]">
          {t.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f4c653] focus:ring-[#f4c653] sm:text-sm border"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#1c170d]">
          {t.subject} *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f4c653] focus:ring-[#f4c653] sm:text-sm ${errors.subject ? 'border-red-500' : 'border'}`}
        >
          <option value="">{t.selectSubject}</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1c170d]">
          {t.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f4c653] focus:ring-[#f4c653] sm:text-sm ${errors.message ? 'border-red-500' : 'border'}`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="gdprConsent"
            name="gdprConsent"
            type="checkbox"
            checked={formData.gdprConsent}
            onChange={handleChange}
            className="focus:ring-[#f4c653] h-4 w-4 text-[#f4c653] border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="gdprConsent" className="font-medium text-[#1c170d]">
            {t.consent}
          </label>
          <p className="text-gray-500">
            <a href="/datenschutz" className="text-[#f4c653] hover:text-[#e0b548]">
              {t.moreInfo}
            </a>
          </p>
          {errors.gdprConsent && <p className="mt-1 text-sm text-red-600">{errors.gdprConsent}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-[#f4c653] py-2 px-4 text-sm font-medium text-[#1c170d] shadow-sm hover:bg-[#e0b548] focus:outline-none focus:ring-2 focus:ring-[#f4c653] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.sending : t.submit}
        </button>
      </div>

      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>{t.success}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
