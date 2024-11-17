import React from "react";
import './RenderCars.css';


function RenderCars({description}){
    return(
        <div className="qa-item">
            <h4>{description.make_model}</h4>
            {
                description.price.mpg.color ? 
                <div>
                    <p>{description.price}</p>
                    <p>{description.mpg}</p>
                    <p>{description.color}</p>
                </div> 
                :  <p>No description available</p>
            }
        </div>
    )

}

export default RenderCars;