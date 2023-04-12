import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Card() {
    return (
    <div class="card me-4 mb-4" style={{ width: "16rem" }}>
        <img src={rigoImage} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia non doloremque corporis iure ad sunt perferendis blanditiis molestias quo beatae nemo possimus eius maiores voluptatum natus provident, asperiores ut!</p>
        </div>
        <div class="card-body bg-ligth border-top d-flex justify-content-center">
            <a href="#" className="btn btn-primary">
                Find Out More!
            </a>
        </div>
    </div>)
}  

export default Card