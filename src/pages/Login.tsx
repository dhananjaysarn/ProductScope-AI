import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  useNavigate,
  Link,
} from "react-router-dom";

export default function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const { login } = useAuth();

  const navigate =
    useNavigate();

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setError("");

    if (!email || !password) {

      setError(
        "Email and password required"
      );

      return;
    }

    login("dummy-token");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="
        w-full
        max-w-md
        p-8
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        "
      >

        <h1 className="text-4xl font-bold mb-8">
          Login
        </h1>

        {error && (
          <div className="bg-red-500/20 text-red-300 p-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        <input
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="
          w-full
          p-4
          rounded-xl
          bg-black/30
          mb-4
          "
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="
          w-full
          p-4
          rounded-xl
          bg-black/30
          mb-4
          "
          placeholder="Password"
        />

        <Link
          to="/forgot-password"
          className="
          text-cyan-400
          text-sm
          "
        >
          Forgot Password?
        </Link>

        <button
          className="
          w-full
          mt-4
          py-4
          rounded-xl
          bg-gradient-to-r
          from-violet-500
          to-cyan-500
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}