export default function Features() {
  const cards = [
    "AI Product Analysis",
    "Competitor Tracking",
    "Market Trends",
    "Growth Forecasting",
    "Opportunity Score",
    "Risk Detection",
  ];

  return (
    <section className="py-32 px-6">

      <h2 className="text-5xl font-bold text-center mb-20">
        Powerful Features
      </h2>

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-6
      "
      >
        {cards.map((item) => (
          <div
            key={item}
            className="
            p-8
            rounded-3xl
            backdrop-blur-xl
            bg-white/5
            border
            border-white/10
            hover:scale-105
            transition
          "
          >
            <h3 className="text-2xl font-semibold">
              {item}
            </h3>

            <p className="mt-4 text-gray-400">
              Premium AI powered insights
              and analytics.
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}