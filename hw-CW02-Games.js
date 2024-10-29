//Основное задание.
//Описание игры для сайта («Угадай число»)
function guessTheNumber() {
    // Генерируем случайное число от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Загаданное число от 1 до 100`);
    // Инициализируем переменную для хранения попыток пользователя
    let attempts = 0;
    // Цикл, пока пользователь не угадает число
    while (true) {
      // Предлогаем пользователю угадать число
      const userGuess = prompt(`Попытка ${attempts + 1}. Угадайте число от 1 до 100:`);
      // Проверяет, является ли ввод пользователя числом
      if (isNaN(userGuess)) {
        alert(`Пожалуйста, введите число.`);
        console.log(`Пожалуйста, введите число.`);
        continue;
      }
      // Преобразует ввод пользователя в число
      const userGuessNumber = parseInt(userGuess);
      // Проверяет, находится ли число в диапазоне от 1 до 100
      if (userGuessNumber < 1 || userGuessNumber > 100) {
        console.log(`Пожалуйста, введите число от 1 до 100.`);
        continue;
      }
      // Увеличиваем количество попыток
      attempts++;
      // Проверяем, угадал ли пользователь число
      if (userGuessNumber === randomNumber) {
        alert(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
        console.log(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
        break;
      } else if (userGuessNumber < randomNumber) {
        alert(`Загаданное число больше вашего.`);
        console.log(`Загаданное число больше вашего.`);
      } else {
        alert(`Загаданное число меньше вашего.`);
        console.log(`Загаданное число меньше вашего.`);
      }
    }
}


//Описание игры для сайта («Простая арифметика»)
//Массив арифметических операций
let operations = [
  { symbol: '+', func: (a, b) => a + b },
  { symbol: '-', func: (a, b) => a - b },
  { symbol: '*', func: (a, b) => a * b },
  { symbol: '/', func: (a, b) => a / b }
];
//Генерирует два числа и операцию
function generateTask() {
  //Генерирует два случайных числа от 1 да 10
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  //Выбираем случайный операцию из массива "operations"
  let operation = operations[Math.floor(Math.random() * operations.length)];
  //Создание задачи из случайной операции
  let task = `${num1} ${operation.symbol} ${num2}`;
  let correctAnswer = operation.func(num1, num2);
  return { task, correctAnswer };
}
//Задаём задачу игроку
function gameSimpleArithmetic() {
  let { task, correctAnswer } = generateTask();
  //Преобразуем строку в число
  let userAnswer = parseInt(prompt(`Сколько будет: ${task}`));

  //Условия проверки ответа
  if (userAnswer === correctAnswer) {
    alert("Поздравляем! Верный ответ!");
  } else {
    alert(`Ошибка! Верный ответ: ${correctAnswer}`);
  }
}


//Описание игры для сайта («Переверни текст»)
function gameReverseText() {
  // Получаем вводимый текст от пользователя
  const inputText = prompt("Введите текст:");

  // Переварачиваем введенный текст
  const reversedText = inputText.split("").reverse().join("");

  // Выводим получемый текст
  alert("Перевернутый текст: " + reversedText);
}


//Описание игры для сайта («Викторина»)
function gameQuiz() {
  // Массив вопросов и правильных ответов
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  // Объявляем счёт
  let score = 0;
  // Проходим по каждому вопросу в цикле
  for (let i = 0; i < quiz.length; i++) {
    // Получаем текущий вопрос и варианты ответов
    const question = quiz[i].question;
    const options = quiz[i].options;
    const correctAnswer = quiz[i].correctAnswer;
    // Просим игрока дать ответ
    const userAnswer = prompt(`${question}\n${options.join("\n")}`);
    // Проверяем ответ пользователя
    if (userAnswer === options[correctAnswer - 1]) {
      score++;
    }
  }
  // Выводим итоговый результат
  alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов!`);
}


//Описание игры для сайта («Камень, ножницы, бумага»)
function gameRockPaperScissors() {
  // Пользователь выбирает вариант
  let userChoice = String(prompt("Введите ваш вариант (камень, ножницы, бумага):"));
  // Генерируется случайным выбором варианта для компьютера
  let choices = ["камень", "ножницы", "бумага"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  // Определяет победителя
  let winner;
  if (userChoice.toLowerCase() === computerChoice) {
    winner = "Ничья! Победила дружба :)";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    winner = "Поздравляю! Вы выиграли! :)";
  } else {
    winner = "Неудача! Выиграл компьютер ! :(";
  }
  // Выводит результат игры
  alert(`Вы выбрали: ${userChoice.toLowerCase()}\nКомпьютер выбрал: ${computerChoice}\n \n${winner}`);
}


//Описание игры для сайта («Генератор случайных цветов»)
// Функция для изменения цвета фона у элементов с классами game-about и games
function gameBackgroundColor() {
  const gameaboutElement = document.querySelectorAll('.game-about');
  const gamesElement = document.querySelectorAll('.games');

// Генерируем случайный цвет
  const randomColor = getRandomColor();

  // Применяем один и тот же цвет ко всем элементам
  gameaboutElement.forEach(element => {
      element.style.backgroundColor = randomColor;
  });
  gamesElement.forEach(element => {
      element.style.backgroundColor = randomColor;
  });
}

// Функция для генерации случайного цвета
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
