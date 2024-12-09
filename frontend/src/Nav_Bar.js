import React from 'react';
import './Nav_Bar.css';

export default function Nav_Bar({ variant }) {
  return (
    <div className={variant === 'small' ? 'nav-bar small' : 'nav-bar'}>
      {variant === 'small' ? (
        <div>
          <div className="nav-text">Mos'Art</div>
          <div className="nav-icons">
            <span className="icon">🏠</span>
            <span className="icon">👤</span>
          </div>
        </div>
      ) : (
        <div className="nav-icons">
          <span className="icon">🏠</span>
          <span className="icon">👤</span>
        </div>
      )}
    </div>
  );
}
