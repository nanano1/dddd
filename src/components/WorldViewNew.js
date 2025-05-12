import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/WorldViewNew.css';

const organizations = [
  {
    id: 1,
    name: '审判庭',
    subTitle: 'A.D.',
    description: '负责审理善恶、维护各领域安全的司法机构，其权力成员称为"超决者"，在任何人面前均可行使对中立和邪恶的法权，公正、善有威信',
    fixedImage: '/path/to/fixed_image.png', // 添加固定图片
    members: [
      { id: 1, name: 'MING', image: '/path/to/ming.png', path: '/characters/ming' },
      { id: 2, name: 'N', image: '/path/to/n.png', path: '/characters/n' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/path/to/standard.png' },
      { id: 2, title: '标准色&印章效果色', src: '/path/to/color.png' },
      { id: 3, title: '平面图1', src: '/path/to/plan1.png' },
      { id: 4, title: '平面图2', src: '/path/to/plan2.png' },
      { id: 5, title: '标志含义', src: '/path/to/meaning.png' },
    ],
  },
  {
    id: 2,
    name: '普照会',
    subTitle: 'C.O.L.',
    description: '守护光明与智慧的使者，致力于传播知识和守护文明火种的组织，在黑暗中点亮希望之光',
    logo: '/path/to/col_logo.png',
    members: [
      { id: 3, name: '守光者', image: '/path/to/lightkeeper.png' },
      { id: 4, name: '知书人', image: '/path/to/scholar.png' },
    ],
    images: [
      { id: 1, title: '标准制式', src: '/path/to/col_standard.png' },
      { id: 2, title: '标准色', src: '/path/to/col_color.png' },
      { id: 3, title: '平面图', src: '/path/to/col_plan.png' },
    ],
  },
  {
    id: 3,
    name: '异能处',
    subTitle: 'A.D.',
    description: '研究、管控和利用异常能力的专门机构，致力于平衡超自然力量与人类社会和谐共存',
    logo: '/path/to/ability_logo.png',
    members: [
      { id: 5, name: '总研', image: '/path/to/researcher.png' },
      { id: 6, name: '执行官', image: '/path/to/officer.png' },
    ],
    images: [
      { id: 1, title: '标志', src: '/path/to/ability_logo.png' },
      { id: 2, title: '制式图', src: '/path/to/ability_standard.png' },
      { id: 3, title: '色彩方案', src: '/path/to/ability_color.png' },
    ],
  },
  {
    id: 4,
    name: '守望方舟',
    subTitle: 'C.S.',
    description: '保护世界和平与安全的秘密组织，成员精通各类武术与现代战术，在危机时刻挺身而出',
    logo: '/path/to/cs_logo.png',
    members: [
      { id: 7, name: '指挥官', image: '/path/to/commander.png' },
      { id: 8, name: '战术师', image: '/path/to/tactician.png' },
    ],
    images: [
      { id: 1, title: '组织标志', src: '/path/to/cs_emblem.png' },
      { id: 2, title: '制式装备', src: '/path/to/cs_equipment.png' },
      { id: 3, title: '行动准则', src: '/path/to/cs_code.png' },
    ],
  },
  {
    id: 5,
    name: '暗鸦堂',
    subTitle: 'D.R.',
    description: '行走于阴影中的情报组织，掌握世界各地的秘密信息，为维护平衡默默工作',
    logo: '/path/to/raven_logo.png',
    members: [
      { id: 9, name: '影主', image: '/path/to/shadowmaster.png' },
      { id: 10, name: '密探', image: '/path/to/agent.png' },
    ],
    images: [
      { id: 1, title: '堂徽', src: '/path/to/raven_crest.png' },
      { id: 2, title: '密文', src: '/path/to/raven_code.png' },
      { id: 3, title: '通讯方式', src: '/path/to/raven_comm.png' },
    ],
  },
];

function WorldView() {
    const [activeOrg, setActiveOrg] = useState(organizations[0]);
    const [activeImage, setActiveImage] = useState(activeOrg.images[0]);
    const [hoveredImage, setHoveredImage] = useState(null);
    const navigate = useNavigate();
  
    const handleOrgClick = (org) => {
      setActiveOrg(org);
      setActiveImage(org.images[0]);
    };
  
    const handleMemberClick = (memberPath) => {
      navigate(memberPath);
    };
  
    return (
      <div className="world-view">
        <div className="main-content">
          <div className="left-section">
            <div className="org-title">
              <h1>{activeOrg.name}</h1>
              <h2>{activeOrg.subTitle}</h2>
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
                  >
                    {image.title}
                  </div>
                ))}
              </div>
              <div className="fixed-image">
                <img src={activeOrg.fixedImage} alt="固定图片" />
              </div>
            </div>
          </div>
        </div>
  
        <div className="bottom-section">
          <div className="org-selector">
            {organizations.map((org) => (
              <div
                key={org.id}
                className={`org-box ${activeOrg.id === org.id ? 'active' : ''}`}
                onClick={() => handleOrgClick(org)}
              >
                <img src={org.logo} alt={org.name} />
              </div>
            ))}
          </div>
  
          <div className="members-display">
            <div className="members-label">组织成员</div>
            <div className="members-grid">
              {activeOrg.members.map((member) => (
                <div 
                  key={member.id} 
                  className="member-card"
                  onClick={() => handleMemberClick(member.path)}
                >
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-name">{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WorldView;