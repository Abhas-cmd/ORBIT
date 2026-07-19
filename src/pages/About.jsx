import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck, Rocket } from "lucide-react";

function About() {
  const values = [
    { icon: Zap, title: "Speed", desc: "From request to finished video, ORBIT keeps the process fast without cutting corners." },
    { icon: Users, title: "Community", desc: "We connect real, local creators with clients who need content — no middlemen, no guesswork." },
    { icon: ShieldCheck, title: "Trust", desc: "Secure payments, verified creators, and a platform built to protect both sides of every project." },
    { icon: Rocket, title: "Growth", desc: "Whether you're a business needing content or a creator building a career, ORBIT grows with you." },
  ];

  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">About ORBIT</h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            ORBIT is an on-demand platform built to close the gap between businesses that need great short-form video content and the creators who can bring it to life. We handle the connection, the editing workflow, delivery, and payments — so both sides can focus on what they do best.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Short-form video has become the fastest way for businesses to reach an audience — but finding the right creator, managing the back-and-forth, and handling payments shouldn't slow that down. ORBIT was built to make the entire process feel effortless, from the first request to the final delivered file.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
              <value.icon className="text-white mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;