import React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TitleImg from "./TitleImg";
import CustomButton from "../CustomButton";

function Title(){
    return(
        <div id="title">
            <Header />
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <TitleImg />
                    </Grid>
                    <Grid item xs={8} className="center">
                        <div id="title-content" className="align-end">
                            <h1>Lighting Innovation at Your Fingertips.</h1>
                            <CustomButton id="title-button" name="View Options" href="#packages" />    
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Title;