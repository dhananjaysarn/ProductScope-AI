import TrendChart
from "./TrendChart";

export default function Overview() {

  return (
    <div>

      <h1
      className="
      text-5xl
      font-bold
      mb-8
      "
      >
        Dashboard
      </h1>

      <div
      className="
      grid
      md:grid-cols-4
      gap-6
      "
      >

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Total Analyses</h2>
          <p className="text-4xl font-bold">
            156
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Success Rate</h2>
          <p className="text-4xl font-bold">
            87%
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Opportunities</h2>
          <p className="text-4xl font-bold">
            42
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Competitors</h2>
          <p className="text-4xl font-bold">
            18
          </p>
        </div>

      </div>

      <div className="mt-10">

        <TrendChart />

      </div>

    </div>
  );
}