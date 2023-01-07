import React from 'react'


const Login = () => {
    const [isRegistering, setIsRegistering] = React.useState(false);
  return (
    <div>
        <h1>{isRegistering ? "Regístrate" : "Inicia sesión"}</h1>

        <form>
            <input type='email' id='emailField'/>
            <input type='password' id='passwordField'/>
            <button type='submit'>{isRegistering ? "Regístrate" : "Inicia sesión"}</button>
        </form>
        <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ?
                "¿Ya tienes una cuenta? Inicia sesión"
                : "¿No tienes una cuenta? Regístrate ya!"}
        </button>
    </div>
  )
}

export default Login;