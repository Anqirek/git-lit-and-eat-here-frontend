import React from 'react';
import RestaurantPage from "./RestaurantPage"
import { Switch, Route } from 'react-router-dom';
import RestaurantForm from './RestaurantForm';
import NavBar from './Navbar';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
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
