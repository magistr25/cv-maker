import React from "react";
import styles from "./Button.module.css";

const Button = ({innerText, onclick}) => {
    return (
        <button type={"submit"} className={styles.button} onClick={onclick}>
            {innerText}
        </button>
    )
}

export default Button;
