import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const [selectedOption, setSelectedOption] = useState('Select');
  const options = ['Yes', 'Probably Not'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl bg-[#7bd7e2] font-semibold">
      <h1>Should you use a dropdown?</h1>
      <div className='pt-2'>
        <Dropdown 
          items={options}
          selected={selectedOption}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}

export default App;
