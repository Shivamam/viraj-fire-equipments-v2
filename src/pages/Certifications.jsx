import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { CheckIcon } from '../components/Icons'

const certs = [
  {
    title: 'Fire Prevention & Life Safety License',
    body: 'Licensed under Section 9(5) and 18(2) of the Maharashtra Fire Prevention & Life Safety Measures Act, 2006, issued by the Directorate of Maharashtra Fire Service — covering Fire Fighting & Sprinkler Systems, Detection & Fire Suppression Systems, and Passive Fire Protection Systems.',
  },
  {
    title: 'ISO 9001:2015 Certified',
    body: 'Certified Quality Management System covering manufacturing and supply of fire hydrant valves, hose pipes, hose reel drums, fire pumps, alarm panels, smoke and heat detectors, and gas leak detectors.',
  },
]

export default function Certifications() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink-900 mb-4">Certifications & Licenses</h1>
            <p className="text-ink-600 max-w-2xl mx-auto">
              Government-authorized and independently certified — so our work holds up at every inspection.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-20 space-y-14">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <ImagePlaceholder label={`${c.title} — certificate scan`} ratio="aspect-[4/3]" className="rounded-2xl w-full shadow-card" />
              <div>
                <span className="w-11 h-11 rounded-full bg-primary-600 flex items-center justify-center mb-4">
                  <CheckIcon className="w-5 h-5 text-white" />
                </span>
                <h2 className="text-xl font-heading font-bold text-ink-900 mb-3">{c.title}</h2>
                <p className="text-ink-600 leading-relaxed text-sm">{c.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  )
}