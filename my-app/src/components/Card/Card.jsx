import React from "react";
import styles from "./Card.module.css"
import cardimage from "../../assets/pexels-photo-2792157.jpeg"

export default function Card(){
    return (
        <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src={cardimage} alt="cardimage"  height={170} className={styles.image} loading="lazy"/>
            <p className={styles.pill}>100 Follows</p>
        </div>
        <p className={styles.text}>New Bollywood</p>
        </div>
    )
}