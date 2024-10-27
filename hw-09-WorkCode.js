//	Задания на работу с кодом
//  Задание 1. Скрытие и показ текста
function textHideShow() {
    // Получаем ссылки на заголовок и кнопку
    const header = document.querySelector('.header__сontent-title');
    const button = document.querySelector('.button-textHideShow');
    // Добавляем событие click на кнопку
    button.addEventListener('click', () => {
        // Проверяем, скрыт ли заголовок
        if (header.style.display === 'none') {
            // Если скрыт, показываем его
            header.style.display = 'block';
            button.textContent = 'Скрыть!';
        } else {
            // Если показан, скрываем его
            header.style.display = 'none';
            button.textContent = 'Показать!';
        }
    });
};



//  Задание 2. Изменение стиля элемента
// Функция для изменения цвета текста
function changeTextColor() {
    // Получаем ссылки на абзац и кнопку
    const textParagraph = document.querySelector('.header__content-text');
    const colorButton = document.querySelector('.colorButton');
    // Добавляем событие click на кнопку
    colorButton.addEventListener('click', () => {
        textParagraph.style.color = 'blue'; // Изменяем цвет текста на синий
    });
};



//  Задание 3. Динамическое изменение текста
// Функция для изменения текста заголовка
function changeHeaderText() {
    const header = document.querySelector('.header__сontent-title');
    const textButton = document.querySelector('.textchange-button');
    // Добавляем событие click на кнопку
    textButton.addEventListener('click', () => {
        header.textContent = 'Привет, мир!'; // Изменяем текст заголовка
    });
}



//  Задание 4. Поиск и изменение элементов по классу
// Функция для изменения текста элементов с классом description
function changeDescriptionText4() {
    // Получаем ссылку на кнопку
    const changeTextButton4 = document.querySelector('.search-edit-text');
    // Добавляем событие click на кнопку
    changeTextButton4.addEventListener('click', () => {
        // Получаем все элементы с классом description
        const descriptionElements = document.querySelectorAll('.description');
        // Перебираем найденные элементы и изменяем их текстовое содержимое
        descriptionElements.forEach((element) => {
            element.textContent = 'Измененный текст';
        });
    });
};



//  Задание 5. Работа с querySelectorAll
// Функция для изменения текста элементов с классом description
function changeDescriptionText5() {
    // Получаем ссылку на кнопку
    const changeTextButton5 = document.querySelector('.search-edit-text-p');
    // Добавляем событие click на кнопку
    changeTextButton5.addEventListener('click', () => {
        // Получаем все элементы с классом description
        const descriptionElements = document.querySelectorAll('.description');
        // Перебираем найденные элементы и изменяем их текстовое содержимое
        descriptionElements.forEach((element) => {
            element.textContent = 'Новый текст';
        });
    });
};



//  Задание 6. Добавление нового элемента в DOM
// Функция для добавления нового элемента <p>
function addNewParagraph() {
    // Получаем ссылку на кнопку
    const addElementButton = document.querySelector('.addElementButton');
    // Добавляем событие click на кнопку
    addElementButton.addEventListener('click', () => {
        // Создаем новый элемент <p>
        const newParagraph = document.createElement('p');
        // Устанавливаем текстовое содержимое нового элемента
        newParagraph.textContent = 'Новый абзац';
        // Добавляем новый элемент в конец документа
        document.body.appendChild(newParagraph);
    });
};



//  Задание 7. Удаление элемента
// Функция для удаления первого элемента <p> с классом description
function removeFirstDescription() {
    // Получаем ссылку на кнопку
    const removeElementButton = document.querySelector('.removeElementButton');
    // Добавляем событие click на кнопку
    removeElementButton.addEventListener('click', () => {
        // Находим первый элемент с классом description
        const firstDescriptionElement = document.querySelector('.description');
        // Если элемент найден, удаляем его
        if (firstDescriptionElement) {
            firstDescriptionElement.remove();
        }
    });
};
