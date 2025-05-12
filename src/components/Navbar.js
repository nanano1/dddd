import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './css/Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/about">世界观介绍</Link>
          <Dropdown />
        </li>
        <li>
          <Link to="/characters">角色</Link>
          <Dropdown />
        </li>
        <li>
          <Link to="/story">剧情</Link>
          <Dropdown />
        </li>
        <li>
          <Link to="/extension">延伸</Link>
          <Dropdown />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
