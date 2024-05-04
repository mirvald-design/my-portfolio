// Отправка запроса к серверу для получения статей
fetch('/articles')
.then(response => response.json())
.then(articles => {
    const articlesContainer = document.getElementById('articles');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articlesContainer.appendChild(articleElement);
    });
})
.catch(error => console.error('Ошибка:', error));