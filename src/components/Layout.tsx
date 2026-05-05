import { Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useScrollProgress, useScrolled } from "../hooks";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const scrolled = useScrolled(80);
  const [showEgg, setShowEgg] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }, [location]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = e.key.toLowerCase() === e.key ? e.key.toLowerCase() : e.key;
    const expected = KONAMI[konamiIndex];
    if (key === expected || (key === "b" && expected === "b") || (key === "a" && expected === "a")) {
      const nextIndex = konamiIndex + 1;
      if (nextIndex === KONAMI.length) {
        setShowEgg(true);
        setKonamiIndex(0);
      } else {
        setKonamiIndex(nextIndex);
      }
    } else {
      setKonamiIndex(0);
    }
  }, [konamiIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50" : "bg-black/60 backdrop-blur-xl border-b border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-16 lg:h-20"}`}>
            <Link to="/" className="group">
              <span className="text-xl font-bold tracking-tight">Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">WRLD</span></span>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to} className={`px-3 py-2 text-sm rounded-lg transition-all ${location.pathname === link.to ? "text-white bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>{link.label}</Link>
              ))}
              <Link to="/contact" className="ml-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105">Free Consultation</Link>
            </div>
            <button className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>}
            </button>
          </div>
        </div>
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-white/5 bg-black/95 backdrop-blur-xl px-4 py-6 space-y-1">
            {navLinks.map((link) => <Link key={link.label} to={link.to} className="block px-4 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>)}
            <Link to="/contact" className="block text-center mt-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Free Consultation</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main id="main-content" className="page-enter"><Outlet /></main>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 lg:col-span-1">
              <span className="text-lg sm:text-xl font-bold">Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">WRLD</span></span>
              <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm leading-relaxed">We build websites that build brands. Free consultations, real partnerships, results that matter.</p>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-2.5">{["Web Design", "Development", "E-Commerce", "SEO", "Support"].map((item) => <li key={item}><Link to="/services" className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors">{item}</Link></li>)}</ul>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-2.5">{[{ label: "About", to: "/about" }, { label: "Pricing", to: "/pricing" }, { label: "Blog", to: "/blog" }, { label: "Contact", to: "/contact" }].map((item) => <li key={item.label}><Link to={item.to} className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors">{item.label}</Link></li>)}</ul>
            </div>
            <NewsletterSection />
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
              <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Vision WRLD. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm text-gray-600"><span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span><span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span></div>
            </div>
            <p className="text-[11px] text-gray-700 mt-2">Built with 💜 by Vision WRLD</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <BackToTopButton />

      {/* JUICE WRLD EASTER EGG — Konami Code: ↑↑↓↓←→←→BA */}
      {showEgg && <JuiceWRDDEgg onClose={() => setShowEgg(false)} />}
    </div>
  );
}

function BackToTopButton() {
  const scrolled = useScrolled(500);
  const [hovered, setHovered] = useState(false);
  if (!scrolled) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${hovered ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/25 scale-110" : "bg-white/10 backdrop-blur-xl text-gray-400 border border-white/10"}`} aria-label="Back to top">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  );
}

function JuiceWRDDEgg({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl" onClick={onClose}>
      <div className="relative max-w-lg mx-4 text-center" onClick={(e) => e.stopPropagation()}>
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative">
          {/* 999 */}
          <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 leading-none select-none" style={{ WebkitTextStroke: "1px rgba(168,85,247,0.3)" }}>
            999
          </div>

          {/* Divider */}
          <div className="mt-6 mb-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          {/* Quote */}
          <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed max-w-md mx-auto">
            "Don't let nobody tell you you can't do something. You can do anything you put your mind to, just gotta believe in yourself."
          </p>

          <p className="mt-4 text-gray-500 text-xs font-medium uppercase tracking-[0.3em]">Jarad Higgins · 1998 – 2019</p>

          {/* WRLD connection */}
          <div className="mt-6 px-5 py-3 rounded-xl bg-white/5 border border-white/10 inline-block">
            <p className="text-xs text-gray-500">
              We named this company <span className="text-purple-400 font-semibold">WRLD</span> for a reason. 💜
            </p>
            <p className="text-[10px] text-gray-600 mt-1">
              999 — taking whatever bad situation you're going through and turning it into something positive.
            </p>
          </div>

          {/* Close */}
          <button onClick={onClose} className="mt-8 text-xs text-gray-600 hover:text-gray-400 transition-colors">
            click anywhere to close
          </button>
        </div>
      </div>
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setShowToast(true);
    setEmail("");
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <div className="col-span-2 lg:col-span-1">
        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4">Stay Updated</h4>
        <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Get design tips and industry insights delivered to your inbox.</p>
        {subscribed ? (
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/10 border border-green-500/20">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-green-400 text-xs sm:text-sm font-medium">You're in! Welcome aboard.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button type="submit" className="px-3 py-2 rounded-lg bg-indigo-500 text-white text-xs sm:text-sm font-medium hover:bg-indigo-400 transition-colors flex-shrink-0">Join</button>
          </form>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70]" style={{ animation: "slide-up 0.4s ease-out" }}>
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gray-900 border border-green-500/20 shadow-2xl shadow-black/50">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Welcome to the WRLD 💜</p>
              <p className="text-xs text-gray-400">Design tips &amp; insights headed your way.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
