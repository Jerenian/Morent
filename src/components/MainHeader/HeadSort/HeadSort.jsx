import React, {useState} from "react";
import { AllCars } from "../../CarArray";
const HeadSort = ({navVisible, setnavVisible}) => {


    return (
        <div onClick={() => setnavVisible(!navVisible)}>
    <img src="src/assets/icons/filter.svg" alt="" />
    </div>
    )
}
export default HeadSort