import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const iconStyle = {
    color: 'rgb(212, 209, 209)',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <header className="nav">
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/" style={iconStyle}>
              <icon className="lessthan" style={iconStyle} />
              Home
            </Link>
          </li>
          <li className="headerList">
            <h1>Crypto Metrics</h1>
          </li>
          <li className="headerList">
            <div className="icons-class">
              <icon style={iconStyle} />
              <icon style={iconStyle} />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
