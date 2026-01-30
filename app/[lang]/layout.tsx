import '../globals.css'
import HeaderNav from '../../components/HeaderNav'
import Footer from '../../components/Footer'
import { i18n } from '../../i18n-config'
import { getDictionary } from '../dictionaries'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'Fiibi Finanzdienstleistungen',
  description: 'Ihr Partner für Finanzen, Immobilien und Versicherungen',
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
