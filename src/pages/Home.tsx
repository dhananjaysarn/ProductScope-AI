import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import TrendChart from "../components/TrendChart";
import CompetitorTable from "../components/CompetitorTable";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              10K+
            </h2>
            <p className="text-gray-400 mt-2">
              Product Analyses
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-violet-400">
              95%
            </h2>
            <p className="text-gray-400 mt-2">
              Success Accuracy
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              500+
            </h2>
            <p className="text-gray-400 mt-2">
              Startups Analyzed
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-violet-400">
              120+
            </h2>
            <p className="text-gray-400 mt-2">
              Opportunities Found
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <BentoGrid />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <TrendChart />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <CompetitorTable />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div
          className="
          bg-gradient-to-r
          from-violet-600/20
          to-cyan-500/20
          border
          border-white/10
          rounded-[40px]
          p-16
          text-center
          "
        >

          <h2 className="text-6xl font-bold mb-6">
            Ready To Validate Your Idea?
          </h2>

          <p className="text-gray-400 text-xl mb-8">
            Use AI-powered market research before investing your time and money.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/analysis"
              className="
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              "
            >
              Start Analysis
            </Link>

            <Link
              to="/pricing"
              className="
              px-8
              py-4
              rounded-xl
              bg-white/10
              "
            >
              View Pricing
            </Link>

            <Link
              to="/reviews"
              className="
              px-8
              py-4
              rounded-xl
              bg-white/10
              "
            >
              Reviews
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}