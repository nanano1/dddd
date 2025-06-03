import React, { useState } from 'react';
import './css/Worldview.css';

const Worldview = () => {
  const [activeGuildFaction, setActiveGuildFaction] = useState(0);
  const [activeFamilyFaction, setActiveFamilyFaction] = useState(0);

  const handleGuildFactionClick = (index) => {
    setActiveGuildFaction(index);
  };

  const handleFamilyFactionClick = (index) => {
    setActiveFamilyFaction(index);
  };

  return (
    <div className="worldview-container">
      {/* 世界地图部分 */}
      <section className="world-map-section">
        <h1 className="section-title">la liberté</h1>
        <div className="subtitle">世界地图&植被带&气候带介绍</div>
        <div className="map-container">
          <img src="/assets/images/worldview/地图@2x.png" alt="世界地图" className="world-map" />
        </div>
      </section>

      {/* 能力组织部分 */}
      <section className="organizations-section">
        <h2 className="section-title">能力组成</h2>
        <div className="subtitle">a liberté内可使用的能力种类介绍</div>
        <div className="organizations-grid">
          <div className="organization-card">
            <p>魔法</p>
            <p>操控自然界元素（通过吟唱）释放魔法</p>
            <img src="/assets/images/worldview/魔法.png" alt="魔法" />
            
          </div>
          <div className="organization-card">
            <p>科技</p>
            <p>身体素质/锻造武器</p>
            <img src="/assets/images/worldview/科技.png" alt="克里斯万象学院" />
          </div>
          <div className="organization-card">
            <p>种族天赋</p>
            <p>不同种族拥有属于自己的独特天赋</p>
            <img src="/assets/images/worldview/种族天赋.png" alt="神秘组织" />
          </div>
        </div>
      </section>

      {/* 通行货币部分 */}
      <section className="currency-section">
        <h2 className="section-title">通行货币</h2>
        <div className="subtitle">a liberté内流通的货币介绍</div>
        <div className="currency-content-new">
          {/* 第一行：两个正方形 + 文字介绍 */}
          <div className="currency-row">
            <div className="currency-square moonstone">
              <h3>月银章</h3>
              <p>圆形，银铸，正面印有月纹，背面印有商会标志，标准克重1.412g，由商会统一发行</p>
            </div>
            <div className="currency-square gold">
              <h3>黄金币</h3>
              <p>通用货币</p>
            </div>
            <div className="currency-text-area-new">
              <p>狮金克与月银章的比率由商会进行统一定价，在一定程度上会产生波动，但总体围绕1：100的比率，两者均为日常生活货币；狮金克与水晶粹的比率由市场定价，由于水晶粹数量稀少且用途更广，一般以1:1000的比率出价，按照买卖双方意愿进行合同交割，交易对象更多为高魔力者</p>
            </div>
          </div>
          {/* 第二行：货币展示 */}
          <div className="currency-row">
            <div className="currency-square gold">
                <h3>水晶币</h3>
                <p>较为重要的魔法道具以及技术类道具购买时使用，由水晶组成，拥有一定的魔法储存能力，可以储存少量魔法力—水晶币。</p>
            </div>
            
            <div className="currency-display-box">
              <div className="currency-item-horizontal">
                <img src="/assets/images/worldview/月曜石黑色.png" alt="月曜石" />
                <div className="currency-info">
                  <h4>月曜石黑象征</h4>
                  <p>数量：1,100</p>
                  <p>稀有度：传说</p>
                </div>
              </div>
              <div className="currency-item-horizontal">
                <img src="/assets/images/worldview/黄金币-光泽.png" alt="黄金币" />
                <div className="currency-info">
                  <h4>黄金币-光泽</h4>
                  <p>数量：15,000</p>
                  <p>稀有度：普通</p>
                </div>
              </div>
              <div className="currency-item-horizontal">
                <img src="/assets/images/worldview/魔法水晶.png" alt="魔法水晶" />
                <div className="currency-info">
                  <h4>魔法水晶</h4>
                  <p>数量：∞</p>
                  <p>稀有度：史诗</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 种族部分 */}
      <section className="races-section">
        <h2 className="section-title">种族</h2>
        <div className="subtitle">a liberté内生活的种族介绍</div>
        <div className="races-slider-container">
          <div className="races-slider">
            <div className="race-card-new human-bg">
              <img src="/assets/images/worldview/人族.png" alt="人族" />
              <h3>人族</h3>
              <p>外貌特征与现实里的人一一又又又又或又又又又，大部分人族都有着金发蓝眼的特征，个别人族拥有不同颜色的瞳色—又也有少数人族拥有独特的瞳色，这些瞳色和魔法天赋的高低有一定关系。</p>
            </div>
            <div className="race-card-new beast-bg">
              <img src="/assets/images/worldview/兽人.png" alt="兽人" />
              <h3>兽人</h3>
              <p>拥有着动物的某些特征，比如猫族拥有猫耳和猫尾，狼族拥有狼耳朵和狼尾巴等—或也有身体素质比人族更加优秀，在速度、力量、听觉、视觉等各方面都比人族要强。</p>
            </div>
            <div className="race-card-new dwarf-bg">
              <img src="/assets/images/worldview/矮人.png" alt="矮人" />
              <h3>矮人族</h3>
              <p>身材比人族要矮小，手工艺者拥有人族几倍的天赋，尤其是在锻造方面，矮人在大陆各地都以精湛的锻造工艺闻名，同时，矮人族的大多都拥有较为浓厚的胡须。</p>
            </div>
            <div className="race-card-new elf-bg">
              <img src="/assets/images/worldview/精灵.png" alt="精灵" />
              <h3>精灵族</h3>
              <p>拥有尖耳朵，身材修长，容貌美丽，寿命悠长，魔法天赋极高。精灵族与自然和谐共处，是森林的守护者，擅长弓箭和自然魔法。</p>
            </div>
            <div className="race-card-new dragon-bg">
              <img src="/assets/images/worldview/龙族.png" alt="龙族" />
              <h3>龙族</h3>
              <p>强大而神秘的种族，拥有龙的血脉和力量。龙族个体稀少但实力强大，掌握着古老的魔法知识，被其他种族敬畏。</p>
            </div>
            <div className="race-card-new angel-bg">
              <img src="/assets/images/worldview/天使.png" alt="天使" />
              <h3>天使族</h3>
              <p>来自天界的神圣种族，拥有洁白的翅膀和强大的光明魔法。天使族以正义和善良著称，是黑暗势力的天敌。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 势力部分 */}
      <section className="factions-section">
        <h2 className="section-title">势力</h2>
        <div className="subtitle">大陆上的主要势力组织</div>
        
        {/* 工会势力 */}
        <div className="faction-group">
          <h3 className="faction-group-title">工会势力</h3>
          <div className="factions-container">
            {[
              { src: "/assets/images/worldview/冒险者协会.png", alt: "冒险者协会" },
              { src: "/assets/images/worldview/佣兵.png", alt: "佣兵团" },
              { src: "/assets/images/worldview/冰霜.png", alt: "冰霜组织" },
              { src: "/assets/images/worldview/城镇.png", alt: "城镇联盟" },
              { src: "/assets/images/worldview/血月.png", alt: "血月会" }
            ].map((faction, index) => (
              <div 
                key={index}
                className={`faction-card ${activeGuildFaction === index ? 'active' : ''}`}
                onClick={() => handleGuildFactionClick(index)}
              >
                <img src={faction.src} alt={faction.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* 家族势力 */}
        <div className="faction-group">
          <h3 className="faction-group-title">家族势力</h3>
          <div className="factions-container">
            {[
              { src: "/assets/images/worldview/冒险者协会.png", alt: "贵族家族" },
              { src: "/assets/images/worldview/佣兵.png", alt: "商业家族" },
              { src: "/assets/images/worldview/冰霜.png", alt: "魔法家族" },
              { src: "/assets/images/worldview/城镇.png", alt: "军事家族" },
              { src: "/assets/images/worldview/血月.png", alt: "暗影家族" }
            ].map((faction, index) => (
              <div 
                key={index}
                className={`faction-card ${activeFamilyFaction === index ? 'active' : ''}`}
                onClick={() => handleFamilyFactionClick(index)}
              >
                <img src={faction.src} alt={faction.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Worldview; 