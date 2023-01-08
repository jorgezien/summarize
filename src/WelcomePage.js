import React from 'react'
import  TextInput from './TextInput'
import Button from './Button'
import Summarizer from './Summarizer'
const WelcomePage = (props) => {
  try {
    return (
      <div className='div-welcome-page'>
          <p className='p-welcome-page'>Has iniciado sesión como <strong>{props.email}</strong>. Ahora puedes resumir textos o ver los textos que has resumido previamente.</p>
          <label className='label-input' for='input-field'>Introduce el texto que quieras resumir aquí:</label>
          <TextInput/>
          <Button innerText='Resumir el texto!'/>
          <Summarizer/>
      </div>
    )
  } catch (error) {
    console.log(error);
  }
}

export default WelcomePage