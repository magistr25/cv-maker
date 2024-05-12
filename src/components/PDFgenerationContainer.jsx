import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFDocument from "./PDFgeneraton";
import {useSelector} from "react-redux";

export const PDFGenerationContainer = () => {
    const email = useSelector(state => state.email);
    const HOST = '127.0.0.1';
    const PORT = '5000';

    const [data, setData] = useState(null); // Используйте состояние для хранения данных

    useEffect(() => {
        // Выполнить GET запрос при монтировании компонента
        axios.get(`http://${HOST}:${PORT}/api/v2/pdf`, {
            params: {
                email: email
            }
        })
            .then(response => {
                // Обновить состояние с полученными данными
                setData(response.data);
            })
            .catch(error => {
                console.error("Ошибка при выполнении GET запроса:", error);
            });
    }, [email]); // Пустой массив зависимостей гарантирует, что запрос выполнится только один раз при монтировании компонента

    return (
        // Передайте данные в компонент PDFDocument, когда они доступны
        data && <PDFDocument data={data} />
    );
};
