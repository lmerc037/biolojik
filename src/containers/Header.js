import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="header_topbar">
      {/* Logo */}
      <div className="container">
        <div className="header_top_right list-unstyled">
          <ul>
            <li>
              <i className="fa fa-globe"></i>123 Rue Inconnue, Gatineau, QC,
              J8P-2H3{" "}
            </li>
            <li>
              <i className="fa fa-phone"></i>800-00-0000
            </li>
          </ul>
        </div>
        <div className="header_top_left">
          <nav>
            <button onClick={() => handleClick("en")}>English</button>
            <button onClick={() => handleClick("fr")}>Français</button>
            <button onClick={() => handleClick("ht")}>Kreyol</button>
          </nav>

          <ul className="header_socil list-inline pull-left">
            <li>
              <i className="fa fa-envelope"></i>info@biiolojik.ca
            </li>
            <li>
              <a
                href="//facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="//twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="//instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="//pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
