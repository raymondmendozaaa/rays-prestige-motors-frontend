import React from "react";
import { useState, useEffect } from "react";

import './CarCategoriesList.css';

function CategoryList({onSelectCategory}) {
    const [car_categories, carCategorySetter] = useState([]);

    useEffect( () => {
        handleQuery();
    }, []);

    const handleQuery = () => {
        let parameters = {
            method: "GET"
        }
        console.log("handleQuery called")
        let url = 'http://localhost:5000/car_categories/';
        fetch (url, parameters)
            .then (res => res.json())
            .then (json => {
                console.log("API response:",json )
                carCategorySetter(json.car_categories);
            })
            .catch(err => console.error("error fetching categories:", err));
    }

    return (
        <div className="category-list-container">
            {car_categories?.map(category => (
                <div
                    key={category.car_id}
                    className="category-list-item" 
                    onClick={() => onSelectCategory(category)}>
                    {category.car_type}
                </div>
            ))}
        </div>
    )
}

export default CategoryList;