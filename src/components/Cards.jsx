import React from "react";
import { GoArrowRight } from "react-icons/go";

const Cards = ({title,des,url,articleurl}) => {
  return (
    <>
      <div class="card" style={{width: "18rem",backgroundColor:"#d3d3d3"}}>
        <img src= {url}class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {des}
          </p>
          <a href={articleurl} target="_blank" class="btn btn-success">
            Explore <GoArrowRight /> 
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
