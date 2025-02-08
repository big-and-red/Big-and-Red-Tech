import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Code2,
  Database,
  Globe,
  Zap,
  Cog,
  CheckCircle,
  ExternalLink,
  HelpCircle,
  BookOpen,
  MessageSquare
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
      className="mb-4 last:mb-0"
    >
      <div className="flex flex-col text-gray-700 hover:text-gray-900 mb-2">
        <div className="flex items-center">
          <span className={`w-2 h-2 rounded-full ${gradient.bg} mr-3`}/>
          <span className="font-medium">{topic.name}</span>
        </div>
        {topic.description && (
          <p className="text-sm text-gray-500 mt-1 ml-5">
            {topic.description}
          </p>
        )}
      </div>
      <div className="ml-5 space-y-2">
        {topic.resources.map((resource, rIndex) => (
          <motion.a
            key={rIndex}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index * 0.1) + (rIndex * 0.05) }}
            className={`
              flex items-center text-sm hover:text-red-600 
              transition-colors duration-200 pl-4
            `}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
  {resource.title.split('*').map((part, i, arr) => 
    i === arr.length - 1 ? (
      <span key={i}>{part}</span>
    ) : (
      <span key={i}>
        {part}<span className="text-red-500">*</span>
      </span>
    )
  )}
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
                        transition={{ delay: (index) * 0.1 }}
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
      icon: Code2,
      gradient: {
        bg: "bg-gradient-to-r from-red-500 to-red-600",
        text: "text-red-500",
        border: "border-red-500",
        borderLight: "border-red-200"
      },
      topics: [
        {
          name: "Базовый Python синтаксис",
          resources: [
            { title: "Базовый Python в тексте Hexlet*", url: "https://ru.hexlet.io/courses/python-basics" },
            { title: "Добрый python, Selfedu, видео курс", url: "https://www.youtube.com/playlist?list=PLA0M1Bcd0w8yWHh2V70bTtbVxJICrnJHd" },
            { title: "Python for begginers, видео курс", url: "https://www.youtube.com/playlist?list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6" }
          ]
        },
        {
          name: "Виртуальные окружения + pip",
          description: "Надо знать: как и зачем нужны виртуальные окружения, файл зависимостей",
          resources: [
            { title: "Виртуальное Окружение Python | venv и virtualenv*", url: "https://www.youtube.com/watch?v=OvocRhD9WSA" },
            { title: "Доп урок по окружениям", url: "https://www.youtube.com/watch?v=KOC0Gbo_0HY" },
            
          ]
        },
        {
          name: "Git основы",
          description: "Надо знать: ",
          resources: [
            { title: "Введение в Git, Hexlet*", url: "https://ru.hexlet.io/courses/intro_to_git" },
            { title: "Тренажер по Git", url: "https://learngitbranching.js.org/?locale=ru_RU" },

          ]
        }
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
        {
          name: "Структуры данных и алгоритмы",
          description: "Этого будет достаточно",
          resources: [
            { title: "Python Data Structures, видео курс, egoroff_channel", url: "https://www.youtube.com/watch?v=WBaL7ANQbzQ&list=PLQAt0m1f9OHsaqspc3ncC-WsuYyuRf2-f" },

          ]
        },
        {
          name: "ООП + SOLID",
          resources: [
            { title: "ООП, видео курс, selfedu", url: "https://www.youtube.com/watch?v=Z7AY41tE-3U&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E" },
            { title: "ООП, видео курс, egoroff_channel", url: "https://www.youtube.com/watch?v=Z7AY41tE-3U&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E" },
            { title: "Все о принципах SOLID", url: "https://www.youtube.com/watch?v=yeYRAXsUrow" }
          ]
        },

        {
          name: "Базовое тестирование (pytest)",
          description: "Надо знать: Базовые assert тесты, организация файлов, фикстуры, параметризация, маркеры, тестирование исключений, моки и патчи",
          resources: [
            { title: "Pytest, видео курс, Артём Шумейко", url: "https://www.youtube.com/watch?v=rAKIK5_UMzw&list=PLeLN0qH0-mCVdHgdjlnKTl4jKuJgCK-4b" },
            { title: "Pytest тестирование, видео курс, Luchanos", url: "https://semaphoreci.com/community/tutorials/testing-python-applications-with-pytest" }
          ]
        },

        {
          name: "Базовые паттерны проектирования",
          description: "Надо знать: Синглтон, Фабричный метод, Строитель, Адаптер, Декоратор, Стратегия, Repository Pattern, Service Layer, Unit of Work",
          resources: [
            { title: "Python Design Patterns", url: "https://refactoring.guru/ru/design-patterns/python" },
          ]
        }
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
        {
          name: "Django + DRF",
          resources: [
            { title: "Django Documentation", url: "https://docs.djangoproject.com/" },
            { title: "Django REST Framework", url: "https://www.django-rest-framework.org/" },
            { title: "Django for Beginners Book", url: "https://djangoforbeginners.com/" }
          ]
        },
        {
          name: "JWT + Swagger",
          resources: [
            { title: "Django REST Framework JWT", url: "https://django-rest-framework-simplejwt.readthedocs.io/" },
            { title: "DRF Swagger/OpenAPI", url: "https://drf-yasg.readthedocs.io/en/stable/" }
          ]
        },
        {
          name: "PostgreSQL",
          resources: [
            { title: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
            { title: "Django Database Documentation", url: "https://docs.djangoproject.com/en/stable/topics/db/" }
          ]
        }
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
        {
          name: "FastAPI",
          resources: [
            { title: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/" },
            { title: "FastAPI Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" }
          ]
        },
        {
          name: "Асинхронность",
          resources: [
            { title: "AsyncIO Documentation", url: "https://docs.python.org/3/library/asyncio.html" },
            { title: "Python Async Features", url: "https://realpython.com/async-io-python/" }
          ]
        },
        {
          name: "SQLAlchemy",
          resources: [
            { title: "SQLAlchemy Documentation", url: "https://docs.sqlalchemy.org/" },
            { title: "SQLAlchemy Tutorial", url: "https://docs.sqlalchemy.org/en/14/tutorial/" }
          ]
        }
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
        {
          name: "Redis + Kafka",
          resources: [
            { title: "Redis Python Client", url: "https://redis-py.readthedocs.io/" },
            { title: "Apache Kafka Documentation", url: "https://kafka.apache.org/documentation/" }
          ]
        },
        {
          name: "CI/CD основы",
          resources: [
            { title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
            { title: "GitLab CI Documentation", url: "https://docs.gitlab.com/ee/ci/" }
          ]
        },
        {
          name: "Архитектурные паттерны",
          resources: [
            { title: "Python Application Architectures", url: "https://www.cosmicpython.com/" },
            { title: "Clean Architecture with Python", url: "https://www.pythoncleanarchitecture.com/" }
          ]
        }
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