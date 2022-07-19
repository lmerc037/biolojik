import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="widget">
              <div className="footer_logo">
                <img
                  className="img-responsive"
                  src="assets/images/logo-white-2.png"
                  alt=""
                />
              </div>
              <div className="footer_p text-center">
                <p className="footer_para ">
                  <nav>
                    <a href="/">{t("Nav.1")}</a>
                    <a href="/historique">{t("Nav.2")}</a>
                    <a href="/blog">{t("Nav.6")}</a>
                    <a href="/faq">{t("Nav.7")}</a>
                    <a href="/shop">{t("Nav.3")}</a>
                    <a href="/recette">{t("Nav.4")}</a>
                  </nav>
                </p>
              </div>
              <div className="footer_socil">
                <ul className="list-icons link-list footer_soc">
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
                    <a
                      href="//twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-behance"></i>
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
        </div>
      </div>

      <div className="subfooter">
        <p>
          2022 © <Link to={process.env.PUBLIC_URL + "/"}>Biolojik</Link> Tous
          droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
