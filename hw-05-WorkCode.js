//	Задания на работу с кодом
//  Задание_01
console.log('Задание_01.');
let a1 = Number(prompt(`Задание_01. Введи первое число`));
let b1 = Number(prompt(`Задание_01. Введи второе число`));
function min(a1, b1) {
    // //  Задание_01_v1 - Через IF
    // if (a1 < b1) {
    //     return a1;
    // } else if (a1 > b1){
    //     return b1;
    // }
    //   else if (a1 === b1) {
    //     return a1 || b1;
    //   }
    //  Задание_01_v2
    return (a1 < b1) ? a1 : b1;
    }
console.log(min(a1, b1));
console.log('');


//  Задание_02
console.log('Задание_02.');
let a2 = prompt('Задание_02:Введите число');
function classification(a2) {
    // if (a2 % 2 === 0) {
    //     return 'Задание_02: Число четное'
    // } else {
    //     return 'Задание_02: Число нечетное'
    // }
    // Задание_02_v2
    return a2 % 2 === 0 ? "Задание_02: Число четное" : "Задание_02: Число нечетное";
}
classification(a2);
console.log(classification(a2));
console.log('');


//  Задание_03
console.log('Задание_03.');
let a3 = prompt('Задание_03: Введите число');
let squared1 = (a3) => a3**2
squared1(a3);
console.log(squared1(a3))
function squared2(a3) {
    let result = a3**2;
    return result;
}
squared2(a3);
console.log(squared2(a3));
console.log('');


//  Задание_04
console.log('Задание_04.');
let userAnswer = prompt('Задание_04: Сколько тебе лет?');
let greeting = (userAnswer < 0) ? 'Задание_04: Вы ввели неправильное значение' :
(userAnswer <= 12) ? 'Задание_04: Привет, друг!' : 'Задание_04: Добро пожаловать!';
alert(greeting);
console.log(greeting);
//  Задание_04_v2
// const user
console.log('');


//  Задание_05
console.log('Задание_05.');
let a5 = prompt('Задание_05: Введите первое число');
let b5 = prompt('Задание_05: Введите второе число');
function num(a5, b5) {
    isNaN(a5) || isNaN(b5) ?  console.log('Одно или оба значения не являются числом') : console.log(a5 * b5);
}
console.log(num(a5, b5));
console.log('');


//  Задание_06
console.log('Задание_06.');
function num6() {
    const a6 = prompt('Задание_06: Введите число');
    let squared6 = a6 ** 3;
    if (isNaN(Number(a6))) {
        return `Задание_06: Переданный параметр не является числом`;
    }
    return `Задание_06: ${a6} в кубе равняется ${squared6}`;
}
console.log(num6());
console.log('')


//  Задание_07
console.log('Задание_07.')
let a7 = Number(prompt(`Задание_07: Введи первое число`));
let b7 = Number(prompt(`Задание_07: Введи второе число`));
const circle1 = {
    radius: a7,
    getArea: getArea,
    getPerimeter: getPerimeter,
};
const circle2 = {
    radius: b7,
    getArea: getArea,
    getPerimeter: getPerimeter,
};
function getArea() {
    return 3.14 * (this.radius ** 2);
}
function getPerimeter() {
    return 2 * 3.14 * this.radius;
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
console.log('');
