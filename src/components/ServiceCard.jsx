import { Link } from 'react-router-dom'
import { iconMap, ArrowRightIcon } from './Icons'

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon]
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-ink-100 p-7 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300"
    >
      <span className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors">
        <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
      </span>
      <h3 className="font-heading font-semibold text-lg text-ink-900 mb-2">{service.title}</h3>
      <p className="text-sm text-ink-600 leading-relaxed mb-4">{service.summary}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
        Learn more <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}