import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TitleImg from "./TitleImg";
import Button from "../Button";

function Title(){
    return(
        <div>
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TitleImg />
                </Grid>
                <Grid item xs={6}>
                    <p>Lighting Innovation at Your Fingertips</p>
                    <Button name="View Options" />       
                </Grid>
            </Grid>
        </Box>
        </div>
    );
}

export default Title;