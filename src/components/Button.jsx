import React from "react";
import styles from "./styles/Button.module.css";
import {NavLink} from "react-router-dom";

const Button = ({innerText, onClick, flag}) => {
    if (flag){
        return (
            <NavLink to="/PDFgenerationContainer">
                <button type={"submit"} className={styles.button} onClick={onClick}>
                    {innerText}
                </button>
            </NavLink>
        )
    } else {
        return (
            <button type={"submit"} className={styles.button} onClick={onClick}>
                {innerText}
            </button>
        )
    }
}

export default Button;
