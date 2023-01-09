import React, { useState } from 'react';
import { Configuration, OpenAIApi, createCompletion } from "openai";
import Button from './Button';

const Summary = (props) => {
    const [summary, setSummary] = useState('');
    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const configuration = new Configuration({
          organization: "org-0dJcs4wbhCuX0GiLWuUZ8EjN",
          apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
      
        const response = await openai.createCompletion({
          model: "text-babbage-001",
          prompt: "Resume el siguiente texto:\n\n" + document.getElementById('input-field').value,
          temperature: 0.7,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
        const textoFinal = response.data.choices[0].text;
        setSummary(textoFinal);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea className='input-field-text' value={input} onChange={handleChange} id='input-field' />
                <div></div>
                <Button innerText='Resumir el texto!' type="submit">Summarize</Button>
                <div></div>
                <label className='label-input' for='output-field'>Texto resumido:</label>
                <div></div>


            </form>
            {summary && <textarea className='output-field-text' value={summary}></textarea>}
           

        </div>
    );
};

export default Summary;
