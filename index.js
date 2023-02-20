// Всем привет кто будет смотреть мой код. Далее я буду давать пояснения в первую очередь для самого себя.

// Находим элемент "button", который находится в HTML, при помощи Метода document.querySelector. С помощью Переменной const button устанавливаем связь с кнопкой в файле HTML.
const button = document.querySelector('button'); 

// Вывод текста в определённое место. Это место с классом output.
const output = document.querySelector('.output');


// Добавили Функцию addEventListener к кнопке. Эта Функция вызовет кнопку, когда произойдёт собыитие click.
button.addEventListener('click', function() {
    output.innerHTML = 'Мама, я тебя люблю!'
})