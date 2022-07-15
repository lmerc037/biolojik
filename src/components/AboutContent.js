import React from "react";
import { useTranslation } from "react-i18next";

const AboutContent = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about_img">
              <img src="assets/images/about3.jpg" alt="about" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about_item_tb">
              <div className="about_item_tbcell">
                <div className="base-header base_header_left">
                  <small>{t("AboutTitle.1")}</small>

                  <h3>
                  {t("AboutTitle.2")}
                  </h3>
                </div>
                <div className="about_item">
                  <h4>{t("AboutTitle.3")}</h4>
                  <p>
                  {t("AboutTitle.4")}
                  </p>
                </div>
                <div className="about_item">
                  <h4>{t("AboutTitle.5")}</h4>
                  <p>
                  {t("AboutTitle.6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*about_wrp*/}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default AboutContent;
