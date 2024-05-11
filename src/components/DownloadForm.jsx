import React, {useState} from "react";
import styles from "./DownloadForm.module.css";
import Button from "./Button";
import axios from "axios";
import jsPDF from 'jspdf';
import {NavLink} from "react-router-dom";


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

                <NavLink to="/PDFgeneration">
                    <Button innerText={"Распечатать резюме"}>
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}

export default DownloadForm;
