import React from 'react';
import { Link } from 'react-router-dom';
import DarkMoon from '../images/light-mode-moon.svg';
import LightMoon from '../images/dark-mode-moon.svg';

export default function Header({ toggle, onClick }) {
  return (
    <div className={toggle ? "header header--light" : "header header--dark"}>
      <Link
      className={toggle ? "header__link header__link--light" : "header__link header__link--dark"}
      to={`${process.env.PUBLIC_URL}/`}>
        <h1 className="header__title">Where in The World?</h1>
      </Link>
      <button className={toggle ? "btn btn--light" : "btn btn--dark"} onClick={onClick}>
        <img className={toggle ? "btn__img" : "btn__img btn__img--dark"} src={toggle ? LightMoon : DarkMoon} alt="Moon" />
        {toggle ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  )
}
