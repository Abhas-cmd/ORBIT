import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock, User, Briefcase, Camera } from "lucide-react";
import { Link } from "react-router-dom";

function SignUp() {
  const [role, setRole] = useState("client");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up submitted:", { role, ...formData });
  };

  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden flex items-center justify-center">

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Create Your Account</h1>
          <p className="text-slate-400">Join ORBIT as a client or a creator</p>
        </div>

        <div className="flex bg-white/5 border border-white/10 rounded-md p-1 mb-8">
          <button type="button" onClick={() => setRole("client")} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition ${role === "client" ? "bg-white text-black" : "text-slate-400"}`}>
            <Briefcase size={18} /> Client
          </button>
          <button type="button" onClick={() => setRole("creator")} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition ${role === "creator" ? "bg-white text-black" : "text-slate-400"}`}>
            <Camera size={18} /> Creator
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-8">

          <div>
            <label className="block text-sm text-slate-400 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-md pl-11 pr-4 py-3 text-white focus:outline-none focus:border-white/40 transition" placeholder="Your name" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-md pl-11 pr-4 py-3 text-white focus:outline-none focus:border-white/40 transition" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="password" name="password" required value={formData.password} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-md pl-11 pr-4 py-3 text-white focus:outline-none focus:border-white/40 transition" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="w-full bg-white text-black hover:bg-slate-200 transition rounded-md py-3 font-semibold mt-2">
            Sign Up as {role === "client" ? "Client" : "Creator"}
          </button>

        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:text-slate-300 transition underline">
            Log In
          </Link>
        </p>

      </motion.div>

    </section>
  );
}

export default SignUp;