import { motion } from "framer-motion";

function CreatorAgreement() {
  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Creator Agreement</h1>
          <p className="text-slate-500 text-sm mb-12">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Who This Applies To</h2>
              <p>This Creator Agreement applies to independent creators offering short-form video production services through ORBIT.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Independent Contractor Status</h2>
              <p>As a creator, you are an independent contractor, not an employee of ORBIT. You are responsible for your own equipment, taxes, and business expenses related to your work.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Accepting Projects</h2>
              <p>You may choose which client requests to accept based on your availability and skills. Once accepted, you agree to deliver work in line with the agreed scope and timeline.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Quality Standards</h2>
              <p>You agree to deliver video content that meets professional quality standards and fulfills the client's stated requirements to the best of your ability.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Payment</h2>
              <p>Payment for completed projects will be released to you through ORBIT's payment system upon client approval of the final delivered video, minus any applicable platform fees.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Content Rights</h2>
              <p>Unless otherwise agreed, ownership of the final delivered video transfers to the client upon full payment. You may request permission to use completed work in your own portfolio.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">7. Conduct</h2>
              <p>You agree to communicate professionally with clients and to use ORBIT only for lawful, legitimate creative work.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CreatorAgreement;