import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Extension.css';

// 懒加载图片组件
const LazyImage = ({ src, alt, className, onClick }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc !== src) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef);
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, src]);

  return (
    <div 
      className="lazy-image-container"
      ref={setImageRef}
      style={{ 
        minHeight: '200px',
        background: imageSrc ? 'none' : '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={className}
          onClick={onClick}
          loading="lazy"
        />
      ) : (
        <div style={{ color: '#999', fontSize: '14px' }}>加载中...</div>
      )}
    </div>
  );
};

function Extension() {
  const navigate = useNavigate();

  // 画廊数据 - 三列布局
  const galleryData = [
    {
      id: 1,
      title: '动画',
      image: '/assets/images/extension/画廊-动画@3x.png',
      category: 'animation'
    },
    {
      id: 2,
      title: '角色立绘',
      image: '/assets/images/extension/画廊-立绘@3x.png',
      category: 'character'
    },
    {
      id: 3,
      title: '插画&摸鱼页',
      image: '/assets/images/extension/画廊-插画@3x.png',
      category: 'art'
    },
    {
      id: 4,
      title: '半身&头像',
      image: '/assets/images/extension/画廊-半身@3x.png',
      category: 'concept'
    },
    {
      id: 5,
      title: '表情包',
      image: '/assets/images/extension/画廊-表情包@3x.png',
      category: 'scene'
    },
    {
      id: 6,
      title: 'Q版角色',
      image: '/assets/images/extension/画廊-q版@3x.png',
      category: 'effect'
    },
    {
        id: 7,
        title: '武器&小物',
        image: '/assets/images/extension/画廊-武器@3x.png',
        category: 'effect'
      }
  ];

  // 实物周边数据 - 两列布局
  const merchandiseData = [
    {
      id: 1,
      title: '夏日白服',
      image: '/assets/images/extension/白服.png',
      category: '服装'
    },
    {
      id: 2,
      title: '拟宝可梦',
      image: '/assets/images/extension/宝可梦.png',
      category: '玩具'
    },
    {
      id: 3,
      title: '仿画风风',
      image: '/assets/images/extension/仿画风.png',
      category: '饰品'
    },
    {
      id: 4,
      title: 'GIMMEGIMME',
      image: '/assets/images/extension/GIMMEGIMME.png',
      category: '特殊'
    },
    {
      id: 5,
      title: '游乐园',
      image: '/assets/images/extension/游乐园.png',
      category: '主题'
    },
    {
      id: 6,
      title: '练习室',
      image: '/assets/images/extension/练习室.png',
      category: '场景'
    },
    {
      id: 7,
      title: '守护甜心',
      image: '/assets/images/extension/守护甜心.png',
      category: '可爱'
    },
    {
      id: 8,
      title: '黑白bking',
      image: '/assets/images/extension/黑白BK.png',
      category: '时尚'
    },
    {
      id: 9,
      title: '群星密语',
      image: '/assets/images/extension/群星密语.png',
      category: '梦幻'
    },
    {
      id: 10,
      title: 'Q版群头',
      image: '/assets/images/extension/群头.png',
      category: 'Q版'
    }
  ];

  const handleSocialPlatformClick = () => {
    // 跳转到社交平台界面
    navigate('/social');
  };

  return (
    <div className="extension-container">
      {/* 画廊部分 - 三列布局 */}
      <section className="gallery-section">
        <div className="section-header">
          <h2>画廊</h2>
          <p>精彩作品集锦</p>
        </div>
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <LazyImage src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 伪社交平台部分 - 一张图可点击 */}
      <section className="social-section">
        <div className="section-header">
          <h2>伪社交平台</h2>
          <p>连接每一个精彩时刻</p>
        </div>
        <div className="social-platform-container">
          <div className="social-platform-card" onClick={handleSocialPlatformClick}>
            <LazyImage 
              src="/assets/images/extension/伪社交.png" 
              alt="社交平台"
              className="social-platform-image"
            />
          </div>
        </div>
      </section>

      {/* 实物周边部分 - 两列布局 */}
      <section className="merchandise-section">
        <div className="section-header">
          <h2>实物周边</h2>
          <p>将虚拟世界带入现实</p>
        </div>
        <div className="merchandise-grid">
          {merchandiseData.map((item) => (
            <div key={item.id} className="merchandise-item">
              <div className="merchandise-image">
                <LazyImage src={item.image} alt={item.title} />
                <div className="merchandise-overlay">
                  <h3>{item.title}</h3>
                  <span className="merchandise-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Extension; 