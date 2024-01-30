import React from "react";
import styles from "./Card.module.css"
import { Chip } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({data ,type}){
    // console.log(data)
    const getCard=(type)=>{
        switch(type){
            case "album": {
                const {image , follows , title ,slug ,songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="cardimage"  height={170} className={styles.image} loading="lazy"/>
                                </div>
                                    <div className={styles.banner}>
                                        <Chip className={styles.cardchip} label={ `${follows} Follows`} size="small" />
                                    </div> 
                                <p className={styles.text}>{title}</p>
                            </div>
                        </Link>
                    </Tooltip>
                )}
            case "songs" : {
                const {image , likes , title} = data
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="cardimage"  height={170} className={styles.image} loading="lazy"/>
                         </div>
                        <div className={styles.banner}>
                            <Chip className={styles.cardchip} label={ `${likes} Follows`} size="small" />
                        </div>
                        <p className={styles.text}>{title}</p>
                    </div>
                )
            }
            default : return <></>
        }
    } 
     return getCard(type)
}