import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class SingleShop3 extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Biolojik | Single Service</title>
          <meta
            name="description"
            content="Producteurs et points de vente d'aliments bio."
          />
        </MetaTags>
        <LayoutOne>
          <div className="single-shop-page">
            <Breadcrumb title="Our Products" />

            <div className="shop-product-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="shop-products">
                      <div className="about_img">
                        <img src="https://www.rustica.fr/images/piments-l760-h550.jpg" alt="about" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="allproduct-info">
                      <div className="tittle_product">
                        <Link to="single-shop">Panier 4</Link>
                      </div>
                      <div className="allproduct-price-area">
                        <div className="star-rating rating2">
                          <ul>
                            <li className="star yes">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star yes">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star yes">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star yes">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star no">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>

                        <span className="price">
                          <span className="n-amt">$46.00</span>
                          <span>
                            <del>$60.00</del>
                          </span>
                        </span>
                      </div>

                      <div className="p-content">
                        <p className="content">
                          Disponibilité:<span> En Stock</span>
                        </p>
                        <p className="d-content">
                        Le panier 4* contient ne variété de  piments incluant: Piment Jalapeno, Piment de Cayenne, Piment Arbol, Piment Oiseau, Piment Tabasco, Piment Habanero.
                        Ce panier peut être livré selon la fréquence choisi, soit chaque semaine, aux deux semaines ou chaque mois.
                        {" "}
                        </p>
                        <small>*L'image peut ne pas refléter le produit réel reçu ~</small>
                      </div>

                      <div className="allchoices">
                        <div className="choice-icon">
                          <ul>
                            <li>
                              <Link
                                to={process.env.PUBLIC_URL + "/reservation3"}
                                className="text-uppercase adtocart"
                              >
                                Reserver ce panier
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

export default SingleShop3;
