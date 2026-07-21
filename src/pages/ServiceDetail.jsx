import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services'
import { iconMap, CheckIcon, ArrowRightIcon } from '../components/Icons'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const Icon = iconMap[service.icon]
  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16">
          <Reveal>
            <Link to="/services" className="text-sm font-semibold text-primary-600">&larr; All Services</Link>
            <div className="flex items-center gap-4 mt-5 mb-4">
              <span className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </span>
              <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-ink-900">{service.title}</h1>
            </div>
            <p className="text-ink-600 text-lg max-w-2xl">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <ImagePlaceholder label={`${service.title} — site photo`} ratio="aspect-[4/3]" className="rounded-3xl w-full shadow-card" />
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-xl font-heading font-bold text-ink-900 mb-4">Overview</h2>
          <p className="text-ink-600 leading-relaxed mb-6">{service.overview}</p>
          <h3 className="text-base font-heading font-semibold text-ink-900 mb-3">Ideal For</h3>
          <p className="text-ink-600 text-sm leading-relaxed">{service.forWho}</p>
        </Reveal>
      </section>

      <section className="bg-ink-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16">
          <Reveal>
            <h2 className="text-xl font-heading font-bold text-ink-900 mb-6">What's Included</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card">
                  <span className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-sm text-ink-700">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <h2 className="text-xl font-heading font-bold text-ink-900 mb-6">Other Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.slice(0, 4).map((s) => {
              const OIcon = iconMap[s.icon]
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 p-4 rounded-xl border border-ink-100 hover:border-primary-300 hover:shadow-card transition-all">
                  <span className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <OIcon className="w-5 h-5 text-primary-600" />
                  </span>
                  <span className="text-sm font-semibold text-ink-800">{s.title}</span>
                  <ArrowRightIcon className="w-4 h-4 text-ink-400 ml-auto" />
                </Link>
              )
            })}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}