// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_upper flex-space-between">
        <li className="nav_list">
          <Link to="/" className="nav_link">
            <img className="branding" src={`${process.env.PUBLIC_URL}/img/logo.jpg`} alt="logo" />
          </Link>
        </li>
        <li className="nav_list">
          <div className="search_box">
            <input type="text" placeholder="Search......" />
            <i className="fa-solid fa-magnifying-glass" title="search"></i>
          </div>
        </li>
        <li className="nav_list">
          <Link to="/cart" className="nav_link cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>

      {/* lower nav starts */}
      <i className="fas fa-bars fa-1x" id="icon"></i>
      <div id="menu" className="hidden">
        <ul className="nav_lower flex-space-around">
          <li className="nav_list">
            <Link to="/allProducts" className="nav_link">All Categories</Link>
          </li>
          <li className="nav_list">
            <Link to="/sarisha-oil" className="nav_link">Sarisha oil</Link>
          </li>
          <li className="nav_list">
            <Link to="/ghee" className="nav_link">Ghee</Link>
          </li>
          <li className="nav_list">
            <Link to="/dates" className="nav_link">Dates</Link>
          </li>
          <li className="nav_list">
            <Link to="/honey" className="nav_link">Honey</Link>
          </li>
          <li className="nav_list">
            <Link to="/masala" className="nav_link">Masala</Link>
          </li>
          <li className="nav_list">
            <Link to="/nuts-seeds" className="nav_link">Nuts & Seeds</Link>
          </li>
        </ul>
      </div>
      {/* lower nav ends */}
    </nav>
  );
};

export default Navbar;
