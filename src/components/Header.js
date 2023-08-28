import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'react-feather';
import { Bell } from 'react-feather';
import { User } from 'react-feather';
import { UserCheck } from 'react-feather';
import AuthModal from './AuthModal'; // Import the AuthModal component
import { useAuthContext } from "../contexts/AuthContext";

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [{isUserLoggedIn}] = useAuthContext();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
          {/* if user is logged in, show the UserCheck icon, else show the User icon. if he logged in and click on it, redirect to profile, if not, display modal */}
          {isUserLoggedIn ? (
            <Link to="/profile">
              <UserCheck color='black' />
            </Link>
          ) : (
            <Link onClick={openModal}>
              <User color='black' />
            </Link>
          )}
        </div>
      </div>
      <div className="categories">
        <button>Smartphones</button>
        <button>Laptops, Computers</button>
        <button>TV, Audio, Photo</button>
        <button>Networking</button>
        <button>Gadgets</button>
      </div>
      {isModalOpen && <AuthModal onClose={closeModal} isModalOpen={isModalOpen} />}
    </header>
  );
}

export default Header;
