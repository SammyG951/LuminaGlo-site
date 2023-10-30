import React from "react";
import Title from "./title/Title";
import Footer from "./Footer";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Packages from "./packages/Packages";

function App(){
    return(
        <div>
            <Title />
            <Features />
            <Testimonials />
            <Packages />
            <Footer />
        </div>
    );
}

export default App;