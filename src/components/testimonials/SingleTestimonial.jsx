import React from "react";

function SingleTestimonial(props){
    return(
        <div id="testimonial-carousel-item">
            <h2>"{props.quote}"</h2>
            <div className="center">
                <img src={props.profilePhoto} alt="profile photo" />
            </div>
            <em>{props.name}, {props.state}</em>
        </div>
    );
}

export default SingleTestimonial;