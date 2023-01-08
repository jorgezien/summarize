import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { app } from './Firebase';

const Login = (props) => {
  const [isRegistering, setIsRegistering] = React.useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.emailField.value;
    const passw = e.target.passwordField.value;
    console.log(email, passw);

    {
      isRegistering ?
        createUserWithEmailAndPassword(auth, email, passw).then((firebaseUser) => {
          console.log("usuario creado: ", firebaseUser)
          props.setUser(firebaseUser)
        })
        :
        signInWithEmailAndPassword(auth, email, passw).then((firebaseUser) => {
          console.log("sesión iniciada: ", firebaseUser)
          props.setUser(firebaseUser)
        })
    }


  }
  return (
    <div className='login-container'>
      <div>
        <h1>{isRegistering ? "Regístrate" : "Inicia sesión"}</h1>

        <form onSubmit={submitHandler}>
          <label for='emailField'>Email:</label>
          <input className='input-login' type='email' id='emailField' />
          <label for='passwordField'>Contraseña:</label>
          <input className='input-login' type='password' id='passwordField' />
          <button className='btn-submit'>{isRegistering ? "Regístrate" : "Inicia sesión"}</button>
        </form>
        <button className='btn-toggle-action' onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ?
            "¿Ya tienes una cuenta? Inicia sesión"
            : "¿No tienes una cuenta? Regístrate ya!"}
        </button>

      </div>

    </div>
  )
}

export default Login;