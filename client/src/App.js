import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Auth from './Components/Auth/Auth';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import UnderPage from './Components/UnderPage/UnderPage';
import Home from './Components/Home/Home';
function App() {
  return (
    <Router>
       <Navbar/>
      <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/auth">
      <Auth/>
    </Route>
    <Route exact path="/dashboard">
      <Dashboard/>
    </Route>
    <Route exact path="*">
      <h2>404 , No Page Found.</h2>
    </Route>
      </Switch>
      <UnderPage/>
    </Router>
  );
}

export default App;
