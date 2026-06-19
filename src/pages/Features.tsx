import {
  Brain,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Globe,
  Sparkles,
  FileText,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={32} />,
    title: "AI Product Analysis",
    desc: "Analyze startup ideas and products using advanced AI models.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Market Trends",
    desc: "Track demand and discover growing opportunities.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Competitor Analysis",
    desc: "Compare your product with top competitors.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Risk Detection",
    desc: "Identify risks before investing time and money.",
  },
  {
    icon: <Globe size={32} />,
    title: "Global Insights",
    desc: "Discover opportunities in international markets.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "AI Recommendations",
    desc: "Get actionable growth and positioning strategies.",
  },
  {
    icon: <FileText size={32} />,
    title: "PDF Reports",
    desc: "Export professional market research reports.",
  },
  {
    icon: <Users size={32} />,
    title: "User Dashboard",
    desc: "Save analysis history and manage projects.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Powerful Features
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to validate product ideas,
            analyze markets, and build successful startups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:scale-105
              transition-all
              duration-300
              "
            >
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>

              <h2 className="text-xl font-bold mb-3">
                {feature.title}
              </h2>

              <p className="text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}