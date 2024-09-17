import { useEffect, useState } from "react";
import React from "react";
import classes from "./Hero.module.scss"
import "./Hero.css"
import {Link } from "react-router-dom";

export const Hero = ({navVisible}) => {
    const [hide, setHide] = useState([])
    useEffect(() => {
        navVisible ? setHide(true) : setHide(false) 
    }, [{hide}])

    return  (
        <div className={classes.HeroContainer}>
            <div data-selector = {hide} className={classes.UpperSide}>
                <div className={classes.leftCard} >
                    <Link className={classes.back} to = "/Comments/1" >
                        <h1>The Best Platform <br /> for Car Rental</h1>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <button className={classes.leftCardbtn}> Rental Car </button>
                        <div className={classes.CarImageLeft}> <img src="src/components/HeroSection/img/Hero.png" alt="" /></div>
                    </Link>
                </div>
                
                
                <div className={classes.RightCard}>
                    <Link className={classes.backTwo} to = "/Comments/2" >
                        <h1>Easy way to rent a <br /> car at a low price</h1>
                        <p>Providing cheap car rental services and safe and comfortable facilities.</p>
                        <button className={classes.rightCardbtn}>Rental Car</button>
                        <div className={classes.CarImageRight}> <img src="src/components/HeroSection/img/HeroTwo.png" alt="" /></div>
                    </Link>
                </div>
            </div>
            <div className={classes.LowerSide}>
                <div className={classes.PickUp}>
                    <div className={classes.top}>
                    <img src="src/components/HeroSection/img/circle.svg" alt="" />
                    <p>Pick-Up</p> 
                    </div>
                    <div className={classes.Content}>
                        <div className={classes.lactions}>
                            <div className={classes.title}>Locations</div>
                            <p>Select your city<select name="" id=""></select></p>
                        </div>
                        <div className={classes.date}>
                        <div className={classes.title}>Date</div>
                        <p>Select your date<select name="" id=""></select></p>
                        </div>
                        <div className={classes.time}>
                        <div className={classes.title}>Time</div>
                        <p>Select your time<select name="" id=""></select></p>
                        </div>
                    </div>
                </div>
                <div className={classes.Arrows}>
                    <div>
                        <img src="src/components/HeroSection/img/swap.svg" alt="" />
                    </div>
                </div> 
                <div className={classes.DropOff}>
                <div className={classes.top}>
                    <img src="src/components/HeroSection/img/circle.svg" alt="" />
                    <p>Drop-Off</p>
                </div>
                <div className={classes.Content}>
                        <div className={classes.lactions}>
                            <div className={classes.title}>Locations</div>
                            <p>Select your city<select name="" id=""></select></p>
                        </div>
                        <div className={classes.date}>
                        <div className={classes.title}>Date</div>
                        <p>Select your date<select name="" id=""></select></p>
                        </div>
                        <div className={classes.time}>
                        <div className={classes.title}>Time</div>
                        <p>Select your time<select name="" id=""></select></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
