import React from 'react'
import RestaurantCard from './RestaurantCard';
import { Card } from "semantic-ui-react";


function RestaurantList( {rest} ) {
    
    const renderRest = rest.map(oneRest =><RestaurantCard key ={oneRest.id} rest={oneRest}/>)


    return (

            <Card.Group itemsPerRow={6}>
           {renderRest} 
           </Card.Group>
    
    )
}

export default RestaurantList


