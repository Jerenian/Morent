import React from "react";
import classes from "./Billing.module.scss"

const Billing = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.top}>
                <div className={classes.topText}>
                    <h1>Billing Info</h1>
                    <p>Please enter your billing info</p>
                </div>
                <div className={classes.Steps}>Step 1 of 4</div>
            </div>
            <form className={classes.item}>
                <div className={classes.NameAddres}>
                    <div>
                        <h2>Name</h2>
                        <input placeholder="Name" type="text" />
                    </div>
                    <div>
                        <h2>Address</h2>
                        <input placeholder="Address" type="text" />
                    </div>
                </div>
                <div className={classes.PhoneTown}>
                        <div>
                            <h2>Phone Number</h2>
                            <input placeholder="Phone Number" type="text" />
                        </div>
                        <div>
                            <h2>Town / City</h2>
                            <input placeholder="Town / City" type="text" />
                        </div>
                 </div>
            </form>
        </div>
    )
}
export default Billing