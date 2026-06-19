import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="
      min-h-screen
      pt-28
      flex
      items-center
      justify-center
      px-6
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-violet-900/20
        via-transparent
        to-cyan-900/20
        "
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">

        {/* Left Side */}

        <div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-6xl
            lg:text-8xl
            font-black
            leading-tight
            "
          >
            Validate Ideas

            <span
              className="
              block
              bg-gradient-to-r
              from-cyan-400
              via-violet-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              Before Building
            </span>

          </motion.h1>

          <p
            className="
            mt-8
            text-xl
            text-gray-300
            max-w-xl
            "
          >
            AI-powered market intelligence,
            competitor research, growth forecasting,
            and startup validation for entrepreneurs.
          </p>

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >

            <button
              onClick={() =>
                navigate("/analysis")
              }
              className="
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
              Analyze Product
            </button>

            <button
              onClick={() =>
                navigate("/features")
              }
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              hover:bg-white/10
              transition
              "
            >
              Explore Features
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative h-[500px]">

          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
            absolute
            top-10
            right-10
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <p className="text-gray-400">
              Success Score
            </p>

            <h2
              className="
              text-5xl
              font-bold
              text-cyan-400
              "
            >
              89%
            </h2>

          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            absolute
            bottom-10
            left-10
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <p className="text-gray-400">
              Market Demand
            </p>

            <h2
              className="
              text-4xl
              font-bold
              text-green-400
              "
            >
              High
            </h2>

          </motion.div>

          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
            absolute
            top-52
            left-28
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            <p className="text-gray-400">
              Growth Potential
            </p>

            <h2
              className="
              text-4xl
              font-bold
              text-violet-400
              "
            >
              95%
            </h2>

          </motion.div>

        </div>

      </div>

    </section>
  );
}