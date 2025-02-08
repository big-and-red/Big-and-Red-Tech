import { Code2, Database, Globe, Zap, Cog } from "lucide-react";

export const qaModules = [
  {
    title: "Модуль 1: Основы Python",
    icon: Code2,
    gradient: {
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      text: "text-red-500",
      border: "border-red-500",
    },
    questions: [
      {
        question: "Что такое PEP 8?",
        answer:
          "PEP 8 - это руководство по стилю написания кода на Python. Оно содержит соглашения о форматировании кода для улучшения его читаемости и согласованности в сообществе Python.",
        code: `# Правильно (по PEP 8)
def calculate_sum(a, b):
  return a + b

# Неправильно
def calculateSum(a,b):
  return a+b`,
      },
      {
        question: "В чем разница между списком и кортежем?",
        answer:
          "Основные различия между списками и кортежами:\n1. Изменяемость: списки изменяемые, кортежи неизменяемые\n2. Синтаксис: списки используют [], кортежи ()\n3. Использование: кортежи часто используются для гетерогенных данных, списки для гомогенных\n4. Производительность: кортежи более эффективны по памяти и быстрее в исполнении",
        code: `# Список (изменяемый)
my_list = [1, 2, 3]
my_list[0] = 10  # Можно изменить

# Кортеж (неизменяемый)
my_tuple = (1, 2, 3)
# my_tuple[0] = 10  # Вызовет ошибку TypeError`,
      },
      {
        question: "Как работает менеджер контекста with?",
        answer:
          "Менеджер контекста with автоматически управляет ресурсами, обеспечивая их корректное освобождение даже при возникновении исключений. Он реализует два метода: __enter__ и __exit__.",
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
  print("Inside context")`,
      },
      {
        question: "Что такое декораторы и как они работают?",
        answer:
          "Декораторы - это функции, которые принимают другую функцию в качестве аргумента и возвращают новую функцию с дополнительной функциональностью. Они используются для модификации поведения функций или классов без прямого изменения их исходного кода.",
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
  print(f"Привет, {name}!")`,
      },
    ],
  },
  {
    title: "Модуль 2: ООП и структуры данных",
    icon: Database,
    gradient: {
      bg: "bg-gradient-to-r from-red-600 to-red-700",
      text: "text-red-600",
      border: "border-red-600",
    },
    questions: [
      {
        question: "Что такое классы и объекты в Python?",
        answer:
          "Класс - это шаблон для создания объектов, определяющий их свойства и методы. Объект - это конкретный экземпляр класса.",
        code: `class Dog:
  def __init__(self, name):
      self.name = name
      
  def bark(self):
      return f"{self.name} говорит Гав!"
      
# Создание объекта
my_dog = Dog("Бобик")
print(my_dog.bark())  # Бобик говорит Гав!`,
      },
      {
        question: "Как работает наследование в Python?",
        answer:
          "Наследование позволяет создавать новые классы на основе существующих, перенимая их атрибуты и методы. Python поддерживает множественное наследование.",
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
print(cat.speak())  # Мурка говорит Мяу!`,
      },
    ],
  },
  {
    title: "Модуль 3: Web Backend",
    icon: Globe,
    gradient: {
      bg: "bg-gradient-to-r from-red-700 to-red-800",
      text: "text-red-700",
      border: "border-red-700",
    },
    questions: [
      {
        question: "Что такое REST API?",
        answer:
          "REST (Representational State Transfer) - это архитектурный стиль для создания веб-сервисов. REST API использует HTTP методы (GET, POST, PUT, DELETE) для операций с ресурсами.",
        code: `# Пример REST API на Flask
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
  return jsonify({
      'id': user_id,
      'name': 'John Doe',
      'email': 'john@example.com'
  })`,
      },
    ],
  },
];

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
        resources: [
          {
            title: "Базовый Python в тексте Hexlet*",
            url: "https://ru.hexlet.io/courses/python-basics",
          },
          {
            title: "Добрый python, Selfedu, видео курс",
            url: "https://www.youtube.com/playlist?list=PLA0M1Bcd0w8yWHh2V70bTtbVxJICrnJHd",
          },
          {
            title: "Python for begginers, видео курс",
            url: "https://www.youtube.com/playlist?list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6",
          },
        ],
      },
      {
        name: "Виртуальные окружения + pip",
        description:
          "Надо знать: как и зачем нужны виртуальные окружения, файл зависимостей",
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
        description: "Надо знать: ",
        resources: [
          {
            title: "Введение в Git, Hexlet*",
            url: "https://ru.hexlet.io/courses/intro_to_git",
          },
          {
            title: "Тренажер по Git",
            url: "https://learngitbranching.js.org/?locale=ru_RU",
          },
        ],
      },
    ],
    completion: ["Мини-собеседование по базе", "Практическое задание"],
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
      {
        name: "Структуры данных и алгоритмы",
        description: "Этого будет достаточно",
        resources: [
          {
            title: "Python Data Structures, видео курс, egoroff_channel",
            url: "https://www.youtube.com/watch?v=WBaL7ANQbzQ&list=PLQAt0m1f9OHsaqspc3ncC-WsuYyuRf2-f",
          },
        ],
      },
      {
        name: "ООП + SOLID",
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
          "Надо знать: Базовые assert тесты, организация файлов, фикстуры, параметризация, маркеры, тестирование исключений, моки и патчи",
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
        name: "Базовые паттерны проектирования",
        description:
          "Надо знать: Синглтон, Фабричный метод, Строитель, Адаптер, Декоратор, Стратегия, Repository Pattern, Service Layer, Unit of Work",
        resources: [
          {
            title: "Python Design Patterns",
            url: "https://refactoring.guru/ru/design-patterns/python",
          },
        ],
      },
    ],
    completion: ["Мини-собеседование (база + ООП)", "Практическое задание"],
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
      "Мини-собеседование (база + ООП + Django + SQL)",
      "Практическое задание",
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
      "Мини-собеседование (база + ООП + Django + FastAPI + SQL)",
      "Практическое задание",
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
      "Итоговое собеседование",
      "Публикация всех проектов на GitHub",
    ],
  },
];
