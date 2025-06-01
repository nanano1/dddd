import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/Character.css';
import { getAllCharacters } from '../data/charactersData';

function Character() {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const sliderRef = useRef(null);

  // 获取所有角色数据
  const characters = getAllCharacters();

  // 如果URL中有characterId，找到对应的角色索引
  useEffect(() => {
    if (characterId) {
      const characterIndex = characters.findIndex(char => char.id === characterId);
      if (characterIndex !== -1) {
        setCurrentCharacterIndex(characterIndex);
      }
    }
  }, [characterId, characters]);

  // 当前显示的角色
  const currentCharacter = characters[currentCharacterIndex];

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleCharacterSelect = (index) => {
    const selectedCharacter = characters[index];
    setCurrentCharacterIndex(index);
    setActiveTab(null); // 重置选项卡状态s
    
    // 更新URL路由
    navigate(`/characters/${selectedCharacter.id}`);
  };

  // 渲染带图片的内容
  const renderContentWithImage = (content, image) => {
    if (image) {
      return (
        <div className="content-with-image">
          <div className="content-text">
            <p>{content}</p>
          </div>
          <div className="content-image">
            <img src={image} alt="角色相关图片" />
          </div>
        </div>
      );
    }
    return <p>{content}</p>;
  };

  // 渲染2x2关系网格
  const renderRelationshipGrid = () => {
    const relationships = currentCharacter.relationships || [];
    
    if (relationships.length === 0) {
      return <p>暂无相关人物关系</p>;
    }
    
    return (
      <div className="relationship-grid">
        {relationships.map((relationship, index) => (
          <div key={index} className="relationship-item">
            <div className="relationship-avatar">
              <img src={relationship.avatar} alt={relationship.name} />
            </div>
            <div className="relationship-info">
              <span className="relationship-name">{relationship.name}</span>
              <span className="relationship-relation">{relationship.relation}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 渲染多个物品
  const renderItems = () => {
    const items = currentCharacter.items || [];
    
    if (items.length === 0) {
      return <p>暂无个人物品</p>;
    }
    
    return items.map((item, index) => (
      <div key={index} className="character-items" style={{ marginBottom: index < items.length - 1 ? '20px' : '0' }}>
        {index === 0 && <h4>个人物品：</h4>}
        <p>{item.description}</p>
        {item.image && (
          <div className="content-image">
            <img src={item.image} alt={`个人物品${index + 1}`} />
          </div>
        )}
      </div>
    ));
  };

  // 渲染多个伙伴
  const renderCompanions = () => {
    const companions = currentCharacter.companions || [];
    
    if (companions.length === 0) {
      return null;
    }
    
    return companions.map((companion, index) => (
      <div key={index} className="character-companions" style={{ marginBottom: index < companions.length - 1 ? '20px' : '0' }}>
        {index === 0 && <h4>伙伴：</h4>}
        <p>{companion.description}</p>
        {companion.image && (
          <div className="content-image">
            <img src={companion.image} alt={`伙伴${index + 1}`} />
          </div>
        )}
      </div>
    ));
  };

  if (!currentCharacter) {
    return <div className="character-page"><div className="character-content">角色未找到</div></div>;
  }

  // 使用当前角色的背景图片
  const backgroundStyle = {
    backgroundImage: `url(${currentCharacter.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  // 动态设置选项卡主题色
  const tabStyle = {
    '--theme-primary': currentCharacter.themeColor || '#54420E',
    '--theme-secondary': currentCharacter.secondaryColor || '#876F32'
  };

  return (
    <div className="character-page" style={backgroundStyle}>
      {/* 背景遮罩 */}
      <div className="character-overlay"></div>
      
      <div className="character-content">
        {/* 右侧选项卡区域 */}
        <div className="character-tabs" style={tabStyle}>
          
          {/* 个人介绍选项卡 */}
          <div className={`tab ${activeTab === 'intro' ? 'active' : ''}`} 
               onClick={() => toggleTab('intro')}>
            <h3>个人介绍</h3>
            <div className="dropdown-content">
              {activeTab === 'intro' && (
                <div className="intro-content">
                  <p>{currentCharacter.intro}</p>
                  {renderRelationshipGrid()}
                </div>
              )}
            </div>
          </div>

          <div className={`tab ${activeTab === 'weapons' ? 'active' : ''}`} 
               onClick={() => toggleTab('weapons')}>
            <h3>武器/能力</h3>
            <div className="dropdown-content">
              {activeTab === 'weapons' && (
                <div>
                  {currentCharacter.weapons && (
                    <div className="character-weapons">
                      <h4>装备武器：</h4>
                      <p>{currentCharacter.weapons}</p>
                      {currentCharacter.weaponImage && (
                        <div className="content-image">
                          <img src={currentCharacter.weaponImage} alt="武器装备" />
                        </div>
                      )}
                    </div>
                  )}
                  {currentCharacter.skills && (
                    <div className="character-skills">
                      <h4>特殊技能：</h4>
                      <p>{currentCharacter.skills.join('，')}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className={`tab ${activeTab === 'items' ? 'active' : ''}`}
               onClick={() => toggleTab('items')}>
            <h3>个人物品/伙伴</h3>
            <div className="dropdown-content">
              {activeTab === 'items' && (
                <div>
                  {renderItems()}
                  {renderCompanions()}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 角色选择滑动列表 - 底部水平布局 */}
        <div className="character-slider-container">
          <div className="character-slider" ref={sliderRef}>
            {characters.map((char, index) => (
              <div 
                key={char.id} 
                className={`character-avatar ${currentCharacterIndex === index ? 'active' : ''}`}
                onClick={() => handleCharacterSelect(index)}
              >
                <img src={char.avatar} alt={char.name} />
                <div className="character-info">
                  <span className="character-name">{char.name}</span>
                  <span className="character-title">{char.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
