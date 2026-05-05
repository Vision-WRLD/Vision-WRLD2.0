import { useState } from "react";
import { ScrollReveal } from "../components/shared";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Contact</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight px-2">Let's Build Something<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Great Together</span></h1>
          <p className="mt-4 sm:mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg px-2">Your consultation is completely free. Tell us about your project and your budget — we'll figure out the rest together.</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.05] to-purple-500/[0.05] p-5 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-indigo-500/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Left */}
              <div>
                <div className="rounded-lg sm:rounded-xl bg-green-500/10 border border-green-500/20 p-3 sm:p-4 mb-5 sm:mb-8">
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-xs sm:text-sm mb-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    100% Free Consultation
                  </div>
                  <p className="text-green-300/70 text-xs sm:text-sm">No commitment, no pressure. Just an honest conversation about your business.</p>
                </div>

                {/* Response time */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5 mb-5 sm:mb-8">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Average response in &lt; 24h</div>
                    <div className="text-xs text-gray-500">Usually much faster</div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm mb-6 sm:mb-8 hidden sm:block">Whether you have a clear vision or just a rough idea, we're here to help. Tell us about your project, and we'll respond with honest recommendations and a clear proposal.</p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>, text: "hello@visionwrld.com" },
                    { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>, text: "+1 (555) 123-4567" },
                    { icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, text: "San Francisco, CA" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5 sm:gap-3 text-gray-400 text-sm">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400 flex-shrink-0">{item.icon}</div>
                      <span className="text-xs sm:text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div>
                {formSubmitted ? (
                  <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-green-500/20 bg-green-500/5">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎉</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-sm">We'll be in touch within 24 hours with your free consultation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div><label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-1.5 font-medium">Name</label><input type="text" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all" placeholder="Your name" /></div>
                      <div><label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-1.5 font-medium">Email</label><input type="email" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all" placeholder="you@company.com" /></div>
                    </div>
                    <div><label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-1.5 font-medium">Project Type</label><select required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"><option value="" className="bg-gray-900">Select a service</option><option value="web-design" className="bg-gray-900">Web Design</option><option value="development" className="bg-gray-900">Development</option><option value="ecommerce" className="bg-gray-900">E-Commerce</option><option value="redesign" className="bg-gray-900">Redesign</option><option value="other" className="bg-gray-900">Other</option></select></div>
                    <div><label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-1.5 font-medium">Budget Range</label><select required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"><option value="" className="bg-gray-900">Select your budget</option><option value="0" className="bg-gray-900">Free consultation first</option><option value="100-300" className="bg-gray-900">$100 - $300</option><option value="300-600" className="bg-gray-900">$300 - $600</option><option value="600-800" className="bg-gray-900">$600 - $800</option><option value="800+" className="bg-gray-900">$800+ — Full custom build</option><option value="flexible" className="bg-gray-900">Flexible / Let's Discuss</option></select></div>
                    <div><label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-1.5 font-medium">Message</label><textarea required rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none" placeholder="Tell us about your project..." /></div>
                    <button type="submit" className="w-full px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
