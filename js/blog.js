// script.js

// Функция для загрузки данных из JSON
function loadArticle() {
    fetch('/articles.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Вывод данных в консоль для отладки

        // Получение первого элемента массива (первого объекта)
        const articleData = data[0];

        // Проверка, что данные получены и не пусты
        if (articleData) {
            // Заполнение заголовка статьи
            document.getElementById('article-title').textContent = articleData['article-title'];

            // Заполнение содержимого статьи
            document.getElementById('article-content').textContent = articleData['article-content'];
        } else {
            console.error('Ошибка: Данные не получены или пусты');
        }
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });
}

// Вызов функции загрузки данных при загрузке страницы
window.onload = loadArticle;
