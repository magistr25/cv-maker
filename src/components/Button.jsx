import React from "react";
import styles from "./styles/Button.module.css";

const Button = ({innerText, onClick}) => {
    return (
        <button type={"submit"} className={styles.button} onClick={onClick}>
            {innerText}
        </button>
    )
}

export default Button;
