'use client'
import React, { useState } from 'react';
// Asegúrate de que la ruta de importación sea correcta y que el archivo exista en esa ubicación.
import iconGPT from '../assets/iconGPT.png';
import Image from 'next/image';

const AgentModelSelector = () => {
  const [selectedModel, setSelectedModel] = useState('GPT-3.5');

  return (
    <div className="">
    {/* Dropdown */}
    <div className="w-full mb-2">
      <select
      className="block w-1/4 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      onChange={(e) => setSelectedModel(e.target.value)}
        value={selectedModel}
      >
        <option value="GPT-3.5" className='bg-gray-800'>GPT-3.5</option>
        <option value="GPT-4" className='bg-gray-800'>GPT-4</option>
      </select>
    </div>

    {/* Icon Buttons */}
    <div className="flex justify-start items-center">
      <button
        className={`flex items-center mr-4 ${selectedModel === 'GPT-3.5' ? 'opacity-100' : 'opacity-60'}`}
        onClick={() => setSelectedModel('GPT-3.5')}
      >
        <Image src={iconGPT} alt="GPT-3.5" className="w-5 h-5 mr-2" />
        <span className="text-sm text-white">GPT-3.5</span>
      </button>

      <button
        className={`flex items-center ${selectedModel === 'GPT-4' ? 'opacity-100' : 'opacity-60'}`}
        onClick={() => setSelectedModel('GPT-4')}
      >
        <Image src={iconGPT} alt="GPT-4" className="w-5 h-5 mr-2" />
        <span className="text-sm text-white">GPT-4</span>
      </button>
    </div>
  </div>
  );
};

export default AgentModelSelector;
