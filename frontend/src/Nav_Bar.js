import React from 'react';
import './Nav_Bar.css';
import { useNavigate } from 'react-router-dom';

export default function Nav_Bar({ variant }) {
  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate('/login');
  };

  const goToHome = () => {
    navigate('/');
  }

  return (
    <header className={variant === 'show-logo' ? 'nav-bar show-logo' : 'nav-bar'}>
      {variant === 'show-logo' &&
        <div className="nav-text kaushan-script-regular">Mos'Art</div>
      }
        <div className="nav-icons">
          <span className="icon" onClick={goToHome}>🏠</span>
          <span className="icon" onClick={goToLogin}>👤</span>
        </div>
    </header>
  );
}
