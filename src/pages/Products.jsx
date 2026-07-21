import { productCategories } from '../data/products'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

export default function Products() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-ink-900 mb-4">Products We Supply</h1>
            <p className="text-ink-600 max-w-2xl mx-auto">
              Certified fire fighting, detection and safety equipment — supplied, installed and serviced by our own team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 space-y-16">
        {productCategories.map((cat, ci) => (
          <Reveal key={cat.title} delay={ci * 60}>
            <h2 className="text-xl font-heading font-bold text-ink-900 mb-6">{cat.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border border-ink-100 shadow-card overflow-hidden hover:shadow-cardHover transition-shadow">
                  <ImagePlaceholder label={item.name} ratio="aspect-[4/3]" className="w-full" />
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-ink-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-ink-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  )
}