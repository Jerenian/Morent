import React from "react";
import classes from "./footer.module.scss"
import { RatingArr } from "../CarArray";

const Footer = () => {
    return(
        <div className={classes.Container}>
            <div className={classes.UpperSide}>
                <div className={classes.LeftUp}>
                    <h2 className={classes.title}>Morent</h2>
                    <p className={classes.subtitle}>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className={classes.RightUp}>
                    <h3 className={classes.About}>About
                        <ul className={classes.list}>  
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Bussiness Relation</li>
                        </ul>
                    </h3>
                    <h3 className={classes.Community}>Community 
                        <ul className={classes.list}>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </h3>
                    <h3 className={classes.Socials}>Socials
                        <ul className={classes.list}>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </h3>
                </div>
            </div>
            <div className={classes.LowerSide}>
                <div className={classes.LeftLow}>©2022 MORENT. All rights reserved</div>
                <div className={classes.RightLow}>
                    <p>Privacy & Policy</p>
                    <p className={classes.Terms}>Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}
export default Footer