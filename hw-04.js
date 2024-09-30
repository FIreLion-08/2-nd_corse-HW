//  Задание_01
console.log('Задание_01.');
let a1 = String(prompt('Задание_01. Введите слово для повторения'));
let n1 = Number(prompt(`Задание_01. Сколько раз вам сказать ${a1}`)); // В задании 2 раза
for (let i1=0; i1<n1; i1++){
    console.log(a1);
}
console.log('');

//  Задание_02
console.log('Задание_02.');
let n2 = Number(prompt(`Задание_02. Введите необходимый диапозон чисел`)); //В задании от 1 до 5
for (i2=1; i2<=n2; i2++){
    console.log(i2);
}
console.log('');

//  Задание_03
console.log('Задание_03.');
n3 =  Number(prompt(`Задание_03. Введите необходимый диапозон чисел начинающийся от `)); //В задании от 7
m3 = Number(prompt(`Задание_03. Введите необходимый диапозон чисел заканчивающийся на `)); //В задании до 22
for (i3 = n3; i3<=m3; i3++){
    console.log (i3);
}
console.log('');

//  Задание_04
console.log('Задание_04.');
const obj = {   //Объяявляем объект
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let key in obj) {
    console.log ([key] + ' - зарплата ' + obj[key] + ' долларов.');
}
console.log('');

//  Задание_05
console.log('Задание_05.');
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n/2;
    num++;
}
console.log('Интераций: ' + num + ', получилось число ' + n);
console.log('');

//  Задание_06
console.log('Задание_06.');
let n6 = Number(prompt(`Задание_06. Введите число первой пятницы месяца`));
let d6 = Number(prompt(`Задание_06. Сколько дней в месяце?`));
for(i6=n6; i6<=d6; i6+=7) {
    console.log (`Сегодня пятница, ${i6}-е число. Необходимо подготовить отчет.`);
}


// Дополнительное_задание_01
let k = 100;
let iteration = 0;

while (k >= 0) {
  k -= 7;
  iteration++;
}

console.log(`Результат: ${k}`);
console.log(`Количество итераций:: ${iteration}`);

// Дополнительное_задание_02
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];
for (let i = 0; i < months.length; i++) {
    console.log(`Месяца: ${months[i]}, Номер месяца: ${i + 1}`);
}

// Дополнительное_задание_03
const book = {
    title: "Мародер",
    author: "Беркель аль Атоми",
    year: 2007,
    genre: "Фантастика"
};
Object.keys(book).forEach(key => {
    console.log(`${key}: ${book[key]}`);
});

// Дополнительное_задание_04
const randomNumbers = Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
const minNumber = Math.min(...randomNumbers);
console.log(`Минимальное число: ${minNumber}`);
