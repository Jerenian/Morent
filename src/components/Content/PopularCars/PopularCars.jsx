import React from "react";
import { PopCarArray } from "../../CarArray";
import SetPopCars from "./SetPopCars";
import classes from  "./PopularCars.module.scss"
const PopularCars = ({setChousenCar, navVisible}) => {

    const CardPopList = PopCarArray.map((car, i) => (
        <SetPopCars setChousenCar = {setChousenCar} navVisible = {navVisible} car = {car} i = {i} />
    ))

    return (
        <div className={classes.Wrapper}>
            <div className={classes.title}>
                <h1>Popular Cars</h1>
                <a href="">View All</a>
            </div>
            <div className={classes.Container}>
                    {CardPopList}
            </div>
        </div>
    )
}

export default PopularCars