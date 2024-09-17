import React from "react";
import classes from "./RecomendationCars.module.scss"
import Favorite from "./Favorite/Favorite";
import { gas } from "../../../assets/icons/gas";
import { manual } from "../../../assets/icons/manual";
import { People } from "../../../assets/icons/People";
import {Link} from "react-router-dom";
const SetRecCars = ({car, setChousenCar}) => {
return (
    <>
        <div className={classes.List}>
        <Link to = {`/Comments/${car.id}`}>
            <div className={classes.Card}>
                <div className={classes.Header}>
                    <div className={classes.Name}>
                        <h2>{car.name}</h2>
                        <p className={classes.type}>{car.type}</p>
                    </div>
                    <Favorite></Favorite>
                </div>
                    <div className={classes.CarItem}>
                        <div className={classes.img}>
                            <img src={car.src} alt="" />
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
                     </div>
                <div className={classes.footer}>
                    <div className={classes.cost}>
                        <div className={classes.Actual}>$ {car.cost} / <em>day</em>  </div>
                        <div className={classes.Old}>{car.oldCost} </div>
                    </div>
                    <Link className={classes.RentLink} to={`/Payment/${car.id}`} >  <button className={classes.Rent} onClick={ () => setChousenCar(car)} >Rent now </button> </Link>
                </div>
            </div>
            </Link>
        </div>
</>
)
}
export default SetRecCars