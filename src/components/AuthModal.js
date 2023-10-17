import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/authmodal.css';
import { X } from 'react-feather';
import { Check } from 'react-feather';
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import { useAuthContext } from "../contexts/AuthContext"
import toast, { Toaster } from 'react-hot-toast';

function AuthModal({ onClose, isModalOpen }) {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const [, dispatch] = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const API_URL = 'https://localhost:7035/api/Auth/login';

  const onSubmit = async (data) => {
    console.log(data);
    
    try {
      const response = await axios.post(API_URL, {
        email: data.email,
        password: data.password,
        rememberMe: false,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = response.data.token;
      setToken(token);
      dispatch({ type: 'SET_ACCESS_TOKEN', payload: token });
      toast.success('You have successfully logged in!');
      onClose();

    } catch (error) {
      console.log(error);
      setError(error);
      toast.error('Something went wrong!');
    }
  };
  

  useEffect(() => {
    // Attach a click event listener to the document to close the modal on overlay click
    const handleOverlayClick = event => {
      if (event.target.classList.contains('auth-modal')) {
        onClose();
      }
    };

    document.addEventListener('click', handleOverlayClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [onClose]);

  return (
    <div className={`auth-modal ${isModalOpen ? 'active' : ''}`}>
      <div className="auth-modal-content">
        <div className="auth-modal-left">
          <h1>Sign in</h1>
          <p>Sign up to get access to all features!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-modal-input">
              <input type="email" id="email" {...register("email", { required: true })} placeholder="Email" className='auth-modal-input' />
              {errors.email && <span className="auth-modal-error">This field is required</span>}
              <input type="password" id="password" {...register("password", { required: true })} placeholder="Password" className='auth-modal-input'/>
              {errors.password && <span className="auth-modal-error">This field is required</span>}
              {/* <div className="auth-modal-checkbox">
                <input type="checkbox" id="remember"/>
                <label htmlFor="remember">Remember me</label>
              </div> */}
              <button type="submit" className="signin-button">Sign in</button>
            </div>
          </form>
          </div>
        <div className="auth-modal-right">
          <X className="auth-modal-close" onClick={onClose} />
          <h1>Sign up</h1>
          <p>You don't have an account yet?</p>
          <div className="signup-bonuses">
            <div className="signup-bonus">
              <Check className="signup-bonus-icon" />
              <p className="signup-bonus-text">You can collect points and <span>earn rewards</span></p>
            </div>
            <div className="signup-bonus">
              <Check className="signup-bonus-icon" />
              <p className="signup-bonus-text">Check your <span>delivery status</span></p>
            </div>
            <div className="signup-bonus">
              <Check className="signup-bonus-icon" />
              <p className="signup-bonus-text">We will let you know <span>first</span> about new features</p>
            </div>
          </div>
          {/* <Link to="/signup" className="signup-button">Sign up</Link> */}
          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
