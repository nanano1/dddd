import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="/assets/images/ui/logo.png" alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/worldview">世界观介绍</Link>
          <Dropdown menuType="worldview" />
        </li>
        <li>
          <Link to="/characters">角色列表</Link>
          <Dropdown menuType="characters" />
        </li>
        <li>
          <Link to="/story">剧情</Link>
          <Dropdown menuType="story" />
        </li>
        <li>
          <Link to="/extension">延伸</Link>
          <Dropdown menuType="extension" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
