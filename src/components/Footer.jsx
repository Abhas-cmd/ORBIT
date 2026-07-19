import { Link } from "react-router-dom";
import { Mail, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wider text-white mb-3">ORBIT</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Connecting creators and clients for on-demand short-form video content.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
<div>
  <h3 className="text-white font-semibold mb-4">Legal</h3>
  <ul className="space-y-2 text-slate-400 text-sm">
    <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
    <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
    <li><Link to="/user-agreement" className="hover:text-white transition">User Agreement</Link></li>
    <li><Link to="/creator-agreement" className="hover:text-white transition">Creator Agreement</Link></li>
  </ul>
</div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 text-slate-400">
            <a href="https://www.instagram.com/orbit.qc?igsh=MXNjZHc1dTVibjNrdQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-violet-400 transition" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-violet-400 transition" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:Orbit.quickcontent@gmail.com" className="hover:text-violet-400 transition" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} ORBIT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;