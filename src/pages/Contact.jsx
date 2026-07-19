import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Get In Touch</h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Have a question, a project in mind, or just want to say hello? Reach out — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <Mail className="text-white mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a href="mailto:Orbit.quickcontent@gmail.com" className="text-slate-400 text-sm hover:text-white transition">Orbit.quickcontent@gmail.com</a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <MapPin className="text-white mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Based In</h3>
                <p className="text-slate-400 text-sm">Nagpur, Maharashtra, India</p>
              </div>
            </div>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
                <p className="text-slate-400 text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/40 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/40 transition" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Message</label>
                  <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/40 transition resize-none" placeholder="Tell us what's on your mind..." />
                </div>
                <button type="submit" className="w-full bg-white text-black hover:bg-slate-200 transition rounded-md py-3 font-semibold flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;