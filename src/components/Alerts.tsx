export default function Alerts() {

  const alerts = [

    {
      type:
      "Opportunity",
      msg:
      "AI Resume Builder demand increased 22%",
    },

    {
      type:
      "Risk",
      msg:
      "Competition rising in SaaS category",
    },

  ];

  return (
    <div>

      <h1
      className="
      text-4xl
      font-bold
      mb-8
      "
      >
        Alerts
      </h1>

      {alerts.map(
        (alert, index) => (

          <div
          key={index}
          className="
          bg-white/5
          p-6
          rounded-3xl
          mb-4
          "
          >

            <h2 className="font-bold">
              {alert.type}
            </h2>

            <p>
              {alert.msg}
            </p>

          </div>

      ))}

    </div>
  );
}