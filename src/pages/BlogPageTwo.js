import React,{Fragment} from 'react';

import BlogSidebar from '../components/BlogSidebar'; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import Myblog from '../components/MyBlog';
import { useTranslation } from "react-i18next";

    const BlogPagTwo = () => {
        const { t } = useTranslation();
    return(
        <Fragment>
        <MetaTags>
          <title>Biolojik | Single Service</title>
          <meta
            name="description"
            content="Producteurs et points de vente d'aliments bio."
          />
        </MetaTags>
        <LayoutOne>

	    <div className="blog-page-two">

 
            {/*====================  breadcrumb area ====================*/}

            <Breadcrumb title={t("BreadTitle.1")} />
        
            {/*====================  End of breadcrumb area  ================*/}


	        <div className="blog_container">
	            <div className="container"> 
	                <div className="row">     

                       <Myblog/>
                        {/* Blog Area */}


                        {/*  Widget Area */} 
                        
                        <BlogSidebar />
 
                        {/* End: Widget Area */} 

	                </div> 
	            </div> 
	        </div>


		</div> 

          </LayoutOne>
        </Fragment>

        )

    
}

 
export default BlogPagTwo;