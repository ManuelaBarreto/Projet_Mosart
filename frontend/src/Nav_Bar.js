import React from 'react';
import './Nav_Bar.css';

export default function Nav_Bar({ variant, scrollToHome }) {
  return (
    <header className={variant === 'show-logo' ? 'nav-bar show-logo' : 'nav-bar'}>
      {variant === 'show-logo' &&
        <div className="nav-text kaushan-script-regular">Mos'Art</div>
      }
    </header>
  );
}
