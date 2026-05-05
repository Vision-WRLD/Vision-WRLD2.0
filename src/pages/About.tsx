import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/shared";
import { values, techStack } from "../data";

export default function About() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">About Us</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight px-2">We Don't Just Build<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Websites</span><br className="hidden sm:block" />— We Build Futures</h1>
          <p className="mt-4 sm:mt-6 text-gray-400 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed px-2">Vision WRLD started with a simple belief: every business deserves a website that works as hard as they do. We combine cutting-edge technology with thoughtful design to create web experiences that drive measurable results.</p>
        </ScrollReveal>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="group flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl flex-shrink-0">{value.icon}</div>
                <div><h3 className="font-bold text-white text-base sm:text-lg mb-1.5 sm:mb-2">{value.title}</h3><p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.desc}</p></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech Stack */}
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Our Stack</span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Built With the<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Best Tools</span></h2>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">We use industry-leading technologies to ensure your site is fast, secure, and built to scale.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {techStack.map((tech, index) => (
            <ScrollReveal key={index} delay={Math.min(index + 1, 6)} direction="scale">
              <div className="group relative p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="text-sm sm:text-base font-bold text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                  <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/5 text-gray-600 uppercase tracking-widest">{tech.category}</span>
                </div>
                <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed">{tech.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-14 sm:mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.03]">
              <h3 className="text-xl sm:text-2xl font-bold">Want to work together?</h3>
              <p className="text-gray-400 text-xs sm:text-sm max-w-md">Every great project starts with a conversation. Let's chat — completely free.</p>
              <Link to="/contact" className="px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all">Book Free Consultation</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
