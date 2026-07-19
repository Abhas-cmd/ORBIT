import { motion } from "framer-motion";

function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-12">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2>
              <p>When you use ORBIT, we may collect information you provide directly, such as your name, email address, and payment details when you sign up as a client or creator. We may also collect information about your usage of the platform, including requests made, projects completed, and messages exchanged through ORBIT.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
              <p>We use the information we collect to operate and improve ORBIT, match clients with creators, process payments securely, communicate with you about your account or projects, and ensure the safety and integrity of our platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Sharing of Information</h2>
              <p>We do not sell your personal information. We may share necessary information between matched clients and creators to facilitate a project, and with payment processors solely to complete transactions securely.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Data Security</h2>
              <p>We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at Orbit.quickcontent@gmail.com.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Continued use of ORBIT after changes are posted constitutes acceptance of the revised policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please reach out to us at <a href="mailto:Orbit.quickcontent@gmail.com" className="text-white underline hover:text-slate-300 transition">Orbit.quickcontent@gmail.com</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;