import React from "react";
import { useEffect, useState } from "react";

// import RenderCars from "../RenderCars/RenderCars.js";
import './CarDescriptionList.css';

function CarDescriptionList({selectedCarCategory}) {
    const [cars, setCars] = React.useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            if (!selectedCarCategory) return;

            try {
                const response = await fetch(`http://localhost:5000/api/car_description/${selectedCarCategory}`);
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, [selectedCarCategory]);

    if(!selectedCarCategory)
        return (
            <div className="car-description-container">
                <h3>Please select a car category to view cars</h3>
            </div>
        )

    return (
        <div>
            {selectedCarCategory && (
                <div className="car-description-container">
                    <h3>Cars in Selected Category</h3>
                    <ul className="car-description-list">
                        {cars.map(car => (
                            <li key={car.car_description_id}>
                                <strong>{car.make_model}</strong><br />
                                Price: ${car.price.toFixed(2)}<br />
                                MPG: {car.mpg}<br />
                                Color: {car.color}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

    /*
    const [car_description, descriptionSetter] = useState([]);
    
    const handleDelete = (selectedCarCategory) => {
        const car_description = selectedCarCategory
        const updatedDescription = [...car_description];
        updatedDescription.splice(selectedCarCategory, 1);
        descriptionSetter(updatedDescription);
    };

    const handleDescriptionsQuery = () => {
        if(!selectedCarCategory){
            descriptionSetter([]);
            return;
        }
        let parameters = {
            method: "GET"
        }
        console.log("handleDescriptionsQuery called")
        let url = `http://localhost:5000/car_description/${selectedCarCategory.car_id}/car_description`;
        fetch (url, parameters)
            .then (res => res.json())
            .then (json => {
                console.log("API response:",json );
                if (Array.isArray(json.car_description) && json.car_description.length > 0) {
                    descriptionSetter(json.car_description);
                } else {
                    console.error("No descriptions found in response");
                    descriptionSetter([]); 
                }
            })
            .catch(err => console.error("error fetching descriptions:", err));
    }

    useEffect(() => {
        handleDescriptionsQuery();
    }, [selectedCarCategory]);
    


    if(!selectedCarCategory)
        return (
            <div className="car-description-container">
                <h3>Please select a car category to view cars</h3>
            </div>
        )

    return (
        <div className="car-description-container">
            <h3>Car description for cars {selectedCarCategory.car_type}</h3>
            <ul className="car-description-list">
                {car_description.map(description => (
                   <RenderCars key={description.car_description_id} description={description}/>
                ))}
                {car_description.map(description => (
                    <RenderCars/>><button className="delete-button" onClick={() => handleDelete(description.car_description_id)}>Delete</button>
                ))}
            </ul>
        </div>
    )
}
*/
export default CarDescriptionList;