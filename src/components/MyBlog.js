import React from "react";
import { Link } from "react-router-dom"; 

const Myblog = () => {


  return (

    <div className="col-md-9 col-sm-12 blog-area">
    <div className="row">

        {/* Blog Item */}
       
       
        <div className="col-sm-12" > 
                <div className="blog_wrp">
                    <Link to="single-blog" className="blog_img">
                        <img src="https://biolojik.ca/wp-content/uploads/2021/11/wellness.jpeg" alt="" />
                    </Link>
                    <div className="blog_info">
                        <div className="blog_date"> 
                            <span><i className="fa fa-comment-o"></i>0 commentaire</span>
                            <span> <i className="fa fa-calendar"></i>6 Nov 2021</span>
                        </div>
                        <Link to={`#`}>
                            <h4>Inversez la maladie et rétablissez votre santé</h4> 
                        </Link> 
                        <p>N E W S T A R T (Nouveau départ) est un programme qui propose un style de vie très simple de 8 points. Il élimine le risque d’avoir certaine maladie, rétablit la santé si on était déjà malade tout ceci avec des méthodes purement naturelles.</p> 
                        <Link to={`#`} className="more-link">Lire la suite</Link> 
                    </div>
                </div>
            </div>

            <div className="col-sm-12" > 
                <div className="blog_wrp">
                    <Link to="single-blog" className="blog_img">
                        <img src="https://biolojik.ca/wp-content/uploads/2021/11/guide-alimentaire.jpg" alt="" />
                    </Link>
                    <div className="blog_info">
                        <div className="blog_date"> 
                            <span><i className="fa fa-comment-o"></i>0 commentaire </span>
                            <span> <i className="fa fa-calendar"></i>15 Mar 2022</span>
                        </div>
                        <Link to={`#`}>
                            <h4>Que devrait contenir mon assiette ?</h4> 
                        </Link> 
                        <p>Au primaire, nous apprenons tous de quoi s’agit les quatre groupes alimentaires, ce que c’est, de quoi ils sont composés. Pourtant, avec les années nous les oublions et ce sont des informations très importantes à retenir puisqu’ils permettent d’avoir de plus amples connaissances sur comment avoir des repas sains pour rester en santé.'</p> 
                        <Link to={`#`} className="more-link">Lire la suite</Link> 
                    </div>
                </div>
            </div>


        {/* Blog Pagination */}
        <div className="prodt_pagination">
            <ul>
                <li><Link to={process.env.PUBLIC_URL + "/blog-two"} className="page_number current">1</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/blog-two"} className="page_number">2</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/blog-two"} className="page_number">→</Link></li>
            </ul>
        </div>
    </div>
</div>



    
  );
};
 

export default Myblog;
