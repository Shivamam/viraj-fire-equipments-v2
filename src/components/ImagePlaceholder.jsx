import { BoxIcon } from './Icons'

/**
 * Drop a real image later: <ImagePlaceholder src="/images/services/audits.jpg" label="Fire audit" />
 * Until then it renders a clean placeholder box so you can see final layout/spacing.
 */
export default function ImagePlaceholder({ src, alt = '', label, className = '', ratio = 'aspect-[4/3]' }) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${ratio} ${className}`} loading="lazy" />
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary-200 bg-primary-50 text-primary-400 ${ratio} ${className}`}>
      <BoxIcon className="w-8 h-8" />
      <span className="text-xs font-medium px-2 text-center">{label || 'Image placeholder'}</span>
    </div>
  )
}