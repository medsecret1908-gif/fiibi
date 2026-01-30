import Button from '../../../components/UI/Button'
import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../dictionaries'

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1c170d] mb-6">Über Igor Sigatinski</h1>
        <p className="text-[#9b844b] text-lg">
          Igor Sigatinski ist ein erfahrener Finanz- und Immobilienberater mit nachgewiesener Erfolgsbilanz bei der Unterstützung von Kunden bei der Erreichung ihrer finanziellen Ziele. Mit umfangreicher Erfahrung in der Immobilienkreditvermittlung, Kreditvermittlung, Immobilienvermittlung und Versicherungen bietet Igor ein umfassendes Dienstleistungspaket, das auf die individuellen Bedürfnisse jedes Kunden zugeschnitten ist.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">Qualifikationen</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b844b]"></span>
            <span className="text-[#1c170d]">Immobilienkreditvermittlung</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b844b]"></span>
            <span className="text-[#1c170d]">Kredit- & Immobilienvermittlung</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b844b]"></span>
            <span className="text-[#1c170d]">Versicherungsspezialist</span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">Mission Statement</h2>
        <p className="text-[#1c170d]">
          Meine Mission ist es, Kunden unabhängige, gleichwertige Beratung zu bieten und sicherzustellen, dass ihre Interessen immer im Vordergrund stehen. Ich glaube an Transparenz, Integrität und einen kundenzentrierten Ansatz, der jegliche Einflüsse von Fonds ausschließt, um Objektivität und Vertrauen zu wahren.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">Philosophie</h2>
        <p className="text-[#1c170d] mb-8">
          Meine Philosophie konzentriert sich auf die Bereitstellung unvoreingenommener finanzieller und immobilienbezogener Beratung. Durch unabhängiges Arbeiten und den Verzicht auf Fondsverbindungen kann ich Ratschläge geben, die ausschließlich auf den Erfolg und das finanzielle Wohlergehen der Kunden ausgerichtet sind. Dieser Ansatz fördert langfristige Beziehungen, die auf Vertrauen und gegenseitigem Respekt basieren.
        </p>
        <Button variant="primary" className="mt-6">
          Beratung buchen
        </Button>
      </div>
    </div>
  )
}
