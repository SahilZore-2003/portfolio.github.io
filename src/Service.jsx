import React from "react";
import web from "./images/chinise.jpg";
import web1 from "./images/2.png";
import web2 from "./images/3.jpeg";
import Card from "./card";

const Service = () => {
  return (
    <>
      <Card
        name="food order"
        img={web}
        link="https://sahilzore-2003.github.io/RajChinese.github.io/"
        name1="SS Fitness"
        img1={web1}
        link1="https://chogalesoham.github.io/SSfitness.github.io/"
        name2="Msbte Books"
        img2={web2}
        link2="https://sahilzore-2003.github.io/MsbteBooks.github.io/"
      />
      
    </>
  );
};

export default Service;
