import React from "react";
import  ReactDOM  from "react-dom";
import logoimg from "../../assets/logoimg.png"
import styles from "./Logo.module.css"

export default function Logo(){
    return (
        <>
        <img src={logoimg} alt="logo" width = {67} className={styles.logoimage}/>
        </>
    )
}