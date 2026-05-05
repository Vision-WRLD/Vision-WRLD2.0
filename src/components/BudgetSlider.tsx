import { useState } from "react";
import { pricingTiers } from "../data";
import { Link } from "react-router-dom";

export default function BudgetSlider() {
  const [value, setValue] = useState(0);
  const currentTierIndex = pricingTiers.reduce((acc, tier, i) => (value >= tier.min ? i : acc), 0);
  const currentTier = pricingTiers[currentTierIndex];
  const nextTier = pricingTiers[currentTierIndex + 1];
  const isCustomTier = currentTierIndex === pricingTiers.length - 1;
  const sliderPercent = (value / 800) * 100;

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-300 font-medium mb-4">✓ Free consultation included with every package</div>
        <h3 className="text-2xl sm:text-3xl font-bold">Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Perfect Package</span></h3>
        <p className="mt-2 text-gray-400 text-sm max-w-md mx-auto">Starts with a free consultation. Slide to explore what's possible — every dollar adds real value.</p>
      </div>

      <div className="max-w-2xl mx-auto mb-10">
        {/* Price Display */}
        <div className="text-center mb-6">
          <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            {value === 0 ? "Free" : `$${value}${value >= 800 ? "+" : ""}`}
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-lg">{currentTier.icon}</span>
            <span className="text-lg font-semibold text-white">{currentTier.label}</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative px-2">
          <div className="relative h-2 rounded-full bg-white/5">
            <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-100" style={{ width: `${sliderPercent}%` }} />
          </div>
          <input type="range" min={0} max={800} step={50} value={value} onChange={(e) => setValue(Number(e.target.value))} className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer" style={{ zIndex: 10 }} />
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-lg shadow-indigo-500/30 border-2 border-indigo-500 pointer-events-none transition-all duration-100" style={{ left: `calc(${sliderPercent}% - 12px)` }} />
          <div className="flex justify-between mt-4 text-xs text-gray-600 font-medium"><span>Free</span><span>$800+</span></div>
        </div>

        {/* Next tier hint OR custom tier message */}
        {isCustomTier ? (
          <div className="mt-6 text-center">
            <div className="inline-block rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-6 py-4">
              <p className="text-sm text-purple-300 font-semibold mb-1">🌟 You've unlocked everything — and then some.</p>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md">At this level, your imagination is the only limit. We can build whatever you dream up — custom apps, interactive experiences, AI integrations, animated showcases, and things that don't even have names yet. Let's make something the internet has never seen.</p>
            </div>
          </div>
        ) : nextTier ? (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {nextTier.min === 0 ? "" : <>Invest <span className="text-indigo-400 font-semibold">${nextTier.min}</span> to unlock </>}
              <span className="text-white font-medium">{nextTier.perk}</span>
            </p>
            <div className="mt-2 w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-full transition-all duration-300" style={{ width: `${Math.min(((value - currentTier.min) / (nextTier.min - currentTier.min)) * 100, 100)}%` }} />
            </div>
          </div>
        ) : null}
      </div>

      {/* Included Features */}
      <div className="max-w-2xl mx-auto">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">What's Included at {value === 0 ? "Free" : `$${value}${value >= 800 ? "+" : ""}`}</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {pricingTiers.map((tier, i) => {
            const isIncluded = i <= currentTierIndex;
            const isCurrent = i === currentTierIndex;
            return (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${isCurrent ? "bg-indigo-500/10 border border-indigo-500/20" : isIncluded ? "bg-white/[0.02] border border-white/5" : "opacity-30 border border-transparent"}`}>
                <div className={`flex-shrink-0 mt-0.5 ${isIncluded ? "text-indigo-400" : "text-gray-700"}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2"><span className="text-sm">{tier.icon}</span><span className={`text-sm font-medium ${isIncluded ? "text-white" : "text-gray-600"}`}>{tier.perk}</span></div>
                  <div className={`text-[10px] uppercase tracking-wider mt-0.5 ${isIncluded ? "text-gray-500" : "text-gray-700"}`}>{tier.min === 0 ? "Free" : `$${tier.min}${tier.min >= 800 ? "+" : ""}`} · {tier.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partnership Message */}
      <div className="mt-10 max-w-2xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500/[0.08] to-purple-500/[0.08] border border-indigo-500/10 p-6 sm:p-8 text-center">
          <div className="text-3xl mb-3">🤝</div>
          <h4 className="text-lg font-bold text-white mb-2">We'll Work With Your Budget</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">This slider is a starting point — not a wall. We want to build a <span className="text-indigo-300 font-medium">real partnership</span>, not just close a sale. Tell us what you need and what you can invest, and we'll craft a plan that works for <span className="text-indigo-300 font-medium">both of us</span>.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all">Let's Talk Budget<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Link>
        </div>
      </div>
    </div>
  );
}
