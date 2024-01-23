import React, { useEffect, useRef } from "react";
import classes from '../Comment/Comment.module.scss'
import Favorite from "../Content/PopularCars/Favorite/Favorite";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import { arrows } from "../HeroSection/img/arrowscopy";
import { PopCarArray } from "../CarArray";
import { RecCarArr } from "../CarArray";
import { AllCars } from "../CarArray";
import RecCars from "./RecCars";
import PopCars from "./PopCars";
import {motion} from 'framer-motion'

// const CardPopList4 = PopCarArray.map((car, i) => (

// ))

//Создать 5 масививов и 2 компанента
//// Массив для 4 и 3 Популярных машин
////// Создать компанент Популярных машин
//// Массив для всех и 6 рекомендованных  
////// Создать компанент рекомендованных
//// Создать состояние при котором оба компанента выводият маквсимальное количество машин


const Comment = ({navVisible}) => {
    const {id} = useParams()
    const [img, setImg] = useState()
    const [show, setShow] = useState(false)
    const [style, setstyle] = useState(false)
    const [chosen, setchosen] = useState(true)
    
        const MainImage = (el) => {
            if(el.className === 'other'){
                setstyle(true)
                setImg(el.src)
                console.log(el.clientHeight)
            }
            else{
                setstyle(false)
                setImg(`${location.origin}/${Car.src}`)
                
        }
        }
        const Car = AllCars.filter((car) => car.id == id)[0]

        useEffect(() => {
            if(Car.src){
                setImg(
                    `${location.origin}/${Car.src}`)
            }
        }, [])
        let textButton
        if(show){
            textButton = "Hide"
        }
        else{
            textButton = "Show All"
        }
        const CardPopList = PopCarArray.map((car, i) => (
            <PopCars  navVisible = {navVisible} car = {car} i = {i} />
        ))
        const CardRecList = RecCarArr.map((car) => (
            <RecCars car = {car}/>
        ))
    return (
        <div className={classes.Container}>
            <div className={classes.UpperSide}>
                <div className={classes.Images}> 
                    <div data-selector = {style} className={classes.backImg}>
                        <div id={classes['mainImg']} data-selector= {style} className={classes.BigImg} >
                            <div className={classes.heroText}>
                                <h2 className={classes.heroTitle}>
                                    Sports car with the best <br /> design and acceleration
                                </h2>
                                <p className={classes.heroSubtitle}>
                                    Safety and comfort while driving a <br /> futuristic and elegant sports car
                                </p>
                            </div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                     <ul   className={classes.rowImges}>
                        <div  className={classes.back} onClick={ (e) => MainImage(e.target)} >
                                <li data-selector = {style} id={classes['mainImg']}  ><img id={classes['secImg']}  className={classes.TheCar}  src={`${location.origin}/${Car.src}`} /></li>
                        </div>
                        <li data-selector = {style} id = {classes['secImg']} onClick={ (e) => MainImage(e.target)} ><img id={classes['secImg']}  className="other"  src={`${location.origin}/public/assets/View 2.png`}  /></li>
                        <li data-selector = {style} id = {classes['secImg']}onClick={ (e) => MainImage(e.target)} ><img id={classes['secImg']} className="other"  src={`${location.origin}/public/assets/View 3.png`} /></li>
                    </ul>
                </div>
                 {/* спираль пропадает вероятнее всего из за того что data - selector не принимает true */}
                <div className={classes.information} >
                    <div className={classes.header}>
                        <h2 className={classes.CarName}>{Car.name}</h2>
                        <div className={classes.Rating}>
                                <img alt="" />
                                <p className={classes.Reviewer} >440+ Reviewer</p>
                            </div>
                        <Favorite></Favorite>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.discription}>
                        NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                        </div>
                        <div className={classes.Characteristics}>
                            <div className={classes.lineFirst}>  {/*сделать таблицей */}
                                <div className={classes.UpperLine}><p style={{color : '#90A3BF'}}>Type Car</p> <p>{Car.type}</p> </div>
                                <div><p style={{color : '#90A3BF'}}>Steering</p> <p>{Car.manual}</p> </div>
                            </div>
                            <div className={classes.line}>
                                <div className={classes.UpperLine}><p style={{color : '#90A3BF'}}>Capacity</p> <p>{Car.People} Person</p> </div>
                                <div><p style={{color : '#90A3BF'}}>Gasoline</p> <p>{Car.gas}L</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <div className={classes.cost}>
                            <div className={classes.Actual}>$ {Car.cost} / <em>day</em></div>
                            <div className={classes.Old}>{Car.oldCost} </div>
                        </div>
                        <div>
                         <button className={classes.Rent} > <Link to = {`/Payment/${id}`}>Rent now</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {classes.Comment}>
            <Reviews show={show}/>
                <div className={classes.showAll} >
                    <button className= {classes.showAllbtn} onClick={() => setShow(!show)}>{textButton} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00026 11.1996C7.53359 11.1996 7.06692 11.0196 6.71359 10.6663L2.36692 6.31964C2.17359 6.1263 2.17359 5.80631 2.36692 5.61297C2.56026 5.41964 2.88026 5.41964 3.07359 5.61297L7.42026 9.95964C7.74026 10.2796 8.26026 10.2796 8.58026 9.95964L12.9269 5.61297C13.1203 5.41964 13.4403 5.41964 13.6336 5.61297C13.8269 5.80631 13.8269 6.1263 13.6336 6.31964L9.28692 10.6663C8.93359 11.0196 8.46692 11.1996 8.00026 11.1996Z" fill="#90A3BF" stroke="#90A3BF" stroke-width="0.5"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={classes.Cars}>
            <motion.div   className={classes.popCars}>
                <motion.div 
                 drag = "x"
                 dragConstraints = {{right : 0, left:-900}} 
                //  ref = {Slides} 
                 className={classes.carusel}>
                   {CardPopList}
                </motion.div>
            </motion.div>
                <div className={classes.recCars} >
                    {CardRecList}
                </div>
             </div>
        </div>
    )
}
export default Comment