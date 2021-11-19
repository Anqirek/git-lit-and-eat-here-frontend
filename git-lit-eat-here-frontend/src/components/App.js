import React from 'react';
import RestaurantPage from "./RestaurantPage"
import { Switch, Route } from 'react-router-dom';
import RestaurantForm from './RestaurantForm';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
    <Route path = "/RestaurantForm">
      <RestaurantForm/>
    </Route>
    <Route exact path = "/">
      <RestaurantPage/>
      </Route>
    
      </Switch>
    </div>
  );
}

export default App;