import React from 'react'

function RestaurantCard( {rest: {name, review, cuisine}}) {
    return (
        <div>
            <div> Name: {name},  Cuisine: {cuisine}
            </div>
            
            
        </div>
    )
}

export default RestaurantCard