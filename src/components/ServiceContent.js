import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceContent = () => {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="container">
        <div className="base-header">
          <small>{t("Services.1")}</small>
          <h3>{t("Services.2")}</h3>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="service-item">
              <div className="img_serv">
                <Link to={`shop`}>
                  <img src={`assets/images/service2.jpg`} alt="service" />
                </Link>
              </div>
              <div className="service_text">
                <Link to={`shop`}>
                  {" "}
                  <h4>{t("Services.3")}</h4>
                </Link>
                <p>{t("Services.4")}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="service-item">
              <div className="img_serv">
                <Link to={`shop`}>
                  <img src={`assets/images/service3.jpg`} alt="service" />
                </Link>
              </div>
              <div className="service_text">
                <Link to={`shop`}>
                  {" "}
                  <h4>{t("Services.5")}</h4>
                </Link>
                <p>{t("Services.6")}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="service-item">
              <div className="img_serv">
                <Link to={`shop`}>
                  <img src={`assets/images/service4.jpg`} alt="service" />
                </Link>
              </div>
              <div className="service_text">
                <Link to={`shop`}>
                  {" "}
                  <h4>{t("Services.7")}</h4>
                </Link>
                <p>{t("Services.8")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
