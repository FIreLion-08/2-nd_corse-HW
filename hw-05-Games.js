//Основное задание. Описание игры для сайта («Угадай число»)

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
