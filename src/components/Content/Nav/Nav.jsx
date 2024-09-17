import React, { useState } from "react";
import { AllCars } from "../../CarArray";
import classes from "./Nav.module.scss"
const Nav = () => {
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
                        
                            Sport <em>10</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                                SUV <em> 12</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                                
                                MPV <em>  16</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                            
                                Sedan <em> 20</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                            
                            Coupe <em>  14</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label} >
                            <input type="checkbox" className={classes.input} />
                            
                            Hatchback <em>  14</em>
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
                            2 Person <em>  10</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                                
                                4 Person <em>  14</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                                
                                6 Person <em>  12</em>
                            </label>
                        </div>
                        <div className={classes.div}>
                            <label className={classes.Label}>
                            <input type="checkbox" className={classes.input} />
                                
                                8 or More <em>  16</em>
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