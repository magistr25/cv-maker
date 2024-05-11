import React, { useState } from "react";
import styles from "./DownloadForm.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";



function DownloadForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        desiredPosition: "",
        education: "",
        city: "",
        experience: "",
        email: "",
        phoneNumber: "",
        expectedSalary: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const getResume = (email) => {
        const HOST = '127.0.0.1';
        const PORT = '5000';

        // Выполнить GET запрос
        axios.get(`http://${HOST}:${PORT}/api/v2/pdf`, {
            params: {
                email: email
            }
        })
            .then(response => {
                // Дальнейшая обработка полученных данных
                // здесь нужно создать PDF
                console.log(response.data)
                return response.data;

            })
            .catch(error => {
                console.error("Ошибка при выполнении GET запроса:", error);
            });

    };

    return (
        <div>
            <div className={styles.appeal}>Чтобы распечатать Ваше резюме, введите email</div>
            <div className={styles.forms}>
                <div>
                    <input
                        className={styles.input}
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>email</div>
                </div>

                <NavLink to="/PDFgeneration">
                    <Button innerText={"Распечатать резюме"} onClick={() => getResume(formData.email)}>
                    </Button>
                </NavLink>
            </div>
        </div>
    );
}

export default DownloadForm;
