import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/Videos/video1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">

        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build Smarter.
            <br />
            Create Faster.
            <br />
            Collaborate
            <br />
            Anywhere.
          </h1>


          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl">
            ORBIT empowers creators, developers, and businesses with
            intelligent collaboration, automation, and cloud-native workflows.
          </p>


          <div className="mt-10 flex gap-5">

            <Link
              to="/signup"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>


            <Link
              to="/about"
              className="px-8 py-4 rounded-lg border border-gray-600 font-semibold hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>


      {/* Right Side Orbit Animation */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:flex">

        <div className="relative w-72 h-72 rounded-full border border-gray-700 flex items-center justify-center">

          <div className="absolute w-52 h-52 rounded-full border border-gray-700"></div>

          <div className="absolute w-3 h-3 bg-white rounded-full top-0"></div>

          <div className="text-6xl">
            ◐
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;