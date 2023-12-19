import React from "react";
import classes from "./Hero.module.scss"
import "./Hero.css"
import {Link } from "react-router-dom";
const Hero = ({navVisible}) => {

    const rootclasses = [classes.UpperSide]
    if(navVisible){
        rootclasses.push(classes.Hide)
    }
    return  (
        <div className={classes.HeroContainer}>
            <Link to = "/Comments" >
            <div className = {rootclasses.join(" ")}>
                <div className={classes.leftCard} >
                    <div className={classes.back}>
                        <h1>The Best Platform for Car Rental</h1>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <button onClick={(e) => e.preventDefault} style={{cursor : 'pointer'}} type="submit"> Rental Car </button>
                        <img src="src/components/HeroSection/img/Hero.png" alt="" />
                    </div>
                </div>
                <div className={classes.RightCard}>
                    <div className={classes.backTwo}>
                    <h1>The Best Platform for Car Rental</h1>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <button>Rental Car</button>
                        <img src="src/components/HeroSection/img/HeroTwo.png" alt="" />
                    </div>
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
            </Link>
        </div>
    )
}

export default Hero