import { PhoneIcon, MailIcon, PinIcon } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink-900 mb-4">Get in Touch</h1>
            <p className="text-ink-600 max-w-2xl mx-auto">
              Tell us about your building and we'll get back to you with next steps — usually within a business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12">
        <Reveal>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0"><PinIcon className="w-5 h-5 text-primary-600" /></span>
              <div>
                <h3 className="font-heading font-semibold text-ink-900">Address</h3>
                <p className="text-sm text-ink-600">B 301 Shri Swami Samarth Co-Op Society, Opp. Manish Company, Govandi (W), Mumbai 400043</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0"><PhoneIcon className="w-5 h-5 text-primary-600" /></span>
              <div>
                <h3 className="font-heading font-semibold text-ink-900">Phone</h3>
                <a href="tel:+918369303074" className="text-sm text-ink-600 hover:text-primary-600">+91 83693 03074</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0"><MailIcon className="w-5 h-5 text-primary-600" /></span>
              <div>
                <h3 className="font-heading font-semibold text-ink-900">Email</h3>
                <a href="mailto:virajfire2019@gmail.com" className="text-sm text-ink-600 hover:text-primary-600">virajfire2019@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card border border-ink-100">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Govandi+West+Mumbai&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          {/* Netlify Forms: name="contact" + data-netlify="true" + hidden form-name field */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="bg-white rounded-2xl shadow-card border border-ink-100 p-8 space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label className="block text-sm font-semibold text-ink-800 mb-1.5">Full Name</label>
              <input name="name" type="text" required className="w-full rounded-lg border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-ink-800 mb-1.5">Phone</label>
                <input name="phone" type="tel" required className="w-full rounded-lg border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink-800 mb-1.5">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink-800 mb-1.5">What do you need?</label>
              <textarea name="message" rows="4" required className="w-full rounded-lg border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
              Send Message
            </button>
          </form>
        </Reveal>
      </section>
    </>
  )
}