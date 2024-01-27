import React from "react";
import styles from "./Topablum.module.css"
import Card from "../Card/Card"
// import Grid from '@mui/material/Grid';
import { Grid } from "@mui/material";
export default function Topablum(){
    return (
        <div className={styles.topalbum}>
            <div className={styles.text}>
                <h5>Top Ablums</h5>
                <h5 className={styles.colors}>Show All</h5>
            </div>
            <div className={styles.scrollContainer}>
                <Grid container spacing={27.5}>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                    <Grid item lg={1}>
                        <Card />
                    </Grid>
                </Grid>
            </div>     
        </div>
    )
}