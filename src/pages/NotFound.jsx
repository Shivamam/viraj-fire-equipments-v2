import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-32 text-center">
      <h1 className="text-3xl font-heading font-extrabold text-ink-900 mb-4">Page Not Found</h1>
      <p className="text-ink-600 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="px-7 py-3 rounded-full bg-primary-600 text-white font-semibold">Back to Home</Link>
    </div>
  )
}