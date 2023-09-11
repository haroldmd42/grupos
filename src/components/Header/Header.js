/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Textos from "../Texto_animado/Textos"
import "./Header.css";

function Header() {
  return (
        <><nav class="navbar navbar-expand-lg navbar-ligth">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TEAM BATTLE |</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">|</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Instruciones</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mas Juegos
              </a>
              <ul className="dropdown-menu menu-cerrado" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" style={{color: 'black'}} href="#">Ahorcado</a></li>
                <li><a className="dropdown-item" style={{color: 'black'}} href="#">Quizz</a></li>
                <li><a className="dropdown-item" style={{color: 'black'}} href="#">Sopa de letras</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabindex="-1">Conocenos</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="¿Qué estas buscando?" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit" style={{color: 'black', backgroundColor: 'white'}}>Buscar</button>
          </form>
        </div>
      </div>
    </nav><div>
        <Textos />
      </div></>
    
  );
}

export default Header;
