import React from "react";
import  ReactDOM  from "react-dom";
import searchboximg from "../../assets/Search icon.svg"
import styles from "./searchbar.module.css"

export default function Searchbar(){
    return (
        <>
        <form className={styles.Searchbar}>
            <input placeholder="search a ablum of your choice"  className={styles.search}/>
            <button type="submit" className={styles.searchbutton}>
                <img src={searchboximg} alt="searchimg" width={20} height={20}/>
            </button>
        </form>
        </>
    )
}