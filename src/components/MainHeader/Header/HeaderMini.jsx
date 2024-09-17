import React from 'react'
import classes from "../HeaderMini.module.scss"
import HeadUser from "../HeadUser/HeadUser";
import HeadSort from '../HeadSort/HeadSort';
import HeadInput from '../HeadInput/HeadInput';
import { search } from '../../../assets/icons/search';
export const HeaderMini = ({navVisible, setnavVisible}) => {
  return (
    <div className = {classes.Contaiter}>
        <div className={classes.upperside} >
            <h1 className = {classes.logo}>Morent</h1>
            <HeadUser />
        </div>
        <div className={classes.lowside}>
            <form className={classes.form} action="post">
                <HeadInput navVisible = {navVisible} setnavVisible = {setnavVisible}></HeadInput>
            </form>
        </div>
</div>
  )
}
