import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-5">My Projects</h1>
        <div className="container-fluid nav_bg  mx-auto">
          <div className="row mx-5 ">
           
              <div className="card col-md-3 mx-3 mb-2">
                <img src={props.img} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>

                  <a href={props.link} class="btn btn-primary">
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="card col-md-3 mx-3 mb-2">
                <img src={props.img1} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.name1}</h5>

                  <a href={props.link1} class="btn btn-primary">
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="card col-md-3 mx-3  mb-2">
                <img src={props.img2} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.name2}</h5>

                  <a href={props.link2} class="btn btn-primary">
                    Visit Site
                  </a>
                </div>
              </div>
            
            </div>
          </div>
        </div>
 
    </>
  );
};

export default Card;
