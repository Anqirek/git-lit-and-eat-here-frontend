import React from 'react'
import RestaurantCard from './RestaurantCard';

function RestaurantList( {rest} ) {
    
    const renderRest = rest.map(oneRest =><RestaurantCard key ={oneRest.id} rest={oneRest}/>)


    return (
        <div>
           {renderRest} 
        </div>
    )
}

export default RestaurantList