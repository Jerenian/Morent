import React from "react";
import classes from './Rental.module.scss'
import { circle } from "../../../../public/assets/circle";
import { arrowdown } from "../../../../public/assets/arrowdown";
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
            <div className={classes.circle}>{ circle }</div>
            <p>Pick-Up</p> 
         </div>
        <form className={classes.item}>
            <div className={classes.LocDate}>
                <div>
                    <h2>Location</h2>
                    <div className={classes.selectContainer}>
                        <select  name="" id="">
                            <option disabled selected hidden value="">Location</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h2>Date</h2>
                    <div className={classes.selectContainer}>
                        <select  name="" id="">
                            <option disabled selected hidden value="">Location</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={classes.Time}>
                    <div>
                        <h2>Time</h2>
                        <div className={classes.selectContainer}>
                            <select  name="" id=""> 
                                <option disabled selected hidden > Dfd</option>
                                <option> Dfd</option>
                            </select>
                        </div>
                    </div>
             </div>
             </form>


             <div id={classes['DropOff']} className={classes.topImg}>
                <div className={classes.circle}>{ circle }</div>
                <p>Drop-Off</p> 
             </div>

            <form className={classes.item}>
                <div className={classes.LocDate}>
                    <div>
                        <h2>Location</h2>
                        <div className={classes.selectContainer}>
                            <select  name="" id="">
                                <option disabled selected hidden value="">Location</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>Date</h2>
                        <div className={classes.selectContainer}>
                            <select  name="" id="">
                                <option disabled selected hidden value="">Location</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={classes.Time}>
                        <div>
                            <h2>Time</h2>
                            <div className={classes.selectContainer}>
                                <select  name="" id="">
                                    <option disabled selected hidden value="">Select your time</option>
                                </select>
                            </div>
                        </div>
                </div>
             </form>

    </div>
    )
}

export default Rental