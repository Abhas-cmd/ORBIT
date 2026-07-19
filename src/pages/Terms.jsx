import { motion } from "framer-motion";

function Terms() {
  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Terms & Conditions</h1>
          <p className="text-slate-500 text-sm mb-12">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
              <p>By accessing or using ORBIT, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Description of Service</h2>
              <p>ORBIT is a platform that connects clients seeking short-form video content with independent creators who produce it. ORBIT facilitates the connection, communication, and payment process but is not itself a party to the agreement between clients and creators.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. User Accounts</h2>
              <p>You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Payments</h2>
              <p>Payments made through ORBIT are processed via secure third-party payment providers. Funds are released to creators upon client approval of delivered work, in accordance with our payment and refund policies.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Prohibited Conduct</h2>
              <p>Users may not use ORBIT to upload unlawful, harmful, or infringing content, misrepresent their identity, or attempt to circumvent the platform's payment or matching systems.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Limitation of Liability</h2>
              <p>ORBIT is provided "as is" without warranties of any kind. ORBIT is not liable for disputes between clients and creators, delays, or losses arising from use of the platform, to the fullest extent permitted by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">7. Termination</h2>
              <p>We reserve the right to suspend or terminate accounts that violate these Terms or engage in behavior harmful to the ORBIT community.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">8. Governing Law</h2>
              <p>These Terms are governed by the laws of India, without regard to conflict of law principles.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">9. Contact Us</h2>
              <p>For questions about these Terms, contact us at <a href="mailto:Orbit.quickcontent@gmail.com" className="text-white underline hover:text-slate-300 transition">Orbit.quickcontent@gmail.com</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Terms;