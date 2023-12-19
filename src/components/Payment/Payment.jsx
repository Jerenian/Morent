import React from "react";
import Billing from "./Billing/Billing";
import Header from "../MainHeader/Header/Header";
import classes from "./Payment.module.scss"
import Summary from "./Summary/Summary";
import Conf from "./Conf/Conf";
import Method from "./Method/Method";
import Rental from "./Rental/Rental";
import Footer from "../footer/Footer";
import { useEffect } from "react";
const Payment = ({chosenCar, setChousenCar}) => {
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