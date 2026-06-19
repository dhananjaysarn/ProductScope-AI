import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

export default function Pricing() {
const navigate = useNavigate();

return ( <div className="min-h-screen py-24 px-6">

```
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <h1 className="text-6xl font-bold mb-6">
        Pricing Plans
      </h1>

      <p className="text-gray-400 text-xl">
        Choose the perfect plan for your startup journey.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* FREE */}

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur-xl
        "
      >
        <h2 className="text-3xl font-bold">
          Free
        </h2>

        <p className="text-5xl font-bold my-6">
          ₹0
        </p>

        <ul className="space-y-4 mb-8">

          <li className="flex gap-2">
            <Check size={18} />
            5 Analyses / Day
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            Basic Reports
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            Community Support
          </li>

        </ul>

        <button
          onClick={() =>
            navigate("/signup")
          }
          className="
          w-full
          py-3
          rounded-xl
          bg-white/10
          hover:bg-white/20
          "
        >
          Get Started
        </button>

      </div>

      {/* PRO */}

      <div
        className="
        rounded-3xl
        p-8
        bg-gradient-to-br
        from-violet-600
        to-cyan-500
        scale-105
        shadow-2xl
        "
      >

        <div className="mb-3">
          <span
            className="
            bg-black/20
            px-3
            py-1
            rounded-full
            text-sm
            "
          >
            MOST POPULAR
          </span>
        </div>

        <h2 className="text-3xl font-bold">
          Pro
        </h2>

        <p className="text-5xl font-bold my-6">
          ₹499
        </p>

        <ul className="space-y-4 mb-8">

          <li className="flex gap-2">
            <Check size={18} />
            Unlimited Analyses
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            AI Reports
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            PDF Export
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            Priority Support
          </li>

        </ul>

        <button
          onClick={() =>
            alert(
              "Razorpay Integration Coming Soon"
            )
          }
          className="
          w-full
          py-3
          rounded-xl
          bg-black/20
          hover:bg-black/30
          "
        >
          Buy Pro
        </button>

      </div>

      {/* BUSINESS */}

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur-xl
        "
      >
        <h2 className="text-3xl font-bold">
          Business
        </h2>

        <p className="text-5xl font-bold my-6">
          ₹1499
        </p>

        <ul className="space-y-4 mb-8">

          <li className="flex gap-2">
            <Check size={18} />
            Team Access
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            Advanced Analytics
          </li>

          <li className="flex gap-2">
            <Check size={18} />
            API Access
          </li>

        </ul>

        <button
          onClick={() =>
            navigate("/contact")
          }
          className="
          w-full
          py-3
          rounded-xl
          bg-white/10
          hover:bg-white/20
          "
        >
          Contact Sales
        </button>

      </div>

    </div>

  </div>

</div>

);
}
