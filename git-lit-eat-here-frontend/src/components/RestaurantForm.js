import React, {useState} from 'react'
import styled from 'styled-components'

const initialvalue = {
    name: "",
    cuisine: "",
}

function RestaurantForm() {

   
    const[NewRests, setNewRests] = useState(initialvalue)
    
    
    
    function handleChange(e){
    setNewRests((currentNewRests) => ({          
                ...currentNewRests,
                [e.target.name]: e.target.value,
            }))
      
    }

 

    function handleSubmit(e){
      
       
        e.preventDefault()
        const rest = {
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
            .then(data => setNewRests(data)
        )
       }






    return (
       <StyleForm>
        <form id = "new" action = "/" method= "post" onSubmit={handleSubmit}>
            <input  type = 'text' name ="name" placeholder = "Restaurant Name" value = {NewRests.name} onChange = {handleChange} />
            <input type = 'text' name ="cuisine" placeholder = "Cuisine" value = {NewRests.cuisine} onChange = {handleChange}/>
            <button id = "submit" action = "/">Add Restaurant</button>

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
