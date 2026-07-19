import { motion } from "framer-motion";
import { Video, Clock, CreditCard, Send, UserCheck, Briefcase, TrendingUp, Camera } from "lucide-react";

function Services() {
  const clientServices = [
    { icon: Video, title: "On-Demand Video Requests", desc: "Post exactly what you need — product shots, promos, reels — and get matched with a nearby creator." },
    { icon: Clock, title: "Fast Turnaround", desc: "Track your project from request to delivery, with clear timelines at every step." },
    { icon: CreditCard, title: "Secure In-App Payments", desc: "Pay safely through ORBIT — funds are only released once you approve the final video." },
  ];

  const creatorServices = [
    { icon: Send, title: "Steady Local Work", desc: "Get matched with nearby clients looking for short-form video content, without chasing leads yourself." },
    { icon: UserCheck, title: "Verified Creator Profile", desc: "Build a portfolio and reputation on ORBIT that clients can trust before they even message you." },
    { icon: TrendingUp, title: "Grow Your Business", desc: "Take on more projects, build repeat clients, and grow your creator career through the platform." },
  ];

  return (
    <section className="relative min-h-screen bg-[#050816] pt-32 pb-20 px-6 text-white overflow-hidden">

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            ORBIT works for both sides — businesses that need great video content, and creators ready to make it. Here's what each side gets.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-violet-400" size={28} />
            <h2 className="text-2xl font-semibold">For Clients</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {clientServices.map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition backdrop-blur-sm">
                <service.icon className="text-violet-400 mb-3" size={26} />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="text-violet-400" size={28} />
            <h2 className="text-2xl font-semibold">For Creators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {creatorServices.map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition backdrop-blur-sm">
                <service.icon className="text-violet-400 mb-3" size={26} />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16 text-center bg-violet-600/10 border border-violet-500/30 rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
          <p className="text-slate-300 mb-6">Join ORBIT as a client or a creator — the platform works for you either way.</p>
          <button className="bg-violet-600 px-8 py-3 rounded-full hover:bg-violet-500 transition font-semibold">Get Started</button>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;