import React, {useState, useEffect, useRef} from "react";
import classes from "./PopularCars.module.scss"
import Favorite from "./Favorite/Favorite";
import { gas } from "../../../assets/icons/gas";
import { manual } from "../../../assets/icons/manual";
import { People } from "../../../assets/icons/People";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import {Link} from "react-router-dom";
const SetPopCars = ({setChousenCar, navVisible, car, i}) => {
    const ref = useRef()
    const rootclasses = [classes.Card]
    const [index, setIndex] = useState({i})
    function HideCards(i){
        if(i > 2) {
            rootclasses.push(classes.Hide)
        }
    }
    const a = '-100px'
    const isInView = useInView(ref , { margin: `0px ${a} 0px -200px`, once : false
      })
    
    
    if(navVisible){
         HideCards(index.i)
    }
    return (
        
        <motion.div 
        ref={ref}
        className={classes.List}
        style={{
            transition: '1s',
            opacity : isInView ? 1 : 0.3
        }}>

            <Link to = {`/Comments/${car.id}`}>
        <div  id={i} onClick={() => setIndex()} key={i} className={rootclasses.join(" ")}>
            <div className={classes.Header}>
                <div className={classes.Name}>
                    <h2>{car.name}</h2>
                    <p className={classes.type}>{car.type}</p>
                </div>
                <Favorite></Favorite>
            </div>
            <div className={classes.img}>
                <img  src={car.src} alt="" />
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
                <Link to= {`/Payment/${car.id}`} > <button className={classes.Rent} onClick={ () => setChousenCar(car)} >Rent now </button> </Link>
            </div>
        </div>
        </Link>
    </motion.div>

    )
}
export default SetPopCars