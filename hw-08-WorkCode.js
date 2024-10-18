//	Задания на работу с кодом
//  Задание_01: С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите в консоль.
console.log('Задание_01.');
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log('Вариант№1: Стрелочная функция');
console.log(people1.sort((a11,b11)=>a11.age>b11.age?1:-1));
console.log('Вариант№2: Функция');
people1.sort(function(a12, b12) {
    if (a12.age>b12.age) {
        return 1;
    }
    if (a12.age<b12.age) {
        return -1;
    }
});
console.log(people1);
console.log('');



//  Задание_02: Реализуйте функцию filter, которая должна работать аналогично методу массива `filter. Возьмите за основу функцию map, которую мы реализовывали на уроке.
//  Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
console.log('Задание_02')
function isPositive(num2) {
    return num2 >= 0;
}
function isMale(num2) {
    return num2.gender === 'male';
}
function filter(arr2, ruleFunction) {
    //Вариант №1
    const newArr2 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (ruleFunction(arr2[i])) {
            newArr2.push(arr2[i]);
        }
    }
    return newArr2;

    return
}
console.log(filter([3, -4, 1, 9], isPositive));
// Должен выводить [3, 1, 9]
const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}];
console.log(filter(people2, isMale));
// Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
console.log('');



//  Задание_03: Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
// console.log('Задание 03. ');
const timer = (() => {
    let step = setInterval(() => {
    console.log('Задание_03:', new Date);
    }, 3*1000);
    setTimeout(() => {
        clearInterval(step);
        console.log('Задание_03: 30 секунд прошло', '')
    }, 30*1000);
});
console.log(timer());



//  Задание_04: Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
//Допишите функцию delayForSecond  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.
// console.log('Задание №4.');
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);
}
delayForSecond(function () {
  console.log('Задание_04: Привет, Глеб!', '');
});



//  Задание_05: Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке.
// console.log('Задание 05.');
function delayForSecond5(cb) {
    setTimeout(() => {
        console.log('Задание 05: Прошла одна секунда');
				if(cb) { 	cb(); }
    }, 1000)
}
function sayHi5 (name5) {
    console.log(`Задание 05: Привет, ${name5}!`);
}
delayForSecond5(()=>sayHi5('Глеб'));
