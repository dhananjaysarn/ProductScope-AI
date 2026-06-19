interface Competitor {
  name: string;
  position: string;
  demand: string;
  price: string;
}

const competitors: Competitor[] = [
  {
    name: "Canva",
    position: "Premium",
    demand: "High",
    price: "$15",
  },
  {
    name: "Resume.io",
    position: "Budget",
    demand: "Medium",
    price: "$8",
  },
  {
    name: "Zety",
    position: "Professional",
    demand: "High",
    price: "$12",
  },
];

export default function CompetitorTable() {
  return (
    <div
      className="
      bg-white/5
      rounded-3xl
      p-8
      border
      border-white/10
      "
    >

      <h2 className="text-3xl font-bold mb-8">
        Competitor Analysis
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4">
                Company
              </th>

              <th className="text-left py-4">
                Position
              </th>

              <th className="text-left py-4">
                Demand
              </th>

              <th className="text-left py-4">
                Price
              </th>

            </tr>

          </thead>

          <tbody>

            {competitors.map(
              (item) => (

                <tr
                  key={item.name}
                  className="
                  border-b
                  border-white/5
                  "
                >

                  <td className="py-4">
                    {item.name}
                  </td>

                  <td className="py-4">
                    {item.position}
                  </td>

                  <td className="py-4">
                    {item.demand}
                  </td>

                  <td className="py-4">
                    {item.price}
                  </td>

                </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}