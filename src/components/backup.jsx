import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Code,
  Database,
  Globe,
  Zap,
  Cog,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ModuleCard = ({ title, topics, completion, icon: Icon, gradient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden"
    >
      <div className={`
        bg-white rounded-xl p-6 mb-6
        shadow-lg hover:shadow-xl transition-shadow
        border-l-8 ${gradient.border}
      `}>
        {/* Декоративный фоновый элемент */}
        <div className={`
          absolute top-0 right-0 w-32 h-32 opacity-10
          transform translate-x-16 -translate-y-16
          ${gradient.bg} rounded-full
        `}/>

        <div 
          className="flex justify-between items-center cursor-pointer relative z-10"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-4">
            <div className={`
              p-3 rounded-lg ${gradient.bg} text-white
              shadow-lg
            `}>
              <Icon className="w-6 h-6" />
            </div>
            <h2 className={`text-xl font-bold ${gradient.text}`}>{title}</h2>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <ChevronUp className={`w-6 h-6 ${gradient.text}`} />
            ) : (
              <ChevronDown className={`w-6 h-6 ${gradient.text}`} />
            )}
          </motion.div>
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
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <span className={`w-2 h-2 rounded-full ${gradient.bg} mr-3`}/>
                    <span className="hover:translate-x-1 transition-transform">
                      {topic}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {completion && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`
                    mt-6 pt-4 border-t-2 ${gradient.borderLight}
                  `}
                >
                  <h3 className={`font-semibold ${gradient.text} mb-3 flex items-center`}>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Завершение
                  </h3>
                  <ul className="space-y-3">
                    {completion.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (topics.length + index) * 0.1 }}
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <span className={`w-2 h-2 rounded-full ${gradient.bg} mr-3`}/>
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

const Roadmap = () => {
  const modules = [
    {
      title: "Модуль 1: Основы Python",
      icon: Code,
      gradient: {
        bg: "bg-gradient-to-r from-red-500 to-red-600",
        text: "text-red-500",
        border: "border-red-500",
        borderLight: "border-red-200"
      },
      topics: [
        "Базовый Python синтаксис",
        "Виртуальные окружения + pip",
        "Git основы",
        "Базовое тестирование (pytest)",
        "Решение задач с отправкой в Git"
      ],
      completion: [
        "Мини-собеседование по базе",
        "Практическое задание"
      ]
    },
    {
      title: "Модуль 2: ООП и структуры данных",
      icon: Database,
      gradient: {
        bg: "bg-gradient-to-r from-red-600 to-red-700",
        text: "text-red-600",
        border: "border-red-600",
        borderLight: "border-red-300"
      },
      topics: [
        "Структуры данных и алгоритмы",
        "ООП + SOLID",
        "Базовые паттерны проектирования",
        "Задачи в Git"
      ],
      completion: [
        "Мини-собеседование (база + ООП)",
        "Практическое задание"
      ]
    },
    {
      title: "Модуль 3: Web Backend",
      icon: Globe,
      gradient: {
        bg: "bg-gradient-to-r from-red-700 to-red-800",
        text: "text-red-700",
        border: "border-red-700",
        borderLight: "border-red-400"
      },
      topics: [
        "Django + DRF",
        "JWT + Swagger",
        "Параллельно SQL (PostgreSQL)",
        "Базовый Docker",
        "Проект на Django"
      ],
      completion: [
        "Мини-собеседование (база + ООП + Django + SQL)",
        "Практическое задание"
      ]
    },
    {
      title: "Модуль 4: Современный Backend",
      icon: Zap,
      gradient: {
        bg: "bg-gradient-to-r from-red-800 to-red-900",
        text: "text-red-800",
        border: "border-red-800",
        borderLight: "border-red-500"
      },
      topics: [
        "FastAPI",
        "Асинхронность",
        "Pydantic",
        "SQLAlchemy",
        "Проект на FastAPI",
        "Параллельно углубленное изучение БД"
      ],
      completion: [
        "Мини-собеседование (база + ООП + Django + FastAPI + SQL)",
        "Практическое задание"
      ]
    },
    {
      title: "Модуль 5: Финальный этап",
      icon: Cog,
      gradient: {
        bg: "bg-gradient-to-r from-red-900 to-black",
        text: "text-red-900",
        border: "border-red-900",
        borderLight: "border-red-600"
      },
      topics: [
        "Redis + Kafka",
        "CI/CD основы",
        "Архитектурные паттерны",
        "Финальный проект (FastAPI + Redis + Kafka + Docker)"
      ],
      completion: [
        "Итоговое собеседование",
        "Публикация всех проектов на GitHub"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-4">
          Big and Red Tech Roadmap
        </h1>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-4">
          0 to Middle
        </h2>
        <p className="text-gray-600">Ваш путь к профессиональной разработке на Python</p>
      </motion.div>
      
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
          {[
            "Code review",
            "Работа с документацией",
            "Практика решения задач",
            "Ведение портфолио на GitHub"
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-3"/>
              <span className="hover:translate-x-1 transition-transform">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Roadmap;