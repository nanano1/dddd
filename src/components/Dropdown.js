import React from 'react';
import { Link } from 'react-router-dom';
import './css/Dropdown.css';
import { getAllCharacters } from '../data/charactersData';

function Dropdown({ menuType }) {
  const getDropdownContent = () => {
    switch (menuType) {
      case 'worldview':
        return [
          { to: '/about?guild=adventurerGuild', label: '冒险者工会' },
          { to: '/about?guild=crystalSchool', label: '克里斯万象学院' },
          { to: '/about?guild=judgmentCourt', label: '审判庭' },
          { to: '/about?guild=lightGuard', label: '普照会' }
        ];
      case 'characters':
        return [
          { to: '/characters', label: 'la liberté' },
          { to: '/coming-soon', label: 'DDDD' },
          { to: '/coming-soon', label: 'Dazzling Divas&Double D Rhythm' },
          { to: '/coming-soon', label: '霍格沃茨' },
          { to: '/coming-soon', label: 'pokemon' },
          { to: '/coming-soon', label: '逐暗' }
        ];
      case 'story':
        return [
          { to: '/story?chapter=1', label: '第一章' },
          { to: '/story?chapter=2', label: '第二章' },
          { to: '/story?chapter=3', label: '第三章' }
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