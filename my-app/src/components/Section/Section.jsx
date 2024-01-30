import React,{useEffect, useState} from "react";
import styles from "./section.module.css"
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card"
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({title , data , filterSource, type}){
    const [carouselToggle , setCarouselToggle] = useState(true);
    const [filters , setFilters] = useState([{key : "all" , label :"All"}])
    const [selectedFilterIndex , setSelectedFilterIndex] = useState(0)

    const handleToggle=()=>{
        setCarouselToggle((prevState)=> !prevState)
    }
    // console.log(data)

    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                    const {data} = response
                    setFilters([...filters , ...data])
            })
        }
    }, [])
    console.log(filters)

    const showFilter = filters.length > 1;
    const cardsToRender = data.filter((card) => showFilter && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key : card)

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                {!showFilter && (<h4 className={styles.toggletext} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"} </h4>)}
            </div>
            {showFilter && (
                <div className={styles.filterWrapper}>
                <Filters 
                filters={filters}
                selectedFilterIndex={selectedFilterIndex}
                setSelectedFilterIndex={setSelectedFilterIndex}
                />
                </div>
            )}
            {cardsToRender.length === 0 ? (
                <CircularProgress />
            ):(
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                                 {cardsToRender.map((ele) => (
                                    <Card key={ele.id} data={ele} type={type}  />
                                    
                                ))}
                        </div>
                    ) : (
                        <div>
                            <Carousel 
                                data={cardsToRender}
                                renderComponent={(data) => <Card data={data} type={type} />}
                            />
                        </div>
                    )}
                </div>
            )

            }
        </div>
    )
}