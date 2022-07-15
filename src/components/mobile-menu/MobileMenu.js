import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const MobileMenu = () => {
  const {i18n, t } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  

  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        `<span class="menuExpand"><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvasMobileMenu" id="offcanvas-mobile-menu">
      <button
        className="offcanvasMenuClose"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
      <i className="icon-glyph-146"></i>
      </button>

      <div className="offcanvasWrapper">
        <div className="offcanvasInnerContent">

          <nav className="offcanvasNavigation" id="offcanvas-navigation">
            <ul>
              <li>
              <Link to={process.env.PUBLIC_URL + "/"}>{t("Nav.1")}</Link></li>
              


              <li className="menuItemHasChildren-sub">
                    <Link to={process.env.PUBLIC_URL + "/historique"}>
                      {t("Nav.2")}
                    </Link>

                    <ul className="subMenu">
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
          </nav>

          {/* Search Form */}
          <nav>
            <button onClick={() => handleClick("en")}>English</button>
            <button onClick={() => handleClick("fr")}>Français</button>
            <button onClick={() => handleClick("ht")}>Kreyol</button>
          </nav>

          {/* Contact Info  */} 

          <div className="header_top_right list-unstyled">
            <ul>
              <li>
              <i className="fa fa-phone"></i> 800-00-0000
              </li>
              <li>
              <i className="fa fa-envelope"></i> info@biiolojik.ca
              </li>
              <li>
              <i className="fa fa-globe"></i> 123 Rue Inconnue, Gatineau, QC, J8P-2H3 
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className="header_top_left">
            <ul className="header_socil list-inline">   
                <li>
                    <Link to="#/" className="fa fa-facebook"></Link>
                </li>
                <li>
                    <Link to="#/" className="fa fa-twitter"></Link>
                </li>
                <li>
                    <Link to="#/" className="fa fa-linkedin"></Link>
                </li>
                <li>
                    <Link to="#/" className="fa fa-google-plus"></Link>
                </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
