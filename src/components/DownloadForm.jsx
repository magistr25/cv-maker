import React, { useState } from "react";
import { connect } from "react-redux"; // Импортируем connect из react-redux
import styles from "./DownloadForm.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { setEmail } from "./actionSetEmail"; // Импортируем действие setEmail

function DownloadForm({ setEmail }) {
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

    const handleButtonClick = () => {
        setEmail(formData.email); // Вызываем setEmail с новым значением email
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

                <NavLink to="/PDFgenerationContainer">
                    <Button innerText={"Распечатать резюме"} onClick={handleButtonClick} />
                </NavLink>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (email) => dispatch(setEmail(email)) // Передаем setEmail через mapDispatchToProps
    };
};

export default connect(null, mapDispatchToProps)(DownloadForm); // Подключаем setEmail к компоненту DownloadForm
