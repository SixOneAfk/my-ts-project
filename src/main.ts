// Объявляем переменную с явным указанием типа string
const greeting: string = "Hello, World!";

// Функция с аннотацией типов
function showMessage(text: string): void {
  console.log(text);
}

// Вызываем функцию
showMessage(greeting);

// Дополнительно: объект с типизацией
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};

console.log(`User name: ${user.name}, age: ${user.age}`);