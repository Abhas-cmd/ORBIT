import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:justify-between lg:pt-0">

        {/* Left Side */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="mb-5 uppercase tracking-[0.4em] text-cyan-400 text-sm sm:text-base">
            Welcome to ORBIT
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
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

            <button className="flex items-center justify-center gap-2 rounded-full bg-violet-600 px-8 py-4 transition hover:bg-violet-500">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border border-slate-700 px-8 py-4 hover:border-white">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side — Aperture visual */}
        <div className="flex items-center justify-center">

          <div className="relative scale-75 sm:scale-90 lg:scale-100 h-80 w-80">

            {/* Outer orbit rings */}
            <div className="absolute inset-0 rounded-full border border-violet-500/30"></div>
            <div className="absolute inset-8 rounded-full border border-cyan-400/30"></div>

            {/* Aperture icon */}
            <svg
              viewBox="0 0 200 200"
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
            >
              <defs>
                <linearGradient id="apertureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              {/* Outer glow circle */}
              <circle cx="100" cy="100" r="95" fill="url(#apertureGradient)" opacity="0.15" />

              {/* Aperture blades */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <polygon
                  key={i}
                  points="100,100 100,20 140,35"
                  fill="url(#apertureGradient)"
                  opacity="0.85"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}

              {/* Center lens hole */}
              <circle cx="100" cy="100" r="28" fill="#050816" />
              <circle cx="100" cy="100" r="28" stroke="url(#apertureGradient)" strokeWidth="2" fill="none" />

              {/* Lens glint */}
              <circle cx="90" cy="88" r="6" fill="white" opacity="0.6" />
            </svg>

            <div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ boxShadow: "0 0 100px rgba(124,58,237,0.5)" }}
            ></div>

            {/* Small orbiting accent dots */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
            <div className="absolute bottom-4 right-4 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;