import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 text-center relative">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Need a fire safety audit or a quote for AMC?
          </h2>
          <p className="text-ink-400 max-w-xl mx-auto mb-8">
            Talk to our team — we'll walk your premises, explain what's required, and give you a clear, no-obligation quote.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </Link>
        </Reveal>
      </div>
    </section>
  )
}