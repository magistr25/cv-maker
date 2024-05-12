import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFDocument from "./PDFgeneraton";

export const PDFGenerationContainer = (props) => {
    const HOST = '127.0.0.1';
    const PORT = '5000';

    const [data, setData] = useState(null); // Используйте состояние для хранения данных

    useEffect(() => {
        // Выполнить GET запрос при монтировании компонента
        axios.get(`http://${HOST}:${PORT}/api/v2/pdf`, {
            params: {
                email: props.email
            }
        })
            .then(response => {
                // Обновить состояние с полученными данными
                setData(response.data);
            })
            .catch(error => {
                console.error("Ошибка при выполнении GET запроса:", error);
            });
    }, [props.email]); // Пустой массив зависимостей гарантирует, что запрос выполнится только один раз при монтировании компонента

    return (
        // Передайте данные в компонент PDFDocument, когда они доступны
        data && <PDFDocument data={data} />
    );
};
