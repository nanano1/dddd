import React from 'react';
import { Link } from 'react-router-dom';
import './css/Dropdown.css';
import { getAllCharacters } from '../data/charactersData';

function Dropdown({ menuType }) {
  const getDropdownContent = () => {
    switch (menuType) {

        
      case 'characters':
        return [
          { to: '/characters', label: 'la liberté' },
          { to: '/coming-soon', label: 'DDDD' },
          { to: '/coming-soon', label: 'Dazzling Divas&Double D Rhythm' },
          { to: '/coming-soon', label: '霍格沃茨' },
          { to: '/coming-soon', label: 'pokemon' },
          { to: '/coming-soon', label: '逐暗' }
        ];
      
      
      default:
        return [];
    }
  };

  const dropdownItems = getDropdownContent();

  if (dropdownItems.length === 0) {
    return null;
  }

  return (
    <div className="dropdown">
      <ul>
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;