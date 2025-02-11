export const qaModules = [
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