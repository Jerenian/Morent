import React, { useEffect } from "react";
import classes from '../Comment/Comment.module.scss'
import Favorite from "../Content/PopularCars/Favorite/Favorite";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AllCars } from "../CarArray";
const Comment = () => {
// прописать айдишники для картинок от 1 до 2 [√]
// создать стейт который принимает айди
// создать функцию с условием при котором если айдишник строго больше 0 функция возваращает false
// прописать data елемент который при значениие true добавляет фон, при false растягивает картинку по всему блоку
    const {id} = useParams()
    const [img, setImg] = useState()
    const [style, setstyle] = useState()
        const MainImage = (el) => {
                     if(el.alt == "main") {
                    setstyle(false)
                    setImg(el.src)
                }
                else if(el.alt == undefined){
                    setstyle(false)
                    setImg(el)
                }
                else{
                    setstyle(true)
                    setImg(el.src)
                }
        }
        const Car = AllCars.filter((car) => car.id == id)[0]

        useEffect(() => {
            if(Car.src){
                setImg(
                    `${location.origin}/${Car.src}`)
            }
        }, [Car])
            console.log(Car)
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
                        <div  className={classes.back} onClick={ () => MainImage(`${location.origin}/${Car.src}`)} >
                             <li id={classes['mainImg']}  ><img className={classes.TheCar}  src={`${location.origin}/${Car.src}`} alt="main" /></li>
                        </div>
                        <li id = {classes[1]} onClick={ (e) => MainImage(e.target)} ><img  src={`${location.origin}/public/assets/View 2.png`} alt="other" /></li>
                        <li id = {classes[2]}onClick={ (e) => MainImage(e.target)} ><img  src={`${location.origin}/public/assets/View 3.png`} alt="other" /></li>
                    </ul>
                </div>
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
                                <p style={{color : '#90A3BF'}}>Type Car</p> <p>{Car.type}</p> 
                                <p style={{color : '#90A3BF'}}>Capacity</p> <p>{Car.People} Person</p>
                            </div>
                            <div className={classes.line}>
                                <p style={{color : '#90A3BF'}}>Steering</p> <p>{Car.manual}</p> 
                                <p style={{color : '#90A3BF'}}>Gasoline</p> <p>{Car.gas}L</p>
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
            <div className="Comment"></div>
            <div className="Cars"></div>
        </div>
    )
}
export default Comment