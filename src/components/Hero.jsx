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

        {/* Right Side */}
        <div className="flex items-center justify-center">

          <div className="relative scale-75 sm:scale-90 lg:scale-100">

            <div className="h-80 w-80 rounded-full border border-violet-500/40"></div>

            <div className="absolute inset-8 rounded-full border border-cyan-400/40"></div>

            <div className="absolute inset-16 rounded-full border border-violet-400/40"></div>

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_80px_rgba(124,58,237,0.8)]"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;