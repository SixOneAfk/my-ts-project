// Объявляем переменную с явным указанием типа string
var greeting = "Hello, World!";
// Функция с аннотацией типов
function showMessage(text) {
    console.log(text);
}
// Вызываем функцию
showMessage(greeting);
var user = {
    name: "Alice",
    age: 25
};
console.log("User name: ".concat(user.name, ", age: ").concat(user.age));
