import React from "react";
import CustomButton from "./CustomButton";

function CTA(){
    return(
        <div id="call-to-action">
            <h1>Experience the future of lighting with LuminaGlo – Illuminate Your World Today!</h1>
            <CustomButton
                id="call-to-action-button"
                name="Buy Now!"
            />
        </div>
    );
}

export default CTA;