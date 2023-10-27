import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import MaleProfile from '../../assets/images/male-profile.svg'
import FemaleProfile from '../../assets/images/female-profile.svg'
import SingleTestimonial from "./SingleTestimonial";
import { useState } from 'react';

function Testimonials(){

    const testimonials = [
        {
            name: 'Sarah',
            state: 'California',
            quote: 'LuminaGlo has comletely transformed the way I experience my home. The lighting is mesmerizing and the app is a breeze to use.',
            profilePhoto: FemaleProfile
        },
        {
            name: 'Mike',
            state: 'New York',
            quote: "I'm in love with the eco-friendly aspect of LuminaGlo. It not only looks great but also saves me money on my energy bills.",
            profilePhoto: MaleProfile
        },
        {
            name: 'Emily',
            state: 'Texas',
            quote: 'The Seamless intergration with my other smart devices is a game-changer. LuminaGlo truly completes my connected home.',
            profilePhoto: FemaleProfile
        },
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <div id="testimonials">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {testimonials.length > 0 && (
                        testimonials.map((testimonialItem, index) => {
                            return(
                                <Carousel.Item key={index}>
                                    <SingleTestimonial
                                        name={testimonialItem.name}
                                        state={testimonialItem.state}
                                        quote={testimonialItem.quote}
                                        profilePhoto={testimonialItem.profilePhoto}
                                    />
                                </Carousel.Item>
                            );
                        })
                )}
            </Carousel>
        </div>
    )
}

export default Testimonials;