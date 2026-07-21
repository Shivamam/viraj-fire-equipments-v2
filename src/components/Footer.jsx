import { Link } from 'react-router-dom'
import { PhoneIcon, MailIcon, PinIcon, FlameIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
              <FlameIcon className="w-5 h-5 text-white" />
            </span>
            <span className="font-heading font-bold text-white">VIRAJ FIRE EQUIPMENT</span>
          </div>
          <p className="text-sm text-ink-400 leading-relaxed">
            Govt. authorized fire safety agency serving Mumbai and Maharashtra since 2016 — audits, installation, design, training and maintenance under one roof.
          </p>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-ink-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/clients" className="hover:text-white">Our Clients</Link></li>
            <li><Link to="/certifications" className="hover:text-white">Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-ink-400">
            <li><Link to="/services/audits" className="hover:text-white">Fire & Safety Audits</Link></li>
            <li><Link to="/services/fire-training-demo" className="hover:text-white">Fire Training & Demo</Link></li>
            <li><Link to="/services/design-consulting" className="hover:text-white">Design & Consulting</Link></li>
            <li><Link to="/services/fire-fighting-installation" className="hover:text-white">Installation & Products</Link></li>
            <li><Link to="/services/amc" className="hover:text-white">AMC Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-400">
            <li className="flex gap-2"><PinIcon className="w-5 h-5 shrink-0 text-primary-400" />B 301 Shri Swami Samarth Co-Op Society, Opp. Manish Company, Govandi (W), Mumbai 400043</li>
            <li className="flex gap-2"><PhoneIcon className="w-5 h-5 shrink-0 text-primary-400" />+91 83693 03074</li>
            <li className="flex gap-2"><MailIcon className="w-5 h-5 shrink-0 text-primary-400" />virajfire2019@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800 py-5 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} Viraj Fire Equipment. All rights reserved.
      </div>
    </footer>
  )
}