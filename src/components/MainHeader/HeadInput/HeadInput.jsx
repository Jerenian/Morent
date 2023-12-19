import React from "react";
import HeadSort from "../HeadSort/HeadSort";
import classes from './HeadInput.module.scss'
const HeadInput = ({navVisible, setnavVisible}) => {
    return (
        <form className={classes.form} action="">
            <img src="src/assets/icons/search.svg" alt="" />
            <input placeholder="Search something here" className={classes.input} type="text" />
            <div><HeadSort navVisible = {navVisible} setnavVisible = {setnavVisible}></HeadSort></div>

        </form>
    )
}

export default HeadInput