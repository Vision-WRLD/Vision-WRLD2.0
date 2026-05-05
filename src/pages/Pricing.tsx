import { ScrollReveal } from "../components/shared";
import BudgetSlider from "../components/BudgetSlider";

export default function Pricing() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Investment</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">What Does a<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Great Website</span> Cost?</h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">Every project starts with a free consultation. Then drag the slider to explore what's possible at every budget level.</p>
        </ScrollReveal>
        <ScrollReveal>
          <BudgetSlider />
        </ScrollReveal>
      </div>
    </section>
  );
}
