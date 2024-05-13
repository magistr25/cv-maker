import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFDocument from "./PDFgeneraton";
import {useSelector} from "react-redux";

export const PDFGenerationContainer = () => {
    const email = useSelector(state => state.email);
    const HOST = '127.0.0.1';
    const PORT = '5000';

    const [data, setData] = useState(null); // Используем состояние для хранения данных

    useEffect(() => {
        let isMounted = true; // Флаг, указывающий, что компонент монтируется

        if (!data && isMounted) { // Выполняем запрос только если данных нет и компонент монтируется
            axios.get(`http://${HOST}:${PORT}/api/v2/pdf`, {
                params: {
                    email: email
                }
            })
                .then(response => {
                    if (response.data.message === "Пользователь с указанным email не найден" && isMounted) {
                        console.log(response.data);

                       alert ("Пользователь с указанным email не найден. Введите корректный email");
                    }
                    if (isMounted) { // Проверяем, что компонент все еще монтируется
                        setData(response.data);

                    }
                })
                .catch(error => {
                    console.error("Ошибка при выполнении GET запроса:", error);
                   alert ("Ошибка!");
                });
        }

        return () => {
            isMounted = false; // Устанавливаем флаг в false при размонтировании компонента
        };
    }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз при монтировании компонента


    return (
        // Передаём данные в компонент PDFDocument, когда они доступны
        data && <PDFDocument data={data} />
    );
};
