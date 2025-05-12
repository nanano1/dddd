import React from 'react';
import './css/Home.css';
import backgroundImage from '../assets/images/background.png';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={backgroundImage} alt="Background" className="main-image" />
      </div>
      <div className="banner-text">
        <h1>无论身在何处，我们终将相遇</h1>
      </div>
      
      <div className="content-section">
        {/* 第一行：图左文右 */}
        <div className="content-row">
          <div className="image-section">
            <img src="/path/to/image1.jpg" alt="Content 1" />
          </div>
          <div className="text-section">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          </div>
        </div>

        {/* 第二行：图右文左 */}
        <div className="content-row reverse">
          <div className="image-section">
            <img src="/path/to/image2.jpg" alt="Content 2" />
          </div>
          <div className="text-section">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          </div>
        </div>

        {/* 第三行 */}
        <div className="content-row">
          <div className="left-image">
            <img src="/path/to/image3.jpg" alt="Content 3" />
          </div>
          <div className="right-text">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          </div>
        </div>

        {/* 第四行 */}
        <div className="content-row reverse">
          <div className="left-text">
            <h2>la liberté</h2>
            <p>是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          </div>
          <div className="right-image">
            <img src="/path/to/image4.jpg" alt="Content 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;