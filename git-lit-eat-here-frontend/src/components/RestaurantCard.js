import React, {useState} from 'react'
import { Card } from "semantic-ui-react";
import styled from 'styled-components';

function RestaurantCard( {rest: {name, id, rating, cuisine}}) {
    
    const[showFront, setFront] = useState(true)
    const [reload, setReload] = useState(true)

    function deleteRest(){
        fetch(`http://localhost:9292/restaurants/${id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(deleted => (deleted))
    } 

   function handleReload (){
    deleteRest(window.location.reload(false));

    }

    
   
    function handleClick(){
        setFront((currentFront) => !currentFront)
    }
    
    return (
        <>
        <Card onClick={handleClick}>
            {showFront ? `Restauraunt name: ${name}, \nCuisine: ${cuisine}`: rating}
        </Card>
        <Button onClick={handleReload} className="delete">x</Button>
        </>
    )
}

export default RestaurantCard

const Button = styled.button`
    background-color:white;
    // border:none;
    padding:1px;
    padding-top: -5px;
    height:20px;
    margin-top: 20px;
    
    #delete:hover{
        
         background:#FFFFFF;
}

`