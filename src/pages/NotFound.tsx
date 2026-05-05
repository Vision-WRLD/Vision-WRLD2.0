import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>
      <div className="relative text-center px-4">
        <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          404
        </div>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold">Page Not Found</h1>
        <p className="mt-3 text-gray-400 max-w-md mx-auto">Looks like this page went off the grid. Let's get you back to somewhere that exists.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105">Go Home</Link>
          <Link to="/contact" className="px-6 py-3 rounded-full border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/5 transition-all">Free Consultation</Link>
        </div>
      </div>
    </section>
  );
}
