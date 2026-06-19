import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Features from "./pages/Features";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B1020] text-white">

        <Navbar />

        <Routes>

          {/* Public Pages */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/features"
            element={<Features />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/reviews"
            element={<Reviews />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Auth */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/analysis"
            element={<Analysis />}
          />

          <Route
            path="/history"
            element={<History />}
          />

          {/* 404 */}

          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-5xl font-bold">
                  404 - Page Not Found
                </h1>
              </div>
            }
          />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;