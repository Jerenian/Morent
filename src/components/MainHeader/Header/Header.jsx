import React from "react";
import classes from "./Header.module.scss"
import HeadInput from "../HeadInput/HeadInput";
import HeadNotice from "../HeadNotice/HeadNotice";
import HeadHurt from "../HeadHeart/HeadHeart";
import HeadSettings from "../HeadSettings/HeadSettings";
import HeadUser from "../HeadUser/HeadUser";
const Header = ({navVisible, setnavVisible}) => {
    return (
        <div className = {classes.Contaiter}>
            <div className={classes.leftSide}>
                <h1 className = {classes.logo}>Morent</h1>
                <HeadInput navVisible = {navVisible} setnavVisible = {setnavVisible}></HeadInput>
            </div>
            <div className={classes.rightSide}>
                <ul className={classes.list}>
                    <HeadNotice></HeadNotice>
                    <HeadHurt />
                    <HeadSettings />
                    <HeadUser />
                    
                </ul>
            </div>
        </div>
    )
}
export default Header