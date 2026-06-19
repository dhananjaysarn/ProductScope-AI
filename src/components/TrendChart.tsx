import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", trend: 40 },
  { month: "Feb", trend: 55 },
  { month: "Mar", trend: 60 },
  { month: "Apr", trend: 72 },
  { month: "May", trend: 85 },
  { month: "Jun", trend: 95 },
];

export default function TrendChart() {
  return (
    <div
      className="
      h-[400px]
      bg-white/5
      rounded-3xl
      border
      border-white/10
      p-6
      "
    >

      <h2 className="text-3xl font-bold mb-6">
        Market Trend Analysis
      </h2>

      <ResponsiveContainer
        width="100%"
        height="85%"
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="trend"
            stroke="#7B61FF"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}