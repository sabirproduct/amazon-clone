import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Documentation from './Documentation';
import CheckoutProduct from './CheckoutProduct';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {axios} from './axios';


const promise = loadStripe('pk_test_51HQlEcEOnyK5IM0k67Sg2xXPpqYaUzhhIGxxa4cSyGbBtYDdnX1zq8YyPLEH5v2DgPhfXdpTBmoAaTVthDVQUezz00yT6VpJzl');

function App() {
  const[{}, dispatch] = useStateValue();

useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    //
    if(authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
    } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
    }
  })
}, [])

  return (
    <Router>
    <div className="app">
     <h4 align="center" style={{color: 'red'}}>This is a demo website developed by Sabiruddin.
     <Link to = '/documentation'>
      Click here to see the documentation.
      </Link>
      </h4>
      <Switch>
     <Route path="/documentation">
       <Documentation/>
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
