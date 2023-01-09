
import './App.css';
// Import the functions you need from the SDKs you need
import Login from './Login';
import React from 'react'
import WelcomePage from './WelcomePage';
import { getAuth } from "firebase/auth"




function App() {
  const [user, setUser] = React.useState(null)
  
  return (
    <>{user ? <WelcomePage email={getAuth().currentUser.email} />
    : <Login setUser = {setUser} />}</>
    
  );
}

export default App;
