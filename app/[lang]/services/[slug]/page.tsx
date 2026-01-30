import { getServices } from '../../../../data/services'
import { notFound } from 'next/navigation'
import { Icons } from '../../../../components/UI/Icons'
import { Metadata } from 'next'
import { Locale } from '../../../../i18n-config'

interface Props {
  params: { slug: string; lang: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const services = getServices(params.lang)
  const service = services.find(s => s.slug === params.slug)
  if (!service) return {}

  return {
    title: `${service.title} - Fiibi Finanzdienstleistungen`,
    description: service.description,
  }
}

export default function ServiceDetailPage({
  params,
}: Props) {
  const services = getServices(params.lang)
  const service = services.find(s => s.slug === params.slug)
  if (!service) return notFound()

  const IconComponent = Icons[service.icon]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <div className="flex flex-col items-center text-center mb-10">
        <IconComponent className="text-[#9b844b] w-16 h-16" />
        <h1 className="text-3xl font-bold tracking-tight text-[#1c170d] mt-4">
          {service.title}
        </h1>
      </div>

      <p className="text-lg text-[#9b844b] mb-10">{service.description}</p>

      {service.processSteps && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">
            Unser Prozess
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            {service.processSteps.map((step, i) => (
              <li key={i} className="text-[#1c170d]">{step}</li>
            ))}
          </ol>
        </div>
      )}

      {service.faqs && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-bold text-lg text-[#1c170d]">
                  {faq.question}
                </h3>
                <p className="text-[#9b844b] mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">
          Kontaktieren Sie uns
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-[#1c170d]">
              Name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-[#1c170d]">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-[#1c170d]">
              Nachricht *
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#f4c653] text-[#1c170d] rounded-md font-bold px-6 py-3 hover:bg-[#e5b744] transition"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </div>
  )
}
