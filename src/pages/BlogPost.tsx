import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScrollReveal } from "../components/shared";
import { blogPosts } from "../data";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    if (!post) return;
    const handleScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - window.innerHeight;
      setReadProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  if (!post) {
    return (
      <section className="relative pt-28 sm:pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8 text-sm sm:text-base">We couldn't find that blog post. It may have been moved or removed.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-400 font-medium text-sm hover:gap-3 transition-all">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
      {/* Reading progress */}
      <div className="reading-progress" style={{ width: `${readProgress}%` }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-indigo-400 transition-colors mb-6 sm:mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Blog
        </Link>

        <ScrollReveal>
          <article>
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] sm:text-xs text-indigo-300 font-medium mb-3 sm:mb-4">{post.category}</span>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">{post.title}</h1>
              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 flex-wrap">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10">
              <img src={post.image} alt={post.title} className="w-full h-48 sm:h-64 lg:h-80 object-cover" loading="lazy" />
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 sm:mb-10 font-medium border-l-2 border-indigo-500/30 pl-4 sm:pl-6">{post.excerpt}</p>

            <div className="space-y-8 sm:space-y-10">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">{section.title}</h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500/[0.08] to-purple-500/[0.08] border border-indigo-500/10 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Need help with this?</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">We handle all of this and more. Book a free consultation.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all">
                Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
