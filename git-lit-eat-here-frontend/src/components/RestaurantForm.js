import React, {useState} from 'react'

const initialvalue = {
    name: "",
    cuisine: "",
}

function RestaurantForm({setRest}) {
    
    const[NewRests, setNewRests] = useState(initialvalue)
    function handleChange(e){
        setNewRests((currentNewRests) => ({          
                ...currentNewRests,
                [e.target.name]: e.target.value,
            }))
      
    }
    
    
    function handleSubmit(e){
        e.preventDefault()
        const rest ={
            name: NewRests.name ,
            cuisine: NewRests.cuisine
        }
        fetch('http://localhost:3000/restaurants', {
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
        <form classname="new" onSubmit={handleSubmit}>
            <input classname = "name" type = 'text' name ="name" placeholder = "Restaurant Name" value = {NewRests.name} onChange = {handleChange} />
            <input classname = "cuisine" type = 'text' name ="cuisine" placeholder = "Cuisine" value = {NewRests.cuisine} onChange = {handleChange}/>
            <button className = "submit" >Add Restaurant</button>
        </form>
    )
}

export default RestaurantForm
