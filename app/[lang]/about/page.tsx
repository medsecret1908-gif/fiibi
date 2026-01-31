import Link from 'next/link'
import Button from '../../../components/UI/Button'
import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../dictionaries'

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1c170d] mb-6">
          {dictionary.about.title}
        </h1>
        <p className="text-[#9b844b] text-lg">
          {dictionary.about.subtitle}
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">
          {dictionary.about.qualifications}
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b844b]"></span>
            <span className="text-[#1c170d]">{dictionary.about.qual_1}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b844b]"></span>
            <span className="text-[#1c170d]">{dictionary.about.qual_2}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b844b]"></span>
            <span className="text-[#1c170d]">{dictionary.about.qual_3}</span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">
          {dictionary.about.mission_title}
        </h2>
        <p className="text-[#1c170d]">
          {dictionary.about.mission_text}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c170d] mb-6">
          {dictionary.about.philosophy_title}
        </h2>
        <p className="text-[#1c170d] mb-8">
          {dictionary.about.philosophy_text}
        </p>
        <Link href={`/${lang}/booking`}>
          <Button variant="primary" className="mt-6">
            {dictionary.hero.cta}
          </Button>
        </Link>
      </div>
    </div>
  )
}
