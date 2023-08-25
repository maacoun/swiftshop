import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'react-feather';
import { Bell } from 'react-feather';
import { User } from 'react-feather';

function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="pagename">
          <Link to="/">SWFTSHP</Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
          </div>
        <div className="topbar-buttons">
          <Link to="/cart">
            <ShoppingBag color='black' />
          </Link>
          <Link to="/notifications">
            <Bell color='black' />
          </Link>
          <Link to="/profile">
            <User color='black' />
          </Link>
        </div>
      </div>
      <div className="categories">
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
        <button>Category 4</button>
        <button>Category 5</button>
      </div>
    </header>
  );
}

export default Header;
