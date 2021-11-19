import React, {useState} from "react"

function NewPost(){

const [newPost, setNewPost] = useState("")
const [name,setName] = useState("")
const [cuisine, setCuisine] = useState("")

const postURL = 'http://localhost:9292/new_post'

function handlePost(e){
    setNewPost((currentPost) => ({          
                ...currentPost,
                [e.target.name]: e.target.value,
            }))
      
    }
function handleNewPost(e){
        e.preventDefault()
        fetch(postURL, {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify({
             name: name,
             cuisine: cuisine
            })  
        })
        .then(res => res.json())
        .then((newInfo)=>setName(currentPosts => [...currentPosts, newInfo ]))
    }
return (
    <form classname="new" onClick= {handleNewPost}>
            <input classname = "name" type = 'text' name ="name" placeholder = "Restaurant Name" />
            <input classname = "cuisine" type = 'text' name ="cuisine" placeholder = "Cuisine" />
            <button className = "submit" >{newPost}</button>

        </form>
)

}

export default NewPost