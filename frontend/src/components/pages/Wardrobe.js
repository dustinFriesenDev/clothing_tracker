// import React, {useState, useEffect} from "react";
import '../../index.css';
import './WardrobeStyles.css';
const Wardrobe = () => {
   

    //HTML
    return (
        <div>
            <div className="sticky">
                <h1>My Wardrobe</h1>  
            </div>
            <div className='flex-container'>
                <div className='sidebar'>side bar here</div>
                <div className='display-container'>main display of wardrobe here</div>
            </div>
        </div>
    )

}

export default Wardrobe;