import React from "react";
import Hero from "../../components/Herosection/Herosection";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css"


export default function HomePage(){
    const {data} = useOutletContext();
    const { topAlbums, newAlbums, songs } = data;
    console.log(data)
    return(
        <>
            <Hero />
            <div className={styles.wrapper}>
                <p>{topAlbums.title}</p>
                <Section title="Top Alumbs" data={topAlbums} type="album" />
                <Section title="New Alumbs" data={newAlbums} type="album" />
            </div>
        </>
    )
}