import React , {Component, Fragment } from 'react'; 
import {Link} from 'react-router-dom'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class About extends Component{
    
    render(){
        const productArray = [
            {
                image:'https://biolojik.ca/home/images/product_1.jpg',
                title:' Panier 1 ',
                price:'$46.00',
                sales:'6%',
            },
             {
                image:'https://biolojik.ca/home/images/product_2.jpg',
                title:' Panier 2 ',
                price:'$56.00',
                sales:'',
            },
            {
                image:'https://biolojik.ca/home/images/product_3.jpg',
                title:' Panier 3  ',
                price:'$46.00',
                sales:'',
            },
            {
                image:'https://biolojik.ca/home/images/product_4.jpg',
                title:' Panier 4  ',
                price:'$46.00',
                sales:'5%',
            },
            {
                image:'https://biolojik.ca/home/images/product_5.jpg',
                title:' Panier 5  ',
                price:'$46.00',
                sales:'6%',
            },
             {
                image:'https://biolojik.ca/home/images/product_6.jpg',
                title:' Panier 6  ',
                price:'$56.00',
                sales:'',
            },
            {
                image:'https://biolojik.ca/home/images/product_7.jpg',
                title:' Panier 7  ',
                price:'$46.00',
                sales:'',
            },
            {
                image:'https://biolojik.ca/home/images/product_8.jpg',
                title:' Panier 8  ',
                price:'$46.00',
                sales:'5%',
            },
        ]
     
        const productMap = productArray.map((valu, i) => {
            return(

                <div className="col-md-3 col-sm-12" key={i}> 
                    <div className="product_wrp">
                        <div className="product_img"> 
                            <img src={`${valu.image}`} alt="product" />
                            <div className="on_sale">
                                <span>{valu.sales}</span>
                            </div>
                        </div>
                        <div className="product_info">
                            <h4>{valu.title}</h4> 
                            <ul className="product_rating">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li> 
                                <li><i className="fa fa-star"></i></li> 
                                <li><i className="fa fa-star"></i></li> 
                                <li><i className="fa fa-star"></i></li> 
                            </ul>
                            <span className="product_price">{valu.price}</span>
                        </div>
                        <div className="project_view">
                            <Link to="#/"><i className="icon-glyph-13"></i></Link>
                            <Link to="#/" className="project-link"><i className="icon-glyph-52"></i></Link>
                        </div>
                    </div>
                </div>
            )
        });

        return(
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

                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title="Our Products" />
                
                {/*====================  End of breadcrumb area  ====================*/} 


  
                {/*==================== Team Mamber area  ====================*/} 

                <section className="product-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 product_orderby">
                                <p className="product_count">Affichage de 1 à 8 sur 12 résultats</p>
                                
                            </div>
                        </div>
                        <div className="row">

                            {productMap}

                            <div className="prodt_pagination">
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + "/shop"} className="page_number current">1</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/shop"} className="page_number">2</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/shop"} className="page_number">→</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====================  End Team Mamber area  ====================*/}  

            </div>
            
            </LayoutOne>
        </Fragment>

        );
    }
}

export default About;   