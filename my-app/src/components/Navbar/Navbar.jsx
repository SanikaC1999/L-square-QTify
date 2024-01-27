import React from "react";
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../Feedback/Feedback";

export default function Nav(){
    return(
        <div className={styles.navbar}>
        <Logo />
        <Searchbar search={"Search a ablum of your choice"} />
        <Feedback />
        </div>
    )
}
