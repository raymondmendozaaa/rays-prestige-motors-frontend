import React from "react";
import { useState, useEffect } from "react";
import './CarCategoriesList.css';

function CarCategoryList({onSelectCategory}) {
    const [categories, setCategories] = React.useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/car_categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
            <div className="category-list-container">
                {categories.map(category => (
                    <button className="category-list-item" key={category.car_id} onClick={() => onSelectCategory(category.car_id)}>
                        {category.car_type}
                    </button>
                ))}
            </div>
    );
};
    /*
    const [car_categories, carCategorySetter] = useState([]);

    useEffect( () => {
        handleQuery();
    }, []);

    const handleQuery = () => {
        let parameters = {
            method: "GET"
        }
        console.log("handleQuery called")
        let url = `http://localhost:5000/car_categories/`;
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
                <div>
                    <div
                        key={category.car_id}
                        className="category-list-item" 
                        onClick={() => onSelectCategory(category)}
                        >
                        {category.car_type}
                    </div>
                </div>
            ))}
            <button onClick={onSelectCategory}></button>
        </div>
    )  
}
*/ 
export default CarCategoryList;