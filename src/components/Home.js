import React, { useState, useEffect } from 'react';
import './css/Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 轮播图数据
  const slides = [
    {
      id: 1,
      image: '/assets/images/ui/首页轮播图1@2x.png',
    },
    {
      id: 2,
      image: '/assets/images/ui/首页条形图1@2x.png',
    },
    {
      id: 3,
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
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
                background: slide.image.startsWith('/') ? `url('${slide.image}')` : slide.image,
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
            <p>乱世之后，利普赫顿大陆上五大家族联手带来了和平。"五王条约"下，新的秩序被搭建，新的希望就在眼前。然而，当人们对和平习以为常后，身藏暗处的野心家们便开始蠢蠢欲动。此时，在命运的指引下，一群天赋异禀的人聚集在一起，他们身份各异，地位不同，但都有一颗向往正义的心。风雨欲来，他们的出现又将给利普赫顿来带何种变化。 </p>
          </div>
        </div>

        {/* 第二行：图右文左 */}
        <div className="content-row reverse">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图2@2x.png" alt="Content 2" />
          </div>
          <div className="text-section">
            <h2>DDDD</h2>
            <p>信息时代为许多淹没在生活浪潮中的人们提供了喘息的片刻闲暇，原本生活在天南地北的人通过网络与彼此产生链接。活跃在一线的up主们在互动间形成了纽带，相互支持着对方。各自领域的头部up主之间又会擦出怎样的火花，又会对他们的生活产生什么样的奇妙变化</p>
          </div>
        </div>

        {/* 第三行：图左文右 */}
        <div className="content-row">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图3@2x.png" alt="Content 3" />
          </div>
          <div className="text-section">
            <h2>Dazzling Divas&Double D Rhythm</h2>
            <p>充满着腥风血雨的娱乐圈永远不缺血气方刚的追梦人，但他们中的大多数都在前行的路上因为各种原因渐渐隐去姓名。在这之中，"DoubleDRythm"乐队与"DazzlingDivas"女团杀出重围，成为乐坛两颗冉冉升起的双子星。未来还有更多的挑战在等着他们，期待他们更为精彩的表现吧。</p>
          </div>
        </div>

        {/* 第四行：图右文左 */}
        <div className="content-row reverse">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图4@2x.png" alt="Content 4" />
          </div>
          <div className="text-section">
            <h2>霍格沃茨</h2>
            <p>在名为"哈利波特"的传奇光环下，许多天才也都黯然失色。但这并不意味着他们的生活就平平无奇，这一次让我们把目光转向故事并未提及的部分，来自不同学院的他们也将在霍格沃兹度过一段精彩的人生。</p>
          </div>
        </div>
        <div className="content-row">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图5@2x.png" alt="Content 4" />
          </div>
          <div className="text-section">
            <h2>pokemon</h2>
            <p>所有的宝可梦训练师们都拥有一个相同的梦想——取得那顶代表最强训练师的桂冠。为此不断努力的训练师们分别与各自的宝可梦结下深刻的羁绊。在不同的道路上砥砺前行的他们终将相识相知，并在之后的路上成为相互的坚实后盾。</p>
          </div>
        </div>
        <div className="content-row reverse">
          <div className="image-section">
            <img src="/assets/images/ui/首页条形图36@2x.png" alt="Content 4" />
          </div>
          <div className="text-section">
            <h2>逐暗（待建设）</h2>
            <p>霓虹交错灯红酒绿的赛博城市里，网络与义肢不断侵蚀着人们的大脑。在混乱的背景下他们又会过上怎样的生活。</p>
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