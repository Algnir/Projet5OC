import React, { useState, useEffect, useRef } from 'react';
import Arrow from './Arrow.svg';

const DropdownMenu = ({ title, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-bar">
        <h3>{title}</h3>
        <button onClick={toggleMenu} className="dropdown-toggle">
          <img
            src={Arrow}
            alt="Arrow"
            className={isOpen ? 'arrow rotate' : 'arrow'}
          />
        </button>
      </div>
      <div className={`drop-element ${isOpen ? 'open' : ''}`}>
        {dropdown}
      </div>
    </div>
  );
};



export default DropdownMenu;