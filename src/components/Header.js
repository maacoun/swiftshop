import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'react-feather';
import { Bell } from 'react-feather';
import { User } from 'react-feather';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <Link to="/">SWFTSHP</Link>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search headphone, mobile, harddrive,..."></input>
          <button>Search</button>
          </div>
        <div className="header-nav">
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
