import './globals.css'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Fiibi Finanzdienstleistungen',
  description: 'Ihr Partner für Finanzen, Immobilien und Versicherungen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <HeaderNav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
