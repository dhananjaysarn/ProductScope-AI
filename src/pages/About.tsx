import { Brain, Globe, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen px-8 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          About ProductScope AI
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          ProductScope AI helps entrepreneurs validate product
          ideas using AI-powered market research, trend
          analysis, competitor insights, and opportunity
          detection.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 p-8 rounded-3xl">
            <Brain size={40} />
            <h2 className="text-2xl font-bold mt-4">
              AI Analysis
            </h2>
            <p className="text-gray-400 mt-2">
              Smart AI powered product evaluation.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl">
            <TrendingUp size={40} />
            <h2 className="text-2xl font-bold mt-4">
              Market Trends
            </h2>
            <p className="text-gray-400 mt-2">
              Understand demand and growth potential.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl">
            <Globe size={40} />
            <h2 className="text-2xl font-bold mt-4">
              Global Insights
            </h2>
            <p className="text-gray-400 mt-2">
              Explore opportunities worldwide.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}