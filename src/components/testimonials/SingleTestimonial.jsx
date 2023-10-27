import React from "react";

function SingleTestimonial(props){
    return(
        <div id="testimonial-carousel-item">
            <h2>"{props.quote}"</h2>
            <img src={props.profilePhoto} alt="profile photo" />
            <em>{props.name}, {props.state}</em>
        </div>
    );
}

export default SingleTestimonial;