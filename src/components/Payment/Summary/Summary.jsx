import React from "react";
import classes from "./Summary.module.scss"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllCars } from "../../CarArray";
const Summary = () => {
    const {id} = useParams()
    const chosenCar = AllCars.filter((car) => car.id == id )[0]

    return (
            
            <div className={classes.Container}>
                <div className={classes.Head}>
                    <h2 className={classes.title}>Rental Summary</h2>
                    <p className={classes.subtitle}>Prices may change depending on the length of the rental and the price of your rental car.</p>
                </div>
                <div className={classes.item}>
                    <div className={classes.car}>
                        <div className={classes.img}>
                            <img src={`${location.origin}/${chosenCar.src}`} alt="" />
                        </div>
                        <div className={classes.discription}>
                            <div className={classes.carName} >{chosenCar.name}</div>
                            <div className={classes.Rating}>
                                {chosenCar.Rating}
                                <p className={classes.Reviewer} >440+ Reviewer</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Cost} >
                        <div className={classes.subtotal}>
                            <p className={classes.Costtext} >Subtotal</p>
                            <p className={classes.Costsum} >$ {chosenCar.cost}.00</p>
                        </div>
                        <div className={classes.tax} >
                            <p className={classes.Costtext} >Tax</p>
                            <p className={classes.Costsum} >$0</p>
                        </div>
                    </div>
                    <form className={classes.Applay} >
                        <input placeholder="Apply promo code" className={classes.Promo} />
                        <button className={classes.ApNow} >Apply now</button>
                    </form>
                </div>
                <div className={classes.footer} >
                    <div className={classes.FootText} >
                        <h2 className={classes.Foottitle}>Total Rental Price</h2>
                        <p className={classes.Footsubtitle} >Overall price and includes rental discount</p>
                    </div>
                    <div className={classes.FootSum} >${chosenCar.cost}.00</div>
                </div>
            </div>

    )
}

export default Summary