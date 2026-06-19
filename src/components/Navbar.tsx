import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  BarChart3,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Analysis",
      path: "/analysis",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      "
    >
      <div
        className="
        backdrop-blur-xl
        bg-black/20
        border-b
        border-white/10
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
          "
        >

          {/* Logo */}

          <Link
            to="/"
            className="
            flex
            items-center
            gap-3
            "
          >
            <div
              className="
              w-10
              h-10
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              flex
              items-center
              justify-center
              "
            >
              <BarChart3 size={20} />
            </div>

            <span
              className="
              text-2xl
              font-bold
              "
            >
              ProductScope
            </span>
          </Link>

          {/* Desktop Links */}

          <nav
            className="
            hidden
            lg:flex
            items-center
            gap-8
            "
          >
            {links.map((link) => (

              <Link
                key={link.name}
                to={link.path}
                className={`
                transition
                hover:text-cyan-400
                ${
                  location.pathname ===
                  link.path
                    ? "text-cyan-400"
                    : "text-white"
                }
                `}
              >
                {link.name}
              </Link>

            ))}
          </nav>

          {/* Search */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-2
            bg-white/5
            border
            border-white/10
            rounded-xl
            px-4
            py-2
            "
          >
            <Search size={18} />

            <input
              placeholder="Search..."
              className="
              bg-transparent
              outline-none
              text-sm
              "
            />
          </div>

          {/* Buttons */}

          <div
            className="
            hidden
            lg:flex
            items-center
            gap-3
            "
          >

            <Link
              to="/login"
              className="
              px-5
              py-2
              rounded-xl
              border
              border-white/10
              hover:bg-white/10
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              "
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
          >
            {mobileOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (

          <div
            className="
            lg:hidden
            px-6
            pb-6
            "
          >

            <div
              className="
              flex
              flex-col
              gap-4
              "
            >

              {links.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() =>
                    setMobileOpen(
                      false
                    )
                  }
                >
                  {link.name}
                </Link>

              ))}

              <Link
                to="/login"
                onClick={() =>
                  setMobileOpen(
                    false
                  )
                }
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() =>
                  setMobileOpen(
                    false
                  )
                }
              >
                Sign Up
              </Link>

            </div>

          </div>

        )}

      </div>
    </header>
  );
}