import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is ORBIT?",
      a: "ORBIT is an on-demand platform that connects businesses needing short-form video content with nearby creators who can produce it — handling the entire workflow from request to delivery and payment.",
    },
    {
      q: "How do I request a video?",
      a: "Simply post a request describing what you need — the type of video, length, and style. ORBIT matches you with a suitable nearby creator automatically.",
    },
    {
      q: "How does payment work?",
      a: "Payments are handled securely through the app. Funds are only released to the creator once you review and approve the final video.",
    },
    {
      q: "How do I become a creator on ORBIT?",
      a: "Sign up, build your profile showcasing your work, and start accepting nearby client requests that match your skills.",
    },
    {
      q: "What if I'm not happy with the final video?",
      a: "You can request revisions before approving delivery. Payment is only released once you're satisfied with the final result.",
    },
    {
      q: "Is my payment information secure?",
      a: "Yes, all payments are processed securely through the app, and ORBIT never stores your raw payment details.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-[#050816] pt-32 pb-20 px-6 text-white overflow-hidden">

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Everything you need to know about using ORBIT — as a client or a creator.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <button onClick={() => toggle(i)} className="w-full flex justify-between items-center px-6 py-5 text-left">
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`text-violet-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} size={20} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;