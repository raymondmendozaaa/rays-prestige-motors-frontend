import React from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar.js";
import CarCategoriesList from '../../components/CarCategoriesList/CarCategoriesList.js';
import CarDescriptionList from "../../components/CarDescriptionList/CarDescriptionList.js";
import './Home.css';

function Home(){
    const [selectedCategory, selectedCategorySetter] = useState(null);

    const handleSelectCategory = (categoryId) => {
        selectedCategorySetter(categoryId);
    }

    
    return(
        <div>
            <Navbar />
            <div className="home-layout">
                <CarCategoriesList onSelectCategory={handleSelectCategory} />
                <CarDescriptionList selectedCarCategory={selectedCategory} />
            </div>
        </div>

    );

}

export default Home;