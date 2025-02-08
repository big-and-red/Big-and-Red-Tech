import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import ModuleCard from "../components/ModuleCard";
import { modules } from "../constants/modules/modules";

const stages = [
  "Code review",
  "Работа с документацией",
  "Практика решения задач",
  "Ведение портфолио на GitHub",
];
const RoadmapPage = () => {
  return (
    <>
      <div className="space-y-6">
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 bg-white rounded-xl border-l-8 border-red-500 shadow-lg"
      >
        <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          Параллельно на всех этапах:
        </h3>
        <ul className="grid grid-cols-2 gap-4">
          {stages.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-3" />
              <span className="hover:translate-x-1 transition-transform">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default RoadmapPage;
