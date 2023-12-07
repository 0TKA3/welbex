import React from 'react'
import logo from '../images/logo.svg'
import tgLogo from '../icons/telegram.svg'
import whatsappLogo from '../icons/whatsapp.svg'
import phoneLogo from '../icons/phone.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className="header__left-side">
        <div className="header__logo"><img src={logo} alt="logo" /></div>
        <p className='header__logo__subtitile'>крупный интегратор CRM<br />в Росcии и ещё 8 странах</p>
      </div>
      <div className="header__navigation">
        <ul className='header__navigation__list'>
          <li><a className='header__navigation__list__item' href="#">Услуги</a></li>
          <li><a className='header__navigation__list__item' href="#">Виджеты</a></li>
          <li><a className='header__navigation__list__item' href="#">Интеграции</a></li>
          <li><a className='header__navigation__list__item' href="#">Кейсы</a></li>
          <li><a className='header__navigation__list__item sertificates' href="#">Сертификаты</a></li>
        </ul>
      </div>
      <div className="header__contacts">
        <a className='header__contacts__number' href="tel:+75555555555">+7 555 555-55-55</a>
        <a className='header__contacts__link' href="#"><img src={tgLogo} alt="#" /></a>
        <a className='header__contacts__link' href="tel:+75555555555"><img src={phoneLogo} alt="#" /></a>
        <a className='header__contacts__link' href="#"><img src={whatsappLogo} alt="#" /></a>
      </div>
    </header>
  )
}
