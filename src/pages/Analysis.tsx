import { useState } from "react";
import api from "../services/api";

export default function Analysis() {
  const [product, setProduct] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<any>(null);

  const analyzeProduct =
    async () => {

      if (!product.trim()) {
        alert(
          "Please enter a product name"
        );
        return;
      }

      try {

        setLoading(true);

        const response =
          await api.post(
            "/analyze",
            {
              product,
              category:
                "startup",
            }
          );

        setResult(
          response.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  return (
    <div
      className="
      min-h-screen
      pt-36
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        "
      >

        {/* Header */}

        <div
          className="
          text-center
          mb-20
          "
        >

          <h1
            className="
            text-6xl
            font-black
            mb-6
            "
          >
            Product Analysis
          </h1>

          <p
            className="
            text-xl
            text-gray-400
            max-w-3xl
            mx-auto
            "
          >
            Analyze startup ideas,
            products and businesses
            using AI-powered market
            intelligence.
          </p>

        </div>

        {/* Search Box */}

        <div
          className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          mb-12
          "
        >

          <label
            className="
            block
            text-lg
            mb-4
            "
          >
            Product Name
          </label>

          <input
            type="text"
            placeholder="Example: AI Resume Builder"
            value={product}
            onChange={(e) =>
              setProduct(
                e.target.value
              )
            }
            className="
            w-full
            p-5
            rounded-2xl
            bg-black/20
            border
            border-white/10
            outline-none
            "
          />

          <button
            onClick={
              analyzeProduct
            }
            disabled={
              loading
            }
            className="
            mt-6
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            hover:scale-105
            transition
            "
          >
            {loading
              ? "Analyzing..."
              : "Analyze"}
          </button>

        </div>

        {/* Results */}

        {result && (

          <div
            className="
            grid
            md:grid-cols-2
            gap-6
            "
          >

            <div
              className="
              bg-white/5
              rounded-3xl
              p-8
              "
            >
              <h2>
                Success Score
              </h2>

              <p
                className="
                text-5xl
                font-bold
                text-cyan-400
                "
              >
                {
                  result.successScore
                }
                %
              </p>

            </div>

            <div
              className="
              bg-white/5
              rounded-3xl
              p-8
              "
            >
              <h2>
                Risk Level
              </h2>

              <p
                className="
                text-5xl
                font-bold
                text-red-400
                "
              >
                {
                  result.risk
                }
              </p>

            </div>

            <div
              className="
              bg-white/5
              rounded-3xl
              p-8
              "
            >
              <h2>
                Market Scope
              </h2>

              <p
                className="
                text-3xl
                font-bold
                "
              >
                {
                  result.marketScope
                }
              </p>

            </div>

            <div
              className="
              bg-white/5
              rounded-3xl
              p-8
              "
            >
              <h2>
                Growth Estimate
              </h2>

              <p
                className="
                text-3xl
                font-bold
                "
              >
                {
                  result.growth
                }
              </p>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}