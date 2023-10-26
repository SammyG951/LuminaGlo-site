import React from "react";
import SingleFeature from "./SingleFeature";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LightIcon from '@mui/icons-material/Light';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import GrassIcon from '@mui/icons-material/Grass';
import CheckIcon from '@mui/icons-material/Check';

function Features() {

    const features = [
        {
            title: 'Personalized Lighting',
            description: 'Tailor the ambiance with custom colors and brightness for any mood or occasion.',
            icon: <LightIcon />
        },
        {
            title: 'App-Controlled Convenience',
            description: 'Easily adjust settings, create schedules, and sync with music via our user-friendly app.',
            icon: <AppShortcutIcon />
        },
        {
            title: 'Eco-friendly Illumination',
            description: 'Experience stunning lighting while conserving energy, reducing costs, and supporting the environment.',
            icon: <GrassIcon />
        },
        {
            title: 'Seamless Intergration',
            description: 'Integrate LuminaGlo into your existing smart home ecosytem for a unified, connencted living experience',
            icon: <CheckIcon />
        }
    ]

    console.log(features);

    return(
        <div id="features">
            <Box>
                <Grid container spacing={9}>
                    {features.length > 0 && (
                        features.map((featureItem, index) => {
                            return(
                                <SingleFeature 
                                    key={index}
                                    title={featureItem.title}
                                    description={featureItem.description}
                                    icon={featureItem.icon}
                                />
                            );
                        })
                    )}
                </Grid>
            </Box>
        </div>
    );

}

export default Features;