import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HighlightCard = ({ item, itemKey, active, setActive }) => {
  const isActive = active === itemKey;

  return (
    <motion.div
      className="relative group rounded-3xl p-6 md:p-8 bg-white/10 hover:bg-white/20 backdrop-blur-xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 border border-white/10 overflow-hidden"
      onMouseEnter={() => setActive(itemKey)}
      onMouseLeave={() => setActive(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-6">
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl shadow-xl transition-transform duration-500 group-hover:scale-110`}
        >
          {item.icon}
        </div>
        <p className="text-2xl font-semibold tracking-wide text-orange-400 group-hover:text-white transition-colors duration-300">
          {item.title}
        </p>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="mt-6 p-5 bg-white text-gray-900 rounded-xl shadow-lg transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-base leading-relaxed font-medium">
              {item.description}
            </p>
            <p className="mt-3 text-sm italic text-gray-500 border-l-4 border-orange-500 pl-4">
              “{item.quote}”
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HighlightCard;
