import { motion } from "framer-motion";

function UserAgreement() {
  return (
    <section className="min-h-screen bg-black pt-32 pb-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">User Agreement</h1>
          <p className="text-slate-500 text-sm mb-12">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-8 text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Who This Applies To</h2>
              <p>This User Agreement applies to clients using ORBIT to request short-form video content from creators on the platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Making Requests</h2>
              <p>As a client, you agree to provide clear and accurate project requirements when submitting a video request, including scope, style, and timeline expectations.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Reviewing & Approving Work</h2>
              <p>You are responsible for reviewing delivered work in a timely manner and providing constructive feedback for revisions where applicable. Payment is released to the creator upon your approval of the final delivered video.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Respectful Conduct</h2>
              <p>You agree to communicate respectfully with creators matched to your project and to use ORBIT only for lawful purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Content Ownership</h2>
              <p>Upon full payment and approval, ownership of the final delivered video transfers to you as the client, unless otherwise agreed in writing with the creator.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Disputes</h2>
              <p>If a dispute arises regarding delivered work, ORBIT may assist in mediating between you and the creator, though ORBIT is not obligated to resolve disputes on either party's behalf.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default UserAgreement;