import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import MobileMenu from "../components/mobile-menu/MobileMenu";
import MobileBtn from "../components/mobile-menu/MobileBtn";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu_area">
      {/* Start: header navigation */}
      <div className="navigation">
        <div className="container">
          <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img src="assets/images/logo-wide.png" alt="" />
            </Link>
          </div>

          <div className="meun_wrp">
            <Navbar expand="lg" sticky="top" id="navigation">
              <Nav className="mr-auto">
                <ul>
                  <li className="active">
                    <Link to={process.env.PUBLIC_URL + "/"}>{t("Nav.1")}</Link>
                  </li>
                  <li className="has-sub">
                    <Link to={process.env.PUBLIC_URL + "/historique"}>
                      {t("Nav.2")} <i class="fa fa-chevron-down"></i>
                    </Link>

                    <ul>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/blog"}>
                          {t("Nav.6")}
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/faq"}>
                          {t("Nav.7")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop"}>
                      {t("Nav.3")}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/recette"}>
                      {t("Nav.4")}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      {t("Nav.5")}
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar>
          </div>

          {/* Mobile Menu */}

          <MobileBtn />

          <MobileMenu />

          {/* End:  Mobile Menu */}

          {/* Start: Cart  */}
          <div className="header_cart"></div>
          {/* End: Cart  */}
        </div>
        {/* container */}
      </div>
      {/* End: header navigation */}
    </div>
  );
};

export default Menu;
