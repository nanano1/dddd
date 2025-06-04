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
              <h3>狮金克</h3>
              <p>方形，金铸，正面印有狮纹，背面印有商会标志，标准克重4.869g，由商会统一发行</p>

            </div>
            <div className="currency-text-area-new">
              <p>狮金克与月银章的比率由商会进行统一定价，在一定程度上会产生波动，但总体围绕1：100的比率，两者均为日常生活货币；狮金克与水晶粹的比率由市场定价，由于水晶粹数量稀少且用途更广，一般以1:1000的比率出价，按照买卖双方意愿进行合同交割，交易对象更多为高魔力者</p>
            </div>
          </div>
          {/* 第二行：货币展示 */}
          <div className="currency-row">
            <div className="currency-square cystal">
                <h3>水晶粹</h3>
                <p>菱形，晶体，在昏暗环境下会散发蓝色荧光，其内有魔力储藏，由学院统一发行，大多存在于高魔力者之间交易</p>
            </div>
            
            <div className="currency-display-box">
              <div className="currency-item-horizontal">
                <img src="/assets/images/worldview/月银.png" alt="月曜石" />
                <div className="currency-info">
                  <p>月银章:狮金克</p>
                  <p>1:100</p>
                </div>
              </div>
              <div className="currency-item-horizontal">
                <img src="/assets/images/worldview/狮金.png" alt="黄金币" />
                <div className="currency-info">
                  <p>狮金克：水晶粹</p>
                  <p>1:1000</p>
                </div>
              </div>
              <div className="currency-item-horizontal">
                <img src="/assets/images/worldview/水晶.png" alt="魔法水晶" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 种族部分 */}
      <section className="races-section">
        <h2 className="section-title">种族</h2>
        <div className="subtitle">la liberté主要种族介绍</div>
        <div className="races-slider-container">
          <div className="races-slider">
            <div className="race-card-new human-bg">
              <img src="/assets/images/worldview/人族.png" alt="人族" />
              <h3>人族</h3>
              <p>种族规模庞大，拥有较为严格的阶级和制度，几乎所有人族统一居住在人族建立的城邦中，其中的绝大部分没有元素感应能力（即魔法资质），拥有相应资质的人可以选择到达一定年龄后进修学习；种族平均寿命较短，外交方面除个别不愿沟通的种族外与其他种族普遍交好，在整片大陆上占据主导地位。</p>
            </div>
            <div className="race-card-new beast-bg">
              <img src="/assets/images/worldview/狐人族.png" alt="兽人" />
              <h3>狐人族</h3>
              <p>已经隐世的兽人族之一，族人普遍拥有能产生魅惑能力的手段，擅长幻术与欺诈，精神能力较强，但是肉体能力普遍较弱，部分实力较为强大血脉较为纯正的狐人可出现返祖（即完全兽化）的状态。在种族内部以尾数论尊卑，九尾为极，绝大部分居住在狐族领地内，种族平均寿命较长。</p>
            </div>
            <div className="race-card-new dwarf-bg">
              <img src="/assets/images/worldview/狼人族.png" alt="矮人" />
              <h3>狼人族</h3>
              <p>大陆上活跃的兽人族之一，绝大部分在人族城邦之外划分领地生活，偶尔会出没在人族的城邦中进行贸易往来。寿命与人族相当，族人大部分拥有较强的身体素质，族内会定期进行集体狩猎。</p>
            </div>
            <div className="race-card-new elf-bg">
              <img src="/assets/images/worldview/猫人族.png" alt="精灵" />
              <h3>猫人族</h3>
              <p>极为罕见的种族，人数及其稀少且分布极广，一般与人族或其他兽人族共同生活，大多数习惯独居，头上的猫耳为该种族特质，天生拥有较强的身体素质和元素感应能力，寿命与人族相当。</p>
            </div>
            <div className="race-card-new dragon-bg">
              <img src="/assets/images/worldview/机械生命.png" alt="龙族" />
              <h3>机械生命</h3>
              <p>远古时代的造物，其构造的精密与复杂程度令人叹为观止，依靠其内部核心以及特定的能源提供动力，拥有较为完善的自我意识但仍然会执行程序化指令。现存寥寥无几。</p>
            </div>
            <div className="race-card-new angel-bg">
              <img src="/assets/images/worldview/精灵族.png" alt="天使" />
              <h3>精灵族</h3>
              <p>隐世的种族之一，天生拥有极强的元素亲和力，根据相应地元素存在不同的领地划分，普遍长相优美，身姿矫健。寿命悠长但自然生育率极低，拥有外貌不老的特质，自命清高，但在有大事来临的关键时刻会通过族内先知的力量预知并告知其他种族。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 势力部分 */}
      <section className="factions-section">
        <h2 className="section-title">势力</h2>
        <div className="subtitle">利普赫顿大陆主要势力介绍</div>
        
        {/* 工会势力 */}
        <div className="faction-group">
          <h3 className="faction-group-title">工会势力</h3>
          <div className="factions-container">
            {[
              { src: "/assets/images/worldview/冒险家协会.png", alt: "冒险者协会" },
              { src: "/assets/images/worldview/商会.png", alt: "佣兵团" },
              { src: "/assets/images/worldview/审判庭.png", alt: "冰霜组织" },
              { src: "/assets/images/worldview/学校.png", alt: "城镇联盟" },
              { src: "/assets/images/worldview/赏金猎人.png", alt: "血月会" }
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
              { src: "/assets/images/worldview/晨星.png", alt: "贵族家族" },
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