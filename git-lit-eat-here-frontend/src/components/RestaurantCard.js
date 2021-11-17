import React from 'react'

function RestaurantCard( {rest: {name, review, cuisine}}) {
    
   function handleClick(e){
        console.log(e)
    }
    
    return (
        <div>
            <div> Name: {name},  Cuisine: {cuisine}
            <button onClick ={handleClick} className = "delete">x</button>
            </div>
        
            
        </div>
    )
}

export default RestaurantCard