import React, { useState, useRef } from 'react';
import './css/Character.css';

function Character() {
  const [activeTab, setActiveTab] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const sliderRef = useRef(null);

  // 角色数据
  const characters = [
    {
      id: 1,
      name: 'OSAKAKAZE',
      subName: '狐坂枫',
      image: '/path/to/character1.png',
      avatar: '/path/to/avatar1.png',
      intro: 'OSAKAKAZE是一个勇敢的战士，擅长使用剑。',
      weapons: '长剑，短刀',
      items: '护身符，药水',
    },
    {
      id: 2,
      name: 'Character 2',
      subName: '角色2',
      image: '/path/to/character2.png',
      avatar: '/path/to/avatar2.png',
      intro: 'Character 2是一个神秘的法师，掌握强大的魔法。',
      weapons: '法杖，魔法书',
      items: '魔法石，卷轴',
    },
    {
      id: 3,
      name: 'Character 3',
      subName: '角色3',
      image: '/path/to/character3.png',
      avatar: '/path/to/avatar3.png',
      intro: 'Character 3是一个敏捷的弓箭手，擅长远程攻击。',
      weapons: '弓，箭',
      items: '箭袋，隐身斗篷',
    },
    {
      id: 4,
      name: 'Character 4',
      subName: '角色4',
      image: '/path/to/character4.png',
      avatar: '/path/to/avatar4.png',
      intro: 'Character 4是一个强大的战士，拥有无与伦比的力量。',
      weapons: '巨剑，斧头',
      items: '护甲，战斗手套',
    },
    {
      id: 5,
      name: 'Character 5',
      subName: '角色5',
      image: '/path/to/character5.png',
      avatar: '/path/to/avatar5.png',
      intro: 'Character 5是一个聪明的策略家，擅长战斗计划。',
      weapons: '匕首，投掷武器',
      items: '地图，战术手册',
    },
    {
      id: 6,
      name: 'Character 6',
      subName: '角色6',
      image: '/path/to/character6.png',
      avatar: '/path/to/avatar6.png',
      intro: 'Character 6是一个灵活的刺客，擅长潜行和暗杀。',
      weapons: '双刀，毒药',
      items: '隐形斗篷，锁匠工具',
    },
  ];

  const handleSlide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 100; // 每次滑动的距离
      sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="character-page">
      <div className="character-content">
        <div className="character-main">
          <div className="character-image">
            <img src={characters[currentCharacter].image} alt={characters[currentCharacter].name} />
          </div>
          <div className="character-name">
            <h1>{characters[currentCharacter].name}</h1>
            <h2>{characters[currentCharacter].subName}</h2>
          </div>
        </div>

        <div className="character-tabs">
          <div className={`tab ${activeTab === 'intro' ? 'active' : ''}`} 
               onClick={() => toggleTab('intro')}>
            <h3>人物介绍</h3>
            <div className="dropdown-content">
              {activeTab === 'intro' && (
                <p>{characters[currentCharacter].intro}</p>
              )}
            </div>
          </div>

          <div className={`tab ${activeTab === 'weapons' ? 'active' : ''}`}
               onClick={() => toggleTab('weapons')}>
            <h3>武器/能力</h3>
            <div className="dropdown-content">
              {activeTab === 'weapons' && (
                <p>{characters[currentCharacter].weapons}</p>
              )}
            </div>
          </div>

          <div className={`tab ${activeTab === 'items' ? 'active' : ''}`}
               onClick={() => toggleTab('items')}>
            <h3>个人物品/伙伴</h3>
            <div className="dropdown-content">
              {activeTab === 'items' && (
                <p>{characters[currentCharacter].items}</p>
              )}
            </div>
          </div>
        </div>

        {/* 角色选择滑动列表 */}
        <div className="character-slider-container">
          <button className="slider-button left" onClick={() => handleSlide('left')}>&lt;</button>
          <div className="character-slider" ref={sliderRef}>
            {characters.map((char, index) => (
              <div 
                key={char.id} 
                className={`character-avatar ${currentCharacter === index ? 'active' : ''}`}
                onClick={() => setCurrentCharacter(index)}
              >
                <img src={char.avatar} alt={char.name} />
              </div>
            ))}
          </div>
          <button className="slider-button right" onClick={() => handleSlide('right')}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Character;
