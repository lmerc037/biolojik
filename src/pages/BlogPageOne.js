import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";



class BlogPageOne extends Component{

    state = {
        heading: 'Nos Des recettes faciles pour des repas santé en 30 minutes environs',
        subHeading: 'Recettes équilibrées',
    } 

    render(){

    const blogListArray = [
        {
            image:'https://bijouxs.com/wp-content/uploads/2011/06/potaotpan.jpg',
            title:'Pommes de terre au pourpier ',
            date:'20 Minutes', 
            link: '#',
        },
        {
            image:'https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg',
            title:'Salade argentine de cœurs de palmier  aux avocats          ',
            date:'15 Minutes', 
            link: '#',
        },
        {
            image:'https://images.pexels.com/photos/1555814/pexels-photo-1555814.jpeg',
            title:'Salade de tomates et de pêches, vinaigrette béarnaise',
            date:'20 Minutes', 
            link: '#',
        },
        {
            image:'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
            title:'Salade tiède de patates douces, kale et poulet' ,
            date:'25 Minutes', 
            link: '#',
        },
        {
            image:'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
            title:'Salade avocat, tomate, carotte, persil, citron ',
            date:'35 Minutes', 
            link: '#',
        },
        {
            image:'https://images.pexels.com/photos/5695872/pexels-photo-5695872.jpeg',
            title:'Salade de riz à la menthe et avocat            ',
            date:'40 Minutes', 
            link: '#',
        },
    ]

 

    const blogListtMap = blogListArray.map((valu, i) => {
        return(
            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="blog_wrp">
                    <Link to={`${valu.link}`} className="blog_img"> 
                        <img src={`${valu.image}`} alt="" />
                    </Link>
                    <div className="blog_info">
                        <Link to={`${valu.link}`}>
                            <h4>{valu.title}</h4> 
                        </Link> 
                        <div className="blog_date"> 
                            <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                        </div>
                        <span className="blog_read">
                            <Link to={`${valu.link}`}>En savoir plus </Link><i className="icon-right-open"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    });


    return(
        <Fragment>
        <MetaTags>
          <title>Biolojik | Nos recettes</title>
          <meta
            name="description"
            content="Producteurs et points de vente d'aliments bio."
          />
        </MetaTags>
        <LayoutOne>

	    <div className="blog-page-one">

            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title="Nos recettes" />
                
            {/*====================  End of breadcrumb area  ====================*/}
 
 
	        <section className="blog-section">
	            <div className="container">
	                <div className="base-header">
	                    <small>{this.state.subHeading} </small>  
	                    <h3>{this.state.heading}</h3> 
	                </div>
	                <div className="row">     

	                    {blogListtMap} 

						<div className="prodt_pagination">
		                    <ul>
		                        <li><Link to={process.env.PUBLIC_URL + "/recette"} className="page_number current">1</Link></li>
		                        <li><Link to={process.env.PUBLIC_URL + "/recette"} className="page_number">2</Link></li>
		                        <li><Link to={process.env.PUBLIC_URL + "/recette"} className="page_number">→</Link></li>
		                    </ul>
		                </div>
	                </div> 
	            </div> 
	        </section>

		</div> 

        </LayoutOne>
        </Fragment>
        
        )

    }
}

 
export default BlogPageOne;