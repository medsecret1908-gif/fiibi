import '../globals.css'
import HeaderNav from '../../components/HeaderNav'
import Footer from '../../components/Footer'
import { i18n } from '../../i18n-config'
import { getDictionary } from '../dictionaries'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

import { Locale } from '../../i18n-config'

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang)
  return {
    title: dictionary.footer.companyName,
    description: dictionary.hero.subtitle,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: typeof i18n.defaultLocale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className="min-h-screen flex flex-col">
        <HeaderNav dictionary={dictionary} lang={params.lang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dictionary={dictionary} />
      </body>
    </html>
  )
}
