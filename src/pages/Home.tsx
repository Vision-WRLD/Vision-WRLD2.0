import { Link } from "react-router-dom";
import { ScrollReveal, TypewriterText } from "../components/shared";
import { services, blogPosts, faqs } from "../data";
import { AccordionItem } from "../components/shared";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-20 pb-20 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20 sm:opacity-30" /><div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" /></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/20 rounded-full blur-[80px] sm:blur-[128px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/15 rounded-full blur-[80px] sm:blur-[128px]" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-[80px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free consultations available now
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-up animate-delay-100">
              We Build<br />
              <TypewriterText phrases={["Websites That Convert", "Brands That Stand Out", "Experiences That Inspire", "Products That Scale"]} />
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 animate-slide-up animate-delay-200">
              We build stunning, high-performance websites that turn your ideas into digital reality. Free consultation, real partnership, results that matter.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-slide-up animate-delay-300">
              <Link to="/contact" className="group px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Book Free Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link to="/services" className="px-7 sm:px-8 py-3.5 rounded-full border border-white/10 text-gray-300 font-semibold text-sm sm:text-base hover:bg-white/5 hover:border-white/20 transition-all text-center">See Our Services</Link>
            </div>

            {/* Code Preview */}
            <div className="mt-12 sm:mt-16 relative animate-slide-up animate-delay-400">
              <div className="max-w-3xl mx-auto rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-8 animate-shimmer">
                <div className="flex items-center gap-3 mb-3 sm:mb-4"><div className="flex gap-1.5"><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" /><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" /><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70" /></div><div className="text-[10px] sm:text-xs text-gray-600 font-mono">visionwrld.config.ts</div></div>
                <div className="space-y-2 sm:space-y-3 text-left font-mono text-xs sm:text-sm">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-300">project</span> <span className="text-gray-500">=</span> <span className="text-yellow-300">{"{"}</span></div>
                  <div className="pl-3 sm:pl-4"><span className="text-green-300">name</span><span className="text-gray-500">:</span> <span className="text-amber-300">"your-brand"</span><span className="text-gray-500">,</span></div>
                  <div className="pl-3 sm:pl-4"><span className="text-green-300">type</span><span className="text-gray-500">:</span> <span className="text-amber-300">"world-class"</span><span className="text-gray-500">,</span></div>
                  <div className="pl-3 sm:pl-4"><span className="text-green-300">performance</span><span className="text-gray-500">:</span> <span className="text-cyan-300">100</span><span className="text-gray-500">,</span></div>
                  <div><span className="text-yellow-300">{"}"}</span><span className="text-gray-500">;</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* OUR PROMISE STRIP */}
      <section className="relative border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {[
              { icon: "💰", label: "Free Consultation", desc: "No commitment" },
              { icon: "⚡", label: "Fast Turnaround", desc: "Days, not months" },
              { icon: "📱", label: "Mobile First", desc: "Every device, always" },
              { icon: "🤝", label: "Budget Friendly", desc: "We work with you" },
            ].map((item, i) => (
              <div key={i} className="py-5 sm:py-6 px-3 sm:px-6 text-center">
                <div className="text-xl sm:text-2xl mb-1">{item.icon}</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{item.label}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY START WITH US */}
      <section className="relative py-16 sm:py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Why Start With Us</span>
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold px-2">We're New. We're Hungry. We Care About Your Project Like It's Our Own.</h2>
            <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">We're not a massive agency juggling 50 clients. When you work with Vision WRLD, you get our full attention, our best ideas, and a team that treats your success as personal.</p>
          </ScrollReveal>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "🎯", title: "You're Not a Number", desc: "We take on fewer clients so we can pour everything into making your project perfect." },
              { icon: "💬", title: "Direct Communication", desc: "No account managers or ticket queues. You talk directly to the people building your site." },
              { icon: "🔥", title: "We Have Something to Prove", desc: "Your success is our portfolio. We'll go above and beyond because every project is a referral." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1.5 sm:mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">What We Do</span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">Everything You Need for a<br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">World-Class Website</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={Math.min(index + 1, 6)}>
                <div className="group relative p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 h-full">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={service.icon} /></svg>
                    </div>
                    <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 sm:mt-3 text-gray-400 leading-relaxed text-xs sm:text-sm">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-indigo-400 font-medium text-sm sm:text-base hover:gap-3 transition-all">
              View full service details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Our Process</span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">How We<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Bring Ideas</span> to Life</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 relative">
            {[{ step: "01", title: "Discovery", desc: "Free consultation to understand your brand, goals, and audience.", icon: "🔍", details: ["Stakeholder interview", "Competitive analysis", "Technical requirements"] }, { step: "02", title: "Design & Build", desc: "We design and develop your site with cutting-edge precision.", icon: "⚙️", details: ["Wireframes & mockups", "Responsive development", "Client review rounds"] }, { step: "03", title: "Launch & Grow", desc: "We deploy, optimize, and support your site for success.", icon: "🚀", details: ["QA & browser testing", "SEO & analytics setup", "Ongoing support"] }].map((item, index) => (
              <ScrollReveal key={index} delay={index + 1}>
                <div className="relative text-center group">
                  {index < 2 && <div className="hidden sm:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-500/40 to-purple-500/20" />}
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 text-lg sm:text-xl font-bold text-indigo-400 mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">{item.step}</div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto mb-3 sm:mb-4">{item.desc}</p>
                  <div className="space-y-1.5 sm:space-y-2">{item.details.map((d, i) => <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 justify-center"><svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>{d}</div>)}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
              <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full blur-[60px] sm:blur-[80px]" />
              <div className="relative px-6 py-10 sm:px-16 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">Your consultation is free. Your potential is limitless.</h3>
                  <p className="mt-2 sm:mt-3 text-indigo-100/80 text-sm sm:text-base max-w-lg">Let's talk about your business, your goals, and your budget. No pressure — just an honest conversation.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link to="/contact" className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm sm:text-base hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-black/20 text-center">Book Free Consultation</Link>
                  <Link to="/pricing" className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all text-center">See Pricing</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Insights</span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">From Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Blog</span></h2>
            <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">Practical guides and expert insights to help your business grow online.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index + 1}>
                <div className="group relative rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4"><span className="px-2.5 sm:px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] sm:text-xs text-indigo-300 font-medium">{post.category}</span></div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3 flex-wrap"><span>{post.date}</span><span className="w-1 h-1 rounded-full bg-gray-700" /><span>{post.readTime}</span><span className="w-1 h-1 rounded-full bg-gray-700" /><span>By {post.author}</span></div>
                    <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-indigo-300 transition-colors leading-snug">{post.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-indigo-400 font-medium group-hover:gap-3 transition-all">
                      Read Full Article
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">FAQ</span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">Got<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Questions?</span></h2>
          </ScrollReveal>
          <div className="space-y-2.5 sm:space-y-3">{faqs.slice(0, 4).map((faq, i) => <ScrollReveal key={i} delay={i + 1}><AccordionItem question={faq.question} answer={faq.answer} /></ScrollReveal>)}</div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link to="/contact" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Still have questions? Ask us directly →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
