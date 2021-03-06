import React,{Component, Fragment} from 'react';
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
            link: 'https://www.youtube.com/watch?v=tPnt7-kMwpo',
        },
        {
            image:'https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg',
            title:'Salade argentine de cœurs de palmier  aux avocats          ',
            date:'15 Minutes', 
            link: 'https://www.youtube.com/watch?v=0DWfNNDGIkQ',
        },
        {
            image:'https://images.pexels.com/photos/1555814/pexels-photo-1555814.jpeg',
            title:'Salade de tomates et de pêches, vinaigrette béarnaise',
            date:'20 Minutes', 
            link: 'https://www.youtube.com/watch?v=FEUPIVFcVCQ',
        },
        {
            image:'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
            title:'Salade tiède de patates douces, kale et poulet' ,
            date:'25 Minutes', 
            link: 'https://www.youtube.com/watch?v=qIF-pq1PKpo',
        },
        {
            image:'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
            title:'Salade avocat, tomate, carotte, persil, citron ',
            date:'35 Minutes', 
            link: 'https://www.youtube.com/watch?v=zEa-3N_JR_8',
        },
        {
            image:'https://images.pexels.com/photos/5695872/pexels-photo-5695872.jpeg',
            title:'Salade de riz à la menthe et avocat            ',
            date:'40 Minutes', 
            link: 'https://www.youtube.com/watch?v=YTjn1w7Z3N8',
        },
    ]

 

    const blogListtMap = blogListArray.map((valu, i) => {
        return(
            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="blog_wrp">
                <a href={`${valu.link}`} target="_blank" rel="noopener noreferrer">
                        <img src={`${valu.image}`} alt="" />
                    </a>
                    <div className="blog_info">
                    <a href={`${valu.link}`} target="_blank" rel="noopener noreferrer">
                            <h4>{valu.title}</h4> 
                        </a> 
                        <div className="blog_date"> 
                            <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                        </div>
                        <span className="blog_read">
                            <a href={`${valu.link}`} target="_blank" rel="noopener noreferrer">Regarder la recette </a><i className="icon-right-open"></i>
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