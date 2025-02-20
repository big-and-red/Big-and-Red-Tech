import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-4">О проекте</h2>
        <p className="text-gray-600 mb-4">
          Big and Red Tech Portal - это образовательная платформа, созданная для помощи разработчикам в изучении Python и связанных технологий.
        </p>
        <p className="text-gray-600">
          Наша цель - предоставить структурированный путь обучения от начинающего до senior-разработчика.
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Как использовать портал</h2>
        <ul className="space-y-3 text-gray-600">
          <li>• Roadmap - следуйте учебному плану и изучайте материалы</li>
          <li>• Q&A - проверяйте свои знания с помощью вопросов и ответов</li>
          <li>• Переключайтесь между уровнями "0 to Middle" и "Middle to Senior"</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutPage;