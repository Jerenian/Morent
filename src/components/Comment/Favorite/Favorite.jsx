
import React, {useState} from "react";
const Favorite = () => {
    const [fav, setFav] = useState(false)
    let url = 'src/components/PopularCars/img/emptyHeart.svg'
    if(fav){
        url = 'src/components/PopularCars/img/heart.svg'
    }
    else {
        url = 'src/components/PopularCars/img/emptyHeart.svg'
    }
    return(
            <img onClick={() => setFav(!fav)} src={url} alt="" />
    )
}

export default Favorite