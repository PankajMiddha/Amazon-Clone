import React, {useEffect} from "react"; 
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51KAXPtSGaNkb5zc42bhDhJ7vyBVoSdDOmeAt5jsqbcORS0NJFWG7tf8Punb38PTQ2X2X6vkIfwU0VEggX92FTiaf00qfMonwz7");


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/orders' element={[<Header />,<Orders />]} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/checkout' element={[<Header />,<Checkout />]} />
          <Route exact path='/payment' element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} />
          <Route exact path='/' element={[<Header />,<Home />]} />
        </Routes>
      </div>
    </Router>
);
}

export default App;
     
     
   
   
     
       
        
