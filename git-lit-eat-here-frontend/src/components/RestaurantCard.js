import React, {useState} from 'react'
import { Card } from "semantic-ui-react";
import styled from 'styled-components';

function RestaurantCard( {rest: {name, review, cuisine}}) {
    
    const[showFront, setFront] = useState(true)
    
    function deleteThat(e){
        fetch(`http://localhost:9292/restaurant/$#{restaurant.id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then((deleted) => console.log("deleted"))
   
    } 
    function handleClick(){
        setFront((currentFront) => !currentFront)
    }
    
    return (
        <>
        <Card onClick={handleClick}>
            {showFront ? `Restauraunt name: ${name}, \nCuisine: ${cuisine}`: review}
        </Card>
        <Button onClick={deleteThat} className="delete">x</Button>
        </>
    )
}

export default RestaurantCard

const Button = styled.button`
    background-color:white;
    border:none;
    padding:1px;
    padding-top: -5px;
    height:20px;
    margin-top: 20px;
    
    #delete:hover{
        
         background:#FFFFFF;
}

`