import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/shared";
import { services } from "../data";

export default function Services() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Services</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Everything You Need for a<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">World-Class Website</span></h1>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">From design to deployment and beyond — we provide end-to-end web solutions tailored to your business.</p>
        </ScrollReveal>

        <div className="space-y-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div className="group relative p-6 sm:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                <div className="relative grid lg:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={service.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                    <p className="text-gray-500 leading-relaxed text-sm">{service.details}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.03]">
              <h3 className="text-2xl font-bold">Ready to get started?</h3>
              <p className="text-gray-400 text-sm max-w-md">Tell us what you need. Your consultation is free, and we'll build a plan that fits your budget.</p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all">Free Consultation</Link>
                <Link to="/pricing" className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/5 transition-all">See Pricing</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
