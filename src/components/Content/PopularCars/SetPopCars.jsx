import React, {useState, useEffect} from "react";
import classes from "./PopularCars.module.scss"
import Favorite from "./Favorite/Favorite";

import {Link} from "react-router-dom";
const SetPopCars = ({setChousenCar, navVisible, car, i}) => {
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
        <Link to = {`/Comments/${car.id}`}>
        <div className={classes.List}>

        <div id={i} onClick={() => setIndex()} key={i} className={rootclasses.join(" ")}>
            <div className={classes.Header}>
                <div className={classes.Name}>
                    <h2>{car.name}</h2>
                    <p className={classes.type}>{car.type}</p>
                </div>
                <Favorite></Favorite>
            </div>
            <div className={classes.img}>
                <img src={car.src} alt="" />
            </div>
            <div className={classes.row} >
                <div>
                    <img src="src/assets/icons/gas.svg" alt="" />
                    <p className={classes.Characteristics}>{car.gas}L</p>
                </div>
                <div>
                    <img src="src/assets/icons/manual.svg" alt="" />
                    <p className={classes.Characteristics}>{car.manual}</p>
                </div>
                <div>
                    <img src="src/assets/icons/People.svg" alt="" />
                    <p className={classes.Characteristics}>{car.People} People</p>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.cost}>
                    <div className={classes.Actual}>$ {car.cost} / <em>day</em>  </div>
                    <div className={classes.Old}>{car.oldCost} </div>
                </div>
                 <button className={classes.Rent} onClick={ () => setChousenCar(car)} ><Link to= "payment" >Rent now </Link></button> 
            </div>
        </div>
    </div>
    </Link>
    )
}
export default SetPopCars