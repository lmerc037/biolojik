import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import FaqList from "../components/FaqList";

const Faq = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Biolojik | Faq</title>
        <meta
          name="description"
          content="Producteurs et points de vente d'aliments bio"
        />
      </MetaTags>
      <LayoutOne>
        <div className="about-page">
          <Breadcrumb title="Faq " />

          <FaqList />
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Faq;
