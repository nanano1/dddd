import React, { useState, useEffect } from 'react';
import './css/Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 轮播图数据
  const slides = [
    {
      id: 1,
      image: '/assets/images/ui/首页轮播图1@2x.png',
      title: '欢迎来到神秘世界',
      subtitle: '探索未知的冒险之旅'
    },
    {
      id: 2,
      image: '/assets/images/ui/首页条形图1@2x.png',
      title: '强大的工会联盟',
      subtitle: '加入你的命运之选'
    },
    {
      id: 3,
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: '传奇角色故事',
      subtitle: '每个英雄都有属于自己的传说'
    },
    {
      id: 4,
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      title: '史诗般的冒险',
      subtitle: '书写属于你的英雄史诗'
    }
  ];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, [slides.length]);

  // 手动切换轮播
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="home-container">
      {/* 第一屏：轮播图区域 */}
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                background: slide.image,
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* 轮播指示点 */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* 标语区域 */}
        <div className="banner-text">
          <h1>无论身在何处，我们终将相遇</h1>
        </div>
      </div>

      {/* 第二屏：内容区域 */}
      <div className="content-section">
        {/* 第一行：图左文右 */}
        <div className="content-row">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图1@2x.png" alt="Content 1" />
          </div>
          <div className="text-section">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            <p>在这个充满奇迹的世界里，每一个冒险者都有着属于自己的传奇故事。无论是勇敢的战士还是智慧的法师，都在为了心中的理想而努力奋斗着。</p>
          </div>
        </div>

        {/* 第二行：图右文左 */}
        <div className="content-row reverse">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图2@2x.png" alt="Content 2" />
          </div>
          <div className="text-section">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            <p>工会联盟为所有的冒险者提供了一个团结合作的平台，让大家能够共同面对未知的挑战，创造更加辉煌的未来。</p>
          </div>
        </div>

        {/* 第三行：图左文右 */}
        <div className="content-row">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图3@2x.png" alt="Content 3" />
          </div>
          <div className="text-section">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            <p>每一个角色都有着独特的背景故事和技能设定，他们的命运交织在一起，共同编织着这个世界的传奇。</p>
          </div>
        </div>

        {/* 第四行：图右文左 */}
        <div className="content-row reverse">
          <div className="image-section">
            <img src="/assets/images/worldview/院徽拼合.png" alt="Content 4" />
          </div>
          <div className="text-section">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            <p>史诗般的冒险正在等待着每一个勇敢的心。加入我们，一起书写属于这个时代的英雄传说。</p>
          </div>
        </div>
      </div>

      {/* 第三屏：视频区域 */}
      <div className="video-section">
        <div className="video-container">
          <h2>精彩视频展示</h2>
          <div className="video-placeholder">
            <p>点击此处添加视频内容</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;