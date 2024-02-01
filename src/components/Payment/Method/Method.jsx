import React from "react";
import classes from "./Method.module.scss"
import { PayPal } from "../../../../public/assets/Paypal.jsx";
import { Bitcoin } from "../../../../public/assets/Paypal.jsx";
import { circle } from "../../../../public/assets/circle.jsx";
const Method = () => {
    return(
        <div className={classes.Container}>
        <div className={classes.top}>
            <div className={classes.topText}>
                <h1>Payment Method</h1>
                <p>Please enter your billing info</p>
            </div>
            <div className={classes.Steps}>Step 3 of 4</div>
        </div>
        <form className={classes.item}>
        <div className={classes.topImg}>
            <div className={classes.leftImg}>
                    <div className={classes.circle}>{ circle }</div>
                    <p>Credit Card</p> 
            </div>
            <div className={classes.rightImg}>
                    <img className={classes.visa} src="src/components/HeroSection/img/visa.svg" alt="" />
                    <img src="src/components/HeroSection/img/mastercard.svg" alt="" />

            </div>
             </div>
            <div className={classes.NameAddres}>
                <div>
                    <h2>Card Number</h2>
                    <input placeholder="Card Number" type="text" />
                </div>
                <div>
                    <h2>Expration Date</h2>
                    <input
                      placeholder="DD / MM / YY" type="date" />
                </div>
            </div>
            <div className={classes.PhoneTown}>
                    <div>
                        <h2>Card Holder</h2>
                        <input placeholder="Card Holder" type="text" />
                    </div>
                    <div>
                        <h2>CVC</h2>
                        <input type = "password" max='3' placeholder="CVC" />
                    </div>
             </div>
        </form>
        <form className={classes.PayBit} action="">
                <label className={classes.Paypal} htmlFor="Paypal">
                <div>
                    <input name ="pay" value='paypal' id = "Paypal" type="radio" />
                    <p>PayPal</p>
                </div>
                        {PayPal}
                </label>

                <label  className={classes.bitcoin} htmlFor="bitcoin">
                    <div>
                        <input name="pay" value = 'bitcoin' id="bitcoin" type="radio" />
                        <p>Bitcoin</p>
                    </div>
                        {Bitcoin}
                </label>
                
        </form>
    </div>
    )
}

export default Method