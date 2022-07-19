import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import { withTranslation } from "react-i18next";

class About extends Component {
  render() {
    const { t } = this.props;

    const productArray = [
      {
        image: "https://biolojik.ca/home/images/product_7.jpg",
        title: t("Shop.1") + " 1",
        price: "$46.00",
        sales: "6%",
        lk:"/single-shop",
      },
      {
        image: "https://biolojik.ca/home/images/product_5.jpg",
        title: t("Shop.1") + " 2 ",
        price: "$56.00",
        sales: "",
        lk:"/single-shop-1",
      },
      {
        image: "https://biolojik.ca/home/images/product_3.jpg",
        title: t("Shop.1") + " 3  ",
        price: "$46.00",
        sales: "",
        lk:"/single-shop-2",
      },
      {
        image: "https://biolojik.ca/home/images/product_4.jpg",
        title: t("Shop.1") + " 4  ",
        price: "$46.00",
        sales: "5%",
        lk:"/single-shop-3",
      },
      
    ];

    const productMap = productArray.map((valu, i) => {
      return (
        <div className="col-md-3 col-sm-12" key={i}>
          <Link to={process.env.PUBLIC_URL + `${valu.lk}`}>
            <div className="product_wrp">
              <div className="product_img">
                <img src={`${valu.image}`} alt="product" />
              </div>
              <div className="product_info">
                <h4>{valu.title}</h4>
                <ul className="product_rating">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
                <span className="product_price">{valu.price}</span>
              </div>
              <div className="project_view"></div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <Fragment>
        <MetaTags>
          <title>Biolojik | Nos produits</title>
          <meta
            name="description"
            content="Producteurs et points de vente d'aliments bio."
          />
        </MetaTags>
        <LayoutOne>
          <div className="shop-page">
            <Breadcrumb title={t("Shop.3")} />

            <section className="product-section">
              <div className="container">
                <div className="row">
                
                </div>
                <div className="row">{productMap}</div>
              </div>
            </section>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

export default withTranslation()(About);
