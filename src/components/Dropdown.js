import React, { useState } from 'react';
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci';

const Dropdown = ({ items, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className='bg-white px-5 py-2 rounded-xl flex justify-between items-center w-60 cursor-pointer'
      >
        <p>{selected}</p>
        {isOpen ? <CiCircleChevUp /> : <CiCircleChevDown />}
      </div>
      {isOpen && (
        <div className='absolute bg-white border border-gray-300 rounded-xl mt-0.5 w-60 z-10 overflow-hidden'>
          {items.map((item, index) => (
            <div
              key={index}
              className='px-5 py-2 cursor-pointer hover:bg-gray-100'
              onClick={() => handleClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
