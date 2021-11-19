import React, {useState} from 'react'

const initialvalue = {
    name: "",
    cuisine: "",
}

function RestaurantForm({setRest}) {

    const [rating,setRating] = useState("")
    const[NewRests, setNewRests] = useState(initialvalue)
  
   
    
    const patchURL = `http://localhost:9292/rating/${rating.id}`
    
    
    
    function handleChange(e){
    setNewRests((currentNewRests) => ({          
                ...currentNewRests,
                [e.target.name]: e.target.value,
            }))
      
    }



    function handleNewUpdate(e){
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
        
        <form classname="new" onSubmit={handleSubmit}>
            <input classname = "name" type = 'text' name ="name" placeholder = "Restaurant Name" value = {NewRests.name} onChange = {handleChange} />
            <input classname = "cuisine" type = 'text' name ="cuisine" placeholder = "Cuisine" value = {NewRests.cuisine} onChange = {handleChange}/>
            <button className = "submit" >Add Restaurant</button>

        </form>

       
    )
}

export default RestaurantForm
