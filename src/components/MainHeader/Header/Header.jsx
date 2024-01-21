
import { useEffect, useState } from "react";
import classes from "./Header.module.scss"
import HeadInput from "../HeadInput/HeadInput";
import HeadNotice from "../HeadNotice/HeadNotice";
import HeadHurt from "../HeadHeart/HeadHeart";
import HeadSettings from "../HeadSettings/HeadSettings";
import HeadUser from "../HeadUser/HeadUser";


export const Header = ({navVisible, setnavVisible}) => {
const [screenWD, setWD] = useState(window.innerWidth)
useEffect(() => {
    const Device = () => {
      setWD(window.innerWidth);
    };
    window.addEventListener('resize', Device);
  }, []);
    return (
        <div className = {classes.Contaiter}>
            <div className={classes.leftSide}>
                <h1 className = {classes.logo}>Morent, {screenWD} </h1>
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

import React from 'react'

