import React, {useState} from 'react'
import { Card } from "semantic-ui-react";
import styled from 'styled-components';

function RestaurantCard( {rest: {name, review, cuisine}}) {
    
    const[showFront, setFront] = useState(true)

    function handleClick(){
        setFront((currentFront) => !currentFront)
    }
    
    return (
        <>
        <Card onClick={handleClick}>
            {showFront ? `Resteraunt name: ${name}, \nCuisine: ${cuisine}`: review}
        </Card>
        <Button className="delete">x</Button>
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