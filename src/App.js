import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Character from './components/Character';
import GuildDemo from './components/GuildDemo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<GuildDemo />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/story" element={<div>剧情</div>} />
        <Route path="/extension" element={<div>延伸</div>} />
      </Routes>
    </Router>
  );
}

export default App;
