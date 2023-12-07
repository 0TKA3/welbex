import React from "react";
import logo from '../images/logo.svg'
import tgLogo from '../icons/telegram.svg'
import whatsappLogo from '../icons/whatsapp.svg'
import phoneLogo from '../icons/phone.svg'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left-side">
        <h1>О КОМПАНИИ</h1>
        <ul>
          <li>
            <a href="#">Партнёрская программа</a>
          </li>
          <li>
            <a href="#">Вакансии</a>
          </li>
        </ul>
      </div>
      <div className="footer__middle-side">
        <h1>МЕНЮ</h1>
        <div className="ul__container">
          <ul>
            <li><a href="#">Расчёт стоимости</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Виджеты</a></li>
            <li><a href="#">Интеграции</a></li>
            <li><a href="#">Наши клиенты</a></li>
          </ul>
          <ul className="ul__container__right-side">
            <li><a href="#">Кейсы</a></li>
            <li><a href="#">Благодарственные письма</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">Блог на Youtube</a></li>
            <li><a href="#">Вопрос / Ответ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__right-side">
        <h1 className="align-right">КОНТАКТЫ</h1>
        <div className="footer__contacts align-right">
            <a className='footer__contacts__number' href="tel:+75555555555">+7 555 555-55-55</a>
            <div className="footer__contacts__links">
                <a className='footer__contacts__link footer-link' href="#"><img src={tgLogo} alt="#" /></a>
                <a className='footer__contacts__link footer-link' href="tel:+75555555555"><img src={phoneLogo} alt="#" /></a>
                <a className='footer__contacts__link footer-link' href="#"><img src={whatsappLogo} alt="#" /></a>
            </div>
            <p className="footer__adres">Москва, Путевой проезд 3с1, к 902</p>
        </div>
        <div className="copyrights">
            <p>©WELBEX 2022. Все права защищены.</p>
            <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
