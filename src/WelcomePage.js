import React from 'react'
import Summarizer from './Summarizer'
const WelcomePage = (props) => {
  try {
    return (
      <div className='div-welcome-page'>
          <p className='p-welcome-page'>Has iniciado sesión como <strong>{props.email}</strong>. Ahora puedes resumir textos o ver los textos que has resumido previamente.</p>
          <label className='label-input' for='input-field'>Introduce el texto que quieras resumir aquí:</label>
          <Summarizer/>
      </div>
    )
  } catch (error) {
    console.log(error);
  }
}

export default WelcomePage
