import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { featuredClients } from '../data/clients'
import ServiceCard from '../components/ServiceCard'
import StatsBar from '../components/StatsBar'
import CTASection from '../components/CTASection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { CheckIcon, ArrowRightIcon } from '../components/Icons'

const whyUs = [
  'Government-authorized licensed fire safety agency',
  'ISO 9001:2015 certified quality management',
  'Multi-brand AMC — one vendor for all your equipment',
  'Compliance with NBC 2015 and Maharashtra Fire Prevention Act',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-xs font-semibold tracking-wide uppercase mb-5">
              {/* Govt. Authorized Licensed Agency */}
              Govt. of Maharashtra Licensed Agency
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-ink-900 leading-tight mb-5">
              Fire Safety, Handled by Engineers Who Take It Seriously
            </h1>
            <p className="text-ink-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              From compliance audits to installation and annual maintenance — Viraj Fire Equipment keeps your building, staff and license compliant, year after year.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-7 py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
                Get a Free Consultation
              </Link>
              <Link to="/services" className="px-7 py-3.5 rounded-full border border-ink-200 text-ink-800 font-semibold hover:border-primary-600 hover:text-primary-600 transition-colors">
                View Our Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ImagePlaceholder
              label="Hero image — firefighters / equipment in action"
              ratio="aspect-[4/3]"
              className="rounded-3xl w-full shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <StatsBar />

      {/* Services overview */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink-900 mb-4">What We Do</h2>
            <p className="text-ink-600">Five services, one team — everything your building needs to stay fire-compliant.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <ImagePlaceholder label="Team / worksite photo" ratio="aspect-[4/3]" className="rounded-3xl w-full shadow-card" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink-900 mb-6">Why Businesses Choose Us</h2>
            <ul className="space-y-4">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-1.5 mt-8 text-primary-600 font-semibold">
              More about us <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink-900 mb-4">Trusted By</h2>
            <p className="text-ink-600">A few of the businesses and institutions we work with.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {featuredClients.map((name, i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="border border-ink-100 rounded-xl p-6 flex items-center justify-center h-24 text-center text-sm font-semibold text-ink-500 bg-white hover:shadow-card transition-shadow">
                {name}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/clients" className="inline-flex items-center gap-1.5 text-primary-600 font-semibold">
            View all clients <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}