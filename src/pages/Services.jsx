import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

export default function Services() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink-900 mb-4">Our Services</h1>
            <p className="text-ink-600 max-w-2xl mx-auto">
              Five services covering everything from compliance audits to day-to-day maintenance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}