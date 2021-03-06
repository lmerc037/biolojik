import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class SingleShop1 extends Component {
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
                        <img src="https://supportivy.com/wp-content/uploads/2022/01/Quels-fruits-ne-pas-melanger-dans-la-corbeille-950x570.jpg" alt="about" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="allproduct-info">
                      <div className="tittle_product">
                        <Link to="single-shop">Panier 2</Link>
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
                          <span className="n-amt">$56.00</span>
                         
                        </span>
                      </div>

                      <div className="p-content">
                        <p className="content">
                          Disponibilit??:<span> En Stock</span>
                        </p>
                        <p className="d-content">
                        Le panier 2* contient ne vari??t?? de  fruits et de l??gumes de saison incluant: Piments, Tomates, Oranges, Ails.
                        Ce panier peut ??tre livr?? selon la fr??quence choisi, soit chaque semaine, aux deux semaines ou chaque mois.
                        {" "}
                        </p>
                        <small>*L'image peut ne pas refl??ter le produit r??el re??u ~</small>
                      </div>

                      <div className="allchoices">
                        <div className="choice-icon">
                          <ul>
                            <li>
                              <Link
                                to={process.env.PUBLIC_URL + "/reservation1"}
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

export default SingleShop1;
