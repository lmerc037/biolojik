import React from "react";

const Myblog = () => {
  return (
    <div className="col-md-9 col-sm-12 blog-area">
      <div className="row">

        <div className="col-sm-12">
          <div className="blog_wrp">
          <a href="https://www.newstart.com/about/"    target="_blank" rel="noopener noreferrer">
              <img
                src="https://biolojik.ca/wp-content/uploads/2021/11/wellness.jpeg"
                alt=""
              />
            </a>
            <div className="blog_info">
              <div className="blog_date">
                <span>
                  <i className="fa fa-comment-o"></i>0 commentaire
                </span>
                <span>
                  {" "}
                  <i className="fa fa-calendar"></i>6 Nov 2021
                </span>
              </div>
              <a href="https://www.newstart.com/about/"    target="_blank" rel="noopener noreferrer">
                <h4>Inversez la maladie et rétablissez votre santé</h4>
              </a>
              <p>
                N E W S T A R T (Nouveau départ) est un programme qui propose un
                style de vie très simple de 8 points. Il élimine le risque
                d’avoir certaine maladie, rétablit la santé si on était déjà
                malade tout ceci avec des méthodes purement naturelles.
              </p>
              <a href="https://www.newstart.com/about/"   className="more-link" target="_blank" rel="noopener noreferrer">
                Lire la suite
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="blog_wrp">
          <a href="https://www.noovomoi.ca/cuisiner/trucs-et-inspirations/article.assiette-parfaite.1.1894847.html"   target="_blank" rel="noopener noreferrer">
              <img
                src="https://biolojik.ca/wp-content/uploads/2021/11/guide-alimentaire.jpg"
                alt=""
              />
            </a>
            <div className="blog_info">
              <div className="blog_date">
                <span>
                  <i className="fa fa-comment-o"></i>0 commentaire{" "}
                </span>
                <span>
                  {" "}
                  <i className="fa fa-calendar"></i>15 Mar 2022
                </span>
              </div>
              <a href="https://www.noovomoi.ca/cuisiner/trucs-et-inspirations/article.assiette-parfaite.1.1894847.html"  target="_blank" rel="noopener noreferrer">
                <h4>Que devrait contenir mon assiette ?</h4>
              </a>
              <p>
                Au primaire, nous apprenons tous de quoi s’agit les quatre
                groupes alimentaires, ce que c’est, de quoi ils sont composés.
                Pourtant, avec les années nous les oublions et ce sont des
                informations très importantes à retenir puisqu’ils permettent
                d’avoir de plus amples connaissances sur comment avoir des repas
                sains pour rester en santé.'
              </p>
              <a href="https://www.noovomoi.ca/cuisiner/trucs-et-inspirations/article.assiette-parfaite.1.1894847.html"  className="more-link" target="_blank" rel="noopener noreferrer">
                Lire la suite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myblog;
