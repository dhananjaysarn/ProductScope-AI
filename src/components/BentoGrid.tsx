import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "AI Analysis",
    desc: "Analyze product ideas using advanced AI.",
    icon: <Brain size={40} />,
  },
  {
    title: "Trend Forecasting",
    desc: "Track future demand and growth.",
    icon: <TrendingUp size={40} />,
  },
  {
    title: "Risk Detection",
    desc: "Detect risks before investing.",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "Global Market",
    desc: "Find worldwide opportunities.",
    icon: <Globe size={40} />,
  },
];

export default function BentoGrid() {
  return (
    <section>

      <h2 className="text-5xl font-bold text-center mb-16">
        ProductScope Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item) => (

          <div
            key={item.title}
            className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            hover:scale-105
            transition
            "
          >

            <div className="text-cyan-400 mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}