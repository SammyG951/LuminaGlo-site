import React from "react";
import Grid from "@mui/material/Grid";
import CustomButton from "../CustomButton";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function SinglePackage(props){
    return(
        <Grid item xs={4}>
            <div>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <p>{props.caption}</p>
                <ul>
                    {props.includes.map((item) => {
                        return(<li>{item}</li>)
                    })}
                </ul>
                
                <CustomButton 
                    id="package-button"
                    name={<ShoppingCartCheckoutIcon />}
                />
            </div>
        </Grid>
    );
}

export default SinglePackage;