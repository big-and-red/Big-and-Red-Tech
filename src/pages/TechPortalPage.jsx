import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navigation from "../components/Navigation";
import RoadmapPage from "./RoadmapPage";
import QAPage from "./QAPage";

const TechPortalPage = () => {
  const [activePage, setActivePage] = useState("roadmap");

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-4">
          Big and Red Tech Portal
        </h1>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-4">
          0 to Middle
        </h2>
        <p className="text-gray-600">
          Ваш путь к профессиональной разработке на Python
        </p>
      </motion.div>

      {/* Navigation */}
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {/* Content */}
      <AnimatePresence mode="wait">
        {activePage === "roadmap" ? (
          <motion.div
            key="roadmap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <RoadmapPage />
          </motion.div>
        ) : (
          <motion.div
            key="qa"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <QAPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechPortalPage;
