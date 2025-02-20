import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import RoadmapPage from "./RoadmapPage";
import QAPage from "./QAPage";
import AboutPage from "./AboutPage";
import LevelSwitch from "../components/LevelSwitch";

const TechPortalPage = () => {
  const [activePage, setActivePage] = useState("roadmap");
  const [activeLevel, setActiveLevel] = useState("junior");

  const getLevelTitle = () => {
    return activeLevel === "junior" ? "0 to Middle" : "Middle to Senior";
  };

  const renderContent = () => {
    switch (activePage) {
      case "roadmap":
        return (
          <motion.div
            key="roadmap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <RoadmapPage activeLevel={activeLevel} />
          </motion.div>
        );
      case "qa":
        return (
          <motion.div
            key="qa"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <QAPage activeLevel={activeLevel} />
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <AboutPage />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-4">
          Big and Red Tech Portal
        </h1>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-4">
          {getLevelTitle()}
        </h2>
        <p className="text-gray-600">
          Ваш путь к профессиональной разработке на Python
        </p>
      </motion.div>

      {activePage !== "about" && (
        <LevelSwitch activeLevel={activeLevel} setActiveLevel={setActiveLevel} />
      )}

      <Navigation activePage={activePage} setActivePage={setActivePage} />

      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
};

export default TechPortalPage;