import React from 'react';
import './css/ComingSoon.css';

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="icon">🚧</div>
        <h1>功能开发中</h1>
        <p>此功能正在开发中，敬请期待...</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p className="progress-text">开发进度: 30%</p>
      </div>
    </div>
  );
}

export default ComingSoon; 