import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slides from "../components/Slides";
import AboutContent from "../components/AboutContent";
import ServiceContent from "../components/ServiceContent";
import WorkProcess from "../components/WorkProcess";



const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Biolojik | Accueil</title>
        <meta
          name="description"
          content="Producteurs et points de vente d'aliments bio"
        />
      </MetaTags>
      <LayoutOne>
        <Slides />
        <AboutContent />
        <WorkProcess />
        <ServiceContent />

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
