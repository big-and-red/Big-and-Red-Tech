import { Code2, Database, Globe, Zap, Cog } from "lucide-react";

export const middleQaModules = [
  {
    title: "Модуль 1: Продвинутый Python",
    icon: Code2,
    gradient: {
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      text: "text-red-500",
      border: "border-red-500",
    },
    questions: [
      {
        question: "Что такое метаклассы в Python и когда их стоит использовать?",
        answer: "Метаклассы - это классы для классов...",
        code: `class MyMetaclass(type):
    def __new__(cls, name, bases, attrs):
        # Ваша логика здесь
        return super().__new__(cls, name, bases, attrs)`,
      },
      // Добавьте другие вопросы
    ],
  },
  // Добавьте другие модули
];