import React from "react";
import PopularCars from "./PopularCars/PopularCars";
import RecomendationCars from "./RecomendationCars/RecomendationCars";
import classes from "./Content.module.scss"
import {Hero}from "../HeroSection/Hero";
const Content = ({screenWD, navVisible, setnavVisible, setChousenCar}) => {
    return(
        <>  

              <div className={classes.Cards}>
                <Hero  navVisible = {navVisible} ></Hero>
                <PopularCars setChousenCar = {setChousenCar} navVisible = {navVisible} setnavVisible = {setnavVisible}></PopularCars>
                <RecomendationCars  setChousenCar = {setChousenCar} navVisible = {navVisible} setnavVisible = {setnavVisible}></RecomendationCars>
              </div>
        </>
    )
}
export default Content