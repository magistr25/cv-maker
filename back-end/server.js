const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// // Создание подключения к базе данных MySQL
// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '352918',
//     database: 'sv'
// });
//
// // Подключение к базе данных MySQL
// db.connect(function(err){
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     }
//     else{
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
//
// // закрытие подключения
// db.end(function(err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });

const app = express();

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

// GET запрос к базе данных MySQL
// app.get('/api/v2/pdf', (req, res) => {
//     const sql = 'SELECT * FROM mytable';
//     con.query(sql, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.json(result);
//     });
// });

// POST запрос к базе данных MySQL
app.post('/api/v2', (req, res) => {



    // Подключение к базе данных MySQL
    con.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else{
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });

    const { fullName, desiredPosition, education, city, experience, email, phoneNumber, expectedSalary } = req.body;
    const sql = 'insert into resumes (fullName, desiredPosition, education, city, experience, email, phoneNumber, expectedSalary) values (?,?,?,?,?,?,?,?)';
    con.query(sql, [fullName, desiredPosition, education, city, experience, email, phoneNumber, expectedSalary], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Данные успешно добавлены');
    });

    // закрытие подключения
    con.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });

});

// Установка порта сервера
const PORT = process.env.PORT || 5000;

// Запуск сервера
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
