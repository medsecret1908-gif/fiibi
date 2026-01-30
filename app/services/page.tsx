import { services } from '../../data/services'
import ServiceCard from '../../components/Services/ServiceCard'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-[#1c170d]">
          Unsere Leistungen
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(service => (
          <Link 
            key={service.slug} 
            href={`/services/${service.slug}`}
            className="hover:no-underline"
          >
            <ServiceCard 
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
