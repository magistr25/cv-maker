import React, {useState} from "react";
import styles from "./Form.module.css";


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

                <button>создать резюме</button>
                <button>распечатать резюме</button>
            </div>
        </div>
    )
}

export default Form;
