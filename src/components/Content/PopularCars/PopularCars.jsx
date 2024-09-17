import React, { useEffect, useRef, useState } from "react";
import { PopCarArray } from "../../CarArray";
import SetPopCars from "./SetPopCars";
import classes from  "./PopularCars.module.scss"
import {motion} from "framer-motion"
const PopularCars = ({setChousenCar, navVisible}) => {
    const [width, setWidth] = useState(0)
    const Slides = useRef()
    const CardPopList = PopCarArray.map((car, i) => (
        <SetPopCars  setChousenCar = {setChousenCar} navVisible = {navVisible} car = {car} i = {i} />
    ))
        useEffect(() => {
            setWidth(Slides.current.scrollWidth - Slides.current.offsetWidth)
        }, [])
        
    return (
        <div className={classes.Wrapper}>
            <div className={classes.title}>
                <h1>Popular Cars</h1>
                <a href="">View All</a>
            </div>
            <motion.div   className={classes.Container}>
                <motion.div 
                 drag = "x"
                 dragConstraints = {{right : 0, left:-width }} 
                 ref = {Slides} 
                 className={classes.carusel}>
                   {CardPopList}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default PopularCars