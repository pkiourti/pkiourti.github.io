import React from 'react';

const NavBar = ({ show_intro, show_papers, goToIntro, goToPapers }) => ( 
  <ul className="nav nav-tabs justify-content-center">
    <li className="nav-item">
      <a className={show_intro ? "nav-link active": "nav-link"} onClick={() => goToIntro() }>Intro</a>
    </li>
    <li className="nav-item">
      <a className={show_papers ? "nav-link active": "nav-link"} onClick={ () => goToPapers() }>Papers</a>
    </li>
  </ul>
);

export default NavBar;
