import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__info">
          <div className="logo logo--footer">
            <span className="logo__one">ONe</span>
            <span className="logo__boutique">Boutique</span>
          </div>
          <p className="footer__description">
            Премиальная одежда для тех, кто ценит качество и уникальный стиль.
          </p>
        </div>

        <div className="footer__contacts">
          <h4>Контакты</h4>
          <ul>
            <li><strong>Адрес:</strong> ул. Рудаки 123, Душанбе</li>
            <li><strong>Instagram:</strong> @oneboutique</li>
            <li><strong>Телефон:</strong> +992 90 123 45 67</li>
            <li><strong>Email:</strong> oneboutique@example.com</li>
            <li><strong>Локация:</strong> Душанбе, Таджикистан</li>
          </ul>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} ONeBoutique. Все права защищены.</p>
          <p>Разработала: <div className='wifeesname'>Омина Сафарова</div></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;