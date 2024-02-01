import classes from "./Header.module.scss"
import HeadInput from "../HeadInput/HeadInput";
import HeadNotice from "../HeadNotice/HeadNotice";
import HeadHurt from "../HeadHeart/HeadHeart";
import HeadSettings from "../HeadSettings/HeadSettings";
import HeadUser from "../HeadUser/HeadUser";


export const Header = ({navVisible, setnavVisible}) => {
    return (
        <div className = {classes.Contaiter}>
            <div id="header" className={classes.leftSide}>
                <button type="submit" className = {classes.logo}>Morent </button>
                <HeadInput navVisible = {navVisible} setnavVisible = {setnavVisible}></HeadInput>
            </div>
            <div className={classes.rightSide}>
                <ul className={classes.list}>
                    <li><HeadNotice></HeadNotice></li>
                    <li><HeadHurt /></li>
                    <li><HeadSettings /></li>
                    <li className={classes.user} ><HeadUser  /></li>
                    
                </ul>
            </div>
        </div>
    )
}

import React from 'react'

