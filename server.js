const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Добавляем модуль CORS

const app = express();

// Подключение к базе данных MongoDB
mongoose.connect('mongodb+srv://ghostonline77:229Ja50XmRUHHipu@blog.qdw0jtm.mongodb.net/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Добавляем middleware для разрешения CORS
app.use(cors());

// Обработка запроса на получение статей блога
app.get('/articles', async (req, res) => {
    try {
        const articles = await mongoose.connection.db.collection('articles').find().toArray();
        res.json(articles);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Запуск сервера на порту 5500
app.listen(5500, () => {
    console.log('Сервер запущен на порту 5500');
});
