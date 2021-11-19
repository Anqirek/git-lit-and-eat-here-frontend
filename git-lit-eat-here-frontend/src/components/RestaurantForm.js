import React, {useState} from 'react'
import styled from 'styled-components';

const initialvalue = {
    name: "",
    cuisine: "",
}

function RestaurantForm({setRest}) {

    const [rating,setRating] = useState("")
    const patchURL = `http://localhost:9292/rating/${rating.id}`
    const[NewRests, setNewRests] = useState(initialvalue)
//  const [username, setUsername] = useState("")
    const [newPost, setNewPost] = useState("")
    
    
    function handleChange(e){
    setNewRests((currentNewRests) => ({          
                ...currentNewRests,
                [e.target.name]: e.target.value,
            }))
      
    }
    

    function handleUpdate(e){
        e.preventDefault()
        fetch(patchURL, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                rating: rating 
            }),
        })
        .then(res => res.json())
        .then((updatedRating) => setRating(updatedRating))
    }

    function handleSubmit(e){
        e.preventDefault()
       
        e.preventDefault()
        const rest ={
            name: NewRests.name ,
            cuisine: NewRests.cuisine
        }
        fetch('http://localhost:9292/restaurants', {
            method: "POST",
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify(rest)
        }).then(resp => resp.json())
            .then(data => setRest(currentNewRest => [...currentNewRest, data])
        )
       }






    return (
        <StyleForm>
        <form id="new" onSubmit={handleSubmit}>
            <input id="name" type = 'text' name ="name" placeholder = "Restaurant Name" value = {NewRests.name} onChange = {handleChange} />
            <input id= "cuisine" type = 'text' name ="cuisine" placeholder = "Cuisine" value = {NewRests.cuisine} onChange = {handleChange}/>
            <button id = "submit" >Add Restaurant</button>
        </form>
        </StyleForm>
    )
}

export default RestaurantForm

const StyleForm = styled.div`
        #new{
            display:flex;
            justify-content:space-evenly
            
        }
        #name{
            box-sizing: border-box;
            padding:4px;
        }

        input[type=text]:focus {
        background: #feffdf
    }
    
    input[type=text] {
  
  -webkit-appearance: none;
    appearance: none;
    }

    #submit{
        box-sizing: border-box;
        padding:10px;
        float:left;
        border: 2px solid  black;
        border-radius:10px;
        background-color:white;
    }

    #submit:hover{
        background:gray;
        }


`