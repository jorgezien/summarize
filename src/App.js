import logo from './logo.svg';
import './App.css';
import Button from './Button'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Login from './Login';
import {app} from './Firebase'
import React from 'react'
// Initialize Firebase
const analytics = getAnalytics(app);

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <>{user ? <Login/> : <Login setUser = {setUser} />}</>
    
  );
}

export default App;
