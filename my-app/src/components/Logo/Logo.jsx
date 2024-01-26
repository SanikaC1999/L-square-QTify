import React from "react";
import logoimg from "../../assets/logoimg.png"
import styles from "./Logo.module.css"

export default function Logo(){
    return (
        <div className={styles.logoimage}>
        <img src={logoimg} alt="logo" width={67} />
        </div>
    )
}