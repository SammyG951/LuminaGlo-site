import React from "react";
import ProductImg from "../assets/images/LuminaGlo-bulb-img.png"

function Title(){
    return(
        <div>
            <img src={ProductImg} alt="product-img" />
            <p>Lighting Innovation at Your Fingertips</p>
            <button>View Options</button>
        </div>
    );
}

export default Title;