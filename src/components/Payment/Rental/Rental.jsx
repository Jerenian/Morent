import React from "react";
import classes from './Rental.module.scss'
const Rental = () => {
    return (
        <div className={classes.Container}>
        <div className={classes.top}>
            <div className={classes.topText}>
                <h1>Rental Info</h1>
                <p>Please enter your billing info</p>
            </div>
  
            <div className={classes.Steps}>Step 2 of 4</div>
 
        </div>
        <div className={classes.topImg}>
                    <img src="src/components/HeroSection/img/circle.svg" alt="" />
                    <p>Pick-Up</p> 
             </div>
        <form className={classes.item}>
            <div className={classes.LocDate}>
                <div>
                    <h2>Location</h2>
                    <select name="" id="">
                        <option disabled selected hidden value="">Location</option>
                    </select>
                </div>
                <div>
                    <h2>Date</h2>
                    <select name="" id="">
                        <option disabled selected hidden value="">Location</option>
                    </select>
                </div>
            </div>
            <div className={classes.Time}>
                    <div>
                        <h2>Time</h2>
                        <select  name="" id=""> 
                            <option disabled selected hidden > Dfd</option>
                            <option> Dfd</option>
                        </select>
                    </div>
             </div>
             </form>


             <div id={classes['DropOff']} className={classes.topImg}>
                <img src="src/components/HeroSection/img/circle.svg" alt="" />
                <p>Drop-Off</p> 
             </div>

            <form className={classes.item}>
            <div className={classes.LocDate}>
                <div>
                    <h2>Location</h2>
                    <select name="" id="">
                        <option disabled selected hidden value="">Location</option>
                    </select>
                </div>
                <div>
                    <h2>Date</h2>
                    <select name="" id="">
                        <option disabled selected hidden value="">Location</option>
                    </select>
                </div>
            </div>
            <div className={classes.Time}>
                    <div>
                        <h2>Time</h2>
                        <select name="" id="">
                            <option disabled selected hidden value="">Location</option>
                        </select>
                    </div>
             </div>
             </form>

    </div>
    )
}

export default Rental