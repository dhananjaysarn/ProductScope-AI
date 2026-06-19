import {
  PieChart,
  Pie,
  Tooltip
} from "recharts";

export default function SuccessChart({
  score,
}: {
  score: number;
}) {

  const data = [
    {
      name: "Success",
      value: score,
    },
    {
      name: "Remaining",
      value: 100 - score,
    },
  ];

  return (
    <PieChart
      width={300}
      height={300}
    >
      <Pie
        data={data}
        dataKey="value"
      />

      <Tooltip />
    </PieChart>
  );
}