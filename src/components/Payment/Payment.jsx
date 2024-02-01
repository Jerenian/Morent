import React from "react";
import Billing from "./Billing/Billing";
import classes from "./Payment.module.scss"
import Summary from "./Summary/Summary";
import Conf from "./Conf/Conf";
import Method from "./Method/Method";
import Rental from "./Rental/Rental";
import { useParams } from "react-router-dom";
import { AllCars } from "../CarArray";
const Payment = ({chosenCar, setChousenCar}) => {
    const {id} = useParams()
    const Car = AllCars.filter((car) => car.id == id)[0]
    return(
        <div>
            <div className={classes.Container}>
                <div className={classes.leftSide}>
                    <Billing/>
                    <Rental></Rental>
                    <Method></Method>
                    <Conf></Conf>
                </div>
                    <div className={classes.rightSide}>
                        <Summary setChousenCar = {setChousenCar} chosenCar = {chosenCar} ></Summary>
                    </div>
            </div>
        </div>
    )
}
export default Payment