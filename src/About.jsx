import React from "react";
import Comon from "./Comon";
import web from "./images/12.webp";

const About = () => {
  return (
    <>
      <Comon
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="contact us"
      />
    </>
  );
};

export default About;
