import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import QuestionItem from "./QuestionItem";

const QAModuleCard = ({ title, questions, icon: Icon, gradient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden"
    >
      <div
        className={`
        bg-white rounded-xl p-6 mb-6
        shadow-lg hover:shadow-xl transition-shadow
        border-l-8 ${gradient.border}
      `}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-lg ${gradient.bg} text-white shadow-lg`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <h2 className={`text-xl font-bold ${gradient.text}`}>{title}</h2>
          </div>
          <ChevronDown
            className={`w-6 h-6 ${gradient.text} transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-4"
            >
              {questions.map((q, index) => (
                <QuestionItem key={index} {...q} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default QAModuleCard;
