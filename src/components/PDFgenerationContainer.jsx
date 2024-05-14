import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFDocument from "./PDFgeneraton";
import { useSelector } from "react-redux";
import DownloadForm from "./DownloadForm";
import styles from "./styles/PDFgenerationContainer.module.css";

export const PDFGenerationContainer = () => {
    const email = useSelector((state) => state.email);
    const HOST = '127.0.0.1';
    const PORT = '5000';

    const [data, setData] = useState(null); // Используем состояние для хранения данных
    const [loading, setLoading] = useState(true); // Флаг для отслеживания загрузки данных

    useEffect(() => {
        if (email) {
            axios.get(`http://${HOST}:${PORT}/api/v2/pdf`, {
                params: {
                    email: email
                }
            })
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Ошибка при выполнении GET запроса:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [email]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!data || data.message === "Пользователь с указанным email не найден") {
        return <div>
           <h2 className = {styles.message}>"Пользователь с указанным email не найден"</h2>
            <DownloadForm />
            </div>
    }


    return <PDFDocument data={data} />;
};
