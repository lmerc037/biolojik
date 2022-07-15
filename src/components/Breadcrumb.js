import React from "react";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ title }) => {
  const { t } = useTranslation();
  return (

    <header id="page-top" className="blog-banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/header.jpg"})` }}> 
        <div className="container" id="blog">
            <div className="row blog-header text-center">
                <div className="col-sm-12"> 
                    <h3>{title}</h3>
                    <h4><Link to={process.env.PUBLIC_URL + "/"}> {t("Nav.1")}</Link> &gt; {title} </h4>
                </div>
            </div>
        </div>  
    </header>
    
  );
};
 

export default Breadcrumb;
