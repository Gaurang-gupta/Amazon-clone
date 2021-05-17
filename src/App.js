import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from "./Payment";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe(
  "pk_test_51Irc8uSB2SLNhiaJhWgAXNZaxMS5lzs8dABI1JNeosUeVrFHNWYllqHHzxU90tSKXDIl08Nu3TlikYK9aQu9GG9R00OOPC5wPt");

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    // will only run when app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is ",authUser);

      if(authUser){
        // the user just/was logged in user was logged in
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    // 8:04:17
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
