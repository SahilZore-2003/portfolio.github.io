import React from 'react'
import Comon from "./Comon"
import web from "./images/11.webp"

const Home = ()=>{
    return(
        <>
        <Comon
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
        </>
    );
}

export default Home;