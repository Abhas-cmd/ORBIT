import {
  Bot,
  ShieldCheck,
  Cloud,
  Users,
  Rocket,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: <Bot size={36} />,
    title: "AI Automation",
    description:
      "Automate repetitive tasks and streamline your workflow with intelligent AI.",
  },
  {
    icon: <Cloud size={36} />,
    title: "Cloud Workspace",
    description:
      "Access your projects securely from anywhere, anytime.",
  },
  {
    icon: <Users size={36} />,
    title: "Team Collaboration",
    description:
      "Work together in real time with your team on one platform.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Enterprise Security",
    description:
      "Built with privacy and security at the core of every workflow.",
  },
  {
    icon: <Rocket size={36} />,
    title: "Fast Performance",
    description:
      "Optimized for speed so your projects move as fast as your ideas.",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Analytics",
    description:
      "Track progress and gain insights with powerful analytics.",
  },
];

function Features() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white tracking-tight">
          Why Choose ORBIT?
        </h2>

        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          Everything you need to build, collaborate and grow —
          all in one intelligent platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-white/40"
            >
              <div className="text-white mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;