import React from "react";
import styles from "./feedback.module.css"

export default function Feedback(){
    return (
        <>
        <button type="submit" className={styles.feedback}>
                Give Feedback
            </button>
        </>
    )
}