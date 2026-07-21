import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { ShieldIcon, AwardIcon, UsersIcon } from '../components/Icons'
import CTASection from '../components/CTASection'

export default function About() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink-900 mb-4">About Viraj Fire Equipment</h1>
            <p className="text-ink-600 max-w-2xl mx-auto">
              A government-authorized fire protection agency based in Govandi, Mumbai, serving industries, developers, hospitals and housing societies across Maharashtra since 2016.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <ImagePlaceholder label="Company / office photo" ratio="aspect-[4/3]" className="rounded-3xl w-full shadow-card" />
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-2xl font-heading font-bold text-ink-900 mb-4">Who We Are</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Viraj Fire Equipment is a licensed fire protection agency built on one idea — that fire safety shouldn't be treated as paperwork. Our engineers audit, design, install and maintain fire systems for corporates, developers, municipal bodies and residential societies across Mumbai and Maharashtra.
          </p>
          <p className="text-ink-600 leading-relaxed">
            We hold a license under the Maharashtra Fire Prevention & Life Safety Measures Act, 2006, and are ISO 9001:2015 certified for the manufacture and supply of fire fighting equipment — so every audit, installation and AMC we deliver is backed by a documented quality process, not just a handshake.
          </p>
        </Reveal>
      </section>

      <section className="bg-ink-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="bg-white rounded-2xl p-8 shadow-card h-full">
              <ShieldIcon className="w-9 h-9 text-primary-600 mb-4" />
              <h3 className="font-heading font-semibold text-lg text-ink-900 mb-3">Our Mission</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                To be a leading fire, health, safety and environment service provider — delivering work that meets code the first time and holds up at inspection.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-card h-full">
              <AwardIcon className="w-9 h-9 text-primary-600 mb-4" />
              <h3 className="font-heading font-semibold text-lg text-ink-900 mb-3">Our Vision</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                A Maharashtra where every workplace treats fire safety as standard practice — not an afterthought triggered by an inspection notice.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-card h-full">
              <UsersIcon className="w-9 h-9 text-primary-600 mb-4" />
              <h3 className="font-heading font-semibold text-lg text-ink-900 mb-3">Our Values</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                Safety first, honest reporting, and long-term relationships built through consistent service — not one-time transactions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}