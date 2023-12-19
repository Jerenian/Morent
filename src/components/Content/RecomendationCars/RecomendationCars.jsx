import React from "react";
import { RecCarArr } from "../../CarArray";
import classes from "./RecomendationCars.module.scss"
import SetRecCars from "./SetRecCars";
const RecomendationCars = ({setChousenCar}) => {

    const CardRecList = RecCarArr.map((car, i) => (
        <SetRecCars car = {car} setChousenCar = {setChousenCar} />
    ))

    return (
        <div className={classes.Wrapper}>
        <div className={classes.title}>
            <h1>Recomendation Car</h1>
            <a href="">View All</a>
        </div>
        <div className={classes.Container}>
            {CardRecList}
        </div>
        <div className={classes.ButtonContainer}>
        <button className={classes.button}>Show more car</button>
    </div>
    </div>
    )
}

export default RecomendationCars