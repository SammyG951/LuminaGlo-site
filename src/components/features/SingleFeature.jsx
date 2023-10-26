import React from "react";
import Grid from "@mui/material/Grid";

function SingleFeature(props){
    return(
        <Grid item xs={3} className="feature-partial">
            <div>
                <div className="feature-icon">
                    {props.icon}
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </Grid>
    );
}

export default SingleFeature;