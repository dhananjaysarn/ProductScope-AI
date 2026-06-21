import { useState } from "react";
import Overview from "../components/Overview";
import Alerts from "../components/Alerts";
import SettingsPage from "../components/SettingsPage";
import {
  LayoutDashboard,
  Search,
  Bell,
  Settings,
} from "lucide-react";

import Analysis from "./Analysis";


export default function Dashboard() {

  const [active, setActive] =
    useState("overview");

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}

      <div
        className="
        w-72
        bg-white/5
        border-r
        border-white/10
        p-6
        "
      >

        <h1 className="text-3xl font-bold mb-10">
          ProductScope
        </h1>

        <div className="space-y-3">

          <button
            onClick={() =>
              setActive("overview")
            }
            className="
            w-full
            flex
            gap-3
            p-4
            rounded-xl
            hover:bg-white/10
            "
          >
            <LayoutDashboard />
            Dashboard
          </button>

          <button
            onClick={() =>
              setActive("analysis")
            }
            className="
            w-full
            flex
            gap-3
            p-4
            rounded-xl
            hover:bg-white/10
            "
          >
            <Search />
            Analysis
          </button>

          <button
            onClick={() =>
              setActive("alerts")
            }
            className="
            w-full
            flex
            gap-3
            p-4
            rounded-xl
            hover:bg-white/10
            "
          >
            <Bell />
            Alerts
          </button>

          <button
            onClick={() =>
              setActive("settings")
            }
            className="
            w-full
            flex
            gap-3
            p-4
            rounded-xl
            hover:bg-white/10
            "
          >
            <Settings />
            Settings
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="flex-1 p-10">

        {active === "overview" &&
          <Overview />}

        {active === "analysis" &&
          <Analysis />}

        {active === "alerts" &&
          <Alerts />}

        {active === "settings" &&
          <SettingsPage />}

      </div>

    </div>
  );
}