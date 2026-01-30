interface FAQ {
  question: string
  answer: string
}

interface Service {
  title: string
  slug: string
  description: string
  icon: keyof typeof import('../components/UI/Icons').Icons
  processSteps?: string[]
  faqs?: FAQ[]
}

declare const services: Service[]

export { services }
