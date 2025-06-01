import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/WorldViewNew.css';

// 为每个组织定义主题色
const orgThemes = {
  1: { 
    primary: '#8B0000', // 深红色 - 审判庭
    secondary: '#FF4500',
    background: '#f2f2f2',
    bottomBg: '/assets/images/worldview/ADLOGO.png' // 底部背景图
  },
  2: { 
    primary: '#FFD700', // 金色 - 普照会
    secondary: '#FFA500',
    background: '#f2f2f2',
    bottomBg: '/assets/images/worldview/COCLOGO.png' // 底部背景图
  },
  3: { 
    primary: '#4B0082', // 靛蓝色 - 异能处
    secondary: '#9370DB',
    background: '#f2f2f2',
    bottomBg: '/assets/images/worldview/A.GLOGO.png' // 底部背景图
  },
  4: { 
    primary: '#0047AB', // 蓝色 - 克里斯万象学院
    secondary: '#1E90FF',
    background: '#f2f2f2',
    bottomBg: '/assets/images/worldview/CSbackground.png' // 底部背景图
  },
  5: { 
    primary: '#2F4F4F', // 暗灰色 - 暗鸦堂
    secondary: '#708090',
    background: '#f2f2f2',
    bottomBg: '/assets/images/worldview/BHLOGO.png' // 底部背景图
  }
};

// 为每个组织定义势力标题
const orgSubtitles = {
  1: '正义势力',
  2: '光明势力',
  3: '异能势力',
  4: '工会势力',
  5: '情报势力'
};

const organizations = [
  {
    id: 1,
    name: '审判庭',
    subTitle: 'A.D.',
    description: '负责审理善恶、维护各领域安全的司法机构，其权力成员称为"超决者"，在任何人面前均可行使对中立和邪恶的法权，公正、善有威信',
    logo: '/assets/images/worldview/ADLOGO.png',
    fixedImage: '/assets/images/worldview/ADLOGO.png',
    members: [
      { id: 1, image: '/assets/images/worldview/ADLOGO.png', path: '/characters/ming' },
      { id: 2, image: '/assets/images/worldview/ADLOGO.png', path: '/characters/n' },
      { id: 3, image: '/assets/images/worldview/ADLOGO.png', path: '/characters/ming' },
      { id: 4, image: '/assets/images/worldview/ADLOGO.png', path: '/characters/n' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/assets/images/worldview/ADLOGO.png' },
      { id: 2, title: '等级', src: '/assets/images/worldview/ADLOGO.png' },
      { id: 3, title: '平面图1', src: '/assets/images/worldview/ADLOGO.png' },
      { id: 4, title: '平面图2', src: '/assets/images/worldview/ADLOGO.png' },
      { id: 5, title: '标志含义', src: '/assets/images/worldview/ADLOGO.png' },
    ],
  },
  {
    id: 2,
    name: '普照会',
    subTitle: 'C.O.L.',
    description: '守护光明与智慧的使者，致力于传播知识和守护文明火种的组织，在黑暗中点亮希望之光',
    logo: '/assets/images/worldview/COCLOGO.png',
    fixedImage: '/assets/images/worldview/COCLOGO.png',
    members: [
      { id: 3, image: '/assets/images/worldview/COCLOGO.png' },
      { id: 4, image: '/assets/images/worldview/COCLOGO.png' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/assets/images/worldview/COCLOGO.png' },
      { id: 2, title: '等级', src: '/assets/images/worldview/COCLOGO.png' },
      { id: 3, title: '平面图1', src: '/assets/images/worldview/COCLOGO.png' },
    ],
  },
  {
    id: 3,
    name: '异能处',
    subTitle: 'A.D.',
    description: '研究、管控和利用异常能力的专门机构，致力于平衡超自然力量与人类社会和谐共存',
    logo: '/assets/images/worldview/A.GLOGO.png',
    fixedImage: '/assets/images/worldview/A.GLOGO.png',
    members: [
      { id: 5, image: '/assets/images/worldview/A.GLOGO.png' },
      { id: 6, image: '/assets/images/worldview/A.GLOGO.png' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/assets/images/worldview/A.GLOGO.png' },
      { id: 2, title: '等级', src: '/assets/images/worldview/A.GLOGO.png' },
      { id: 3, title: '平面图1', src: '/assets/images/worldview/A.GLOGO.png' },
    ],
  },
  {
    id: 4,
    name: '克里斯万象学院',
    subTitle: 'C.S.',
    description: '依山傍水环境优美,五大学院齐头并进,最能代表克里斯万象学校的元素汇聚在代表着自由纯净的蓝色校徽上,传达着其"不拘一格"的理念',
    logo: '/assets/images/worldview/CSbackground.png',
    fixedImage: '/assets/images/worldview/CSbackground.png',
    members: [
      { id: 7, image: '/assets/images/worldview/G&K.png' },
      { id: 8, image: '/assets/images/worldview/狐坂枫.png' },
      { id: 9, image: '/assets/images/worldview/NIEHTZU.png' },
      { id: 10, image: '/assets/images/worldview/XIAOSI.png' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/assets/images/worldview/c.s标准制式.png' },
      { id: 2, title: '等级', src: '/assets/images/worldview/c.s标准色.png' },
      { id: 3, title: '平面图1', src: '/assets/images/worldview/平面图1.png' },
    ],
  },
  {
    id: 5,
    name: '暗鸦堂',
    subTitle: 'D.R.',
    description: '行走于阴影中的情报组织，掌握世界各地的秘密信息，为维护平衡默默工作',
    logo: '/assets/images/worldview/BHLOGO.png',
    fixedImage: '/assets/images/worldview/BHLOGO.png',
    members: [
      { id: 9, image: '/assets/images/worldview/BHLOGO.png' },
      { id: 10, image: '/assets/images/worldview/BHLOGO.png' },
      { id: 11, image: '/assets/images/worldview/BHLOGO.png' },
      { id: 12, image: '/assets/images/worldview/BHLOGO.png' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/assets/images/worldview/BHLOGO.png' },
      { id: 2, title: '等级', src: '/assets/images/worldview/BHLOGO.png' },
      { id: 3, title: '平面图1', src: '/assets/images/worldview/BHLOGO.png' },
    ],
  },
];

function WorldView() {
    const [activeOrg, setActiveOrg] = useState(organizations[0]);
    const [activeImage, setActiveImage] = useState(activeOrg.images[0]);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [activeMemberPage, setActiveMemberPage] = useState(0);
    const navigate = useNavigate();
  
    const handleOrgClick = (org) => {
      setActiveOrg(org);
      setActiveImage(org.images[0]);
      setActiveMemberPage(0);
    };
  
    const handleMemberClick = (memberPath) => {
      navigate(memberPath);
    };

    // 获取当前组织的主题
    const currentTheme = orgThemes[activeOrg.id];
    
    // 设置CSS变量
    useEffect(() => {
      document.documentElement.style.setProperty('--org-color', currentTheme.primary);
    }, [currentTheme]);

    // 计算成员分页
    const membersPerPage = 2;
    const totalPages = Math.ceil(activeOrg.members.length / membersPerPage);
    const currentMembers = activeOrg.members.slice(
      activeMemberPage * membersPerPage, 
      (activeMemberPage + 1) * membersPerPage
    );
  
    return (
      <div className="world-view" style={{ 
        background: currentTheme.background
      }}>
        <div className="main-content">
          <div className="left-section">
            <div className="org-banner">
              <div className="org-title">
                <h1>{activeOrg.name}</h1>
                <h2>{activeOrg.subTitle}</h2>
              </div>
            </div>
            
            <div className="org-subtitle">
              {orgSubtitles[activeOrg.id]}
            </div>
            
            <div className="org-description">
              <p>{activeOrg.description}</p>
            </div>
          </div>
  
          <div className="center-section">
            <div className="org-logo">
              <img 
                src={hoveredImage ? hoveredImage : activeImage.src} 
                alt={activeOrg.name}
                className="main-image"
              />
            </div>
          </div>
  
          <div className="right-section">
            <div className="image-tabs-container">
              <div className="image-tabs">
                {activeOrg.images.map((image) => (
                  <div
                    key={image.id}
                    className={`image-tab ${activeImage.id === image.id ? 'active' : ''}`}
                    onClick={() => setActiveImage(image)}
                    onMouseEnter={() => setHoveredImage(image.src)}
                    onMouseLeave={() => setHoveredImage(null)}
                    style={{
                      borderLeftColor: activeImage.id === image.id ? currentTheme.primary : '#ccc',
                      backgroundColor: activeImage.id === image.id ? currentTheme.primary : '#e0e0e0',
                    }}
                  >
                    {image.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="fixed-image-container">
              <img src={activeOrg.fixedImage} alt="固定图片" className="fixed-image" />
            </div>
          </div>
        </div>
  
        <div 
          className="bottom-section"
          style={{
            backgroundImage: `url(${currentTheme.bottomBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bottom-overlay"></div>
          <div className="org-selector">
            {organizations.map((org) => (
              <div
                key={org.id}
                className={`org-box ${activeOrg.id === org.id ? 'active' : ''}`}
                onClick={() => handleOrgClick(org)}
                style={{
                  borderColor: activeOrg.id === org.id ? orgThemes[org.id].primary : 'transparent',
                }}
              >
                <img src={org.logo} alt={org.name} />
              </div>
            ))}
          </div>
  
          <div className="members-display">
            <div className="members-label">组织成员</div>
            <div className="members-grid">
              {currentMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="member-card"
                  onClick={() => handleMemberClick(member.path)}
                >
                  <img 
                    src={member.image} 
                    alt="成员" 
                    className="member-img"
                  />
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="pagination-dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div 
                    key={index}
                    className={`pagination-dot ${index === activeMemberPage ? 'active' : ''}`}
                    onClick={() => setActiveMemberPage(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default WorldView;