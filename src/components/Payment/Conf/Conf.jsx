import React from "react";
import classes from "./Conf.module.scss"
const Conf = () => {
    return (
        <div className={classes.Container}>
        <div className={classes.top}>
            <div className={classes.topText}>
                <h1>Confirmation</h1>
                <p>We are getting to the end. Just few clicks and your rental is ready!</p>
            </div>
            <div className={classes.Steps}>Step 4 of 4</div>
        </div>
        <form className={classes.item}>
                <div>
                    <label htmlFor="SendMarketing">
                    <input id="SendMarketing" type="checkbox" />
                    I agree with sending an Marketing and newsletter emails. No spam, promissed!
                    </label>
                </div>
                <div>
                    <label htmlFor="privacy">
                        <input id="privacy" type="checkbox" />
                        I agree with our terms and conditions and privacy policy.
                    </label>
                </div>
        </form>
        <div className={classes.btn}>
            <button>Rent Now</button>
        </div>
        <div className={classes.footer}>
            <img src="src/components/HeroSection/img/sequrity.svg" alt="" />
            <h2>All your data are safe</h2>
            <p>We are using the most advanced security to provide you the best experience ever.</p>
        </div>
    </div>
    )
}

export default Conf