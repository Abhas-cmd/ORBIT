import { motion } from "framer-motion";
import { Send, Users2, Video, PackageCheck, UserPlus, Briefcase, Film, Wallet } from "lucide-react";

function HowItWorks() {
  const clientSteps = [
    { icon: Send, title: "Post Your Request", desc: "Describe the video you need — type, length, style — and submit your request." },
    { icon: Users2, title: "Get Matched", desc: "ORBIT connects you with a nearby creator suited to your project." },
    { icon: Video, title: "Track Progress", desc: "Stay updated as your creator films and edits, from first draft to final cut." },
    { icon: PackageCheck, title: "Receive & Approve", desc: "Review the finished video, request changes if needed, and approve for delivery." },
  ];

  const creatorSteps = [
    { icon: UserPlus, title: "Create Your Profile", desc: "Sign up, showcase your work, and set the type of projects you take on." },
    { icon: Briefcase, title: "Accept Requests", desc: "Get matched with nearby clients and accept projects that fit your skills." },
    { icon: Film, title: "Shoot & Edit", desc: "Create the video following the client's brief, using your own creative style." },
    { icon: Wallet, title: "Deliver & Get Paid", desc: "Submit the final video and receive payment securely through ORBIT." },
  ];

  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">How It Works</h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            Whether you're requesting a video or creating one, ORBIT keeps the process simple from start to finish.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">For Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {clientSteps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">{i + 1}</div>
                  <step.icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">For Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {creatorSteps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">{i + 1}</div>
                  <step.icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default HowItWorks;