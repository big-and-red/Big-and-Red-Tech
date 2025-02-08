import React, { useState } from "react";
import { ChevronDown, CheckCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ModuleCard = ({ title, topics, completion, icon: Icon, gradient }) => {
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
          className={`
          absolute top-0 right-0 w-32 h-32 opacity-10
          transform translate-x-16 -translate-y-16
          ${gradient.bg} rounded-full
        `}
        />

        <div
          className="flex justify-between items-center cursor-pointer relative z-10"
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
              className="overflow-hidden relative z-10"
            >
              <ul className="mt-6 space-y-3">
                {topics.map((topic, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4 last:mb-0"
                  >
                    <div className="flex flex-col text-gray-700 hover:text-gray-900 mb-2">
                      <div className="flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full ${gradient.bg} mr-3`}
                        />
                        <span className="font-medium">{topic.name}</span>
                      </div>
                      {topic.description && (
                        <p className="text-sm text-gray-500 mt-1 ml-5">
                          {topic.description}
                        </p>
                      )}
                    </div>
                    <div className="ml-5 space-y-2">
                      {topic.resources?.map((resource, rIndex) => (
                        <motion.a
                          key={rIndex}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm hover:text-red-600 transition-colors duration-200 pl-4"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <span>{resource.title}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>

              {completion && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-6 pt-4 border-t-2 ${gradient.borderLight}`}
                >
                  <h3
                    className={`font-semibold ${gradient.text} mb-3 flex items-center`}
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Завершение
                  </h3>
                  <ul className="space-y-3">
                    {completion.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${gradient.bg} mr-3`}
                        />
                        <span className="hover:translate-x-1 transition-transform">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
