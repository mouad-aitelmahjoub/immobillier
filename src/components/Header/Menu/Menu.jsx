import React from "react"
import "./menu.css"
import Logo from "../../logo/Logo"

export const Menu = () => {
  return (
    <div className="header">
      <div className="header__wraper">
        <div className="header__left">
          <h1 className="logo">
            <Logo />
          </h1>
        </div>
        <div className="header__right">
          <ul className="header__menu">
            <li className="header__link">
              <a href="#">Home</a>
            </li>
            <li className="header__link">
              <a href="#About">About us</a>
            </li>
            <li className="header__link">
              <a href="#Apropos">Apropos</a>
            </li>
            <li className="header__link">
              <a href="#Offres">Services</a>
            </li>
            <li className="header__link">
              <a href="#Contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
