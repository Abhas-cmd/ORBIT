import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:justify-between lg:pt-0">

        {/* Left Side */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="mb-5 uppercase tracking-[0.4em] text-slate-400 text-sm sm:text-base font-semibold">
            Welcome to ORBIT
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Build Smarter.
            <br />
            Create Faster.
            <br />
            Collaborate Anywhere.
          </h1>

          <p className="mt-8 text-base sm:text-lg text-slate-400">
            ORBIT empowers creators, developers, and businesses with
            intelligent collaboration, automation, and cloud-native
            workflows.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">

            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-bold text-black transition hover:bg-slate-200"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <button className="rounded-md border border-white/20 px-8 py-4 font-semibold hover:border-white transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side — Aperture visual, monochrome */}
        <div className="flex items-center justify-center">

          <div className="relative scale-75 sm:scale-90 lg:scale-100 h-80 w-80">

            <div className="absolute inset-0 rounded-full border border-white/10"></div>
            <div className="absolute inset-8 rounded-full border border-white/20"></div>

            <svg
              viewBox="0 0 200 200"
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
            >
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <polygon
                  key={i}
                  points="100,100 100,20 140,35"
                  fill="#e2e8f0"
                  opacity="0.9"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}

              <circle cx="100" cy="100" r="28" fill="#000000" />
              <circle cx="100" cy="100" r="28" stroke="#ffffff" strokeWidth="2" fill="none" />
            </svg>

            <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;