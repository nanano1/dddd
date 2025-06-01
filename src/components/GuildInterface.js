import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/GuildInterface.css';

// 工会界面组件 - 可配置的通用布局
const GuildInterface = ({ 
  guildConfig,
  onGuildChange,
  backgroundColor = '#f2f2f2',
  allGuildConfigs // 添加所有工会配置用于切换
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);
  const [characterPage, setCharacterPage] = useState(0); // 角色分页
  const navigate = useNavigate();

  if (!guildConfig) {
    return <div>请配置工会信息</div>;
  }

  const {
    // 基本信息
    guildName = '工会名称',
    guildSubtitle = 'GUILD',
    guildType = '工会势力',
    description = '工会描述信息...',
    
    // 主要图像
    centerLogo = '/assets/images/default-logo.png',
    backgroundImage = '/assets/images/default-bg.png',
    
    // 底部图标
    bottomIcons = [],
    
    // 右侧角色
    characterAvatars = [],
    
    // 颜色主题
    primaryColor = '#0047AB',
    secondaryColor = '#1E90FF',
    
    // 可选图像集合（用于切换显示）
    alternativeLogos = [],
    
    // 添加描述内容数组，对应每个选项卡
    tabDescriptions = []
  } = guildConfig;

  // 处理信息选项卡点击
  const handleInfoTabClick = (icon, index) => {
    setActiveImageIndex(index);
    if (icon.onClick) {
      icon.onClick();
    }
  };

  // 处理工会切换
  const handleGuildSwitch = (guildKey) => {
    if (onGuildChange) {
      onGuildChange(guildKey);
    }
  };

  // 处理角色点击 - 跳转到角色详情页
  const handleCharacterClick = (character) => {
    if (character.characterId) {
      navigate(`/characters/${character.characterId}`);
    } else if (character.onClick) {
      character.onClick();
    }
  };

  // 获取当前显示的logo
  const getCurrentLogo = () => {
    if (alternativeLogos.length > 0 && alternativeLogos[activeImageIndex]) {
      return alternativeLogos[activeImageIndex];
    }
    return centerLogo;
  };

  // 获取当前描述内容
  const getCurrentDescription = () => {
    if (tabDescriptions.length > 0 && tabDescriptions[activeImageIndex]) {
      return tabDescriptions[activeImageIndex];
    }
    return description;
  };

  // 角色分页逻辑
  const charactersPerPage = 2;
  const totalPages = Math.ceil(characterAvatars.length / charactersPerPage);
  const currentCharacters = characterAvatars.slice(
    characterPage * charactersPerPage,
    (characterPage + 1) * charactersPerPage
  );

  // 处理角色分页
  const handleCharacterPageChange = (pageIndex) => {
    setCharacterPage(pageIndex);
  };

  // 工会选择器图标配置
  const guildSelectorIcons = [
    { key: 'adventurerGuild', logo: '/assets/images/worldview/A.GLOGO.png', name: '冒险者工会' },
    { key: 'cocGuild', logo: '/assets/images/worldview/COCLOGO.png', name: '商会' },
    { key: 'judgmentCourt', logo: '/assets/images/worldview/ADLOGO.png', name: '审判庭' },
    { key: 'crystalSchool', logo: '/assets/images/worldview/CSlogo.png', name: '克里斯万象学院' },
    { key: 'lightGuard', logo: '/assets/images/worldview/BHLOGO.png', name: '赏金猎人' },
  ];

  return (
    <div 
      className="guild-interface" 
      style={{ 
        backgroundColor,
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor
      }}
    >
      {/* 主内容区域 */}
      <div className="main-content-area">
        
        {/* 左侧工会信息区 */}
        <div className="left-guild-info">
          {/* 工会标题横幅 */}
          <div className="guild-banner">
            <div className="guild-title">
              <h1>{guildName}</h1>
              <h2>{guildSubtitle}</h2>
            </div>
          </div>
          
          {/* 工会类型 */}
          <div className="guild-type">
            {guildType}
          </div>
          
          {/* 工会描述 */}
          <div className="guild-description">
            <p>{getCurrentDescription()}</p>
          </div>
        </div>

        {/* 中央logo展示区 */}
        <div className="center-logo-area">
          <div className="logo-container">
            <img 
              src={getCurrentLogo()} 
              alt={`${guildName} Logo`}
              className="main-logo"
            />
          </div>
        </div>

        {/* 信息选项卡区域 */}
        <div className="info-tabs-area">
          <div className="info-tabs">
            {bottomIcons.map((icon, index) => (
              <div 
                key={index}
                className={`info-tab ${activeImageIndex === index ? 'active' : ''}`}
                onClick={() => handleInfoTabClick(icon, index)}
                title={icon.title}
              >
                <span className="tab-text">{icon.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧背景区 */}
        <div className="right-background-area">
          <div className="background-image-container">
            <img 
              src={backgroundImage} 
              alt="背景"
              className="background-image"
            />
          </div>
        </div>
      </div>

      {/* 底部区域 */}
      <div className="bottom-section">
        {/* 左侧工会选择器 */}
        <div className="guild-selector">
          {guildSelectorIcons.map((guild, index) => (
            <div 
              key={guild.key}
              className={`guild-selector-icon ${hoveredIconIndex === `guild-${index}` ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIconIndex(`guild-${index}`)}
              onMouseLeave={() => setHoveredIconIndex(null)}
              onClick={() => handleGuildSwitch(guild.key)}
              title={guild.name}
            >
              <img src={guild.logo} alt={guild.name} />
            </div>
          ))}
        </div>

        {/* 右侧角色展示区 */}
        <div className="character-display">
          <div className="character-cards">
            {currentCharacters.map((character, index) => (
              <div 
                key={`${characterPage}-${index}`} 
                className={`character-card ${hoveredIconIndex === `char-${index}` ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIconIndex(`char-${index}`)}
                onMouseLeave={() => setHoveredIconIndex(null)}
                onClick={() => handleCharacterClick(character)}
              >
                <div className="character-image">
                  <img 
                    src={character.image} 
                    alt={character.name || `角色 ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* 分页指示器 */}
          {totalPages > 1 && (
            <div className="character-pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <div
                  key={index}
                  className={`page-dot ${characterPage === index ? 'active' : ''}`}
                  onClick={() => handleCharacterPageChange(index)}
                />
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default GuildInterface; 