import React from "react";
import { useTranslation } from "react-i18next";

const WorkProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="process-section">
      <div className="container">
        <div className="base-header">
          <small>{t("Progress.1")}</small>
          <h3>{t("Progress.2")}</h3>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="process-item">
              <div className="img_process">
                <img src={`assets/images/step1.png`} alt="" />
                <span>01</span>
                <div className="angle_icon">
                  <img src={`assets/images/shape1.png`} alt="" />
                </div>
              </div>
              <div className="process_text">
                <h4>{t("Progress.3")} 01</h4>
                <p>{t("Progress.4")} </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="process-item">
              <div className="img_process">
                <img src={`assets/images/process_3.png`} alt="" />
                <span>02</span>
                <div className="angle_icon">
                  <img src={`assets/images/shape2.png`} alt="" />
                </div>
              </div>
              <div className="process_text">
                <h4>{t("Progress.3")} 02</h4>
                <p>{t("Progress.5")} </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="process-item">
              <div className="img_process">
                <img src={`assets/images/step3.png`} alt="" />
                <span>03</span>
                <div className="angle_icon">
                  <img src={`assets/images/shape1.png`} alt="" />
                </div>
              </div>
              <div className="process_text">
                <h4>{t("Progress.3")} 03</h4>
                <p>{t("Progress.6")} </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="process-item">
              <div className="img_process">
                <img src={`assets/images/step4.png`} alt="" />
                <span>04</span>
                <div className="angle_icon">
                  <img src={`assets/images/shape1.png`} alt="" />
                </div>
              </div>
              <div className="process_text">
                <h4>{t("Progress.3")} 04</h4>
                <p>{t("Progress.7")} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
