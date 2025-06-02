import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Character from './components/Character';
import GuildDemo from './components/GuildDemo';
import Extension from './components/Extension';
import SocialPlatform from './components/SocialPlatform';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<GuildDemo />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/characters/:characterId" element={<Character />} />
        <Route path="/story" element={<div>剧情</div>} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/social" element={<SocialPlatform />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
