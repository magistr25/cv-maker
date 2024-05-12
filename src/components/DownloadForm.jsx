import React, { useState } from "react";
import styles from "./DownloadForm.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {PDFGenerationContainer} from "./PDFgenerationContainer";



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
                    <Button innerText={"Распечатать резюме"} onClick={handleChange}>
                    </Button>
                </NavLink>


            </div>
        </div>
    );
}

export default DownloadForm;
