import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SinglePackage from "./SinglePackage";

const packages = [
    {
        name: 'Essential Starter Kit',
        price: '$99',
        caption: 'The Essential Starter Kit includes everything you need to begin you LuminaGlo experience, featuring:',
        includes: [
            '2 LuminaGlo Smart Bulbs',
            'Mobile App Download'
        ]
    },
    {
        name: 'Deluxe Home Lighting Set',
        price: '$199',
        caption: 'Elevate your lighting with the Deluxe Home Lighting Set, featuring:',
        includes: [
            '4 LuminaGlo Smart Bulbs',
            'Mobile App Download',
            'LuminaGlo Remote'
        ]
    },
    {
        name: 'Premium Whole-House Bundle',
        price: '$350',
        caption: 'Illuminate your entire home with the Premium Whole-House Bundle, featuring:',
        includes: [
            '8 LuminaGlo Smart Bulbs',
            'Mobile App Download',
            'LuminaGlo Remote',
            'Exclusive Priority Support'
        ]
    },
]

function Packages(){
    return (
        <div id="packages">
            <Box>
                <Grid container spacing={9}>
                    {packages.length > 0 && (
                        packages.map((packageItem, index) => {
                            return(
                                <SinglePackage 
                                    key={index}
                                    name={packageItem.name}
                                    price={packageItem.price}
                                    caption={packageItem.caption}
                                    includes={packageItem.includes}
                                />
                            );
                        })
                    )}
                </Grid>
            </Box>
        </div>
    );
}

export default Packages;