import React, { useState } from "react";

import "./header.scss";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = [
    { type: "Home", key: "Главная" },
    { type: "Rules", key: "Условия" },
    { type: "About", key: "O Марафоне" },
    { type: "Reviews", key: "Отзывы" },
    { type: "Contacts", key: "Контакты" }
  ];

  return (
    <div className="header-block">
      <img className="header-main-logo" src="img/main-logo.png" alt="Main Logo" onClick={() => setActiveLink('Home')}/>
      <nav className="navHeader fadeInLeft animated">
        <div className="navHeader__links">
          {links.map((link, l) => (
            <div
              key={l}
              className={`
                navHeader__item
                ${activeLink === link.type ? "item_active" : ""}`}
              onClick={() => setActiveLink(link.type)}
            >
              {link.key}
            </div>
          ))}
        </div>
      </nav>
      <button className="header-request-btn">
          Подать заявку

      </button>
    </div>
  );
};

export default Header;
