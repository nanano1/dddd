import React, { useState } from 'react';
import './css/WorldView.css';

const organizations = [
  {
    id: 1,
    name: '审判庭',
    subTitle: 'A.D.',
    description: '执掌裁决之剑，维护公平正义的司法机构，具有至高无上的审判权，在任何人面前均可行使对中立的审判权力并惩戒邪恶之人',
    logo: '/path/to/logo1.png',
    members: [
      { id: 1, name: 'MING', image: '/path/to/ming.png' },
      { id: 2, name: 'N', image: '/path/to/n.png' },
      // 添加更多成员
    ],
    images: [
      { id: 1, title: '标准制式', src: '/path/to/standard.png' },
      { id: 2, title: '标准色&印章效果色', src: '/path/to/color.png' },
      { id: 3, title: '平面图1', src: '/path/to/plan1.png' },
      { id: 4, title: '平面图2', src: '/path/to/plan2.png' },
    ],
  },
  {
    id: 2,
    name: '组织B',
    members: [
      { id: 3, name: '成员3', image: '/path/to/member3.png' },
      { id: 4, name: '成员4', image: '/path/to/member4.png' },
    ],
    images: [
      { id: 1, title: '图1', src: '/path/to/image5.png' },
      { id: 2, title: '图2', src: '/path/to/image6.png' },
      { id: 3, title: '图3', src: '/path/to/image7.png' },
      { id: 4, title: '图4', src: '/path/to/image8.png' },
    ],
  },
  {
    id: 3,
    name: '组织C',
    members: [
      { id: 5, name: '成员5', image: '/path/to/member5.png' },
      { id: 6, name: '成员6', image: '/path/to/member6.png' },
    ],
    images: [
        { id: 1, title: '图1', src: '/path/to/image5.png' },
        { id: 2, title: '图2', src: '/path/to/image6.png' },
        { id: 3, title: '图3', src: '/path/to/image7.png' },
        { id: 4, title: '图4', src: '/path/to/image8.png' },
      ],
  },
  {
    id: 4,
    name: '组织D',
    members: [
      { id: 7, name: '成员7', image: '/path/to/member7.png' },
      { id: 8, name: '成员8', image: '/path/to/member8.png' },
    ],
    images: [
        { id: 1, title: '图1', src: '/path/to/image5.png' },
        { id: 2, title: '图2', src: '/path/to/image6.png' },
        { id: 3, title: '图3', src: '/path/to/image7.png' },
        { id: 4, title: '图4', src: '/path/to/image8.png' },
      ],
  },
  {
    id: 5,
    name: '组织E',
    members: [
      { id: 9, name: '成员9', image: '/path/to/member9.png' },
      { id: 10, name: '成员10', image: '/path/to/member10.png' },
    ],
    images: [
        { id: 1, title: '图1', src: '/path/to/image5.png' },
        { id: 2, title: '图2', src: '/path/to/image6.png' },
        { id: 3, title: '图3', src: '/path/to/image7.png' },
        { id: 4, title: '图4', src: '/path/to/image8.png' },
      ],
  },
];

function WorldView() {
  const [activeOrg, setActiveOrg] = useState(organizations[0]);
  const [activeImage, setActiveImage] = useState(activeOrg.images[0]);

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
            <img src={activeImage.src} alt={activeOrg.name} />
          </div>
        </div>

        <div className="right-section">
          <div className="image-tabs">
            {activeOrg.images.map((image) => (
              <div
                key={image.id}
                className={`image-tab ${activeImage.id === image.id ? 'active' : ''}`}
                onClick={() => setActiveImage(image)}
              >
                {image.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="org-selector">
          {organizations.map((org) => (
            <div
              key={org.id}
              className={`org-box ${activeOrg.id === org.id ? 'active' : ''}`}
              onClick={() => {
                setActiveOrg(org);
                setActiveImage(org.images[0]);
              }}
            >
              <img src={org.logo} alt={org.name} />
            </div>
          ))}
        </div>

        <div className="members-display">
          <div className="members-grid">
            {activeOrg.members.map((member) => (
              <div key={member.id} className="member-card">
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
