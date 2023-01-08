import React, { useState } from 'react';
import { Configuration, OpenAIApi, createCompletion } from "openai";

const Summary = () => {
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
        prompt: "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
    console.log(response.request.response)
    const text = response.data.choices[0].text;
    console.log(text)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the text you want to summarize:
        <textarea value={input} onChange={handleChange} />
      </label>
      <button type="submit">Summarize</button>
      {summary && <p>{summary}</p>}
    </form>
  );
};

export default Summary;
