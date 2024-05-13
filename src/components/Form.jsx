import React, {useState} from "react";
import styles from "./styles/Form.module.css";
import Button from "./Button";
import axios from "axios";
import {NavLink} from "react-router-dom";


function Form() {
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
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const HOST = '127.0.0.1';
    const PORT = '5000';

    const handlePostRequest = () => {
        // Выполнить POST запрос с данными формы
        axios.post(`http://${HOST}:${PORT}/api/v2`, formData)
            .then(response => {
                console.log(response.data);
                // Дальнейшая обработка ответа сервера
            })
            .catch(error => {
                console.error("Ошибка при выполнении POST запроса:", error);
            });
    };


    return (
        <div>
            <div className={styles.appeal}>Для создания резюме, пожалуйста, заполните форму</div>
            <div className={styles.forms}>

                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}/>
                    <div className={styles.inputDescription}>ФИО</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="desiredPosition"
                           value={formData.desiredPosition}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>желаемая должность</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="education"
                           value={formData.education}
                           onChange={handleChange}/>
                    <div className={styles.inputDescription}>образование</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="city"
                           value={formData.city}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>город</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="experience"
                           value={formData.experience}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>опыт работы</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>email</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="phoneNumber"
                           value={formData.phoneNumber}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>номер телефона</div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input}
                           type="text"
                           name="expectedSalary"
                           value={formData.expectedSalary}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>ожидаемая зарплата</div>
                </div>

                <Button innerText="Создать резюме" onClick={handlePostRequest}/>
                <NavLink to="/DownloadForm">
                    <Button innerText={"Распечатать резюме"}>
                    </Button>
                </NavLink>


        </div>
</div>
)
}

export default Form;
