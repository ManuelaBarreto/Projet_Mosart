import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Nav_Bar from "./Nav_Bar.js";

function LoginPage() {
  return (
    <div>
      {/* Barra de navegação */}
      <Nav_Bar variant="show-logo"/>

      {/* Formulário de login */}
      <div className="login-container">
        <h2 style={{ color: 'white' }}>Log in</h2>
        <input type="text" placeholder="Placeholder" className="input-field" />
        <h2 style={{ color: 'white' }}>Mot de passe</h2>
        <input
          type="password"
          placeholder="Placeholder"
          className="input-field"
        />
        <button className="login-button">Se connecter</button>
      </div>
    </div>
  );
}

export default LoginPage;
