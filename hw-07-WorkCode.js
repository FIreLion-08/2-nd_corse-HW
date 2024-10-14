//	Задания на работу с кодом
//  Задание_01: Преобразуйте строку js в верхний регистр JS.
console.log('Задание_01.');
let str01 = String(prompt('Задание_01: Введите строку'));
console.log(str01.toUpperCase());
console.log('');



//  Задание_02: Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
console.log('Задание 02')
function searchArrs(arr02, str02) {
    return arr02.filter(el => el.toLowerCase().startsWith(str02))
}
console.log(searchArrs(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log('');



//  Задание_03: Округлите число 32.58884: До меньшего целого, До большего целого и До ближайшего целого.
console.log('Задание 03. Округление');
let num03 = Number(prompt('Задание_03: Введите число')); // число 32.58884
console.log('В меньшую сторону =', Math.floor(num03));
console.log('В большую сторону =', Math.ceil(num03));
console.log('До целого числа =', Math.round(num03));
console.log('');



//  Задание_04: Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
console.log('Задание 04. Вриант #1');
const num4 = [52, 53, 49, 77, 21, 32];
const selectionOfnumbers = (arrNum4) => {
    console.log('Наибольшее число:', Math.max.apply(null, arrNum4)) //77
    console.log('Наименьшее число:', Math.min.apply(null, arrNum4)) //21
}
selectionOfnumbers(num4);
console.log('');

console.log('Задание 04. Вриант #1');
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log('');



//  Задание_05: Создать функцию, которая выводит в консоль случайное число от 1 до 10.
console.log('Задание 05.');
let num41 = Number(prompt('Задание_05: Введите диапозон рандомного числа с:')); // В задании число 1
let num42 = Number(prompt('Задание_05: Введите диапозон рандомного числа до:')); // В задании число 10
function randNum4(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
console.log('Рандомное число =', randNum4(num41,num42));
console.log('');



//  Задание_06: Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.
console.log('Задание 06. Вариант №1');
let n6 = Number(prompt('Задание_06: Введите диапозон массива от 0 до __'));
function randNum7(n6) {
    const arr6=[];
    let i6 = n6 / 2;
    i6 = Math.floor(i6);
    for (let i = 0; i < i6; i++){
        arr6.push(Math.round(Math.random() * n6));
    }
    return arr6;
}
console.log(randNum7(n6));
console.log('');

console.log('Задание 06. Вариант №2');
function getRandomArrNumbers(maxValue) {
    let randomArr = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
      randomArr.push(Math.round(Math.random() * maxValue));
    }
    return randomArr;
  }
console.log(getRandomArrNumbers(7), getRandomArrNumbers(12));
console.log('');



//  Задание_07: Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
console.log('Задание 07.');
let num71 = Number(prompt('Задание_07: Введите диапозон рандомного числа с:'));
let num72 = Number(prompt('Задание_07: Введите диапозон рандомного числа до:'));
function randNum7(min, max) {
    return Math.round(Math.random() * (max - min+1)) + min;
  }
console.log('Рандомное число =', randNum7(num71,num72));
console.log('');



//  Задание_08: Вывести в консоль текущую дату.
console.log('Задание 08.');
const nowDate08 = new Date();
console.log('Текщая дата: ',nowDate08);
console.log('');



//  Задание_09: Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
console.log('Задание 09.');
const n9 = Number(prompt('Задание_09: ВВедите кол-во дней'));
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + n9);
console.log('Дата:',currentDate, 'через:', n9, 'дней');
console.log('');



//  Задание_10: Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
console.log('Задание 10.');
let welcome;
const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const months = ['Января','Февраля','Марта','Апреля','Майя','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
const nowDate = new Date(prompt('Задание 10. Введите дату и время (yy.m.day, hh:mm:ss)'));
let date = nowDate.getDate();

if (date <10) {
    date='0'+date;
};
let month = months[nowDate.getMonth()]; //  let month = months[nowDate.getMonth()-1];
let day = days[nowDate.getDay()];
let hours = nowDate.getHours();
if (hours<10) {
    hours='0'+hours;
};
let minutes = nowDate.getMinutes();
if (minutes<10) {
    minutes ='0'+ minutes;
};
let seconds = nowDate.getSeconds();
if (seconds<10) {
    seconds='0'+ seconds;
}
console.log(`Дата: ${date} ${month} ${nowDate.getFullYear()} - это ${day}.`);
console.log(`Время: ${hours}:${minutes}:${seconds}`);
console.log('');
