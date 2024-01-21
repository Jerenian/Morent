import React, {useState, useEffect} from "react";
import classes from "../Content/PopularCars/PopularCars.module.scss"
import Favorite from "./Favorite/Favorite";
import { gas } from "../../assets/icons/gas";
import { People } from "../../assets/icons/People";
import { manual } from "../../assets/icons/manual";
import {Link} from "react-router-dom";

const PopCars = ({setChousenCar, navVisible, car, i}) => {
    const rootclasses = [classes.Card]
    const [index, setIndex] = useState({i})
    function HideCards(i){
        if(i > 2) {
            rootclasses.push(classes.Hide)
        }
    }
    
    
    if(navVisible){
         HideCards(index.i)
    }
    return (
        
        <div className={classes.List}>
            <Link className={classes.Link} to = {`/Comments/${car.id}`}>
        <div id={i} onClick={() => setIndex()} key={i} className={rootclasses.join(" ")}>
            <div className={classes.Header}>
                <div className={classes.Name}>
                    <h2>{car.name}</h2>
                    <p className={classes.type}>{car.type}</p>
                </div>
                <Favorite></Favorite>
            </div>
            <div className={classes.img}>
                <img  src={`${location.origin}/${car.src}`} alt="" />
            </div>
            <div className={classes.row} >
                <div>
                    {gas}
                    <p className={classes.Characteristics}>{car.gas}L</p>
                </div>
                <div>
                    {manual}
                    <p className={classes.Characteristics}>{car.manual}</p>
                </div>
                <div>
                    {People}
                    <p className={classes.Characteristics}>{car.People} People</p>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.cost}>
                    <div className={classes.Actual}>$ {car.cost} / <em>day</em>  </div>
                    <div className={classes.Old}>{car.oldCost} </div>
                </div>
                <Link className={classes.Rent} to= {`/Payment/${car.id}`} >Rent now </Link>
            </div>
        </div>
        </Link>
    </div>
  
    )
}
export default PopCars