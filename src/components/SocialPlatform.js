import React, { useState } from 'react';
import { postsData, rightSidebarData } from '../data/posts';
import './css/SocialPlatform.css';

function SocialPlatform() {
  const [posts, setPosts] = useState(postsData);
  const [activeTab, setActiveTab] = useState('home');

  const sidebarItems = [
    { id: 'home', label: '我的', icon: '🏠', active: true },
    { id: 'server', label: '热门推荐', icon: '💻', active: false },
    { id: 'myserver', label: '热门榜单', icon: '📱', active: false },
    { id: 'text', label: '热搜', icon: '📝', active: false },
    { id: 'queue', label: '文娱', icon: '⏰', active: false },
    { id: 'message', label: '新闻', icon: '💬', active: false },
    { id: 'now', label: '实时', icon: '💬', active: false }
  ];

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, stats: { ...post.stats, likes: post.stats.likes + 1 } }
        : post
    ));
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="social-platform">
      {/* 左侧导航栏 */}
      <aside className="sidebar-left">
        <div className="sidebar-header">
        </div>
        <nav className="sidebar-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* 中间主要内容区域 */}
      <main className="main-content">
        <div className="posts-container">
          {posts.map(post => (
            <article key={post.id} className="post">
              <div className="post-header">
                <div className="user-info">
                  <img src={post.user.avatar} alt={post.user.username} className="user-avatar" />
                  <div className="user-details">
                    <div className="username-row">
                      <span className="username">{post.user.username}</span>
                      {post.user.verified && <span className="verified">✓</span>}
                    </div>
                    <span className="user-handle">{post.user.handle}</span>
                  </div>
                </div>
                <div className="post-time">{post.timestamp}</div>
              </div>

              <div className="post-content">
                <p className="post-text">
                {post.content.text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < post.content.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                {post.content.images && (
                  <div className={`post-images ${post.content.images.length > 1 ? 'multiple' : 'single'}`}>
                    {post.content.images.map((image, index) => (
                      <img key={index} src={image} alt={`Post content ${index + 1}`} className="post-image" />
                    ))}
                  </div>
                )}
              </div>

              <div className="post-actions">
                <button 
                  className="action-btn like-btn"
                  onClick={() => handleLike(post.id)}
                >
                  <span className="action-icon">❤️</span>
                  <span className="action-count">{formatNumber(post.stats.likes)}</span>
                </button>
                <button className="action-btn comment-btn">
                  <span className="action-icon">💬</span>
                  <span className="action-count">{formatNumber(post.stats.comments)}</span>
                </button>
                <button className="action-btn share-btn">
                  <span className="action-icon">🔄</span>
                  <span className="action-count">{formatNumber(post.stats.shares)}</span>
                </button>
                <button className="action-btn bookmark-btn">
                  <span className="action-icon">🔖</span>
                  <span className="action-count">{formatNumber(post.stats.bookmarks)}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* 右侧推荐内容 */}
      <aside className="sidebar-right">
        {rightSidebarData.map((section) => (
          <div key={section.id} className="sidebar-section">
            <h3 className="section-title">{section.title}</h3>
            <ul className="section-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="section-item">
                  <span className="item-text">{itemIndex + 1}.{item}</span>
                </li>
              ))}
            </ul>
            <div className="section-footer">
              <span>——查看更多{section.title}——</span>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default SocialPlatform; 