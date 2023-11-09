'use client'
import React, { useState } from 'react';
import axios from 'axios';

const datosHard = {
  "project": "Seba",
  "prompt": "Haz una calculadora",
  "agent": "Solidity",
  "model": "GPT-3.5"
}

const TextPrompt = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.post('http://alb-agent-app-317802577.us-east-2.elb.amazonaws.com/api/prompt', datosHard);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-transparent my-8 flex flex-col items-center justify-center w-[60%]">
    <div className="w-full mb-4">
      <textarea
        placeholder="Ingresar prompt"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full h-40 bg-transparent text-white placeholder-gray-300 border border-gray-500 rounded p-4"
        style={{ boxShadow: '0 0 10px #0f0f0f inset' }}
      />
    </div>
    <button
      onClick={handleClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      ENVIAR
    </button>
  </div>
  );
};
 
export default TextPrompt;
