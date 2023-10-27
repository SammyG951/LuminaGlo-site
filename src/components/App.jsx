import React from "react";
import Title from "./title/Title";
import Footer from "./Footer";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";

function App(){
    return(
        <div>
            <Title />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;