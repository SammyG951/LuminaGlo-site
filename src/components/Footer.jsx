import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <i class="social-icon fa-brands fa-twitter"></i>
                    </Grid>
                    <Grid item xs={3}>
                        <i class="social-icon fa-brands fa-facebook-f"></i>
                    </Grid>
                    <Grid item xs={3}>
                        <i class="social-icon fa-brands fa-instagram"></i>
                    </Grid>
                    <Grid item xs={3}>
                        <i class="social-icon fa-solid fa-envelope"></i>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Copyright ⓒ {year}</p>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
}

export default Footer;