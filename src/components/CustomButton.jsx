import React from "react";
import Button from "@mui/material/Button";
import {createTheme} from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const theme = createTheme({
    palette: {
        custom: {
            main: '#F4FFFF'
        }
    }
});

function CustomButton(props){
    return(
        <ThemeProvider theme={theme}>
            <Button id={props.id} color="custom" href={props.href}>{props.name} <KeyboardArrowRightIcon/></Button>
        </ThemeProvider>
    );
}

export default CustomButton;