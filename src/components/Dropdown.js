import React from 'react';
import { Link } from 'react-router-dom';
import './css/Dropdown.css';

function Dropdown() {
  return (
    <div className="dropdown">
      <ul>
        <li><Link to="/option1">选项1</Link></li>
        <li><Link to="/option2">选项2</Link></li>
        <li><Link to="/option3">选项3</Link></li>
      </ul>
    </div>
  );
}

export default Dropdown;