import Hero from "../components/Hero";
import Features from "../components/Features";

function Home() {
  return (
    <div className="relative bg-black min-h-screen">

      {/* Video background — contained within Home only */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      >
        <source src="/Videos/video1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — also contained */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10">
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default Home;