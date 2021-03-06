import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import AboutSection from "../components/AboutSection";
import Team from "../components/Team";
import Breadcrumb from "../components/Breadcrumb";

const Historique = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Biolojik | Historique</title>
        <meta
          name="description"
          content="Producteurs et points de vente d'aliments bio"
        />
      </MetaTags>
      <LayoutOne>
        <div className="about-page">
          <Breadcrumb title="A Propos " />

          <AboutSection />

          <Team />
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Historique;
