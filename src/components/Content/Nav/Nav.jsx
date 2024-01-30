import React, { useState } from "react";
import { AllCars } from "../../CarArray";
import classes from "./Nav.module.scss"
const Nav = () => {
    const [SortType, setSortTypes] = useState()
    const Types = AllCars.map((q) => q.type)
    const People = AllCars.map((People) => People.People)
    const Two = People.filter((num) => num === 2)
    const Four = People.filter((num) => num === 4)
    const Six = People.filter((num) => num === 6)
    const Eight = People.filter((num) => num > 7)
    const Sport = Types.filter((type) => {
        return (
            type === "Sport"
        )
    })
    const SUV = Types.filter((type) => {
        return (
            type === "SUV"
        )
    })
    const MPV = Types.filter((type) => {
        return (
            type === "MPV"
        )
    })
    const Sedan = Types.filter((type) => {
        return (
            type === "Sedan"
        )
    })
    const Coupe = Types.filter((type) => {
        return (
            type === "Coupe"
        )
    })
    const Hatchback = Types.filter((type) => {
        return (
            type === "Hatchback"
        )
    })
    let a 
    if(innerWidth > 712){
        a = 'auto'
    } 
    else {
        a = '90px'
    }

    return(
        <div className={classes.Wrapper} >
            <div className={classes.Container}>
                <div className={classes.Type} >
                <h2>TYPE</h2>
                    <form className={classes.TypeForm} action="">
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                        
                            Sport <em>  ({Sport.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                                SUV <em> ({SUV.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                                
                                MPV <em>  ({MPV.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                            
                                Sedan <em>  ({Sedan.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                            
                            Coupe <em>  ({Coupe.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                            
                            Hatchback <em>  ({Hatchback.length})</em>
                            </label>
                        </div>
                    </form>
                </div>
                <div className={classes.Capacity} >
                    <h2>CAPACITY</h2>
                <form className={classes.CapacityForm} action="">
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                            2 Person <em>  ({Two.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                                
                                4 Person <em>  ({Four.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                                
                                6 Person <em>  ({Six.length})</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                                
                                8 or More <em>  ({Eight.length})</em>
                            </label>
                        </div>

                    </form>
                </div>
                <div className={classes.Price}>
                <h2>PRICE</h2>
                    <form action="">
                        <input style={{width : a}} type="range" max={100} name="" id="" />
                    </form>
                    <p className={classes.MaxPrice}> MAX: $100</p>
                </div>
            </div>
        </div>
    )
}
export default Nav