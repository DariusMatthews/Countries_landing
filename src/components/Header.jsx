import React from 'react'
import DarkMoon from '../images/light-mode-moon.svg';
import LightMoon from '../images/dark-mode-moon.svg';

export default function Header({toggle, onClick}) {
  return (
    <div className={toggle ? "header header--light" : "header header--dark"}>
      <h1 className="header__title">Where in The World?</h1>
      <button className={toggle ? "btn btn--light" : "btn btn--dark"} onClick={onClick}>
        <img className={toggle ? "btn__img" : "btn__img btn__img--dark"} src={toggle ? LightMoon : DarkMoon} alt="Moon"/>
        {toggle ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  )
}
