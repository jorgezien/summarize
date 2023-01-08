import logo from './logo.svg';
import './App.css';
import Button from './Button'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Login from './Login';
import {app} from './Firebase'
import React from 'react'
import TextInput from './TextInput';
import WelcomePage from './WelcomePage';
import { getAuth } from "firebase/auth"

// Initialize Firebase
const analytics = getAnalytics(app);

function App() {
  const [user, setUser] = React.useState(null)
  
  return (
    <>{user ? <WelcomePage email={getAuth().currentUser.email} />
    : <Login setUser = {setUser} />}</>
    
  );
}

export default App;
