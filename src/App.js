import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Character from './components/Character';
import GuildDemo from './components/GuildDemo';
import Extension from './components/Extension';
import SocialPlatform from './components/SocialPlatform';
import ComingSoon from './components/ComingSoon';
import Worldview from './components/Worldview';
import AudioPlayer from './components/AudioPlayer';

function App() {
  useEffect(() => {
    // 在整个应用级别添加音乐启动提示
    const handleFirstClick = () => {
      console.log('🎵 用户首次交互，音乐将开始播放...');
      // 这个事件只需要触发一次
      document.removeEventListener('click', handleFirstClick, true);
    };
    
    document.addEventListener('click', handleFirstClick, true);
    
    return () => {
      document.removeEventListener('click', handleFirstClick, true);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<GuildDemo />} />
        <Route path="/worldview" element={<Worldview />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/characters/:characterId" element={<Character />} />
        <Route path="/story" element={<div>剧情</div>} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/social" element={<SocialPlatform />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <AudioPlayer />
    </Router>
  );
}

export default App;
