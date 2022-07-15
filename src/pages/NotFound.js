import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutOne from "../layouts/LayoutOne";

const NotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Biolojik | Not Found</title>
        <meta name="description" content="404 page of Biolojik." />
      </MetaTags>
      <LayoutOne>
        <div
          className="errorPage"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/images/bg_3.jpg"
            })`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Désolé!</h2>
                <span>404 - Page non trouvée</span>
                <p>
                  Nous avons cherché partout et nous n'avons pas pu trouver la
                  page que vous cherchiez. Mais ne vous inquiétez pas, quelqu'un
                  vient de perdre son job.
                </p>
                <Link className="more-link" to={process.env.PUBLIC_URL + "/"}>
                  Retour à la page d'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
