import React from "react";
import './RenderCars.css';


function RenderCars({description}){
    return(
        <div className="qa-item">
            <h4>{description.make_model}</h4>
            {
                description.price.mpg.color ? 
                <div className="car-description-container">
                    <p className="car-description-container-field">{description.price}</p>
                    <p className="car-description-container-field">{description.mpg}</p>
                    <p className="car-description-container-field">{description.color}</p>
                </div> 
                :  <p>No description available</p>
            }
        </div>
    )

}

export default RenderCars;