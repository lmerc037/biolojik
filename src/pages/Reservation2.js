import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ReservationForm from "../components/ReservationForm";

const Reservation2 = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Biolojik | About</title>
        <meta
          name="description"
          content="Producteurs et points de vente d'aliments bio."
        />
      </MetaTags>
      <LayoutOne>
        <div className="checkout-page">
          <Breadcrumb title="Reservation" />

          <section className="checkout_section">
            <div className="container">
              <div className="row">
                <div id="content" className="col-lg-12 col-sm-12">
                  <div className="base-header">
                    <small></small>
                    <h3>Reserver ce panier maintenant </h3>
                  </div>
                


                 <div name="contactform" method="post" className="shopform">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <div className="custom-title">
                          <h3>Panier 3</h3>
                        </div>
                        <br />
                        <div className="about_img">
                        <img src="https://centdegres.ca/uploads/wp/2019/06/panier-legumes-oeufs-1440x864.jpg" alt="about" />
                        </div>
                      </div>

                       <ReservationForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Reservation2;
