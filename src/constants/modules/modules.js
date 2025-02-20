import { Code2, Database, Globe, Zap, Cog } from "lucide-react";

export const modules = [
  {
    title: "Модуль 1: Основы Python",
    icon: Code2,
    gradient: {
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      text: "text-red-500",
      border: "border-red-500",
      borderLight: "border-red-200",
    },
    topics: [
      {
        name: "Базовый Python синтаксис",
        description: "Некоторые уроки могут повторться в материалах, можно закрепить, можно пропустить.",
        resources: [
          {
            description: "Проходим полностью.",
            title: "Базовый Python в тексте Hexlet*",
            url: "https://ru.hexlet.io/courses/python-basics",
          },
          
          {
            description: "Надо знать: 7-25, 27, 29-34, 39-62, 65-72.",
            title: "Добрый python, Selfedu, видео курс",
            url: "https://www.youtube.com/playlist?list=PLA0M1Bcd0w8yWHh2V70bTtbVxJICrnJHd",
            
          },
          {
            description: "Надо знать: 7, 9-25, 28, 29, 31-56, и все уроки без нумерации.",
            title: "Python for begginers, видео курс",
            url: "https://www.youtube.com/playlist?list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6",
          },
        ],
      },
      {
        name: "Виртуальные окружения + pip",
        description:
          "Надо знать: Зачем нужны виртуальные окружения, что такое файл зависимостей.",
        resources: [
          {
            title: "Виртуальное Окружение Python | venv и virtualenv*",
            url: "https://www.youtube.com/watch?v=OvocRhD9WSA",
          },
          {
            title: "Доп урок по окружениям",
            url: "https://www.youtube.com/watch?v=KOC0Gbo_0HY",
          },
        ],
      },
      {
        name: "Git основы",
        description: "Надо знать: init, clone, add, commit, push, pull, status, log, diff, branch, checkout, merge, rebase, cherry-pick, reset, revert.",
        resources: [
          {
            title: "Введение в Git, Hexlet*",
            url: "https://ru.hexlet.io/courses/intro_to_git",
          },
          {
            title: "Git и GitHub для новичков",
            url: "https://www.youtube.com/watch?v=EeARyFrZsnU",
          },
          {
            description: "Этим пользуются в компаниях.",
            title: "Что такое GitLab?",
            url: "https://www.youtube.com/watch?v=RIjg6XsRJNQ",
          },
          {
            title: "Тренажер по Git",
            url: "https://learngitbranching.js.org/?locale=ru_RU",
          },
        ],
      },
    ],
    completion: ["Практическое задание", "Мини-собеседование по базе", "Лайвкодинг"],
  },
  {
    title: "Модуль 2: ООП и структуры данных",
    icon: Database,
    gradient: {
      bg: "bg-gradient-to-r from-red-600 to-red-700",
      text: "text-red-600",
      border: "border-red-600",
      borderLight: "border-red-300",
    },
    topics: [
      // {
      //   name: "Структуры данных и алгоритмы",
      //   description: "Этого будет достаточно",
      //   resources: [
      //     {
      //       title: "Python Data Structures, видео курс, egoroff_channel",
      //       url: "https://www.youtube.com/watch?v=WBaL7ANQbzQ&list=PLQAt0m1f9OHsaqspc3ncC-WsuYyuRf2-f",
      //     },
      //   ],
      // },
      {
        name: "ООП + SOLID",
        description: "Надо знать: Классы и объекты, наследование, инкапсуляция (_protected, __private), полиморфизм, магические методы (init, str и др.), декораторы (@property, @staticmethod, @classmethod), методы класса, абстрактные классы, множественное наследование, композиция и агрегация, принципы SOLID, основные паттерны проектирования.",
        resources: [
          {
            title: "ООП, видео курс, selfedu",
            url: "https://www.youtube.com/watch?v=Z7AY41tE-3U&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E",
          },
          {
            title: "ООП, видео курс, egoroff_channel",
            url: "https://www.youtube.com/watch?v=Z7AY41tE-3U&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E",
          },
          {
            title: "Все о принципах SOLID",
            url: "https://www.youtube.com/watch?v=yeYRAXsUrow",
          },
        ],
      },

      {
        name: "Базовое тестирование (pytest)",
        description:
          "Надо знать: Базовые assert тесты, организация файлов, фикстуры, параметризация, маркеры, тестирование исключений, моки и патчи.",
        resources: [
          {
            title: "Pytest, видео курс, Артём Шумейко",
            url: "https://www.youtube.com/watch?v=rAKIK5_UMzw&list=PLeLN0qH0-mCVdHgdjlnKTl4jKuJgCK-4b",
          },
          {
            title: "Pytest тестирование, видео курс, Luchanos",
            url: "https://semaphoreci.com/community/tutorials/testing-python-applications-with-pytest",
          },
        ],
      },

      {
        name: "Асинхронный python",
        resources: [
          {
            title: "Асинхронность в Python",
            description: "Смотрим полностью.",
            url: "https://www.youtube.com/playlist?list=PLlWXhlUMyooawilqK4lPXRvxtbYiw34S8",
          },
        ],
      },

      {
        name: "Потоки и процессы в python",
       
        resources: [
          {
            title: "Потоки & процессы",
            description: "Смотрим полностью.",
            url: "https://www.youtube.com/playlist?list=PL6plRXMq5RAAb9gwGqmgAoA-KIr-7CMuz",
          },

          {
            title: "Потоки & процессы & Async & Gil",
            description: "Смотрим полностью.",
            url: "https://www.youtube.com/playlist?list=PL6plRXMq5RAAb9gwGqmgAoA-KIr-7CMuz",
          },
          
        ],
      },

      {
        name: "Консоль",
        resources: [
          {
            title: "Основы командной строки",
            description: "Проходим полностью.",
            url: "https://ru.hexlet.io/courses/cli-basics",
          },
          {
            title: "ООП, видео курс, egoroff_channel",
            url: "https://www.youtube.com/watch?v=Z7AY41tE-3U&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E",
          },
          {
            title: "Все о принципах SOLID",
            url: "https://www.youtube.com/watch?v=yeYRAXsUrow",
          },
        ],
      },



      // {
      //   name: "Базовые паттерны проектирования",
      //   description:
      //     "Надо знать: Синглтон, Фабричный метод, Строитель, Адаптер, Декоратор, Стратегия, Repository Pattern, Service Layer, Unit of Work",
      //   resources: [
      //     {
      //       title: "Python Design Patterns",
      //       url: "https://refactoring.guru/ru/design-patterns/python",
      //     },
      //   ],
      // },
    ],
    completion: ["Практическое задание", "Мини-собеседование (база + ООП)", "Лайвкодинг"],
  },
  {
    title: "Модуль 3: Web Backend",
    icon: Globe,
    gradient: {
      bg: "bg-gradient-to-r from-red-700 to-red-800",
      text: "text-red-700",
      border: "border-red-700",
      borderLight: "border-red-400",
    },
    topics: [
      {
        name: "Django + DRF",
        resources: [
          {
            title: "Django Documentation",
            url: "https://docs.djangoproject.com/",
          },
          {
            title: "Django REST Framework",
            url: "https://www.django-rest-framework.org/",
          },
          {
            title: "Django for Beginners Book",
            url: "https://djangoforbeginners.com/",
          },
        ],
      },
      {
        name: "JWT + Swagger",
        resources: [
          {
            title: "Django REST Framework JWT",
            url: "https://django-rest-framework-simplejwt.readthedocs.io/",
          },
          {
            title: "DRF Swagger/OpenAPI",
            url: "https://drf-yasg.readthedocs.io/en/stable/",
          },
        ],
      },
      {
        name: "PostgreSQL",
        resources: [
          {
            title: "PostgreSQL Tutorial",
            url: "https://www.postgresqltutorial.com/",
          },
          {
            title: "Django Database Documentation",
            url: "https://docs.djangoproject.com/en/stable/topics/db/",
          },
        ],
      },
    ],
    completion: [
      "Практическое задание",
      "Мини-собеседование (база + ООП + Django + SQL)",
    ],
  },
  {
    title: "Модуль 4: Современный Backend",
    icon: Zap,
    gradient: {
      bg: "bg-gradient-to-r from-red-800 to-red-900",
      text: "text-red-800",
      border: "border-red-800",
      borderLight: "border-red-500",
    },
    topics: [
      {
        name: "FastAPI",
        resources: [
          {
            title: "FastAPI Documentation",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            title: "FastAPI Tutorial",
            url: "https://fastapi.tiangolo.com/tutorial/",
          },
        ],
      },
      {
        name: "Асинхронность",
        resources: [
          {
            title: "AsyncIO Documentation",
            url: "https://docs.python.org/3/library/asyncio.html",
          },
          {
            title: "Python Async Features",
            url: "https://realpython.com/async-io-python/",
          },
        ],
      },
      {
        name: "SQLAlchemy",
        resources: [
          {
            title: "SQLAlchemy Documentation",
            url: "https://docs.sqlalchemy.org/",
          },
          {
            title: "SQLAlchemy Tutorial",
            url: "https://docs.sqlalchemy.org/en/14/tutorial/",
          },
        ],
      },
    ],
    completion: [
      "Практическое задание",
      "Мини-собеседование (база + ООП + Django + FastAPI + SQL)",
    ],
  },
  {
    title: "Модуль 5: Финальный этап",
    icon: Cog,
    gradient: {
      bg: "bg-gradient-to-r from-red-900 to-black",
      text: "text-red-900",
      border: "border-red-900",
      borderLight: "border-red-600",
    },
    topics: [
      {
        name: "Redis + Kafka",
        resources: [
          {
            title: "Redis Python Client",
            url: "https://redis-py.readthedocs.io/",
          },
          {
            title: "Apache Kafka Documentation",
            url: "https://kafka.apache.org/documentation/",
          },
        ],
      },
      {
        name: "CI/CD основы",
        resources: [
          {
            title: "GitHub Actions Documentation",
            url: "https://docs.github.com/en/actions",
          },
          {
            title: "GitLab CI Documentation",
            url: "https://docs.gitlab.com/ee/ci/",
          },
        ],
      },
      {
        name: "Архитектурные паттерны",
        resources: [
          {
            title: "Python Application Architectures",
            url: "https://www.cosmicpython.com/",
          },
          {
            title: "Clean Architecture with Python",
            url: "https://www.pythoncleanarchitecture.com/",
          },
        ],
      },
    ],
    completion: [
      "Итоговое собеседование по всем темам",
    ],
  },
];
