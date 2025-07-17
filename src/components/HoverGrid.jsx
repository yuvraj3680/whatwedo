import React, { useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExploreIcon from "@mui/icons-material/Explore";
import LoopIcon from "@mui/icons-material/Loop";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import SyncIcon from "@mui/icons-material/Sync";
import { motion } from "framer-motion";

const items = [
  {
    title: "Design",
    icon: <DesignServicesIcon fontSize="large" />, 
    color: "from-blue-500 to-blue-800",
    description: "Clean, modern, and user-friendly designs that match your brand.",
  },
  {
    title: "Develop",
    icon: <DeveloperModeIcon fontSize="large" />, 
    color: "from-green-500 to-green-800",
    description: "Secure, fast, and scalable websites built with the latest technology.",
  },
  {
    title: "Deploy",
    icon: <RocketLaunchIcon fontSize="large" />, 
    color: "from-purple-500 to-purple-800",
    description: "Smooth and successful launches with everything running perfectly.",
  },
  {
    title: "Plan",
    icon: <ExploreIcon fontSize="large" />, 
    color: "from-yellow-400 to-yellow-600",
    description: "We understand your goals and create a clear strategy.",
  },
  {
    title: "Pivot",
    icon: <LoopIcon fontSize="large" />, 
    color: "from-orange-400 to-orange-600",
    description: "We adapt quickly to change or new ideas.",
  },
  {
    title: "Progress",
    icon: <TrendingUpIcon fontSize="large" />, 
    color: "from-pink-500 to-pink-700",
    description: "We grow your digital presence through continuous improvements.",
  },
];

const highlightedItems = [
  {
    title: "Communication",
    icon: <ChatIcon fontSize="large" />, 
    color: "from-indigo-500 to-indigo-800",
    description: "You’re always updated with transparent communication.",
  },
  {
    title: "Collaboration",
    icon: <GroupsIcon fontSize="large" />, 
    color: "from-emerald-500 to-emerald-800",
    description: "We work hand-in-hand with your team throughout the project.",
  },
  {
    title: "Coordination",
    icon: <SyncIcon fontSize="large" />, 
    color: "from-cyan-500 to-cyan-800",
    description: "Timelines and tasks are aligned for smooth delivery.",
  },
];

const HoverGrid = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c1f24] to-[#252c33] text-white px-6 py-20 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-orange-500 mb-16"
      >
        What We Do
      </motion.h1>

      {/* Main Service Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            className="relative rounded-2xl overflow-hidden border border-white/10 p-0 shadow-xl group bg-gradient-to-br from-[#2b2e32] to-[#1e2226] hover:scale-[1.03] hover:shadow-[0_0_40px_#ffa50080] transition-all duration-500 backdrop-blur-md"
          >
            <div className="relative z-10 px-6 py-8 md:px-8 md:py-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold mb-2 text-white transition-all duration-300 group-hover:text-orange-400">
                  {item.title}
                </h3>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                >
                  {item.icon}
                </motion.div>
              </div>
              <motion.div
                className={`transition-all duration-500 ease-in-out ${
                  active === idx
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 h-0 overflow-hidden"
                }`}
              >
                <p className="text-[15px] leading-relaxed text-white/90">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Highlighted Cards at Bottom */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {highlightedItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActive(idx + items.length)}
            onMouseLeave={() => setActive(null)}
            className="relative rounded-2xl overflow-hidden border border-white/10 p-0 shadow-xl group bg-gradient-to-br from-[#2b2e32] to-[#1e2226] hover:scale-[1.03] hover:shadow-[0_0_40px_#ffa50080] transition-all duration-500 backdrop-blur-md"
          >
            <div className="relative z-10 px-6 py-8 md:px-8 md:py-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold mb-2 text-white transition-all duration-300 group-hover:text-orange-400">
                  {item.title}
                </h3>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                >
                  {item.icon}
                </motion.div>
              </div>
              <motion.div
                className={`transition-all duration-500 ease-in-out ${
                  active === idx + items.length
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 h-0 overflow-hidden"
                }`}
              >
                <p className="text-[15px] leading-relaxed text-white/90">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
 
export default HoverGrid;
