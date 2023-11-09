'use client'
import React, { useState } from 'react';
import { FaPython, FaJs, FaAws, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const FrameworkSelector = () => {
  const [selectedFramework, setSelectedFramework] = useState('');

  const frameworks = [
    { name: 'Python', icon: <FaPython className="text-blue-500 text-4xl mx-1" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl mx-1" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400 text-4xl mx-1" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-500 text-4xl mx-1" /> },
    { name: 'React', icon: <FaReact className="text-blue-300 text-4xl mx-1" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black text-4xl mx-1" /> },
  ];

  return (
    <div className="w-full mb-2">
    <select
      className="block w-1/4 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      onChange={(e) => setSelectedFramework(e.target.value)}
      value={selectedFramework}
    >
      <option value="" className='bg-gray-800'>Seleccionar el framework</option>
      {frameworks.map((framework) => (
        <option key={framework.name} value={framework.name} className='bg-gray-800'>
          {framework.name}
        </option>
      ))}
    </select>
    <div className="flex justify-start items-center space-x-4 mt-4">
      {frameworks.map((framework) => (
        <div
          key={framework.name}
          className={`transition-transform ${
            selectedFramework === framework.name ? 'scale-110' : ''
          }`}
          onClick={() => setSelectedFramework(framework.name)}
        >
          {framework.icon}
        </div>
      ))}
    </div>
  </div>
  );
};

export default FrameworkSelector;
