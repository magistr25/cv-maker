const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const { createCanvas, loadImage } = require('canvas');

// Разрешение CORS для всех источников
app.use(cors());

// Middleware для обработки данных в формате JSON
app.use(express.json());

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '352918',
    database: 'sv'
});

// Подключение к базе данных MySQL
con.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    console.log("Подключение к серверу MySQL успешно установлено");
});


// GET запрос к базе данных MySQL
app.get('/api/v2/pdf', (req, res) => {
    const email = req.query.email;
    const sql = `SELECT * FROM resumes WHERE email = '${email}'`;
    con.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.json({ message: "Пользователь с указанным email не найден" });
        }
    });
});



// POST запрос к базе данных MySQL
app.post('/api/v2', (req, res) => {

    const { fullName, desiredPosition, education, city, experience, email, phoneNumber, expectedSalary } = req.body;

    const sql = 'INSERT INTO resumes (fullName, desiredPosition, education, city, experience, email, phoneNumber, expectedSalary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    con.query(sql, [fullName, desiredPosition, education, city, experience, email, phoneNumber, expectedSalary], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Данные успешно добавлены');
    });
});

// Установка порта сервера
const PORT = process.env.PORT || 5000;

// Запуск сервера
const server = app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

// Закрытие соединения с базой данных при остановке сервера
server.on('close', () => {
    con.end(function (err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение к серверу MySQL закрыто");
    });
});

