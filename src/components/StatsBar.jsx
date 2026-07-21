import { iconMap } from './Icons'
import { stats } from '../data/stats'
import Reveal from './Reveal'

export default function StatsBar() {
  return (
    <div className="bg-primary-600">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = iconMap[s.icon]
          return (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center text-white gap-2">
                <Icon className="w-8 h-8 text-flame-400" />
                <span className="text-2xl md:text-3xl font-heading font-extrabold">{s.value}</span>
                <span className="text-xs md:text-sm text-primary-100">{s.label}</span>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}