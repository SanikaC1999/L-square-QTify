import React from "react";
import styles from "./herosection.module.css"
import headphones from "../../assets/vibrating-headphone 1.png"

export default function Hero(){
    return (
        <div className={styles.hero}>
            <div className={styles.main}>
                <div className={styles.text}>
                    <p>100 Thousand songs, add-free</p>
                    <p>Over thousand podcast episodes</p>
                </div>
                <img src={headphones} alt="headphoneimage" width={212} height={212} />
            </div>
         </div>
    )
}