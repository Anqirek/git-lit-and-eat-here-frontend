
import React, {useState, useEffect} from "react";
import RestaurantList from "./RestaurantList";
import RestaurantForm from "./RestaurantForm";


const url = 'http://localhost:9292/restaurants'

function RestaurantPage(){

    useEffect(getRest, [])
    const [rest, setRest] = useState([])

    function getRest(){
        fetch(url)
        .then(resp => resp.json())
        .then(rests => setRest(rests))
    }

    return(
    <div>
        <RestaurantForm setRest = {setRest}/>
        <RestaurantList rest = {rest}/>       
    </div>
)


}
export default RestaurantPage;