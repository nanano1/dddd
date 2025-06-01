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
          { to: '/about?guild=lightGuard', label: '普照会' },
          { to: '/about?guild=darkRaven', label: '暗鸦堂' }
        ];
      case 'characters':
        const allCharacters = getAllCharacters();
        return allCharacters.map(character => ({
          to: `/character/${character.id}`,
          label: `${character.name} (${character.subName})`
        }));
      case 'story':
        return [
          { to: '/story?chapter=1', label: '第一章' },
          { to: '/story?chapter=2', label: '第二章' },
          { to: '/story?chapter=3', label: '第三章' }
        ];
      case 'extension':
        return [
          { to: '/extension?type=music', label: '音乐' },
          { to: '/extension?type=art', label: '美术设定' },
          { to: '/extension?type=lore', label: '背景故事' }
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