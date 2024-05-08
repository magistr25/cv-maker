import React, {useState} from "react";
import styles from "./DownloadForm.module.css";
import Button from "./Button";
import axios from "axios";
import jsPDF from 'jspdf';

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
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const HOST = '127.0.0.1';
    const PORT = '5000';

    const handleGetRequest = () => {
        const email  = formData.email;
        // Выполнить GET запрос
        axios.get(`http://${HOST}:${PORT}/api/v2/pdf`, {
            params: {
                email: email
            }
        })
            .then(response => {
                // Дальнейшая обработка полученных данных
                // здесь нужно создать PDF
                createAndDownloadPdf(response.data);
            })
            .catch(error => {
                console.error("Ошибка при выполнении GET запроса:", error);
            });
    };

    const createAndDownloadPdf = (data) => {
        // Извлечение данных из ответа
        const { FullName, DesiredPosition, Education, City, Experience, PhoneNumber, ExpectedSalary, email } = data;

        // Создание нового документа PDF
        const doc = new jsPDF();

        // Добавление текста в PDF
        doc.text(`Full Name: ${FullName}`, 10, 10);
        doc.text(`Desired Position: ${DesiredPosition}`, 10, 20);
        doc.text(`Education: ${Education}`, 10, 30);
        doc.text(`City: ${City}`, 10, 40);
        doc.text(`Experience: ${Experience}`, 10, 50);
        doc.text(`Phone Number: ${PhoneNumber}`, 10, 60);
        doc.text(`Expected Salary: ${ExpectedSalary}`, 10, 70);
        doc.text(`Email: ${email}`, 10, 80);

        // Сохранение PDF файла
        doc.save('resume.pdf');
    };




    return (
        <div>
            <div className={styles.appeal}>Чтобы распечатать Ваше резюме, введите email</div>
            <div className={styles.forms}>

                <div>
                    <input className={styles.input}
                           type="text"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                    />
                    <div className={styles.inputDescription}>email</div>
                </div>


                <Button innerText="Cкачать резюме" onclick = {handleGetRequest}/>
            </div>
        </div>
    )
}

export default DownloadForm;
