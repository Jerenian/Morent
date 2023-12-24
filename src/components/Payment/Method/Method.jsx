import React from "react";
import classes from "./Method.module.scss"
const Method = () => {
    // const [val, setVal] = useState([])
    // const Date = (value) => {
    //     let day = []
    //     let month = []
    //     let year = []
    //     if(value === ){
    //         day = "0" + value
    //         len = len + 1
    //     }
    //     if(len = 3){
    //         month = "0" + value
    //     }
    //     year = 2023

    //     return setVal(`${day} / ${month} / ${year}`)
    // }
    return(
        <div className={classes.Container}>
        <div className={classes.top}>
            <div className={classes.topText}>
                <h1>Billing Info</h1>
                <p>Please enter your billing info</p>
            </div>
            <div className={classes.Steps}>Step 3 of 4</div>
        </div>
        <form className={classes.item}>
        <div className={classes.topImg}>
            <div className={classes.leftImg}>
                    <img src="src/components/HeroSection/img/circle.svg" alt="" />
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
                    <img src="src/components/HeroSection/img/paypal.svg" alt="" />
                </label>

                <label  className={classes.bitcoin} htmlFor="bitcoin">
                    <div>
                        <input name="pay" value = 'bitcoin' id="bitcoin" type="radio" />
                        <p>Bitcoin</p>
                    </div>
                    <img src="src/components/HeroSection/img/bitcoin.svg" alt="" />
                </label>
                
        </form>
    </div>
    )
}

export default Method