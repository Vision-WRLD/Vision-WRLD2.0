import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/shared";
import { blogPosts } from "../data";

export default function Blog() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Blog</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">From Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Blog</span></h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">Practical guides and expert insights to help your business grow online. Written by the Vision WRLD Team.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <Link to={`/blog/${post.slug}`} className="group block relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-500 h-full">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-300 font-medium">{post.category}</span></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3"><span>{post.date}</span><span className="w-1 h-1 rounded-full bg-gray-700" /><span>{post.readTime}</span></div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-300 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium group-hover:gap-3 transition-all">Read Full Article<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
