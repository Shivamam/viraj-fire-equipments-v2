import { allClients } from '../data/clients'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

export default function Clients() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink-900 mb-4">Our Clients</h1>
            <p className="text-ink-600 max-w-2xl mx-auto">
              30+ corporates, developers, hospitals, hotels and government institutions trust us with their fire safety.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {allClients.map((name, i) => (
            <Reveal key={name} delay={(i % 8) * 50}>
              <div className="bg-white border border-ink-100 rounded-xl overflow-hidden shadow-card hover:shadow-cardHover transition-shadow">
                <ImagePlaceholder label="Client logo" ratio="aspect-[3/2]" className="w-full" />
                <p className="text-center text-xs font-semibold text-ink-600 px-2 py-3">{name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}