import React, { useState, useEffect } from 'react';
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
  MessageSquare,
  Map
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';

// Компонент навигации
const Navigation = ({ activePage, setActivePage }) => {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-6 justify-center border-b border-gray-200">
        <li>
          <button
            onClick={() => setActivePage('roadmap')}
            className={`pb-2 px-4 ${
              activePage === 'roadmap'
                ? 'border-b-2 border-red-500 text-red-500 font-medium'
                : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Map className="w-4 h-4" />
              <span>Roadmap</span>
            </div>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePage('qa')}
            className={`pb-2 px-4 ${
              activePage === 'qa'
                ? 'border-b-2 border-red-500 text-red-500 font-medium'
                : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Q&A</span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Компонент вопроса
const QuestionItem = ({ question, answer, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && code) {
      Prism.highlightAll();
    }
  }, [isOpen, code]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
      >
        <span className="font-medium text-gray-700">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-200"
          >
            <div className="px-4 py-3">
              <p className="text-gray-600 mb-3 whitespace-pre-line">{answer}</p>
              {code && (
                <div className="relative group">
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                    <code className="language-python">{code}</code>
                  </pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(code)}
                    className="absolute top-2 right-2 p-2 rounded-md 
                             bg-gray-700 text-gray-300 opacity-0 
                             group-hover:opacity-100 transition-opacity"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Компонент ModuleCard для страницы Roadmap
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
            <div className={`p-3 rounded-lg ${gradient.bg} text-white shadow-lg`}>
              <Icon className="w-6 h-6" />
            </div>
            <h2 className={`text-xl font-bold ${gradient.text}`}>{title}</h2>
          </div>
          <ChevronDown 
            className={`w-6 h-6 ${gradient.text} transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
                        transition={{ delay: index * 0.1 }}
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

// Компонент модуля с вопросами
const QAModuleCard = ({ title, questions, icon: Icon, gradient }) => {
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
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${gradient.bg} text-white shadow-lg`}>
              <Icon className="w-6 h-6" />
            </div>
            <h2 className={`text-xl font-bold ${gradient.text}`}>{title}</h2>
          </div>
          <ChevronDown 
            className={`w-6 h-6 ${gradient.text} transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
// Компонент QA страницы
const QAPage = () => {
  const qaModules = [
    {
      title: "Модуль 1: Основы Python",
      icon: Code2,
      gradient: {
        bg: "bg-gradient-to-r from-red-500 to-red-600",
        text: "text-red-500",
        border: "border-red-500"
      },
      questions: [
        {
          question: "Что такое PEP 8?",
          answer: "PEP 8 - это руководство по стилю написания кода на Python. Оно содержит соглашения о форматировании кода для улучшения его читаемости и согласованности в сообществе Python.",
          code: `# Правильно (по PEP 8)
def calculate_sum(a, b):
    return a + b

# Неправильно
def calculateSum(a,b):
    return a+b`
        },
        {
          question: "В чем разница между списком и кортежем?",
          answer: "Основные различия между списками и кортежами:\n1. Изменяемость: списки изменяемые, кортежи неизменяемые\n2. Синтаксис: списки используют [], кортежи ()\n3. Использование: кортежи часто используются для гетерогенных данных, списки для гомогенных\n4. Производительность: кортежи более эффективны по памяти и быстрее в исполнении",
          code: `# Список (изменяемый)
my_list = [1, 2, 3]
my_list[0] = 10  # Можно изменить

# Кортеж (неизменяемый)
my_tuple = (1, 2, 3)
# my_tuple[0] = 10  # Вызовет ошибку TypeError`
        },
        {
          question: "Как работает менеджер контекста with?",
          answer: "Менеджер контекста with автоматически управляет ресурсами, обеспечивая их корректное освобождение даже при возникновении исключений. Он реализует два метода: __enter__ и __exit__.",
          code: `# Пример использования with для работы с файлом
with open('file.txt', 'r') as file:
    content = file.read()
# Файл автоматически закроется после выхода из блока

# Создание собственного менеджера контекста
class MyContext:
    def __enter__(self):
        print("Entering context")
        return self
        
    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting context")
        
with MyContext():
    print("Inside context")`
        },
        {
          question: "Что такое декораторы и как они работают?",
          answer: "Декораторы - это функции, которые принимают другую функцию в качестве аргумента и возвращают новую функцию с дополнительной функциональностью. Они используются для модификации поведения функций или классов без прямого изменения их исходного кода.",
          code: `# Простой декоратор
def my_decorator(func):
    def wrapper():
        print("До выполнения функции")
        func()
        print("После выполнения функции")
    return wrapper

@my_decorator
def say_hello():
    print("Привет!")

# Декоратор с параметрами
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Привет, {name}!")`
        }
      ]
    },
    {
      title: "Модуль 2: ООП и структуры данных",
      icon: Database,
      gradient: {
        bg: "bg-gradient-to-r from-red-600 to-red-700",
        text: "text-red-600",
        border: "border-red-600"
      },
      questions: [
        {
          question: "Что такое классы и объекты в Python?",
          answer: "Класс - это шаблон для создания объектов, определяющий их свойства и методы. Объект - это конкретный экземпляр класса.",
          code: `class Dog:
    def __init__(self, name):
        self.name = name
        
    def bark(self):
        return f"{self.name} говорит Гав!"
        
# Создание объекта
my_dog = Dog("Бобик")
print(my_dog.bark())  # Бобик говорит Гав!`
        },
        {
          question: "Как работает наследование в Python?",
          answer: "Наследование позволяет создавать новые классы на основе существующих, перенимая их атрибуты и методы. Python поддерживает множественное наследование.",
          code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} говорит Гав!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} говорит Мяу!"

# Использование
dog = Dog("Бобик")
cat = Cat("Мурка")
print(dog.speak())  # Бобик говорит Гав!
print(cat.speak())  # Мурка говорит Мяу!`
        }
      ]
    },
    {
      title: "Модуль 3: Web Backend",
      icon: Globe,
      gradient: {
        bg: "bg-gradient-to-r from-red-700 to-red-800",
        text: "text-red-700",
        border: "border-red-700"
      },
      questions: [
        {
          question: "Что такое REST API?",
          answer: "REST (Representational State Transfer) - это архитектурный стиль для создания веб-сервисов. REST API использует HTTP методы (GET, POST, PUT, DELETE) для операций с ресурсами.",
          code: `# Пример REST API на Flask
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    return jsonify({
        'id': user_id,
        'name': 'John Doe',
        'email': 'john@example.com'
    })`
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {qaModules.map((module, index) => (
        <QAModuleCard key={index} {...module} />
      ))}
    </div>
  );
};

// Обновленный основной компонент с маршрутизацией
const TechPortal = () => {
  const [activePage, setActivePage] = useState('roadmap');
  
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
        <p className="text-gray-600">Ваш путь к профессиональной разработке на Python</p>
      </motion.div>

      {/* Navigation */}
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {/* Content */}
      <AnimatePresence mode="wait">
        {activePage === 'roadmap' ? (
          <motion.div
            key="roadmap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
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

export default TechPortal;